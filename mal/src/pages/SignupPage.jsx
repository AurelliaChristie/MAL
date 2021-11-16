import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

import "./SignupLoginPage.css";

let emailValidation = new RegExp(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
let passValidation = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

function SignupPage() {
    
    let history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpass, setConfPass] = useState("");
    const [invalidname, setInvalidName] = useState(false);
    const [invalidemail, setInvalidEmail] = useState(false);
    const [invalidpass, setInvalidPass] = useState(false);
    const [invalidconfpass, setInvalidConfirmPass] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfPassChange = (event) => {
        setConfPass(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        setInvalidName(false);
        setInvalidEmail(false);
        setInvalidPass(false);
        setInvalidConfirmPass(false);

        let signedUp = localStorage.getItem(email);
        if(name !== ''){
            if(email !== '' && emailValidation.test(email)){
                if(password !== '' && passValidation.test(password)){
                    if(confpass !== '' && password === confpass){
                        if(signedUp){  
                            alert('Email you inputted has been registered. Please use another email.')
                            setConfPass('');
                            setPassword('');
                            setEmail('');
                            setName('');
                            event.target.reset();
                        }else{
                            history.push('/login');
                            localStorage.setItem(email, JSON.stringify({'name':name, 'pass': password}))
                            event.target.reset();
                        }
                    }else{
                        setConfPass('');
                        setInvalidConfirmPass(true);
                    }
                }else{
                    setConfPass('');
                    setPassword('');
                    setInvalidPass(true);
                }
            }else{
                setConfPass('');
                setPassword('');
                setEmail('');
                setInvalidEmail(true);
            }
        }else{
            setConfPass('');
            setPassword('');
            setEmail('');
            setName('');
            setInvalidName(true);
        }

    }

    return (
        <Container fluid>
            <Card className="py-5 p-3 my-3 mx-auto my-5 w-50 sl-card">
                <Row className="p-2">
                    <Col>
                    <h2 className="text-center">Sign Up</h2>
                    </Col>
                </Row>
    
                <Row className="pt-2 px-2">
                    <Col className="mb-3 w-75">
                        <Form id="form" onSubmit={(e) => handleFormSubmit(e)} >
                            <Form.Group className="mb-4">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control id="name" type="text" placeholder="Type your full name" onChange={(e) => handleNameChange(e)} value={`${invalidname ? name: name}`} required />
                                <div className={`text-danger ${invalidname ? '': 'd-none'}`} id="name-invalid">
                                    Please input your full name.
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>E-mail Address</Form.Label>
                                <Form.Control id="email" type="email" placeholder="Type your e-mail address" onChange={(e) => handleEmailChange(e)} value={`${invalidemail|invalidname ? email: email}`} required />
                                <div className={`text-danger ${invalidemail ? '': 'd-none'}`} id="email-invalid">
                                    Please input a valid e-mail address.
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="password" type="password" placeholder="Type your password" onChange={(e) => handlePasswordChange(e)} value={`${invalidpass|invalidemail|invalidname ? password: password}`} required />
                                <div className={`text-danger ${invalidpass ? '': 'd-none'}`} id="pass-invalid">
                                    Please input a valid password (Include uppercase, lowercase, number, symbol(!@#$%^&*), min. 8 characters).
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-5">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control id="confpass" type="password" placeholder="Type your password again" onChange={(e) => handleConfPassChange(e)} value={`${invalidconfpass|invalidpass|invalidemail|invalidname ? confpass: confpass}`} required />
                                <div className={`text-danger ${invalidconfpass ? '': 'd-none'}`} id="conf-pass-invalid">
                                    Password confirmation doesn't match Password.
                                </div>
                            </Form.Group>
                            <div className="submit-btn text-center">
                                <Button variant="primary" type="submit" className="btn mb-1" id="submit">Submit</Button> <br/>
                                <small>
                                    <span>Already have an account? | </span>
                                    <Link to="/login">Log In</Link>
                                </small>
                            </div>
                        </Form>
                    </Col>
                </Row>
        </Card>
        </Container>
    )
}

export default SignupPage;