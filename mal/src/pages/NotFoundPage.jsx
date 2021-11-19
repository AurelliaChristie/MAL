import React from 'react';
import Lottie from "react-lottie";
import { Container, Button } from 'react-bootstrap';
import notFound from "../lotties/not-found";
import { Link } from 'react-router-dom';

function NotFoundPage() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: notFound,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    
    return(
        <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 pb-5">
            <Lottie
                options={defaultOptions}
            />
            <p className="display-4 text-center">PAGE NOT FOUND</p>
            <Link to="/">
                <Button variant="dark" className="btn-custom">Back to Home</Button>
            </Link>
        </Container>
    )

}
export default NotFoundPage;