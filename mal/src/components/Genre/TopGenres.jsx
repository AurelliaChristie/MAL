import React from "react";
import {Link} from "react-router-dom";

import {Container, Row} from "react-bootstrap";

import GenreCard from "./GenreCard";


function TopGenres({genres}){
  
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="d-inline mb-3">Top Genres</h3>
          <Link to="/genre" className="d-inline text-end">Browse All</Link>
        </Row>
        <Row>
            {
                genres.slice(1,4).map((genre) => (
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <GenreCard genre={genre} key={genre.id}/>
                  </div>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default TopGenres;