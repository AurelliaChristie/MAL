import React from "react";

import {Container, Row, Col} from "react-bootstrap";

import ArtistCard from "./ArtistCard";


function GenreArtists({artists}){

  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="mb-3">Genre Name - Artists</h3>
        </Row>
        <Row>
            {
                artists.map((artist) => (
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <ArtistCard artist={artist} key={artist.id}/>
                  </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default GenreArtists;