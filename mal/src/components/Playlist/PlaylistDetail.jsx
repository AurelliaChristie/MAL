import React from "react";

import {Container, Row, Col, Button} from "react-bootstrap";

function PlaylistDetail({playlist}){
    return(
    <Container className="pb-5">
      <Row>
        <Col lg={2} md={5} sm={6} xs={12} className="text-center text-sm-end">
            <img src={playlist.picture_medium} alt={playlist.title} className="album-img mt-2 mx-1" />
        </Col>
        <Col lg={10} md={7} sm={6} xs={12} className="text-center text-sm-start my-auto">
          <Row className="align-middle">
            <h1>{playlist.title}</h1>
          </Row>
        </Col>
        </Row>
      </Container>
    )
};

export default PlaylistDetail;