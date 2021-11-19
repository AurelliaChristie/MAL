import React, {useContext, useState, useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import { useHistory } from "react-router";

import { UserContext } from "../../contexts/UserContext";
import { FollowContext } from "../../contexts/FollowContext";
import { FavoriteContext } from "../../contexts/FavoriteContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfileDetail(){

    let history = useHistory();
    
    const {user, dispatch} = useContext(UserContext);
    const {artists} = useContext(FollowContext);
    const {tracks} = useContext(FavoriteContext);

    const [profile, setProfile] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
      if(user.loggedIn !== null){
          setProfile(JSON.parse(localStorage.getItem(user.loggedIn)));
          setEmail(user.loggedIn);
      }
    },[user, artists, tracks])

    const handleLogout = (event) => {
        event.preventDefault();
        dispatch({
            type: "LOGOUT"
        });
        history.push("/");
    }

    return(
    <Container className="py-5">
      <Row>
        <Col lg={2} md={5} sm={6} xs={12} className="text-center text-sm-end">
            <FontAwesomeIcon icon="user-circle" size="7x" className="mt-2 mx-1"/>
        </Col>
        <Col lg={10} md={7} sm={6} xs={12} className="text-center text-sm-start my-auto">
          <Row>
            <h1>{profile.name}</h1>
          </Row>
          <Row>
            <p className="lead">{email}</p>
          </Row>
          <Row className="text-center">
            <Button variant='dark' onClick={(e) => handleLogout(e)} className="w-auto ms-2 btn-custom">Log Out</Button>
          </Row>
        </Col>
        </Row>
      </Container>
    )
};

export default ProfileDetail;