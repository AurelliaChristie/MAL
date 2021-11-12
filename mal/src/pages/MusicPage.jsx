import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import TopGenres from "../components/Genre/TopGenres";
import TopAlbums from "../components/Album/TopAlbums";
import TopArtists from "../components/Artist/TopArtists";

function MusicPage() {
    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col sm={4}>
                    <TopGenres />
                </Col>
            </Row>
                <TopAlbums />
                <TopArtists />
        </Container>
    )
}

export default MusicPage;