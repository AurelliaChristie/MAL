import React from "react";

import { Container, Button } from "react-bootstrap";
import Gambar1 from "../images/undraw_compose_music_ovo.svg";
import styled from "styled-components";

const Content = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`
const IsiText = styled.h1`
    text-align: center;
    margin: 0px 80px 0px 80px;
`

const IsiGambar = styled.h1`
    margin: 0px 80px 0px 80px;
`

function HomePage() {
    return (
        <Container fluid>
            <Content>
                <IsiText>
                    <h1><span style={{color: "#6558f5", fontWeight: "bold"}}>Music</span> for Everyone</h1>
                    <p style={{fontSize: "20px", textAlign: "center"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta ratione, in animi minus necessitatibus cum. Commodi aperiam non cumque est quidem. Eveniet, voluptate. Deserunt nulla est voluptate quasi sunt! Commodi quisquam aliquam tempore, aperiam eos architecto. Animi, molestiae assumenda temporibus harum, enim possimus facere esse ea nihil voluptatibus deserunt ipsa.</p>
                    <Button href="/Login" variant="dark" size="lg" style={{marginRight: "20px"}}>Get Started</Button>
                    <Button href="/Music" variant="dark" size="lg" style={{marginLeft: "20px"}}>Find Songs</Button>
                </IsiText>
                <IsiGambar>
                    <img src={Gambar1} alt="" width="600px" height="600px"/>
                </IsiGambar>
            </Content>
        </Container>
        
    )
}

export default HomePage;