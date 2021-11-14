import React from "react";

import { Container, Row, Col } from "react-bootstrap";


import ArtistDetail from "../components/Artist/ArtistDetail";
import ArtistTopTracks from "../components/Track/ArtistTopTracks";
import ArtistAlbums from "../components/Album/ArtistAlbums";
import RelatedArtists from "../components/Artist/RelatedArtists";

function ArtistPage() {
    const dummy_data={
        "id": "27",
        "name": "Daft Punk",
        "link": "https://www.deezer.com/artist/27",
        "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636819763&utm_medium=web",
        "picture": "https://api.deezer.com/artist/27/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
        "nb_album": 32,
        "nb_fan": 4133649,
        "radio": true,
        "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
        "type": "artist"
    }

    return (
        <Container fluid>
            <Row>
            </Row>
            <Row>
                <Col>
                    <ArtistDetail artist={dummy_data} key={dummy_data.id}/>
                </Col>
            </Row>
            <Row>
                <ArtistTopTracks/>
            </Row>
            <Row>
                <ArtistAlbums/>
            </Row>
            <Row>
                <RelatedArtists/>
            </Row>
        </Container>
    )
}

export default ArtistPage;