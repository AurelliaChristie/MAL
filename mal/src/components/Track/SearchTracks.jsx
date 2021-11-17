import React from "react";
import {Container, Row} from "react-bootstrap";
import TrackCard from "./TrackCard";


function SearchTracks({tracks, keyword}){
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="d-inline mb-3">"{keyword}" Tracks</h3>
        </Row>
        <Row className="mt-4">
            {
                tracks.map((track) => (
                  <div className="d-flex flex-column justify-content-center">
                    <TrackCard track={track} key={track.id}/>
                  </div>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default SearchTracks;