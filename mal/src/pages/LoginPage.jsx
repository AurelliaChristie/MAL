import React from "react";
import { Link } from "react-router-dom";

import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

import "./SignupLoginPage.css";

function LoginPage() {
    return (
        <Container fluid>
            <Card className="py-5 p-3 my-3 mx-auto my-5 w-50">
                <Row className="p-2">
                    <Col>
                    <h2 className="text-center">Log In</h2>
                    </Col>
                </Row>
    
                <Row className="pt-2 px-2">
                    <Col className="mb-3 w-75">
                        <Form id="form">
                            <Form.Group className="mb-4">
                                <Form.Label>E-mail Address</Form.Label>
                                <Form.Control type="email" placeholder="Type your e-mail address" required />
                                <div class="text-danger d-none" id="email-invalid">
                                    Please input your e-mail address.
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-5">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Type your password" required />
                                <div className="text-danger d-none" id="pass-invalid">
                                    Please input your correct password.
                                </div>
                            </Form.Group>
                            <div class="submit-btn text-center">
                                <Button variant="primary" type="submit" className="btn mb-1" id="submit">Submit</Button> <br/>
                                <small>
                                    <span>Don't have an account? | </span>
                                    <Link to="/signup">Sign Up</Link>
                                </small>
                            </div>
                        </Form>
                    </Col>
                </Row>
        </Card>
        </Container>
    )
}

export default LoginPage;