import React from "react";

import {Card} from "react-bootstrap";

import "./GenreCard.css";

function GenreCard({genre}){
    return(
    <div className="genre mb-4">
        <Card className="text-white" style={{ width: '10rem' }}>
            <Card.Img src={genre.picture_medium} alt={genre.name} />
            <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                <Card.Title>{genre.name}</Card.Title>
            </Card.ImgOverlay>
        </Card>
    </div>
    )
};

export default GenreCard;