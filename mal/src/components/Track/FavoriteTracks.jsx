import React from "react";
import {Container, Row} from "react-bootstrap";
import TrackCard from "./TrackCard";


function FavoriteTracks({tracks}){
  if(Array.isArray(tracks) && tracks.length === 0){
    return(
      <div className="my-3">
        <Container fluid>
          <Row>
            <h3 className="d-inline">Favorite Tracks</h3>
          </Row>
          <Row className="my-2">
            <p className="lead">You haven't put any songs to your favorite list.</p>
          </Row>
        </Container>
      </div>
    )
  } else{
    return(
      <div className="my-5">
        <Container fluid>
          <Row>
            <h3 className="mb-3">Favorite Tracks</h3>
          </Row>
          <Row className="mt-4">
              {
                  Array.isArray(tracks) && tracks.filter((track) => track.readable === true && track.preview !== "" && track.preview !== null).map((track) => (
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
}

export default FavoriteTracks;