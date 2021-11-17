import React from "react";

import {Container, Row, Col} from "react-bootstrap";

import PlaylistCard from "./PlaylistCard";

function AllPlaylists({playlists}){  
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="mb-3">Playlists</h3>
        </Row>
        <Row>
            {
                Array.isArray(playlists) && playlists.map((playlist) => (
                  <Col lg={2} md={3} sm={4} xs={6} key={playlist.id}>
                    <PlaylistCard playlist={playlist}/>
                  </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default AllPlaylists;