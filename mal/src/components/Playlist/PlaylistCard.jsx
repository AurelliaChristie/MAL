import React from "react";
import {Card} from "react-bootstrap";
import "./PlaylistCard.css";
import { Link } from "react-router-dom";

import defaultImage from "../../images/default-image.jpg"

function PlaylistCard({playlist}){
    return(
    <div className="playlist mb-4">
        <Card>
            <Link to={`/playlist/${playlist.id}`} className="playlist text-white">
            <Card.Img src={playlist.picture_medium !== null && playlist.picture_medium !=="" ? playlist.picture_medium : defaultImage} alt={playlist.title} />
            <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                <Card.Title>{playlist.title}</Card.Title>
            </Card.ImgOverlay>
            </Link>
        </Card>
    </div>
    )
};

export default PlaylistCard;