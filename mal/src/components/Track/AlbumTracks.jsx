import React from "react";
import ReactAudioPlayer from "react-audio-player";

import {Container, Row, Table} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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


function AlbumTracks({tracks}){  
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="d-inline mb-3">Tracks</h3>
        </Row>
        <Row className="mt-4">
        <Table striped variant="light">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Track</th>
                    <th className="text-center">Duration</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    tracks.map((track) => (
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
                                <FontAwesomeIcon icon="heart" size="sm" className="mx-3 my-auto"/> 
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </Table>
            
        </Row>
      </Container>
    </div>
  )
}

export default AlbumTracks;