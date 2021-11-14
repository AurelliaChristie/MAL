import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import AllGenres from "../components/Genre/AllGenres";

function GenrePage() {
    return (
        <Container fluid>
            <Row>
            </Row>
            <Row>
                <Col>
                    <AllGenres />
                </Col>
            </Row>
        </Container>
    )
}

export default GenrePage;