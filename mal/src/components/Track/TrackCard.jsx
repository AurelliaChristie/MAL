import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./TrackCard.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TrackCard({track}){
    return(
    <div className="track mb-4 d-flex justify-content-between text-capitalize">
        <div className="d-flex">
            <div>
                <img src={track.album.cover_small} alt={track.title} className="track-img me-2" />
            </div>
            <div>
                <h6 className="track-name mb-0 mt-2">{track.title}</h6>
                <small className="track-artist mt-0 mb-2">{track.artist.name}</small>
                
            </div>
        </div>
        <div className="my-auto d-flex">
            <ReactAudioPlayer
                src={track.preview}
                controlsList="nodownload"
                controls
            />
            <FontAwesomeIcon icon="heart" size="sm" className="mx-3 my-auto"/>
        </div>
    </div>
    )
};

export default TrackCard;