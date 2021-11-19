import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";


import ArtistDetail from "../components/Artist/ArtistDetail";
import ArtistTopTracks from "../components/Track/ArtistTopTracks";
import ArtistAlbums from "../components/Album/ArtistAlbums";
import RelatedArtists from "../components/Artist/RelatedArtists";
import Searchbar from "../components/Searchbar";
import Loading from "../components/Loading";

function ArtistPage() {

    let [load, setLoad] = useState(true);
    let [artistDetail, setArtistDetail] = useState("");
    let [tracks, setTracks] = useState("");
    let [albums, setAlbums] = useState("");
    let [relatedArtists, setRelatedArtists] = useState("");

    const { artistId } = useParams();

    useEffect(() => {
        async function getArtistDetail() {
          try{
            setLoad(true);
            const fetchDetail = await fetch(`https://deezer.eddypermana.com/artist/${artistId}`)
            const artistDetail = await fetchDetail.json();
            setArtistDetail(artistDetail);  
          } catch(error){
              console.log('getArtistDetail', error);
          }
        }
        getArtistDetail();
    }, [artistId])

    useEffect(() => {
        async function getTopTracks() {
          try{
            const fetchTracks = await fetch(`https://deezer.eddypermana.com/artist/${artistId}/top`)
            const tracks = await fetchTracks.json();
            setTracks(tracks); 
          } catch(error){
              console.log('getTopTracks', error);
          }
        }
        getTopTracks();
    }, [artistId])

    useEffect(() => {
        async function getAlbums() {
          try{
            const fetchAlbums = await fetch(`https://deezer.eddypermana.com/artist/${artistId}/albums`)
            const albums = await fetchAlbums.json();
            setAlbums(albums);
          } catch(error){
              console.log('getAlbums', error);
          }
        }
        getAlbums();
    }, [artistId])

    useEffect(() => {
        async function getRelatedArtists() {
          try{
            const fetchArtists = await fetch(`https://deezer.eddypermana.com/artist/${artistId}/related`)
            const relatedArtists = await fetchArtists.json();
            setRelatedArtists(relatedArtists); 
            setLoad(false);      
          } catch(error){
              console.log('getRelatedArtists', error);
          }
        }
        getRelatedArtists();
    }, [artistId])

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
                    <ArtistDetail artist={artistDetail} key={artistDetail.id}/>
                </Col>
            </Row>
            <Row>
                <ArtistTopTracks tracks={tracks.data}/>
            </Row>
            <Row>
                <ArtistAlbums albums={albums.data}/>
            </Row>
            <Row className="pb-5">
                <RelatedArtists artists={relatedArtists.data}/>
            </Row>
        </Container>
      </>
    )
}

export default ArtistPage;