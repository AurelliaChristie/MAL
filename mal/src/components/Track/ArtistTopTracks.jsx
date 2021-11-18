import React from "react";

import {Container, Row} from "react-bootstrap";

import TrackCard from "./TrackCard";


function ArtistTopTracks({tracks}){
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="d-inline mb-3">Top Tracks</h3>
        </Row>
        <Row className="mt-4">
            {
                Array.isArray(tracks) && tracks.filter((track) => track.preview !== "" && track.preview !== null).map((track) => (
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

export default ArtistTopTracks;