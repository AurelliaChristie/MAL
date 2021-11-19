import React, {useEffect, useState} from "react";

import { Container, Row, Col } from "react-bootstrap";

import AllGenres from "../components/Genre/AllGenres";
import Searchbar from "../components/Searchbar";
import Loading from "../components/Loading";

function GenrePage() {

    let [load, setLoad] = useState(true);
    let [genre, setGenre] = useState("");

    useEffect(() => {
        async function getAllGenres() {
          try{
            const fetchGenres = await fetch(`https://deezer.eddypermana.com/genre`)
            const genres = await fetchGenres.json();
            setGenre(genres);   
            setLoad(false);    
          } catch(error){
              console.log('getAllGenres', error);
          }
        }
        getAllGenres();
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
                        <AllGenres genres={genre.data}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GenrePage;