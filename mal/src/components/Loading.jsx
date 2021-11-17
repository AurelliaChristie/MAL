import React from 'react';
import Lottie from "react-lottie";
import { Container, Row, Col } from 'react-bootstrap';
import loadingSpinner from "../lotties/loading-spinner";

function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingSpinner,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    
    return(
        <Container className="d-flex flex-column align-items-center justify-content-center h-100">
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </Container>
    )

}
export default Loading;