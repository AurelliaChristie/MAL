import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import TopTracks from "../components/Track/TopTracks";
import TopGenres from "../components/Genre/TopGenres";
import TopAlbums from "../components/Album/TopAlbums";
import TopArtists from "../components/Artist/TopArtists";

import "./MusicPage.css";

function MusicPage() {
    return (
        <Container fluid>
            <Row>
            </Row>
            <Row>
                <Col>
                    <TopTracks />
                </Col>
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