import React from "react";
import {Container, Row} from "react-bootstrap";
import TrackCard from "./TrackCard";


function SearchTracks({tracks, keyword}){
  if(Array.isArray(tracks) && tracks.length === 0){
    return(
      <div className="my-3">
        <Container fluid>
          <Row>
            <h3 className="d-inline">"{keyword}" Tracks</h3>
          </Row>
          <Row className="my-2">
            <p className="lead">Not Found.</p>
          </Row>
        </Container>
      </div>
    )
  } else if(Array.isArray(tracks) && tracks.filter((track) => track.preview !== "").length > 20){
    return(
      <div className="my-3">
        <Container fluid>
          <Row>
            <h3 className="d-inline mb-3">"{keyword}" Tracks</h3>
          </Row>
          <Row className="mt-4">
              {
                  Array.isArray(tracks) && tracks.filter((track) => track.preview !== "").slice(0,20).map((track) => (
                    <div className="d-flex flex-column justify-content-center" key={track.id}>
                      <TrackCard track={track}/>
                    </div>
                  ))
              }
          </Row>
        </Container>
      </div>
    )
  } else {
    return(
      <div className="my-3">
        <Container fluid>
          <Row>
            <h3 className="d-inline mb-3">"{keyword}" Tracks</h3>
          </Row>
          <Row className="mt-4">
              {
                  Array.isArray(tracks) && tracks.filter((track) => track.readable === true && track.preview !== "" && track.preview !== null).map((track) => (
                    <div className="d-flex flex-column justify-content-center" key={track.id}>
                      <TrackCard track={track}/>
                    </div>
                  ))
              }
          </Row>
        </Container>
      </div>
    )
  }
}

export default SearchTracks;