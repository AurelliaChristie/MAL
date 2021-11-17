import React, {useContext} from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../images/logo.png";

function NavBar(){

    const { user } = useContext(UserContext);

    if(user.loggedIn === null){
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={logo} alt="logo" width="60px" height="30px"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="text-white text-decoration-none mx-2">Home</Link>
                            <Link to="/music" className="text-white text-decoration-none mx-2">Music</Link>
                            <Link to="/playlist" className="text-white text-decoration-none mx-2">Playlist</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Link to="/login" className="text-white text-decoration-none mx-2 my-auto">Log In</Link>
                            <Link to="/signup">
                                <Button variant="outline-light" className="btn-dark">Sign Up</Button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    } else {
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={logo} alt="logo" width="60px" height="30px"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="text-white text-decoration-none mx-2">Home</Link>
                            <Link to="/music" className="text-white text-decoration-none mx-2">Music</Link>
                            <Link to="/playlist" className="text-white text-decoration-none mx-2">Playlist</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <FontAwesomeIcon icon="user-circle" className="text-white my-auto" size="lg"/>
                            <Link to="/profile" className="text-white text-decoration-none mx-2 d-inline">Profile</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;