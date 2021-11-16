import React from "react";

import { Container } from "react-bootstrap";
import Content1 from "../components/Home/Layer1";
import Content2 from "../components/Home/Layer2";
import Content3 from "../components/Home/Layer3";

function HomePage() {
    return (
        <Container fluid>
            <Content1 />
            <Content2 />
            <Content3 />
        </Container>
    )
}

export default HomePage;