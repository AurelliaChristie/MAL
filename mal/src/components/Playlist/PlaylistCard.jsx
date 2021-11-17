import React from "react";
import {Card} from "react-bootstrap";
import "./PlaylistCard.css";
import { Link } from "react-router-dom";

function PlaylistCard({playlist}){
    return(
    <div className="playlist my-4">
        <Card>
            <Link to={`/playlist/${playlist.id}`} className="playlist text-white">
            <Card.Img src={playlist.picture_medium} alt={playlist.title} />
            <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                <Card.Title>{playlist.title}</Card.Title>
            </Card.ImgOverlay>
            </Link>
        </Card>
    </div>
    )
};

export default PlaylistCard;