import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";


import ArtistDetail from "../components/Artist/ArtistDetail";
import ArtistTopTracks from "../components/Track/ArtistTopTracks";
import ArtistAlbums from "../components/Album/ArtistAlbums";
import RelatedArtists from "../components/Artist/RelatedArtists";
import Searchbar from "../components/Searchbar";

function ArtistPage() {

    const { artistId } = useParams();

    useEffect(() => {
        async function getArtistDetail() {
          try{
            const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
            const recipes = await fetchRecipes.json();
            console.log(recipes.results);       
          } catch(error){
              console.log('getArtistDetail', error);
          }
        }
        getArtistDetail();
    }, [])

    useEffect(() => {
        async function getTopTracks() {
          try{
            const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
            const recipes = await fetchRecipes.json();
            console.log(recipes.results);       
          } catch(error){
              console.log('getTopTracks', error);
          }
        }
        getTopTracks();
    }, [])

    useEffect(() => {
        async function getAlbums() {
          try{
            const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
            const recipes = await fetchRecipes.json();
            console.log(recipes.results);       
          } catch(error){
              console.log('getAlbums', error);
          }
        }
        getAlbums();
    }, [])

    useEffect(() => {
        async function getRelatedArtists() {
          try{
            const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
            const recipes = await fetchRecipes.json();
            console.log(recipes.results);       
          } catch(error){
              console.log('getRelatedArtists', error);
          }
        }
        getRelatedArtists();
    }, [])

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

    const data={
        "data": [
          {
            "id": "67238735",
            "readable": true,
            "title": "Get Lucky (feat. Pharrell Williams & Nile Rodgers)",
            "title_short": "Get Lucky (feat. Pharrell Williams & Nile Rodgers)",
            "title_version": "",
            "link": "https://www.deezer.com/track/67238735",
            "duration": "369",
            "rank": "813849",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-8.dzcdn.net/stream/c-853d19a12a694ccc74b2501acd802500-6.mp3",
            "contributors": [
              {
                "id": 27,
                "name": "Daft Punk",
                "link": "https://www.deezer.com/artist/27",
                "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636823387&utm_medium=web",
                "picture": "https://api.deezer.com/artist/27/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist",
                "role": "Main"
              },
              {
                "id": 103,
                "name": "Pharrell Williams",
                "link": "https://www.deezer.com/artist/103",
                "share": "https://www.deezer.com/artist/103?utm_source=deezer&utm_content=artist-103&utm_term=0_1636823387&utm_medium=web",
                "picture": "https://api.deezer.com/artist/103/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/103/top?limit=50",
                "type": "artist",
                "role": "Featured"
              },
              {
                "id": 7207,
                "name": "Nile Rodgers",
                "link": "https://www.deezer.com/artist/7207",
                "share": "https://www.deezer.com/artist/7207?utm_source=deezer&utm_content=artist-7207&utm_term=0_1636823387&utm_medium=web",
                "picture": "https://api.deezer.com/artist/7207/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/7207/top?limit=50",
                "type": "artist",
                "role": "Featured"
              }
            ],
            "md5_image": "b298094528702627877720d0be4448b5",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "album": {
              "id": "6575789",
              "title": "Random Access Memories",
              "cover": "https://api.deezer.com/album/6575789/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/1000x1000-000000-80-0-0.jpg",
              "md5_image": "b298094528702627877720d0be4448b5",
              "tracklist": "https://api.deezer.com/album/6575789/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": "66609426",
            "readable": true,
            "title": "Get Lucky (feat. Pharrell Williams & Nile Rodgers) (Radio Edit)",
            "title_short": "Get Lucky (feat. Pharrell Williams & Nile Rodgers)",
            "title_version": "(Radio Edit)",
            "link": "https://www.deezer.com/track/66609426",
            "duration": "248",
            "rank": "942328",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-b.dzcdn.net/stream/c-bdab5f5d846a91f14a01b75731dbc22a-7.mp3",
            "contributors": [
              {
                "id": 27,
                "name": "Daft Punk",
                "link": "https://www.deezer.com/artist/27",
                "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636823387&utm_medium=web",
                "picture": "https://api.deezer.com/artist/27/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist",
                "role": "Main"
              },
              {
                "id": 103,
                "name": "Pharrell Williams",
                "link": "https://www.deezer.com/artist/103",
                "share": "https://www.deezer.com/artist/103?utm_source=deezer&utm_content=artist-103&utm_term=0_1636823387&utm_medium=web",
                "picture": "https://api.deezer.com/artist/103/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/67f517c99b8b6ca8d9bde94db363b887/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/103/top?limit=50",
                "type": "artist",
                "role": "Featured"
              },
              {
                "id": 7207,
                "name": "Nile Rodgers",
                "link": "https://www.deezer.com/artist/7207",
                "share": "https://www.deezer.com/artist/7207?utm_source=deezer&utm_content=artist-7207&utm_term=0_1636823387&utm_medium=web",
                "picture": "https://api.deezer.com/artist/7207/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/64f826f318c84ce50ff538c01f62f1ff/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/7207/top?limit=50",
                "type": "artist",
                "role": "Featured"
              }
            ],
            "md5_image": "bc49adb87758e0c8c4e508a9c5cce85d",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "album": {
              "id": "6516139",
              "title": "Get Lucky (feat. Pharrell Williams & Nile Rodgers) (Radio Edit)",
              "cover": "https://api.deezer.com/album/6516139/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/1000x1000-000000-80-0-0.jpg",
              "md5_image": "bc49adb87758e0c8c4e508a9c5cce85d",
              "tracklist": "https://api.deezer.com/album/6516139/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": "3135553",
            "readable": true,
            "title": "One More Time",
            "title_short": "One More Time",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135553",
            "duration": "320",
            "rank": "913564",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-e.dzcdn.net/stream/c-e77d23e0c8ed7567a507a6d1b6a9ca1b-9.mp3",
            "contributors": [
              {
                "id": 27,
                "name": "Daft Punk",
                "link": "https://www.deezer.com/artist/27",
                "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636823387&utm_medium=web",
                "picture": "https://api.deezer.com/artist/27/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist",
                "role": "Main"
              }
            ],
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "album": {
              "id": "302127",
              "title": "Discovery",
              "cover": "https://api.deezer.com/album/302127/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
              "md5_image": "2e018122cb56986277102d2041a592c8",
              "tracklist": "https://api.deezer.com/album/302127/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": "67238732",
            "readable": true,
            "title": "Instant Crush (feat. Julian Casablancas)",
            "title_short": "Instant Crush (feat. Julian Casablancas)",
            "title_version": "",
            "link": "https://www.deezer.com/track/67238732",
            "duration": "337",
            "rank": "900908",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-7.dzcdn.net/stream/c-7d29f91f6875494c4104a0c436581293-9.mp3",
            "contributors": [
              {
                "id": 27,
                "name": "Daft Punk",
                "link": "https://www.deezer.com/artist/27",
                "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636823387&utm_medium=web",
                "picture": "https://api.deezer.com/artist/27/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist",
                "role": "Main"
              },
              {
                "id": 295821,
                "name": "Julian Casablancas",
                "link": "https://www.deezer.com/artist/295821",
                "share": "https://www.deezer.com/artist/295821?utm_source=deezer&utm_content=artist-295821&utm_term=0_1636823387&utm_medium=web",
                "picture": "https://api.deezer.com/artist/295821/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/a430c3ac3f546ced1e4ecff25fe4b921/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/a430c3ac3f546ced1e4ecff25fe4b921/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/a430c3ac3f546ced1e4ecff25fe4b921/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/a430c3ac3f546ced1e4ecff25fe4b921/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/295821/top?limit=50",
                "type": "artist",
                "role": "Featured"
              }
            ],
            "md5_image": "b298094528702627877720d0be4448b5",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "album": {
              "id": "6575789",
              "title": "Random Access Memories",
              "cover": "https://api.deezer.com/album/6575789/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/1000x1000-000000-80-0-0.jpg",
              "md5_image": "b298094528702627877720d0be4448b5",
              "tracklist": "https://api.deezer.com/album/6575789/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": "3135554",
            "readable": true,
            "title": "Aerodynamic",
            "title_short": "Aerodynamic",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135554",
            "duration": "212",
            "rank": "697130",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 6,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b2e0166bba75a78251d6dca9c9c3b41a-7.mp3",
            "contributors": [
              {
                "id": 27,
                "name": "Daft Punk",
                "link": "https://www.deezer.com/artist/27",
                "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636823387&utm_medium=web",
                "picture": "https://api.deezer.com/artist/27/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
                "radio": true,
                "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
                "type": "artist",
                "role": "Main"
              }
            ],
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "album": {
              "id": "302127",
              "title": "Discovery",
              "cover": "https://api.deezer.com/album/302127/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
              "md5_image": "2e018122cb56986277102d2041a592c8",
              "tracklist": "https://api.deezer.com/album/302127/tracks",
              "type": "album"
            },
            "type": "track"
          }
        ],
        "total": 95,
        "next": "https://api.deezer.com/artist/27/top?index=5"
    }

    const albums_data={
        "data": [
          {
            "id": "8244118",
            "title": "Human After All (Remixes)",
            "link": "https://www.deezer.com/album/8244118",
            "cover": "https://api.deezer.com/album/8244118/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/f6a4dbf47cb8828c281ed4e63364f99e/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f6a4dbf47cb8828c281ed4e63364f99e",
            "genre_id": 113,
            "fans": 29619,
            "release_date": "2005-03-20",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/8244118/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "6575789",
            "title": "Random Access Memories",
            "link": "https://www.deezer.com/album/6575789",
            "cover": "https://api.deezer.com/album/6575789/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b298094528702627877720d0be4448b5/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b298094528702627877720d0be4448b5",
            "genre_id": 132,
            "fans": 794584,
            "release_date": "2013-05-17",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/6575789/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "1471670",
            "title": "TRON: Legacy Reconfigured",
            "link": "https://www.deezer.com/album/1471670",
            "cover": "https://api.deezer.com/album/1471670/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2f34e0fe8086785fab7d6dfd8d48ba5a/1000x1000-000000-80-0-0.jpg",
            "md5_image": "2f34e0fe8086785fab7d6dfd8d48ba5a",
            "genre_id": 106,
            "fans": 5549,
            "release_date": "2011-04-01",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/1471670/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "192529232",
            "title": "TRON: Legacy - The Complete Edition (Original Motion Picture Soundtrack)",
            "link": "https://www.deezer.com/album/192529232",
            "cover": "https://api.deezer.com/album/192529232/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/313e8a988614445ab1ad508da2805187/1000x1000-000000-80-0-0.jpg",
            "md5_image": "313e8a988614445ab1ad508da2805187",
            "genre_id": 173,
            "fans": 13511,
            "release_date": "2020-12-18",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/192529232/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "304193",
            "title": "Alive 2007",
            "link": "https://www.deezer.com/album/304193",
            "cover": "https://api.deezer.com/album/304193/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/ad3dda2e1b770ad143d5dbfeb667fa39/1000x1000-000000-80-0-0.jpg",
            "md5_image": "ad3dda2e1b770ad143d5dbfeb667fa39",
            "genre_id": 113,
            "fans": 130621,
            "release_date": "2007-11-16",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/304193/tracks",
            "explicit_lyrics": true,
            "type": "album"
          },
          {
            "id": "1343199",
            "title": "Musique, Vol. 1",
            "link": "https://www.deezer.com/album/1343199",
            "cover": "https://api.deezer.com/album/1343199/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/39e2281a0e9f564e73b4f49dfa06f4ab/1000x1000-000000-80-0-0.jpg",
            "md5_image": "39e2281a0e9f564e73b4f49dfa06f4ab",
            "genre_id": 106,
            "fans": 59049,
            "release_date": "2006-03-31",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/1343199/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "303459",
            "title": "Human After All",
            "link": "https://www.deezer.com/album/303459",
            "cover": "https://api.deezer.com/album/303459/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/48701ef0699add067f257045a72d06af/1000x1000-000000-80-0-0.jpg",
            "md5_image": "48701ef0699add067f257045a72d06af",
            "genre_id": 113,
            "fans": 87773,
            "release_date": "2005-03-15",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/303459/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "299205",
            "title": "Daft Club",
            "link": "https://www.deezer.com/album/299205",
            "cover": "https://api.deezer.com/album/299205/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/0416976ab8f3f32e0b447dd1b9b1e0cf/1000x1000-000000-80-0-0.jpg",
            "md5_image": "0416976ab8f3f32e0b447dd1b9b1e0cf",
            "genre_id": 113,
            "fans": 42394,
            "release_date": "2003-12-01",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/299205/tracks",
            "explicit_lyrics": true,
            "type": "album"
          },
          {
            "id": "299137",
            "title": "Alive 1997",
            "link": "https://www.deezer.com/album/299137",
            "cover": "https://api.deezer.com/album/299137/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/dad3f5830a650c17f7125dca7c50f1d6/1000x1000-000000-80-0-0.jpg",
            "md5_image": "dad3f5830a650c17f7125dca7c50f1d6",
            "genre_id": 113,
            "fans": 6111,
            "release_date": "2005-01-21",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/299137/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "302127",
            "title": "Discovery",
            "link": "https://www.deezer.com/album/302127",
            "cover": "https://api.deezer.com/album/302127/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "genre_id": 113,
            "fans": 247274,
            "release_date": "2001-03-07",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/302127/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "301775",
            "title": "Homework",
            "link": "https://www.deezer.com/album/301775",
            "cover": "https://api.deezer.com/album/301775/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b870579c8650cd59b1cce656dde2ef17/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b870579c8650cd59b1cce656dde2ef17",
            "genre_id": 113,
            "fans": 134200,
            "release_date": "1997-01-16",
            "record_type": "album",
            "tracklist": "https://api.deezer.com/album/301775/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "6703346",
            "title": "Get Lucky (feat. Pharrell Williams & Nile Rodgers)",
            "link": "https://www.deezer.com/album/6703346",
            "cover": "https://api.deezer.com/album/6703346/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b1b2ac88710b0c721a680b9f9df947d7",
            "genre_id": 132,
            "fans": 9223,
            "release_date": "2013-07-03",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/6703346/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "6703310",
            "title": "Get Lucky",
            "link": "https://www.deezer.com/album/6703310",
            "cover": "https://api.deezer.com/album/6703310/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b1b2ac88710b0c721a680b9f9df947d7/1000x1000-000000-80-0-0.jpg",
            "md5_image": "b1b2ac88710b0c721a680b9f9df947d7",
            "genre_id": 132,
            "fans": 27441,
            "release_date": "2013-06-26",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/6703310/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "302378",
            "title": "Harder, Better, Faster, Stronger",
            "link": "https://www.deezer.com/album/302378",
            "cover": "https://api.deezer.com/album/302378/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/0ac2d2c8e627fcb6b708efa4237f57c8/1000x1000-000000-80-0-0.jpg",
            "md5_image": "0ac2d2c8e627fcb6b708efa4237f57c8",
            "genre_id": 113,
            "fans": 19742,
            "release_date": "2001-10-19",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/302378/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "325477",
            "title": "Revolution 909",
            "link": "https://www.deezer.com/album/325477",
            "cover": "https://api.deezer.com/album/325477/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/3d0891473275db1310a4feea8e6bb405/1000x1000-000000-80-0-0.jpg",
            "md5_image": "3d0891473275db1310a4feea8e6bb405",
            "genre_id": 113,
            "fans": 5852,
            "release_date": "2005-01-21",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/325477/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "302364",
            "title": "Around the World",
            "link": "https://www.deezer.com/album/302364",
            "cover": "https://api.deezer.com/album/302364/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/8bf010db50a851518e3edf3407145387/1000x1000-000000-80-0-0.jpg",
            "md5_image": "8bf010db50a851518e3edf3407145387",
            "genre_id": 113,
            "fans": 20003,
            "release_date": "1997-04-11",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/302364/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "325476",
            "title": "Burnin'",
            "link": "https://www.deezer.com/album/325476",
            "cover": "https://api.deezer.com/album/325476/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/cea7bffeacb0f7093cff63469e7e5944/1000x1000-000000-80-0-0.jpg",
            "md5_image": "cea7bffeacb0f7093cff63469e7e5944",
            "genre_id": 113,
            "fans": 5471,
            "release_date": "2006-04-21",
            "record_type": "ep",
            "tracklist": "https://api.deezer.com/album/325476/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "7561419",
            "title": "Derezzed (From “TRON: Legacy” Avicii \"So Amazing Mix\" Feat. Negin)",
            "link": "https://www.deezer.com/album/7561419",
            "cover": "https://api.deezer.com/album/7561419/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/f3e62688b1f759f9c986a073df77ee63/1000x1000-000000-80-0-0.jpg",
            "md5_image": "f3e62688b1f759f9c986a073df77ee63",
            "genre_id": 113,
            "fans": 5918,
            "release_date": "2014-04-01",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/7561419/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "6516139",
            "title": "Get Lucky (feat. Pharrell Williams & Nile Rodgers) (Radio Edit)",
            "link": "https://www.deezer.com/album/6516139",
            "cover": "https://api.deezer.com/album/6516139/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/bc49adb87758e0c8c4e508a9c5cce85d/1000x1000-000000-80-0-0.jpg",
            "md5_image": "bc49adb87758e0c8c4e508a9c5cce85d",
            "genre_id": 106,
            "fans": 154265,
            "release_date": "2013-04-19",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/6516139/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "3492561",
            "title": "Human After All (Medley)",
            "link": "https://www.deezer.com/album/3492561",
            "cover": "https://api.deezer.com/album/3492561/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/9882207e85296dc1ef9933bc73fb1b1d/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/9882207e85296dc1ef9933bc73fb1b1d/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/9882207e85296dc1ef9933bc73fb1b1d/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/9882207e85296dc1ef9933bc73fb1b1d/1000x1000-000000-80-0-0.jpg",
            "md5_image": "9882207e85296dc1ef9933bc73fb1b1d",
            "genre_id": 113,
            "fans": 3243,
            "release_date": "2012-06-22",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/3492561/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "7294967",
            "title": "Harder, Better, Faster, Stronger",
            "link": "https://www.deezer.com/album/7294967",
            "cover": "https://api.deezer.com/album/7294967/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/1000x1000-000000-80-0-0.jpg",
            "md5_image": "43a0af617608677263fba3fb4709b706",
            "genre_id": 113,
            "fans": 3562,
            "release_date": "2010-04-05",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/7294967/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "7294838",
            "title": "Harder, Better, Faster, Stronger (Live)",
            "link": "https://www.deezer.com/album/7294838",
            "cover": "https://api.deezer.com/album/7294838/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/1000x1000-000000-80-0-0.jpg",
            "md5_image": "43a0af617608677263fba3fb4709b706",
            "genre_id": 113,
            "fans": 3266,
            "release_date": "2010-03-15",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/7294838/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "325490",
            "title": "Harder, Better, Faster, Stronger (Alive Radio Edit 2007)",
            "link": "https://www.deezer.com/album/325490",
            "cover": "https://api.deezer.com/album/325490/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/43a0af617608677263fba3fb4709b706/1000x1000-000000-80-0-0.jpg",
            "md5_image": "43a0af617608677263fba3fb4709b706",
            "genre_id": 113,
            "fans": 5150,
            "release_date": "2007-10-09",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/325490/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "325424",
            "title": "Human After All",
            "link": "https://www.deezer.com/album/325424",
            "cover": "https://api.deezer.com/album/325424/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/eedf82df23d351df0bbba0d3d27ce48e/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/eedf82df23d351df0bbba0d3d27ce48e/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/eedf82df23d351df0bbba0d3d27ce48e/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/eedf82df23d351df0bbba0d3d27ce48e/1000x1000-000000-80-0-0.jpg",
            "md5_image": "eedf82df23d351df0bbba0d3d27ce48e",
            "genre_id": 113,
            "fans": 1003,
            "release_date": "2005-10-28",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/325424/tracks",
            "explicit_lyrics": false,
            "type": "album"
          },
          {
            "id": "303165",
            "title": "Technologic",
            "link": "https://www.deezer.com/album/303165",
            "cover": "https://api.deezer.com/album/303165/image",
            "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/c139f190f4d55df305e96add35075710/56x56-000000-80-0-0.jpg",
            "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/c139f190f4d55df305e96add35075710/250x250-000000-80-0-0.jpg",
            "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/c139f190f4d55df305e96add35075710/500x500-000000-80-0-0.jpg",
            "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/c139f190f4d55df305e96add35075710/1000x1000-000000-80-0-0.jpg",
            "md5_image": "c139f190f4d55df305e96add35075710",
            "genre_id": 113,
            "fans": 1673,
            "release_date": "2005-06-10",
            "record_type": "single",
            "tracklist": "https://api.deezer.com/album/303165/tracks",
            "explicit_lyrics": false,
            "type": "album"
          }
        ],
        "total": 32,
        "next": "https://api.deezer.com/artist/27/albums?index=25"
    }

    const artists_data = {
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

    return (
        <Container fluid>
            <Row>
              <Searchbar/>
            </Row>
            <Row>
                <Col>
                    <ArtistDetail artist={dummy_data} key={dummy_data.id}/>
                </Col>
            </Row>
            <Row>
                <ArtistTopTracks tracks={data.data}/>
            </Row>
            <Row>
                <ArtistAlbums albums={albums_data.data}/>
            </Row>
            <Row>
                <RelatedArtists artists={artists_data.data}/>
            </Row>
        </Container>
    )
}

export default ArtistPage;