import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

import { UserContext } from "../contexts/UserContext";

import "./SignupLoginPage.css";


function LoginPage() {

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidemail, setInvalidEmail] = useState(false);
    const [invalidpass, setInvalidPass] = useState(false);

    const { dispatch } = useContext(UserContext);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        setInvalidEmail(false);
        setInvalidPass(false);

        let signedUp = JSON.parse(localStorage.getItem(email));
        if(email!==''){
            if(signedUp){
                if(signedUp.pass !=='' && signedUp.pass===password){
                    dispatch({
                        type: "LOGIN",
                        email: email
                    });
                    setPassword('');
                    setEmail('');
                    history.push("/");
                    event.target.reset();
                }else{
                    setPassword('');
                    setInvalidPass(true);
                }
            }else{
                alert('Email you inputted has not been registered.');
                setPassword('');
                setEmail('');
                event.target.reset();
            }
        }else{
            setPassword('');
            setEmail('');
            setInvalidEmail(true);
        }
        
        
    }

    return (
        <Container fluid>
            <Card className="py-5 p-3 my-3 mx-auto my-5 w-50 sl-card">
                <Row className="p-2">
                    <Col>
                    <h2 className="text-center">Log In</h2>
                    </Col>
                </Row>
    
                <Row className="pt-2 px-2">
                    <Col className="mb-3 w-75">
                        <Form id="form" onSubmit={(e) => handleFormSubmit(e)}>
                            <Form.Group className="mb-4">
                                <Form.Label>E-mail Address</Form.Label>
                                <Form.Control type="email" placeholder="Type your e-mail address" onChange={(e) => handleEmailChange(e)} value={`${invalidemail ? email: email}`} required />
                                <div className={`text-danger ${invalidemail ? '': 'd-none'}`} id="email-invalid">
                                    Please input your e-mail address.
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-5">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Type your password" onChange={(e) => handlePasswordChange(e)} value={`${invalidpass|invalidemail ? password: password}`} required />
                                <div className={`text-danger ${invalidpass ? '': 'd-none'}`} id="pass-invalid">
                                    Please input your correct password.
                                </div>
                            </Form.Group>
                            <div className="submit-btn text-center">
                                <Button variant="primary" type="submit" className="btn btn-dark mb-1" id="submit">Submit</Button> <br/>
                                <small>
                                    <span>Don't have an account? | </span>
                                    <Link to="/signup" className="link">Sign Up</Link>
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