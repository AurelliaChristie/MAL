import React from "react";
import Slider from "react-slick";

import {Container, Row, Col} from "react-bootstrap";

import ArtistCard from "./ArtistCard";


function SearchArtists({artists, keyword}){
  
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  }
  
  if(Array.isArray(artists) && artists.length===0){
    return(
      <div className="my-3">
        <Container fluid>
          <Row>
            <h3 className="d-inline">"{keyword}" Artists</h3>
          </Row>
          <Row className="my-2">
            <p className="lead">Not Found.</p>
          </Row>
        </Container>
      </div>
    )
  } else  if (Array.isArray(artists) && artists.length > 20){
    return(
      <div>
        <Container fluid className="pb-5">
          <Row>
            <h3 className="mb-3">"{keyword}" Artists</h3>
          </Row>
          <Slider {...settings} className="mx-2">
              {
                  Array.isArray(artists) && artists.slice(0,20).map((artist => (
                    <Col sm={3} className="d-flex justify-content-center" key={artist.id}>
                      <ArtistCard artist={artist}/>
                    </Col>
                  )))
              }
          </Slider>
        </Container>
      </div>
    )
  } else{
    return(
      <div>
        <Container fluid>
          <Row>
            <h3 className="mb-3">"{keyword}" Artists</h3>
          </Row>
          <Slider {...settings} className="mx-2">
              {
                  Array.isArray(artists) && artists.map((artist => (
                    <Col sm={3} className="d-flex justify-content-center" key={artist.id}>
                      <ArtistCard artist={artist}/>
                    </Col>
                  )))
              }
          </Slider>
        </Container>
      </div>
    )
  }
} 

export default SearchArtists;