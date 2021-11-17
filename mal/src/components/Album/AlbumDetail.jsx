import React from "react";
import { Link } from "react-router-dom";

import {Container, Row, Col, Button} from "react-bootstrap";
import "./AlbumDetail.css";

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

function AlbumDetail({album}){
    return(
    <Container className="pb-5">
      <Row>
        <Col lg={2} md={5} sm={6} xs={12} className="text-center text-sm-end">
            <img src={album.cover_medium} alt={album.title} className="album-img mt-2 mx-1" />
        </Col>
        <Col lg={10} md={7} sm={6} xs={12} className="text-center text-sm-start my-auto">
          <Row>
            <h1>{album.title}</h1>
          </Row>
          <Row>
            <p className="lead">{album.nb_tracks} Songs • {convertDuration(album.duration)} </p>
          </Row>
          <Row>
            {
                album.genres && album.genres.data.map((genre) => (
                  <Col key={genre.id}>
                    <Link to={`/genre/${genre.id}/${genre.name}/artists`}>
                      <Button variant="outline-dark" className="w-auto btn-custom">{genre.name}</Button>
                    </Link>
                  </Col>
                ))
            }    
          </Row>
        </Col>
        </Row>
      </Container>
    )
};

export default AlbumDetail;