import React from "react";
import {Container, Row} from "react-bootstrap";
import TrackCard from "./TrackCard";


function FavoriteTracks({tracks}){
  return(
    <div className="mt-5">
        <Container fluid>
          <Row>
            <h3>Favorite Tracks</h3>
          </Row>
          {
              Array.isArray(tracks) && tracks.length ? (
                <Row className="mt-4">
                  {tracks.map((track) => (
                    <div className="d-flex flex-column justify-content-center">
                      <TrackCard track={track} key={track.id}/>
                    </div>
                  ))}
                </Row>
              ) : (
                <Row className="my-2">
                  <p className="lead">You haven't put any songs to your favorite list.</p>
                </Row>
              )
          }
        </Container>
      </div>
  )
}

export default FavoriteTracks;