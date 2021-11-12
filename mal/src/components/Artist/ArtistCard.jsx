import React from "react";

import "./ArtistCard.css"

function ArtistCard({artist}){
    return(
    <div className="artist mb-4">
        <img src={artist.picture_medium} alt={artist.name} className="artist-img mt-2 mx-2" />
        <p className="artist-name mx-2 mb-2">{artist.name}</p>
    </div>
    )
};

export default ArtistCard;