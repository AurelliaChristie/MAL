import React from "react";

import {Container, Row, Col, Button} from "react-bootstrap";
import "./Album/AlbumDetail.css";

function convertDuration(duration){
    let hours = Math.floor(duration/3600);
    let minutes = Math.floor((duration % 3600)/60);
    let hourLabel = hours > 1 ? "hrs" : "hr";
    let minuteLabel = minutes > 1 ? "mins" : "min";
    if(hours > 0){
        return `${hours} ${hourLabel} ${minutes} ${minuteLabel}`;
    } else {
        return `${minutes} ${minuteLabel}`;
    }
}

function PlaylistDetail({playlist}){
    return(
    <Container className="py-5">
      <Row>
        <Col lg={2} md={5} sm={6} xs={12} className="text-center text-sm-end">
            <img src={playlist.cover_medium} alt={playlist.title} className="playlist-img mt-2 mx-1" />
        </Col>
        <Col lg={10} md={7} sm={6} xs={12} className="text-center text-sm-start my-auto">
          <Row>
            <h1>{playlist.title}</h1>
          </Row>
          <Row>
            <p className="lead">{playlist.nb_tracks} Songs • {convertDuration(playlist.duration)} </p>
          </Row>      
        </Col>
        </Row>
      </Container>
    )
};
export default PlaylistDetail;