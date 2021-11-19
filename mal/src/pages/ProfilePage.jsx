import React, {useContext, useState, useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import { useHistory } from "react-router";

import { UserContext } from "../contexts/UserContext";
import { FollowContext } from "../contexts/FollowContext";
import { FavoriteContext } from "../contexts/FavoriteContext";

import FavoriteTracks from "../components/Track/FavoriteTracks";
import FollowedArtists from "../components/Artist/FollowedArtists";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfilePage(){

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
    <Container className="py-5" fluid>
      <Row>
        <Col lg={2} md={5} sm={6} xs={12} className="text-center text-sm-end">
            <FontAwesomeIcon icon="user-circle" size="7x" className="mt-2 mx-1"/>
        </Col>
        <Col lg={10} md={7} sm={6} xs={12} className="text-center text-sm-start my-auto">
          <Row>
            <h3>{profile.name}</h3>
          </Row>
          <Row>
            <p className="lead">{email}</p>
          </Row>
          <Row className="text-center">
            <Button variant='dark' onClick={(e) => handleLogout(e)} className="w-auto ms-2 btn-custom">Log Out</Button>
          </Row>
        </Col>
      </Row>
      <FavoriteTracks tracks={profile.favorite}/>
      <FollowedArtists artists={profile.follow}/>
    </Container>
    )
};

export default ProfilePage;