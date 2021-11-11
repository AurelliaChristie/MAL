import React from "react";

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../images/logo.png";

function NavBar(){
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" width="60px" height="30px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/music">Music</Nav.Link>
                        <Nav.Link href="/playlist">Playlist</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/login">Log In</Nav.Link>
                        <Button variant="outline-light" href="/signup">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;