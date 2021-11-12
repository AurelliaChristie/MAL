import React from "react";

import "./AlbumCard.css"

function AlbumCard({album}){
    return(
    <div className="album mb-4">
        <img src={album.cover_medium} alt={album.title} className="album-img mx-2 mt-2" />
        <p className="album-title mx-2 mb-2">{album.title}</p>
    </div>
    )
};

export default AlbumCard;