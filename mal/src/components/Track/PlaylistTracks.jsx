import React from "react";
import {Container, Row} from "react-bootstrap";
import TrackCard from "./TrackCard";


function PlaylistTracks({tracks}){
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="d-inline mb-3">Songs</h3>
        </Row>
        <Row className="mt-4 pb-5">
            {
                Array.isArray(tracks) && tracks.filter((track) => track.readable=== true && track.preview !== "" && track.preview !== null).map((track) => (
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

export default PlaylistTracks;