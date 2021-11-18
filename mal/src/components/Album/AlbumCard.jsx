import React from "react";
import { Link } from "react-router-dom";

import defaultImage from "../../images/default-image.jpg";
import "./AlbumCard.css"

function AlbumCard({album}){
    return(
    <div className="album mb-4" style={{ width: '10rem' }}>
        <Link to={`/album/${album.id}`} className="text-black text-decoration-none">
            <img src={album.cover_medium!==null && album.cover_medium!=="" ? album.cover_medium : defaultImage} alt={album.title} className="album-img mx-1 mt-2" />
            <p className="album-title mx-1 mb-2">{album.title}</p>
        </Link>
    </div>
    )
};

export default AlbumCard;