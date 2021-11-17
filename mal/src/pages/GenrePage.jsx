import React, {useEffect, useState} from "react";

import { Container, Row, Col } from "react-bootstrap";

import AllGenres from "../components/Genre/AllGenres";
import Searchbar from "../components/Searchbar";

function GenrePage() {

    let [genre, setGenre] = useState("");

    useEffect(() => {
        async function getAllGenres() {
          try{
            const fetchGenres = await fetch(`http://deezer.eddypermana.com/genre`)
            const genres = await fetchGenres.json();
            setGenre(genres);       
          } catch(error){
              console.log('getAllGenres', error);
          }
        }
        getAllGenres();
    }, [])    

    return (
        <Container fluid>
            <Row>
              <Searchbar/>
            </Row>
            <Row>
                <Col>
                    <AllGenres genres={genre.data}/>
                </Col>
            </Row>
        </Container>
    )
}

export default GenrePage;