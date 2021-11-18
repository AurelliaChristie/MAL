import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import AlbumDetail from "../components/Album/AlbumDetail";
import AlbumTracks from "../components/Track/AlbumTracks";
import Searchbar from "../components/Searchbar";
import Loading from "../components/Loading";

function AlbumPage() {

  let [load, setLoad] = useState(true);
  let [albumDetail, setAlbumDetail] = useState("");
  let [albumTracks, setAlbumTracks] = useState("");

  const { albumId } = useParams();

  useEffect(() => {
    async function getAlbumDetail() {
      try{
        const fetchAlbumDetail = await fetch(`https://deezer.eddypermana.com/album/${albumId}`)
        const albumDetail = await fetchAlbumDetail.json();
        setAlbumDetail(albumDetail);
      } catch(error){
          console.log('getAlbumDetail', error);
      }
    }
    getAlbumDetail();
  }, [])

  useEffect(() => {
    async function getAlbumTracks() {
      try{
        const fetchAlbumTracks = await fetch(`https://deezer.eddypermana.com/album/${albumId}/tracks`)
        const albumTracks = await fetchAlbumTracks.json();
        setAlbumTracks(albumTracks); 
        setLoad(false);   
      } catch(error){
        console.log('getAlbumTracks', error);
      }
    }
    getAlbumTracks();
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
                    <AlbumDetail album={albumDetail} key={albumDetail.id}/>
                </Col>
            </Row>
            <Row>
                <AlbumTracks tracks={albumTracks.data} album={albumDetail}/>
            </Row>
        </Container>
      </>
    )
}

export default AlbumPage;