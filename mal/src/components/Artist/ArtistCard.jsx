import React from "react";
import { Link } from "react-router-dom";

import "./ArtistCard.css"

function ArtistCard({artist}){
    return(
    <div className="artist mb-4" style={{ width: '10rem' }}>
        <Link to={`/artist/${artist.id}`} className="text-black text-decoration-none">
            <img src={artist.picture_medium} alt={artist.name} className="artist-img mt-2 mx-1" />
            <p className="artist-name mx-1 mb-2">{artist.name}</p>
        </Link>
    </div>
    )
};

export default ArtistCard;