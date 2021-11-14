import React from "react";
import Slider from "react-slick";

import {Container, Row, Col} from "react-bootstrap";

import ArtistCard from "./ArtistCard";


function RelatedArtists(){

  const dummy_data = {
    "data": [
      {
        "id": "6404",
        "name": "Justice",
        "link": "https://www.deezer.com/artist/6404",
        "picture": "https://api.deezer.com/artist/6404/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/46773214a3a3e074822aa2c5b489619d/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/46773214a3a3e074822aa2c5b489619d/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/46773214a3a3e074822aa2c5b489619d/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/46773214a3a3e074822aa2c5b489619d/1000x1000-000000-80-0-0.jpg",
        "nb_album": 25,
        "nb_fan": 641680,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/6404/top?limit=50",
        "type": "artist"
      },
      {
        "id": "14",
        "name": "Gorillaz",
        "link": "https://www.deezer.com/artist/14",
        "picture": "https://api.deezer.com/artist/14/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f110b9fb86a108096f9d7e78d1ffef18/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f110b9fb86a108096f9d7e78d1ffef18/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f110b9fb86a108096f9d7e78d1ffef18/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f110b9fb86a108096f9d7e78d1ffef18/1000x1000-000000-80-0-0.jpg",
        "nb_album": 75,
        "nb_fan": 2073743,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/14/top?limit=50",
        "type": "artist"
      },
      {
        "id": "13358",
        "name": "Kavinsky",
        "link": "https://www.deezer.com/artist/13358",
        "picture": "https://api.deezer.com/artist/13358/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/94ea8599c4da718f3bce9b3f3d63c8bd/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/94ea8599c4da718f3bce9b3f3d63c8bd/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/94ea8599c4da718f3bce9b3f3d63c8bd/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/94ea8599c4da718f3bce9b3f3d63c8bd/1000x1000-000000-80-0-0.jpg",
        "nb_album": 4,
        "nb_fan": 374963,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/13358/top?limit=50",
        "type": "artist"
      },
      {
        "id": "7",
        "name": "Jamiroquai",
        "link": "https://www.deezer.com/artist/7",
        "picture": "https://api.deezer.com/artist/7/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/992b71648c7333f433cb7f13d6e93799/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/992b71648c7333f433cb7f13d6e93799/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/992b71648c7333f433cb7f13d6e93799/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/992b71648c7333f433cb7f13d6e93799/1000x1000-000000-80-0-0.jpg",
        "nb_album": 40,
        "nb_fan": 804619,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/7/top?limit=50",
        "type": "artist"
      },
      {
        "id": "641",
        "name": "Vitalic",
        "link": "https://www.deezer.com/artist/641",
        "picture": "https://api.deezer.com/artist/641/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/5e970ce2f5c52fe2b036f088eb4a7bef/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/5e970ce2f5c52fe2b036f088eb4a7bef/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/5e970ce2f5c52fe2b036f088eb4a7bef/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/5e970ce2f5c52fe2b036f088eb4a7bef/1000x1000-000000-80-0-0.jpg",
        "nb_album": 24,
        "nb_fan": 281951,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/641/top?limit=50",
        "type": "artist"
      },
      {
        "id": "13570",
        "name": "Metronomy",
        "link": "https://www.deezer.com/artist/13570",
        "picture": "https://api.deezer.com/artist/13570/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/0b71ff733dad82c92e315442335e0b6f/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/0b71ff733dad82c92e315442335e0b6f/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/0b71ff733dad82c92e315442335e0b6f/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/0b71ff733dad82c92e315442335e0b6f/1000x1000-000000-80-0-0.jpg",
        "nb_album": 51,
        "nb_fan": 377495,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/13570/top?limit=50",
        "type": "artist"
      },
      {
        "id": "15",
        "name": "Phoenix",
        "link": "https://www.deezer.com/artist/15",
        "picture": "https://api.deezer.com/artist/15/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/0effc4b1ba18651245054b48397d04a4/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/0effc4b1ba18651245054b48397d04a4/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/0effc4b1ba18651245054b48397d04a4/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/0effc4b1ba18651245054b48397d04a4/1000x1000-000000-80-0-0.jpg",
        "nb_album": 30,
        "nb_fan": 499251,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/15/top?limit=50",
        "type": "artist"
      },
      {
        "id": "142381",
        "name": "Deadmau5",
        "link": "https://www.deezer.com/artist/142381",
        "picture": "https://api.deezer.com/artist/142381/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/2a0a1fe7d977805522a3fff9dfed86de/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/2a0a1fe7d977805522a3fff9dfed86de/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/2a0a1fe7d977805522a3fff9dfed86de/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/2a0a1fe7d977805522a3fff9dfed86de/1000x1000-000000-80-0-0.jpg",
        "nb_album": 117,
        "nb_fan": 1059828,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/142381/top?limit=50",
        "type": "artist"
      },
      {
        "id": "7626764",
        "name": "Parcels",
        "link": "https://www.deezer.com/artist/7626764",
        "picture": "https://api.deezer.com/artist/7626764/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/a2ba0cbbfba723ef049185a81e45dac6/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/a2ba0cbbfba723ef049185a81e45dac6/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/a2ba0cbbfba723ef049185a81e45dac6/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/a2ba0cbbfba723ef049185a81e45dac6/1000x1000-000000-80-0-0.jpg",
        "nb_album": 23,
        "nb_fan": 54654,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/7626764/top?limit=50",
        "type": "artist"
      },
      {
        "id": "289345",
        "name": "Breakbot",
        "link": "https://www.deezer.com/artist/289345",
        "picture": "https://api.deezer.com/artist/289345/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/b6d61d53e4eb93c0b25e1604b52fc0af/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/b6d61d53e4eb93c0b25e1604b52fc0af/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/b6d61d53e4eb93c0b25e1604b52fc0af/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/b6d61d53e4eb93c0b25e1604b52fc0af/1000x1000-000000-80-0-0.jpg",
        "nb_album": 14,
        "nb_fan": 164528,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/289345/top?limit=50",
        "type": "artist"
      },
      {
        "id": "76",
        "name": "Fatboy Slim",
        "link": "https://www.deezer.com/artist/76",
        "picture": "https://api.deezer.com/artist/76/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/6fb540dee1a04d3b3c06b7f368229992/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/6fb540dee1a04d3b3c06b7f368229992/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/6fb540dee1a04d3b3c06b7f368229992/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/6fb540dee1a04d3b3c06b7f368229992/1000x1000-000000-80-0-0.jpg",
        "nb_album": 83,
        "nb_fan": 1132701,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/76/top?limit=50",
        "type": "artist"
      },
      {
        "id": "134790",
        "name": "Tame Impala",
        "link": "https://www.deezer.com/artist/134790",
        "picture": "https://api.deezer.com/artist/134790/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/09649e354b1d6af46222906953d379f1/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/09649e354b1d6af46222906953d379f1/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/09649e354b1d6af46222906953d379f1/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/09649e354b1d6af46222906953d379f1/1000x1000-000000-80-0-0.jpg",
        "nb_album": 22,
        "nb_fan": 621453,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/134790/top?limit=50",
        "type": "artist"
      },
      {
        "id": "2318",
        "name": "Etienne de Crécy",
        "link": "https://www.deezer.com/artist/2318",
        "picture": "https://api.deezer.com/artist/2318/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/05b667d773679013cdc4807e46cca447/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/05b667d773679013cdc4807e46cca447/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/05b667d773679013cdc4807e46cca447/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/05b667d773679013cdc4807e46cca447/1000x1000-000000-80-0-0.jpg",
        "nb_album": 47,
        "nb_fan": 86402,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/2318/top?limit=50",
        "type": "artist"
      },
      {
        "id": "4043887",
        "name": "L'Impératrice",
        "link": "https://www.deezer.com/artist/4043887",
        "picture": "https://api.deezer.com/artist/4043887/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/9809462835ce01a83566ce709b96944d/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/9809462835ce01a83566ce709b96944d/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/9809462835ce01a83566ce709b96944d/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/9809462835ce01a83566ce709b96944d/1000x1000-000000-80-0-0.jpg",
        "nb_album": 31,
        "nb_fan": 72659,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/4043887/top?limit=50",
        "type": "artist"
      },
      {
        "id": "2046",
        "name": "Martin Solveig",
        "link": "https://www.deezer.com/artist/2046",
        "picture": "https://api.deezer.com/artist/2046/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/c4a08c692723fa041ebbd4bc08c2e7bd/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/c4a08c692723fa041ebbd4bc08c2e7bd/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/c4a08c692723fa041ebbd4bc08c2e7bd/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/c4a08c692723fa041ebbd4bc08c2e7bd/1000x1000-000000-80-0-0.jpg",
        "nb_album": 69,
        "nb_fan": 1562437,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/2046/top?limit=50",
        "type": "artist"
      },
      {
        "id": "493",
        "name": "Moby",
        "link": "https://www.deezer.com/artist/493",
        "picture": "https://api.deezer.com/artist/493/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/86732eeaa43262de069adc6edf22ea3b/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/86732eeaa43262de069adc6edf22ea3b/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/86732eeaa43262de069adc6edf22ea3b/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/86732eeaa43262de069adc6edf22ea3b/1000x1000-000000-80-0-0.jpg",
        "nb_album": 97,
        "nb_fan": 804653,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/493/top?limit=50",
        "type": "artist"
      },
      {
        "id": "2049",
        "name": "Cassius",
        "link": "https://www.deezer.com/artist/2049",
        "picture": "https://api.deezer.com/artist/2049/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/744fbf228e12508eb7a0d2c911ba58b1/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/744fbf228e12508eb7a0d2c911ba58b1/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/744fbf228e12508eb7a0d2c911ba58b1/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/744fbf228e12508eb7a0d2c911ba58b1/1000x1000-000000-80-0-0.jpg",
        "nb_album": 22,
        "nb_fan": 104316,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/2049/top?limit=50",
        "type": "artist"
      },
      {
        "id": "369",
        "name": "Air",
        "link": "https://www.deezer.com/artist/369",
        "picture": "https://api.deezer.com/artist/369/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/17a623adeeed4bbe95a6b402ca704b76/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/17a623adeeed4bbe95a6b402ca704b76/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/17a623adeeed4bbe95a6b402ca704b76/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/17a623adeeed4bbe95a6b402ca704b76/1000x1000-000000-80-0-0.jpg",
        "nb_album": 18,
        "nb_fan": 246334,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/369/top?limit=50",
        "type": "artist"
      },
      {
        "id": "1530634",
        "name": "C2C",
        "link": "https://www.deezer.com/artist/1530634",
        "picture": "https://api.deezer.com/artist/1530634/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7d254524979cd2a356c80f9ea1ddaa50/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7d254524979cd2a356c80f9ea1ddaa50/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7d254524979cd2a356c80f9ea1ddaa50/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7d254524979cd2a356c80f9ea1ddaa50/1000x1000-000000-80-0-0.jpg",
        "nb_album": 1,
        "nb_fan": 476640,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/1530634/top?limit=50",
        "type": "artist"
      },
      {
        "id": "1007",
        "name": "Serge Gainsbourg",
        "link": "https://www.deezer.com/artist/1007",
        "picture": "https://api.deezer.com/artist/1007/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/40e6ae825b053b13a20c60f13f2109d4/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/40e6ae825b053b13a20c60f13f2109d4/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/40e6ae825b053b13a20c60f13f2109d4/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/40e6ae825b053b13a20c60f13f2109d4/1000x1000-000000-80-0-0.jpg",
        "nb_album": 42,
        "nb_fan": 572859,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/1007/top?limit=50",
        "type": "artist"
      }
    ],
    "total": 20
  }
  
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
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return(
      <div className="my-3">
        <Container fluid>
          <Row>
            <h3 className="mb-3">Fans Also Like</h3>
          </Row>
          <Slider {...settings} className="mx-2">
              {
                  dummy_data.data.map((artist => (
                    <Col sm={3} className="d-flex justify-content-center">
                      <ArtistCard artist={artist} key={artist.id}/>
                    </Col>
                  )))
              }
          </Slider>
        </Container>
      </div>
    )
}

export default RelatedArtists;