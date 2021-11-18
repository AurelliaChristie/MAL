import React from "react";

import {Container, Row, Table} from "react-bootstrap";

import AlbumTrack from "./AlbumTrack";


function AlbumTracks({tracks, album}){  
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="d-inline mb-3">Tracks</h3>
        </Row>
        <Row className="mt-4">
        <Table striped variant="light">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Track</th>
                    <th className="text-center">Duration</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    Array.isArray(tracks) && tracks.filter((track) => track.readable=== true && track.preview !== "" && track.preview !== null).map((track) => 
                    <AlbumTrack track={track} album={album} />
                    )
                }
            </tbody>
            </Table>
            
        </Row>
      </Container>
    </div>
  )
}

export default AlbumTracks;