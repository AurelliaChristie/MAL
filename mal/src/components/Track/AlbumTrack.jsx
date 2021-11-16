import React, {useContext, useState, useEffect, useRef} from "react";
import ReactAudioPlayer from "react-audio-player";
import { useHistory } from "react-router";

import { UserContext } from "../../contexts/UserContext";
import { FavoriteContext } from  "../../contexts/FavoriteContext";
import { PlayContext } from "../../contexts/PlayContext";

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
    let audio = useRef(null);

    const {user} = useContext(UserContext);
    const {tracks, dispatchTracks} = useContext(FavoriteContext);
    const {title, dispatchPlay} = useContext(PlayContext);
    const [fav, setFav] = useState(false);
    const [play, setPlay] = useState(null);

    useEffect(() => {
        if(user.loggedIn !== null){
            const profile = JSON.parse(localStorage.getItem(user.loggedIn));
            if(profile.favorite && profile.favorite.find((fav) => fav.id === track.id)){
                setFav(true);
            } else{
                setFav(false);
            }
        }
    },[])
    

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

    useEffect(() => {
        console.log(title)
        if(title.play && title.play !== play){
            audio.audioEl.current.pause()
        }
    }, [title])

    const handlePlay = (event) => {
        event.preventDefault();
        setPlay(track.title);
        dispatchPlay({
            type: "PLAY",
            title: track.title
        })
    }


    return(
        <tr key={track.id}>
            <td className="align-middle">{track.track_position}</td>
            <td className="align-middle">{track.title}</td>
            <td className="text-center align-middle">{convertDuration(track.duration)}</td>
            <td className="align-middle text-end">
                <ReactAudioPlayer
                    src={track.preview}
                    controlsList="nodownload"
                    controls
                    ref={(element) => { audio = element; }}
                    onPlay={(e) => handlePlay(e)}
                />
            </td>
            <td className="align-middle text-center">
                <button onClick={(e) => handleFavorite(e)}>
                    <FontAwesomeIcon icon="heart" size="lg" className={`${fav ? "fav": "text-black btn-heart"}`}/>
                </button>
            </td>
        </tr>
    )
};

export default AlbumTrack;