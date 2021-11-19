import React from "react";
import Slider from "react-slick";

import {Container, Row, Col} from "react-bootstrap";

import AlbumCard from "./AlbumCard";

function SearchAlbums({albums, keyword}){

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
            slidesToScroll: 1,
            infinite:true
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite:true
          }
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:true
          }
        }
      ]
    }
  
  if(Array.isArray(albums) && albums.length === 0){
    return(
      <div className="my-3">
        <Container fluid>
          <Row>
            <h3 className="d-inline">"{keyword}" Albums</h3>
          </Row>
          <Row className="my-2">
            <p className="lead">Not Found.</p>
          </Row>
        </Container>
      </div>
    )
  } else if(Array.isArray(albums) && albums.length > 20){
    return(
      <div className="my-3">
        <Container fluid>
          <Row>
            <h3 className="mb-3">"{keyword}" Albums</h3>
          </Row>
          <Slider {...settings} className="mx-2">
              {
                  Array.isArray(albums) && albums.slice(0,20).map((album) => (
                    <Col sm={3} className="d-flex justify-content-center" key={album.id}>
                      <AlbumCard album={album}/>
                    </Col>
                  ))
              }
          </Slider>
        </Container>
      </div>
    )
  } else {
    return(
      <div className="my-3">
        <Container fluid>
          <Row>
            <h3 className="mb-3">"{keyword}" Albums</h3>
          </Row>
          <Slider {...settings} className="mx-2">
              {
                  Array.isArray(albums) && albums.map((album) => (
                    <Col sm={3} className="d-flex justify-content-center" key={album.id}>
                      <AlbumCard album={album}/>
                    </Col>
                  ))
              }
          </Slider>
        </Container>
      </div>
    )
  }
}

export default SearchAlbums;