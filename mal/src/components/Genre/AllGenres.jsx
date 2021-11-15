import React from "react";

import {Container, Row, Col} from "react-bootstrap";

import GenreCard from "./GenreCard";


function AllGenres({genres}){  
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="mb-3">Genres</h3>
        </Row>
        <Row>
            {
                genres.map((genre) => (
                  <Col lg={2} md={3} sm={4} xs={6}>
                    <GenreCard genre={genre} key={genre.id}/>
                  </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default AllGenres;