import React from "react";
import Slider from "react-slick";

import {Container, Row, Col} from "react-bootstrap";

import ArtistCard from "./ArtistCard";


function FollowedArtists({artists}){
  
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

  return(
      <div>
        <Container fluid>
          <Row>
            <h3 className="mb-3">Followed Artists</h3>
          </Row>
          
              {
                  Array.isArray(artists) && artists.length ? (
                    <Slider {...settings} className="mx-2 pb-5">
                      {artists.map((artist => (
                        <Col sm={3} className="d-flex justify-content-center" key={artist.id}>
                          <ArtistCard artist={artist}/>
                        </Col>
                      )))}
                    </Slider>
                    ) : (
                    <Row className="pb-5">
                      <p className="lead">You haven't followed any artist.</p>
                    </Row>
                  )
              }
        </Container>
      </div>
    )
}

export default FollowedArtists;