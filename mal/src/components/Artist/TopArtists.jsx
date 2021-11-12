import React from "react";

import {Container, Row, Col} from "react-bootstrap";

import ArtistCard from "./ArtistCard";


function TopArtists(){

  const dummy_data = {
    "data": [
      {
        "id": 6982223,
        "name": "BTS",
        "link": "https://www.deezer.com/artist/6982223",
        "picture": "https://api.deezer.com/artist/6982223/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/6982223/top?limit=50",
        "position": 1,
        "type": "artist"
      },
      {
        "id": 288166,
        "name": "Justin Bieber",
        "link": "https://www.deezer.com/artist/288166",
        "picture": "https://api.deezer.com/artist/288166/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/288166/top?limit=50",
        "position": 2,
        "type": "artist"
      },
      {
        "id": 103719772,
        "name": "Berry Starr",
        "link": "https://www.deezer.com/artist/103719772",
        "picture": "https://api.deezer.com/artist/103719772/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/d3666ecde02be1b4db5be8a77a907d50/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/d3666ecde02be1b4db5be8a77a907d50/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/d3666ecde02be1b4db5be8a77a907d50/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/d3666ecde02be1b4db5be8a77a907d50/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/103719772/top?limit=50",
        "position": 3,
        "type": "artist"
      },
      {
        "id": 1562681,
        "name": "Ariana Grande",
        "link": "https://www.deezer.com/artist/1562681",
        "picture": "https://api.deezer.com/artist/1562681/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/1562681/top?limit=50",
        "position": 4,
        "type": "artist"
      },
      {
        "id": 9635624,
        "name": "Billie Eilish",
        "link": "https://www.deezer.com/artist/9635624",
        "picture": "https://api.deezer.com/artist/9635624/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/9635624/top?limit=50",
        "position": 5,
        "type": "artist"
      },
      {
        "id": 11152580,
        "name": "Olivia Rodrigo",
        "link": "https://www.deezer.com/artist/11152580",
        "picture": "https://api.deezer.com/artist/11152580/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/11152580/top?limit=50",
        "position": 6,
        "type": "artist"
      },
      {
        "id": 892,
        "name": "Coldplay",
        "link": "https://www.deezer.com/artist/892",
        "picture": "https://api.deezer.com/artist/892/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/892/top?limit=50",
        "position": 7,
        "type": "artist"
      },
      {
        "id": 51204222,
        "name": "The Kid Laroi",
        "link": "https://www.deezer.com/artist/51204222",
        "picture": "https://api.deezer.com/artist/51204222/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/16a31a932ff763f936853e4592b2f5f7/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/16a31a932ff763f936853e4592b2f5f7/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/16a31a932ff763f936853e4592b2f5f7/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/16a31a932ff763f936853e4592b2f5f7/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/51204222/top?limit=50",
        "position": 8,
        "type": "artist"
      },
      {
        "id": 230,
        "name": "Kanye West",
        "link": "https://www.deezer.com/artist/230",
        "picture": "https://api.deezer.com/artist/230/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/230/top?limit=50",
        "position": 9,
        "type": "artist"
      },
      {
        "id": 429675,
        "name": "Bruno Mars",
        "link": "https://www.deezer.com/artist/429675",
        "picture": "https://api.deezer.com/artist/429675/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/1000x1000-000000-80-0-0.jpg",
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/429675/top?limit=50",
        "position": 10,
        "type": "artist"
      }
    ],
    "total": 10
  }
  
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="mb-3">Top Artists</h3>
        </Row>
        <Row>
            {
                dummy_data.data.slice(0,8).map((artist) => (
                  <Col sm={3} className="d-flex justify-content-center">
                    <ArtistCard artist={artist} key={artist.id}/>
                  </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default TopArtists;