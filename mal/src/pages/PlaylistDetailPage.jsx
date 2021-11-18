import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import PlaylistTracks from "../components/Track/PlaylistTracks";
import PlaylistDetail from "../components/Playlist/PlaylistDetail";
import Searchbar from "../components/Searchbar";
import Loading from "../components/Loading";

function PlaylistDetailPage() {

  let [load, setLoad] = useState(true);
  let [detail, setDetail] = useState("");
  let [tracks, setTracks] = useState("");
  const { playlistId } = useParams();

  useEffect(() => {
    async function getPlaylistDetail() {
      try{
        const fetchDetail = await fetch(`https://deezer.eddypermana.com/radio/${playlistId}`)
        const detail = await fetchDetail.json();
        setDetail(detail);      
      } catch(error){
          console.log('getPlaylistDetail', error);
      }
    }
    getPlaylistDetail();
  }, [])

  useEffect(() => {
    async function getPlaylistTracks() {
      try{
        const fetchTracks = await fetch(`https://deezer.eddypermana.com/radio/${playlistId}/tracks`)
        const tracks = await fetchTracks.json();
        setTracks(tracks);
        setLoad(false);        
      } catch(error){
          console.log('getPlaylistTracks', error);
      }
    }
    getPlaylistTracks();
  }, [])
  

    return (
      <>
        <div className={load ? "" : "d-none"}>
          <Loading/>
        </div>
        <Container fluid className={load ? "d-none" : ""}>
            <Row>
              <Searchbar/>
            </Row>
            <Row>
                <Col>
                    <PlaylistDetail playlist={detail} key={detail.id}/>
                </Col>
            </Row>
            <Row>
                <PlaylistTracks tracks={tracks.data}/>
            </Row>
        </Container>
      </>
    )
}

export default PlaylistDetailPage;