import React, {useEffect, useState} from "react";

import { Container, Row, Col } from "react-bootstrap";

import AllPlaylists from "../components/Playlist/AllPlaylists";
import Searchbar from "../components/Searchbar";
import Loading from "../components/Loading";

function PlaylistPage() {

    let [load, setLoad] = useState(true);
    let [playlists, setPlaylists] = useState("");

    useEffect(() => {
        async function getAllPlaylists() {
          try{
            const fetchPlaylists = await fetch(`https://deezer.eddypermana.com/radio`)
            const playlists = await fetchPlaylists.json();
            setPlaylists(playlists);  
            setLoad(false);   
          } catch(error){
              console.log('getAllGenres', error);
          }
        }
        getAllPlaylists();
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
                    <AllPlaylists playlists={playlists.data}/>
                </Col>
            </Row>
        </Container>
      </>
    )
}

export default PlaylistPage;