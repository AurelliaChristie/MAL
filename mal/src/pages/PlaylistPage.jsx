import React from "react";
import { Container, Form, Button, InputGroup} from "react-bootstrap";
import TopRadio from "../components/radio/dummyRadio";

function PlaylistPage() {
    return (
        <Container fluid>
            <div> 
                 <InputGroup className="my-3 mx-auto w-50">
                    <Form.Control placeholder="Search Artist, Album, Song" aria-label="Search Artist, Album, Song"  aria-describedby="basic-addon2" />
                    <Button variant="outline-secondary" id="button-addon2">                        
                    Search <i className="fas fa-search"></i>
                    </Button>
                </InputGroup>     
                <h3 className="mx-4">Top Radio</h3>
                <TopRadio></TopRadio>
            </div>
        </Container>
    )
}

export default PlaylistPage;