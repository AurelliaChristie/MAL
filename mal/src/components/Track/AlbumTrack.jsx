import React, {useContext, useState, useEffect} from "react";
import ReactAudioPlayer from "react-audio-player";
import { useHistory } from "react-router";

import { UserContext } from "../../contexts/UserContext";
import { FavoriteContext } from  "../../contexts/FavoriteContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

import "./AlbumTrack.css";

function convertDuration(duration){
    let minutes = Math.floor(duration/60);
    let seconds = Math.floor(duration % 60);
    if(minutes > 0 && seconds >= 10){
        return `${minutes}:${seconds}`;
    } else if(minutes > 0 && seconds <10) {
        return `${minutes}:0${seconds}`;
    } else if(seconds < 10){
        return `00:0${seconds}`;
    } else{
        return `00:${seconds}`;
    }
}

function AlbumTrack({track, album}){

    let history = useHistory();
    
    const {user} = useContext(UserContext);
    const {tracks, dispatchTracks} = useContext(FavoriteContext);
    const [fav, setFav] = useState(false);

    useEffect(() => {
        if(user.loggedIn !== null){
            const profile = JSON.parse(localStorage.getItem(user.loggedIn));
            if(profile.favorite && profile.favorite.find((fav) => fav.id === track.id)){
                setFav(true);
            } else{
                setFav(false);
            }
        }
    },[user.loggedIn, track.id])
    

    const handleFavorite = (event) => {
        event.preventDefault();
        if(user.loggedIn === null){
            history.push("/login");
        } else {
            if(tracks.find((fav) => fav.id === track.id)){
                dispatchTracks({
                    type: "UNFAVORITE",
                    user: user.loggedIn,
                    id: track.id
                })
                setFav(false);
            } else{
                dispatchTracks({
                    type: "FAVORITE",
                    user: user.loggedIn,
                    id: track.id,
                    album:{
                        cover_small: album.cover_small
                    },
                    title: track.title,
                    artist:{
                        name: track.artist.name
                    },
                    preview: track.preview
                })
                setFav(true);
            }
        }
    }

    return(
        <tr key={track.id}>
            <td>{track.track_position}</td>
            <td>{track.title}</td>
            <td className="text-center">{convertDuration(track.duration)}</td>
            <td className="d-flex justify-content-end">
                <ReactAudioPlayer
                    src={track.preview}
                    controlsList="nodownload"
                    controls
                /> 

                <button onClick={(e) => handleFavorite(e)}>
                    <FontAwesomeIcon icon="heart" size="sm" className={`mx-3 my-auto ${fav ? "fav": "text-black"}`}/>
                </button>
            </td>
        </tr>
    )
};

export default AlbumTrack;