import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import GenreArtists from "../components/Artist/GenreArtists";
import Searchbar from "../components/Searchbar";
import Loading from "../components/Loading";

function GenreArtistsPage() {

    let [load, setLoad] = useState(true);
    let [artist, setArtist] = useState("");

    const { genreId, genreName } = useParams();

    useEffect(() => {
        async function getGenreArtists() {
          try{
            const fetchArtist = await fetch(`https://deezer.eddypermana.com/genre/${genreId}/artists`)
            const artist = await fetchArtist.json();
            setArtist(artist);   
            setLoad(false);  
          } catch(error){
              console.log('getGenreArtists', error);
          }
        }
        getGenreArtists();
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
                        <GenreArtists artists={artist.data} genre={genreName}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GenreArtistsPage;