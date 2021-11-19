import React, {useEffect, useState} from "react";
import { useParams } from "react-router";

import { Container, Row, Col } from "react-bootstrap";

import Searchbar from "../components/Searchbar";
import SearchTracks from "../components/Track/SearchTracks";
import SearchAlbums from "../components/Album/SearchAlbums";
import SearchArtists from "../components/Artist/SearchArtists";
import Loading from "../components/Loading";

function SearchResultPage() {

    let [load, setLoad] = useState(true);
    let [tracks, setTracks] = useState("");
    let [albums, setAlbums] = useState("");
    let [artists, setArtists] = useState("");

    let { keyword } = useParams();

    useEffect(() => {
        async function getSearchTracks() {
          try{
            const fetchTracks = await fetch(`https://deezer.eddypermana.com/search/track?q=${keyword}`)
            const tracks = await fetchTracks.json();
            setTracks(tracks); 
            setLoad(false);     
          } catch(error){
              console.log('getSearchTracks', error);
          }
        }
        getSearchTracks();
    }, [keyword])

    useEffect(() => {
        async function getSearchAlbums() {
          try{
            const fetchAlbums = await fetch(`https://deezer.eddypermana.com/search/album?q=${keyword}`)
            const albums = await fetchAlbums.json();
            setAlbums(albums); 
            setLoad(false);      
          } catch(error){
              console.log('getSearchAlbums', error);
          }
        }
        getSearchAlbums();
    }, [keyword])


    useEffect(() => {
        async function getSearchArtists() {
          try{
            const fetchArtists = await fetch(`https://deezer.eddypermana.com/search/artist?q=${keyword}`)
            const artists = await fetchArtists.json();
            setArtists(artists); 
            setLoad(false);      
          } catch(error){
              console.log('getSearchArtists', error);
          }
        }
        getSearchArtists();
    }, [keyword])

    return (
      <>
        <div className={load ? "" : "d-none"}>
          <Loading/>
        </div>
        <Container fluid className={load ? "d-none" : ""}>
            <Row>
              <Searchbar />
            </Row>
                <SearchTracks tracks={tracks.data} keyword={keyword}/>
                <SearchAlbums albums={albums.data} keyword={keyword}/>
                <SearchArtists artists={artists.data} keyword={keyword}/>
        </Container>
      </>
    )
}

export default SearchResultPage;