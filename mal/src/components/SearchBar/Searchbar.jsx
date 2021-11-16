import React, { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom';
import {Form, InputGroup, Container, Row} from "react-bootstrap";
import  dummy  from "./List"
import ReactAudioPlayer from "react-audio-player";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
// import { SearchContext } from "../../contexts/SearchBarContext";

    
const SearchBar = () => {
    const [filter, setFilter] = useState("");
    // this.setState({

    // })
//const[searchResult, setSearchResult] = useState("") ;

    const searchText = (e) => {
        setFilter(e.target.value.toLocaleLowerCase());
    };
    console.log(filter);
    // let dataSearch=dummy.title.filter(item => {
    //   return Object.keys(item).some(key =>
    //     item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    // })
     
    return (
        <div>
        <Container fluid>
        <Row>        
        <InputGroup className="my-3 mx-auto w-50">
        <Form.Control placeholder="Search Artist, Album, Song" aria-label="Search Artist, Album, Song"  
        aria-describedby="basic-addon2"  onChange={searchText.bind(this)} type="text"/>
        <FontAwesomeIcon icon="search" size="sm" className={`mx-3 my-auto`}/>
        </InputGroup>
         </Row>
      <Row>
        {/* <h6>{dataSearch.map((track) => (
                  <div className="track mb-4 d-flex justify-content-between text-capitalize">
        <div className="d-flex">
            <div>
                <img src={track.album.cover_small} alt={track.title} className="track-img me-2" />
            </div>
            <div>
                <h6 className="track-name mb-0 mt-2">{track.title}</h6>
                <small className="track-artist mt-0 mb-2">{track.artist.name}</small>
                
            </div>
        </div>
        <div className="my-auto d-flex">
            <ReactAudioPlayer
                src={track.preview}
                controlsList="nodownload"
                controls
            />
        </div>
    </div>
                ))}</h6> */}
      </Row>
        </Container>
        </div> 
            
    )
}

export default SearchBar;