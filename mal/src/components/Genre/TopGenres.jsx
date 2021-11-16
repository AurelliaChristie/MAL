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
          <Link to="/genre" className="d-inline text-end link">Browse All</Link>
        </Row>
        <Row>
            {
                Array.isArray(genres) && genres.slice(1,4).map((genre) => (
                  <div className="d-flex flex-column justify-content-center align-items-center" key={genre.id}>
                    <GenreCard genre={genre}/>
                  </div>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default TopGenres;