import React from "react";

import {Container, Row, Col} from "react-bootstrap";

import AlbumCard from "./AlbumCard";


function TopAlbums(){
    const dummy_data = {
      "data": [
        {
          "id": 255193272,
          "title": "Day/Night",
          "link": "https://www.deezer.com/album/255193272",
          "cover": "https://api.deezer.com/album/255193272/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/013af55a683de44c0f05a62d7673647c/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/013af55a683de44c0f05a62d7673647c/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/013af55a683de44c0f05a62d7673647c/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/013af55a683de44c0f05a62d7673647c/1000x1000-000000-80-0-0.jpg",
          "md5_image": "013af55a683de44c0f05a62d7673647c",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/255193272/tracks",
          "explicit_lyrics": false,
          "position": 1,
          "artist": {
            "id": 7626764,
            "name": "Parcels",
            "link": "https://www.deezer.com/artist/7626764",
            "picture": "https://api.deezer.com/artist/7626764/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/a2ba0cbbfba723ef049185a81e45dac6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/a2ba0cbbfba723ef049185a81e45dac6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/a2ba0cbbfba723ef049185a81e45dac6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/a2ba0cbbfba723ef049185a81e45dac6/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/7626764/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 6414905,
          "title": "Comedown Machine",
          "link": "https://www.deezer.com/album/6414905",
          "cover": "https://api.deezer.com/album/6414905/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/7f392e337f26190c66eb03f9135c7592/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/7f392e337f26190c66eb03f9135c7592/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/7f392e337f26190c66eb03f9135c7592/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/7f392e337f26190c66eb03f9135c7592/1000x1000-000000-80-0-0.jpg",
          "md5_image": "7f392e337f26190c66eb03f9135c7592",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/6414905/tracks",
          "explicit_lyrics": false,
          "position": 2,
          "artist": {
            "id": 569,
            "name": "The Strokes",
            "link": "https://www.deezer.com/artist/569",
            "picture": "https://api.deezer.com/artist/569/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/88e8ecd06aae5cd69d414af57a67f339/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/88e8ecd06aae5cd69d414af57a67f339/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/88e8ecd06aae5cd69d414af57a67f339/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/88e8ecd06aae5cd69d414af57a67f339/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/569/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 110859002,
          "title": "Crucificados Pelo Sistema",
          "link": "https://www.deezer.com/album/110859002",
          "cover": "https://api.deezer.com/album/110859002/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/a643ac816716e6a5b24821d8cdf5131a/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/a643ac816716e6a5b24821d8cdf5131a/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/a643ac816716e6a5b24821d8cdf5131a/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/a643ac816716e6a5b24821d8cdf5131a/1000x1000-000000-80-0-0.jpg",
          "md5_image": "a643ac816716e6a5b24821d8cdf5131a",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/110859002/tracks",
          "explicit_lyrics": false,
          "position": 3,
          "artist": {
            "id": 1255587,
            "name": "Ratos de Porao",
            "link": "https://www.deezer.com/artist/1255587",
            "picture": "https://api.deezer.com/artist/1255587/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f4a5bebfe5283979053325652e02ebbe/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f4a5bebfe5283979053325652e02ebbe/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f4a5bebfe5283979053325652e02ebbe/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f4a5bebfe5283979053325652e02ebbe/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1255587/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 255370592,
          "title": "Dune (Original Motion Picture Soundtrack)",
          "link": "https://www.deezer.com/album/255370592",
          "cover": "https://api.deezer.com/album/255370592/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/7fd4c7b636cb4b83005c9a5d1f47e202/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/7fd4c7b636cb4b83005c9a5d1f47e202/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/7fd4c7b636cb4b83005c9a5d1f47e202/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/7fd4c7b636cb4b83005c9a5d1f47e202/1000x1000-000000-80-0-0.jpg",
          "md5_image": "7fd4c7b636cb4b83005c9a5d1f47e202",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/255370592/tracks",
          "explicit_lyrics": false,
          "position": 4,
          "artist": {
            "id": 1935,
            "name": "Hans Zimmer",
            "link": "https://www.deezer.com/artist/1935",
            "picture": "https://api.deezer.com/artist/1935/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/ff9f1dc4cde85a63482a4cea7a863de9/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1935/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 100323,
          "title": "ABBA Gold",
          "link": "https://www.deezer.com/album/100323",
          "cover": "https://api.deezer.com/album/100323/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b8b70d474b7a8f27799e0d665e9b737e/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b8b70d474b7a8f27799e0d665e9b737e/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b8b70d474b7a8f27799e0d665e9b737e/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b8b70d474b7a8f27799e0d665e9b737e/1000x1000-000000-80-0-0.jpg",
          "md5_image": "b8b70d474b7a8f27799e0d665e9b737e",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/100323/tracks",
          "explicit_lyrics": false,
          "position": 5,
          "artist": {
            "id": 180,
            "name": "ABBA",
            "link": "https://www.deezer.com/artist/180",
            "picture": "https://api.deezer.com/artist/180/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/1cd9c41f13f3114367692383758be3c1/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/1cd9c41f13f3114367692383758be3c1/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/1cd9c41f13f3114367692383758be3c1/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/1cd9c41f13f3114367692383758be3c1/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/180/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 12926392,
          "title": "131",
          "link": "https://www.deezer.com/album/12926392",
          "cover": "https://api.deezer.com/album/12926392/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/61207e177497eada019307217fcc646a/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/61207e177497eada019307217fcc646a/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/61207e177497eada019307217fcc646a/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/61207e177497eada019307217fcc646a/1000x1000-000000-80-0-0.jpg",
          "md5_image": "61207e177497eada019307217fcc646a",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/12926392/tracks",
          "explicit_lyrics": false,
          "position": 6,
          "artist": {
            "id": 72711,
            "name": "Emarosa",
            "link": "https://www.deezer.com/artist/72711",
            "picture": "https://api.deezer.com/artist/72711/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/1a05a2b860b325e71d61d5148fadf794/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/1a05a2b860b325e71d61d5148fadf794/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/1a05a2b860b325e71d61d5148fadf794/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/1a05a2b860b325e71d61d5148fadf794/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/72711/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 73911,
          "title": "Kal Ho Naa Ho",
          "link": "https://www.deezer.com/album/73911",
          "cover": "https://api.deezer.com/album/73911/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/e0937e77783ba89f25e75f960d4b8652/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/e0937e77783ba89f25e75f960d4b8652/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/e0937e77783ba89f25e75f960d4b8652/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/e0937e77783ba89f25e75f960d4b8652/1000x1000-000000-80-0-0.jpg",
          "md5_image": "e0937e77783ba89f25e75f960d4b8652",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/73911/tracks",
          "explicit_lyrics": false,
          "position": 7,
          "artist": {
            "id": 70075,
            "name": "Sonu Nigam",
            "link": "https://www.deezer.com/artist/70075",
            "picture": "https://api.deezer.com/artist/70075/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/812220125c4f0db57050438b65afcf78/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/812220125c4f0db57050438b65afcf78/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/812220125c4f0db57050438b65afcf78/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/812220125c4f0db57050438b65afcf78/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/70075/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 72556702,
          "title": "Om Adella Teluk Wetan",
          "link": "https://www.deezer.com/album/72556702",
          "cover": "https://api.deezer.com/album/72556702/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/a692ec2b19eb8bb5783a78f7731ffb2e/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/a692ec2b19eb8bb5783a78f7731ffb2e/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/a692ec2b19eb8bb5783a78f7731ffb2e/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/a692ec2b19eb8bb5783a78f7731ffb2e/1000x1000-000000-80-0-0.jpg",
          "md5_image": "a692ec2b19eb8bb5783a78f7731ffb2e",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/72556702/tracks",
          "explicit_lyrics": true,
          "position": 8,
          "artist": {
            "id": 5080,
            "name": "Various Artists",
            "link": "https://www.deezer.com/artist/5080",
            "picture": "https://api.deezer.com/artist/5080/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/6d6503360e6cc202c9a1ed8617f3296b/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/6d6503360e6cc202c9a1ed8617f3296b/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/6d6503360e6cc202c9a1ed8617f3296b/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/6d6503360e6cc202c9a1ed8617f3296b/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/5080/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 268543132,
          "title": "Memory",
          "link": "https://www.deezer.com/album/268543132",
          "cover": "https://api.deezer.com/album/268543132/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/0698bab763486bba9eb9bd7da73e492e/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/0698bab763486bba9eb9bd7da73e492e/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/0698bab763486bba9eb9bd7da73e492e/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/0698bab763486bba9eb9bd7da73e492e/1000x1000-000000-80-0-0.jpg",
          "md5_image": "0698bab763486bba9eb9bd7da73e492e",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/268543132/tracks",
          "explicit_lyrics": false,
          "position": 9,
          "artist": {
            "id": 106947842,
            "name": "Kula Kriya",
            "link": "https://www.deezer.com/artist/106947842",
            "picture": "https://api.deezer.com/artist/106947842/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/3f4e0c5468e53883814693c1c12e87b8/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/3f4e0c5468e53883814693c1c12e87b8/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/3f4e0c5468e53883814693c1c12e87b8/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/3f4e0c5468e53883814693c1c12e87b8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/106947842/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        },
        {
          "id": 10534830,
          "title": "056/und die geheimnisvolle Erbschaft",
          "link": "https://www.deezer.com/album/10534830",
          "cover": "https://api.deezer.com/album/10534830/image",
          "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/c708ac16c26d7d7c9b9af05286a410c9/56x56-000000-80-0-0.jpg",
          "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/c708ac16c26d7d7c9b9af05286a410c9/250x250-000000-80-0-0.jpg",
          "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/c708ac16c26d7d7c9b9af05286a410c9/500x500-000000-80-0-0.jpg",
          "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/c708ac16c26d7d7c9b9af05286a410c9/1000x1000-000000-80-0-0.jpg",
          "md5_image": "c708ac16c26d7d7c9b9af05286a410c9",
          "record_type": "album",
          "tracklist": "https://api.deezer.com/album/10534830/tracks",
          "explicit_lyrics": false,
          "position": 10,
          "artist": {
            "id": 316920,
            "name": "Fünf Freunde",
            "link": "https://www.deezer.com/artist/316920",
            "picture": "https://api.deezer.com/artist/316920/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/6c0954cbc65ed62e00dbcba34a585b75/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/6c0954cbc65ed62e00dbcba34a585b75/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/6c0954cbc65ed62e00dbcba34a585b75/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/6c0954cbc65ed62e00dbcba34a585b75/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/316920/top?limit=50",
            "type": "artist"
          },
          "type": "album"
        }
      ],
      "total": 10
    }

  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="mb-3">Top Albums</h3>
        </Row>
        <Row>
            {
                dummy_data.data.slice(0,8).map((album) => (
                  <Col sm={3} className="d-flex justify-content-center">
                    <AlbumCard album={album} key={album.id}/>
                  </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default TopAlbums;