import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import GenreArtists from "../components/Artist/GenreArtists";
import Searchbar from "../components/Searchbar";

function GenreArtistsPage() {

    let [artist, setArtist] = useState("");

    const { genreId, genreName } = useParams();

    useEffect(() => {
        async function getGenreArtists() {
          try{
            const fetchArtist = await fetch(`http://deezer.eddypermana.com/genre/${genreId}/artists`)
            const artist = await fetchArtist.json();
            setArtist(artist)     
          } catch(error){
              console.log('getGenreArtists', error);
          }
        }
        getGenreArtists();
    }, [])    

    return (
        <Container fluid>
            <Row>
              <Searchbar/>
            </Row>
            <Row>
                <Col>
                    <GenreArtists artists={artist.data} genre={genreName}/>
                </Col>
            </Row>
        </Container>
    )
}

export default GenreArtistsPage;