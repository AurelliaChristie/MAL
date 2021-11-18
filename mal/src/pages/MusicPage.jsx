import React, {useEffect, useState} from "react";

import { Container, Row, Col } from "react-bootstrap";

import TopTracks from "../components/Track/TopTracks";
import TopGenres from "../components/Genre/TopGenres";
import TopAlbums from "../components/Album/TopAlbums";
import TopArtists from "../components/Artist/TopArtists";

import "./MusicPage.css";
import Searchbar from "../components/Searchbar";
import Loading from "../components/Loading";

function MusicPage() {

    let [load, setLoad] = useState(true);
    let [tracks, setTracks] = useState("");
    let [genres, setGenres] = useState("");
    let [albums, setAlbums] = useState("");
    let [artists, setArtists] = useState("");

    useEffect(() => {
        async function getTopTracks() {
          try{
            const fetchTracks = await fetch(`https://deezer.eddypermana.com/chart/0/tracks`)
            const tracks = await fetchTracks.json();
            setTracks(tracks);
          } catch(error){
              console.log('getTopTracks', error);
          }
        }
        getTopTracks();
    }, [])

    useEffect(() => {
        async function getTopGenres() {
          try{
            const fetchGenres = await fetch(`https://deezer.eddypermana.com/genre`)
            const genres = await fetchGenres.json();
            setGenres(genres);
          } catch(error){
              console.log('getTopGenres', error);
          }
        }
        getTopGenres();
    }, [])


    useEffect(() => {
        async function getTopAlbums() {
          try{
            const fetchAlbums = await fetch(`https://deezer.eddypermana.com/chart/0/albums`)
            const albums = await fetchAlbums.json();
            setAlbums(albums);
          } catch(error){
              console.log('getTopAlbums', error);
          }
        }
        getTopAlbums();
    }, [])


    useEffect(() => {
        async function getTopArtists() {
          try{
            const fetchArtists = await fetch(`https://deezer.eddypermana.com/chart/0/artists`)
            const artists = await fetchArtists.json();
            setArtists(artists);
            setLoad(false);          
          } catch(error){
              console.log('getTopArtists', error);
          }
        }
        getTopArtists();
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
                    <TopTracks tracks={tracks.data}/>
                </Col>
                <Col sm={4}>
                    <TopGenres genres={genres.data}/>
                </Col>
            </Row>
                <TopAlbums albums={albums.data}/>
                <TopArtists artists={artists.data}/>
        </Container>
      </>
    )
}

export default MusicPage;