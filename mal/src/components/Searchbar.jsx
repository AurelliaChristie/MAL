import React, {useState} from "react";
import {Form, Button, InputGroup, Container, Row} from "react-bootstrap";
// import TopArtists from "./Artist/TopArtists";
// import TopAlbums from "./Album/TopAlbums";
    
const SearchBar = () => {
    const [filter, setFilter] = useState('');

    const searchText = (e) => {
        setFilter(e.target.value)
    }
    console.log(filter);
    // let dataSearch = TopAlbums.filter(item =>{
    //     return Object.keys(item).some(key=>
    //         item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    // })
    return (
        <div>
        <Container fluid>
        <Row>        
        <InputGroup className="my-3 mx-auto w-50">
        <Form.Control placeholder="Search Artist, Album, Song" aria-label="Search Artist, Album, Song"  
        aria-describedby="basic-addon2" value={filter} onChange={searchText.bind(this)}/>
        <Button variant="outline-secondary" id="button-addon2">                        
        Search <i className="fas fa-search"></i>
        </Button>
        </InputGroup>
         </Row>
        </Container>
        </div>     
    )
}

export default SearchBar;