import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import GenreArtists from "../components/Artist/GenreArtists";

function GenreArtistsPage() {
    return (
        <Container fluid>
            <Row>
            </Row>
            <Row>
                <Col>
                    <GenreArtists />
                </Col>
            </Row>
        </Container>
    )
}

export default GenreArtistsPage;