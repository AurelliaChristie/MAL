import React from "react";

import {Container, Row, Col} from "react-bootstrap";

import ArtistCard from "./ArtistCard";


function GenreArtists({artists, genre}){

  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="mb-3">{genre} - Artists</h3>
        </Row>
        <Row>
            {
                Array.isArray(artists) && artists.map((artist) => (
                  <Col lg={2} md={3} sm={4} xs={6} key={artist.id}>
                    <ArtistCard artist={artist}/>
                  </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default GenreArtists;