import React, { useState } from "react";
import { useHistory } from "react-router";
import {InputGroup, Form, Button, Row, Col} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

import "./Searchbar.css";

const Searchbar = () => {

    let history = useHistory();

    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${keyword}`);
    };
     
    return (
        <Row className="my-4">
            <Col>
                <InputGroup className="mb-3 mx-auto search-bar">
                    <Form.Control type="text" placeholder="Search Artist, Album, Song" onChange={(e) => handleChange(e)} />
                    <Button variant="dark" className="btn-custom" onClick={(e) => handleSubmit(e)}>
                        <FontAwesomeIcon icon="search" size="sm" />
                    </Button>
                </InputGroup>
            </Col>
      </Row>
    )
}

export default Searchbar;