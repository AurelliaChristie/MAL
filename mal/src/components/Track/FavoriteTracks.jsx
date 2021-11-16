import React from "react";
import {Container, Row} from "react-bootstrap";
import TrackCard from "./TrackCard";


function FavoriteTracks({tracks}){
  return(
    <div className="my-5">
      <Container fluid>
        <Row>
          <h3 className="mb-3">Favorite Tracks</h3>
        </Row>
        <Row className="mt-4">
            {
                Array.isArray(tracks) && tracks.map((track) => (
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

export default FavoriteTracks;