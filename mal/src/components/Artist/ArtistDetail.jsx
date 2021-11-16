import React, {useContext, useState, useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import { useHistory } from "react-router";

import { UserContext } from "../../contexts/UserContext";
import { FollowContext } from "../../contexts/FollowContext";

import "./ArtistDetail.css";

function ArtistDetail({artist}){

    let history = useHistory();
    
    const {user} = useContext(UserContext);
    const {artists, dispatchArtists} = useContext(FollowContext);
    const [fol, setFol] = useState(false);

    useEffect(() => {
      if(user.loggedIn !== null){
          const profile = JSON.parse(localStorage.getItem(user.loggedIn));
          if(profile.follow && profile.follow.find((fol) => fol.id === artist.id)){
              setFol(true);
          } else{
              setFol(false);
          }
      }
    },[])

    const handleFollow = (event) => {
      event.preventDefault();
      if(user.loggedIn === null){
          history.push("/login");
      } else {
          if(artists.find((fol) => fol.id === artist.id)){
              dispatchArtists({
                  type: "UNFOLLOW",
                  user: user.loggedIn,
                  id: artist.id
              })
              setFol(false);
          } else{
              dispatchArtists({
                  type: "FOLLOW",
                  user: user.loggedIn,
                  id: artist.id,
                  picture_medium: artist.picture_medium,
                  name: artist.name
              })
              setFol(true);
          }
      }
    } 

    return(
    <Container className="py-5">
      <Row>
        <Col lg={2} md={5} sm={6} xs={12} className="text-center text-sm-end">
            <img src={artist.picture_medium} alt={artist.name} className="artist-img mt-2 mx-1" />
        </Col>
        <Col lg={10} md={7} sm={6} xs={12} className="text-center text-sm-start my-auto">
          <Row>
            <h1>{artist.name}</h1>
          </Row>
          <Row>
            <p className="lead">{artist.nb_album} Albums</p>
          </Row>
          <Row className="text-center">
            <Button variant={`${fol ? 'outline-dark' : 'dark'}`} onClick={(e) => handleFollow(e)} className="w-auto ms-2 btn-custom">{`${fol ? 'Unfollow': 'Follow'}`}</Button>
          </Row>
        </Col>
        </Row>
      </Container>
    )
};

export default ArtistDetail;