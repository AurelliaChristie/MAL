import React from "react";

import {Container, Row, Col, Button} from "react-bootstrap";
import "./ArtistDetail.css";

function ArtistDetail({artist}){
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
            <Button href="/" className="w-auto ms-2">Follow</Button>
          </Row>
        </Col>
        </Row>
      </Container>
    )
};

export default ArtistDetail;