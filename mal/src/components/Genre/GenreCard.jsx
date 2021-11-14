import React from "react";
import { Link } from "react-router-dom";

import {Card} from "react-bootstrap";

import "./GenreCard.css";

function GenreCard({genre}){
    return(
    <div className="mb-4 genre" style={{ width: '10rem' }}>
        <Link to="/genre/id/artists">
            <Card className="text-white genre" >
                <Card.Img src={genre.picture_medium} alt={genre.name}/>
                <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                    <Card.Title>{genre.name}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </Link>
    </div>
    )
};

export default GenreCard;