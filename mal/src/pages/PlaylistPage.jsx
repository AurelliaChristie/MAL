import SearchBar from "../components/SearchBar/Searchbar";
import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import PlaylistDetails from "../components/Playlist/PlaylistDetails"
import PlaylistTracks from "../components/Track/PlaylistTracks";

function PlaylistPage() {

  const { albumId } = useParams();

  useEffect(() => {
    async function getAlbumDetail() {
      try{
        const fetchRecipes = await fetch(`https://api.deezer.com/album/149867702/tracks`)
        const recipes = await fetchRecipes.json();
        console.log(recipes.results);       
      } catch(error){
          console.log('getAlbumDetail', error);
      }
    }
    getAlbumDetail();
  }, [])

  useEffect(() => {
    async function getAlbumTracks() {
      try{
        const fetchRecipes = await fetch(`https://api.deezer.com/radio/top`)
        const recipes = await fetchRecipes.json();
        console.log(recipes.results);       
      } catch(error){
          console.log('getAlbumTracks', error);
      }
    }
    getAlbumTracks();
  }, [])

  const dummy_data={
      "id": "302127",
      "title": "Discovery",
      "upc": "724384960650",
      "link": "https://www.deezer.com/album/302127",
      "share": "https://www.deezer.com/album/302127?utm_source=deezer&utm_content=album-302127&utm_term=0_1636825033&utm_medium=web",
      "cover": "https://api.deezer.com/album/302127/image",
      "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/56x56-000000-80-0-0.jpg",
      "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/250x250-000000-80-0-0.jpg",
      "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
      "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/1000x1000-000000-80-0-0.jpg",
      "md5_image": "2e018122cb56986277102d2041a592c8",
      "genre_id": 113,
      "genres": {
        "data": [
          {
            "id": 113,
            "name": "Dance",
            "picture": "https://api.deezer.com/genre/113/image",
            "type": "genre"
          }
        ]
      },
      "label": "Daft Life Ltd./ADA France",
      "nb_tracks": 14,
      "duration": 3660,
      "fans": 247275,
      "release_date": "2001-03-07",
      "record_type": "album",
      "available": true,
      "tracklist": "https://api.deezer.com/album/302127/tracks",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 7,
      "explicit_content_cover": 0,
      "contributors": [
        {
          "id": 27,
          "name": "Daft Punk",
          "link": "https://www.deezer.com/artist/27",
          "share": "https://www.deezer.com/artist/27?utm_source=deezer&utm_content=artist-27&utm_term=0_1636825033&utm_medium=web",
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
      "artist": {
        "id": "27",
        "name": "Daft Punk",
        "picture": "https://api.deezer.com/artist/27/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
        "type": "artist"
      },
      "type": "album",
      "tracks": {
        "data": [
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
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
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
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135555",
            "readable": true,
            "title": "Digital Love",
            "title_short": "Digital Love",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135555",
            "duration": "301",
            "rank": "686062",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-0.dzcdn.net/stream/c-01ef0c4982c94b86c7c0e6b2a70dde4b-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135556",
            "readable": true,
            "title": "Harder, Better, Faster, Stronger",
            "title_short": "Harder, Better, Faster, Stronger",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135556",
            "duration": "224",
            "rank": "784948",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135557",
            "readable": true,
            "title": "Crescendolls",
            "title_short": "Crescendolls",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135557",
            "duration": "211",
            "rank": "573842",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-0.dzcdn.net/stream/c-02585dc790f2904c4e870cb3bcecfcf3-8.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135558",
            "readable": true,
            "title": "Nightvision",
            "title_short": "Nightvision",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135558",
            "duration": "104",
            "rank": "499776",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 6,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-1.dzcdn.net/stream/c-155b4d90d3d16d951e3d67c297988edc-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135559",
            "readable": true,
            "title": "Superheroes",
            "title_short": "Superheroes",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135559",
            "duration": "237",
            "rank": "547086",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-3.dzcdn.net/stream/c-3d8caae0a1c59f417f31bb747c43818b-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135560",
            "readable": true,
            "title": "High Life",
            "title_short": "High Life",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135560",
            "duration": "201",
            "rank": "556766",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8052077a75a884e93bda2e2b63f74bbb-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135561",
            "readable": true,
            "title": "Something About Us",
            "title_short": "Something About Us",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135561",
            "duration": "232",
            "rank": "728441",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 6,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-9.dzcdn.net/stream/c-905aef3b23f4fb19db300a03f254fd6a-6.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135562",
            "readable": true,
            "title": "Voyager",
            "title_short": "Voyager",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135562",
            "duration": "227",
            "rank": "621147",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-9.dzcdn.net/stream/c-98625d3ad54e88765fdfb812de62e515-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135563",
            "readable": true,
            "title": "Veridis Quo",
            "title_short": "Veridis Quo",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135563",
            "duration": "345",
            "rank": "794261",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-f.dzcdn.net/stream/c-f6fde4f6f42bde740e3d07b019fde318-6.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135564",
            "readable": true,
            "title": "Short Circuit",
            "title_short": "Short Circuit",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135564",
            "duration": "206",
            "rank": "469931",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-6.dzcdn.net/stream/c-6ef3bfc9e8f226b582bade5842df4517-8.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135565",
            "readable": true,
            "title": "Face to Face",
            "title_short": "Face to Face",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135565",
            "duration": "240",
            "rank": "594139",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-7.dzcdn.net/stream/c-7af918cb131b9d5b8f5c1e40e62da91b-8.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
          },
          {
            "id": "3135566",
            "readable": true,
            "title": "Too Long",
            "title_short": "Too Long",
            "title_version": "",
            "link": "https://www.deezer.com/track/3135566",
            "duration": "600",
            "rank": "533537",
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-d.dzcdn.net/stream/c-ddf495316e2afbe4327d9a6e17840a69-7.mp3",
            "md5_image": "2e018122cb56986277102d2041a592c8",
            "artist": {
              "id": "27",
              "name": "Daft Punk",
              "tracklist": "https://api.deezer.com/artist/27/top?limit=50",
              "type": "artist"
            },
            "type": "track"
    }
  ]
}
  }

  const data={
   
  "data": [
    {
      "id": "1091037332",
      "readable": true,
      "title": "Not Another Love Song",
      "title_short": "Not Another Love Song",
      "title_version": "",
      "link": "https://www.deezer.com/track/1091037332",
      "duration": "217",
      "rank": "629424",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-a.dzcdn.net/stream/c-a962b47e6af873350f492f6868670145-6.mp3",
      "md5_image": "ad86329df9696daa9670cf51bd6464ec",
      "artist": {
        "id": "11116250",
        "name": "Ella Mai",
        "link": "https://www.deezer.com/artist/11116250",
        "picture": "https://api.deezer.com/artist/11116250/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/cefc0a45931b930df17a080784b0380b/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/cefc0a45931b930df17a080784b0380b/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/cefc0a45931b930df17a080784b0380b/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/cefc0a45931b930df17a080784b0380b/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/11116250/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "175653722",
        "title": "Not Another Love Song",
        "cover": "https://api.deezer.com/album/175653722/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/ad86329df9696daa9670cf51bd6464ec/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/ad86329df9696daa9670cf51bd6464ec/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/ad86329df9696daa9670cf51bd6464ec/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/ad86329df9696daa9670cf51bd6464ec/1000x1000-000000-80-0-0.jpg",
        "md5_image": "ad86329df9696daa9670cf51bd6464ec",
        "tracklist": "https://api.deezer.com/album/175653722/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1343213752",
      "readable": true,
      "title": "Bussdown",
      "title_short": "Bussdown",
      "title_version": "",
      "link": "https://www.deezer.com/track/1343213752",
      "duration": "201",
      "rank": "588847",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b78dd314f78080da9be8d5958597107a-3.mp3",
      "md5_image": "4e48bbae7b79a5e748d9f6f978dbff4c",
      "artist": {
        "id": "9945222",
        "name": "Jorja Smith",
        "link": "https://www.deezer.com/artist/9945222",
        "picture": "https://api.deezer.com/artist/9945222/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/0727722907eca9ea132cdca39d5d4f69/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/0727722907eca9ea132cdca39d5d4f69/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/0727722907eca9ea132cdca39d5d4f69/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/0727722907eca9ea132cdca39d5d4f69/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/9945222/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "222753082",
        "title": "Be Right Back",
        "cover": "https://api.deezer.com/album/222753082/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/4e48bbae7b79a5e748d9f6f978dbff4c/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/4e48bbae7b79a5e748d9f6f978dbff4c/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/4e48bbae7b79a5e748d9f6f978dbff4c/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/4e48bbae7b79a5e748d9f6f978dbff4c/1000x1000-000000-80-0-0.jpg",
        "md5_image": "4e48bbae7b79a5e748d9f6f978dbff4c",
        "tracklist": "https://api.deezer.com/album/222753082/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1195857062",
      "readable": true,
      "title": "Pick Up Your Feelings",
      "title_short": "Pick Up Your Feelings",
      "title_version": "",
      "link": "https://www.deezer.com/track/1195857062",
      "duration": "229",
      "rank": "584487",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-8.dzcdn.net/stream/c-83cd5a3a2d8554903af4b756a648ebc7-3.mp3",
      "md5_image": "9c3676dca9998e210623e0912f104e8c",
      "artist": {
        "id": "134123",
        "name": "Jazmine Sullivan",
        "link": "https://www.deezer.com/artist/134123",
        "picture": "https://api.deezer.com/artist/134123/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/4183ba42c56bbdfa8df908a553a768fa/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/4183ba42c56bbdfa8df908a553a768fa/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/4183ba42c56bbdfa8df908a553a768fa/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/4183ba42c56bbdfa8df908a553a768fa/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/134123/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "197279822",
        "title": "Heaux Tales",
        "cover": "https://api.deezer.com/album/197279822/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/9c3676dca9998e210623e0912f104e8c/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/9c3676dca9998e210623e0912f104e8c/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/9c3676dca9998e210623e0912f104e8c/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/9c3676dca9998e210623e0912f104e8c/1000x1000-000000-80-0-0.jpg",
        "md5_image": "9c3676dca9998e210623e0912f104e8c",
        "tracklist": "https://api.deezer.com/album/197279822/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1543741742",
      "readable": true,
      "title": "No Love",
      "title_short": "No Love",
      "title_version": "",
      "link": "https://www.deezer.com/track/1543741742",
      "duration": "231",
      "rank": "889717",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-0.dzcdn.net/stream/c-09b8f9d106d3fdf9486fd244f603f38f-4.mp3",
      "md5_image": "cd03c16b6e7a0cfc304e1705bda3cfd4",
      "artist": {
        "id": "14482665",
        "name": "Summer Walker",
        "link": "https://www.deezer.com/artist/14482665",
        "picture": "https://api.deezer.com/artist/14482665/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/07bd402b3e05b0fc0db54dcd045d2ddc/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/07bd402b3e05b0fc0db54dcd045d2ddc/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/07bd402b3e05b0fc0db54dcd045d2ddc/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/07bd402b3e05b0fc0db54dcd045d2ddc/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/14482665/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "270644462",
        "title": "Still Over It",
        "cover": "https://api.deezer.com/album/270644462/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/cd03c16b6e7a0cfc304e1705bda3cfd4/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/cd03c16b6e7a0cfc304e1705bda3cfd4/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/cd03c16b6e7a0cfc304e1705bda3cfd4/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/cd03c16b6e7a0cfc304e1705bda3cfd4/1000x1000-000000-80-0-0.jpg",
        "md5_image": "cd03c16b6e7a0cfc304e1705bda3cfd4",
        "tracklist": "https://api.deezer.com/album/270644462/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1434494432",
      "readable": true,
      "title": "Coastin’",
      "title_short": "Coastin’",
      "title_version": "",
      "link": "https://www.deezer.com/track/1434494432",
      "duration": "175",
      "rank": "607829",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-0.dzcdn.net/stream/c-0ce21d622e9d59a853f9d196c8e0c9d1-3.mp3",
      "md5_image": "b04004989c1d5dcb6eba94bbf3c2b328",
      "artist": {
        "id": "5000503",
        "name": "Victoria Monét",
        "link": "https://www.deezer.com/artist/5000503",
        "picture": "https://api.deezer.com/artist/5000503/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/34c462591b2798922366bb817dee3efe/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/34c462591b2798922366bb817dee3efe/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/34c462591b2798922366bb817dee3efe/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/34c462591b2798922366bb817dee3efe/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/5000503/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "244516682",
        "title": "Coastin’",
        "cover": "https://api.deezer.com/album/244516682/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b04004989c1d5dcb6eba94bbf3c2b328/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b04004989c1d5dcb6eba94bbf3c2b328/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b04004989c1d5dcb6eba94bbf3c2b328/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b04004989c1d5dcb6eba94bbf3c2b328/1000x1000-000000-80-0-0.jpg",
        "md5_image": "b04004989c1d5dcb6eba94bbf3c2b328",
        "tracklist": "https://api.deezer.com/album/244516682/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1547630972",
      "readable": true,
      "title": "Blast Off",
      "title_short": "Blast Off",
      "title_version": "",
      "link": "https://www.deezer.com/track/1547630972",
      "duration": "284",
      "rank": "435776",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-9.dzcdn.net/stream/c-9e5d6e6d46a403c1b8679bf8fff3c3bf-3.mp3",
      "md5_image": "faada8a8c545b2e3d454267b55c82e14",
      "artist": {
        "id": "429675",
        "name": "Bruno Mars",
        "link": "https://www.deezer.com/artist/429675",
        "picture": "https://api.deezer.com/artist/429675/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/429675/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "271509512",
        "title": "An Evening With Silk Sonic",
        "cover": "https://api.deezer.com/album/271509512/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/faada8a8c545b2e3d454267b55c82e14/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/faada8a8c545b2e3d454267b55c82e14/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/faada8a8c545b2e3d454267b55c82e14/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/faada8a8c545b2e3d454267b55c82e14/1000x1000-000000-80-0-0.jpg",
        "md5_image": "faada8a8c545b2e3d454267b55c82e14",
        "tracklist": "https://api.deezer.com/album/271509512/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1487868692",
      "readable": true,
      "title": "Have Mercy",
      "title_short": "Have Mercy",
      "title_version": "",
      "link": "https://www.deezer.com/track/1487868692",
      "duration": "148",
      "rank": "933627",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-a.dzcdn.net/stream/c-ac6c1fbbfc998977c8fa3dd829212cfe-3.mp3",
      "md5_image": "49576b01f2322daa7cd23032438ddf9e",
      "artist": {
        "id": "5398364",
        "name": "Chlöe",
        "link": "https://www.deezer.com/artist/5398364",
        "picture": "https://api.deezer.com/artist/5398364/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/82342bad1b5968615e56452ddfb1feab/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/82342bad1b5968615e56452ddfb1feab/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/82342bad1b5968615e56452ddfb1feab/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/82342bad1b5968615e56452ddfb1feab/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/5398364/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "257163412",
        "title": "Have Mercy",
        "cover": "https://api.deezer.com/album/257163412/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/49576b01f2322daa7cd23032438ddf9e/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/49576b01f2322daa7cd23032438ddf9e/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/49576b01f2322daa7cd23032438ddf9e/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/49576b01f2322daa7cd23032438ddf9e/1000x1000-000000-80-0-0.jpg",
        "md5_image": "49576b01f2322daa7cd23032438ddf9e",
        "tracklist": "https://api.deezer.com/album/257163412/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1242524362",
      "readable": true,
      "title": "Relax",
      "title_short": "Relax",
      "title_version": "",
      "link": "https://www.deezer.com/track/1242524362",
      "duration": "265",
      "rank": "515581",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-f.dzcdn.net/stream/c-fad63107752f71c2162684d6ebe50116-4.mp3",
      "md5_image": "0cc3fe6366a3696fe4b8d31b0cf0a24b",
      "artist": {
        "id": "128543",
        "name": "Chrissy",
        "link": "https://www.deezer.com/artist/128543",
        "picture": "https://api.deezer.com/artist/128543/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/0cc3fe6366a3696fe4b8d31b0cf0a24b/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/0cc3fe6366a3696fe4b8d31b0cf0a24b/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/0cc3fe6366a3696fe4b8d31b0cf0a24b/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/0cc3fe6366a3696fe4b8d31b0cf0a24b/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/128543/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "207358362",
        "title": "Relax",
        "cover": "https://api.deezer.com/album/207358362/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/0cc3fe6366a3696fe4b8d31b0cf0a24b/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/0cc3fe6366a3696fe4b8d31b0cf0a24b/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/0cc3fe6366a3696fe4b8d31b0cf0a24b/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/0cc3fe6366a3696fe4b8d31b0cf0a24b/1000x1000-000000-80-0-0.jpg",
        "md5_image": "0cc3fe6366a3696fe4b8d31b0cf0a24b",
        "tracklist": "https://api.deezer.com/album/207358362/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1104084732",
      "readable": true,
      "title": "On Call (feat. Ty Dolla $ign)",
      "title_short": "On Call (feat. Ty Dolla $ign)",
      "title_version": "",
      "link": "https://www.deezer.com/track/1104084732",
      "duration": "164",
      "rank": "528800",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-f.dzcdn.net/stream/c-ff80b5224d902471671eabb2c189eee6-3.mp3",
      "md5_image": "4680f46138d2b209ffcf9f26c974322c",
      "artist": {
        "id": "11134",
        "name": "Trey Songz",
        "link": "https://www.deezer.com/artist/11134",
        "picture": "https://api.deezer.com/artist/11134/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/c85b1768f500776ae618a880f75e3640/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/c85b1768f500776ae618a880f75e3640/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/c85b1768f500776ae618a880f75e3640/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/c85b1768f500776ae618a880f75e3640/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/11134/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "178520612",
        "title": "Back Home",
        "cover": "https://api.deezer.com/album/178520612/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/4680f46138d2b209ffcf9f26c974322c/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/4680f46138d2b209ffcf9f26c974322c/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/4680f46138d2b209ffcf9f26c974322c/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/4680f46138d2b209ffcf9f26c974322c/1000x1000-000000-80-0-0.jpg",
        "md5_image": "4680f46138d2b209ffcf9f26c974322c",
        "tracklist": "https://api.deezer.com/album/178520612/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1090934652",
      "readable": true,
      "title": "Outta Time (feat. Drake)",
      "title_short": "Outta Time (feat. Drake)",
      "title_version": "",
      "link": "https://www.deezer.com/track/1090934652",
      "duration": "198",
      "rank": "662186",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-0.dzcdn.net/stream/c-0557429dca1ce6ef3ebfe33fdc0f7e2f-4.mp3",
      "md5_image": "efc36b543b9b684525ff31a071505888",
      "artist": {
        "id": "7004075",
        "name": "Bryson Tiller",
        "link": "https://www.deezer.com/artist/7004075",
        "picture": "https://api.deezer.com/artist/7004075/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/99718e3db0cefc05b26cc0919c757bf0/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/99718e3db0cefc05b26cc0919c757bf0/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/99718e3db0cefc05b26cc0919c757bf0/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/99718e3db0cefc05b26cc0919c757bf0/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/7004075/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "175630022",
        "title": "A N N I V E R S A R Y",
        "cover": "https://api.deezer.com/album/175630022/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/efc36b543b9b684525ff31a071505888/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/efc36b543b9b684525ff31a071505888/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/efc36b543b9b684525ff31a071505888/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/efc36b543b9b684525ff31a071505888/1000x1000-000000-80-0-0.jpg",
        "md5_image": "efc36b543b9b684525ff31a071505888",
        "tracklist": "https://api.deezer.com/album/175630022/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1489697432",
      "readable": true,
      "title": "Altar",
      "title_short": "Altar",
      "title_version": "",
      "link": "https://www.deezer.com/track/1489697432",
      "duration": "243",
      "rank": "722745",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 6,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-5.dzcdn.net/stream/c-52cbc888f3c2c6538296ee145712de70-3.mp3",
      "md5_image": "06fe443fe49593fabfa4d46d81838217",
      "artist": {
        "id": "5603027",
        "name": "Kehlani",
        "link": "https://www.deezer.com/artist/5603027",
        "picture": "https://api.deezer.com/artist/5603027/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/2c45ba98d43bb7f2e57abfd6f530a0da/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/2c45ba98d43bb7f2e57abfd6f530a0da/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/2c45ba98d43bb7f2e57abfd6f530a0da/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/2c45ba98d43bb7f2e57abfd6f530a0da/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/5603027/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "257692042",
        "title": "Altar",
        "cover": "https://api.deezer.com/album/257692042/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/06fe443fe49593fabfa4d46d81838217/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/06fe443fe49593fabfa4d46d81838217/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/06fe443fe49593fabfa4d46d81838217/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/06fe443fe49593fabfa4d46d81838217/1000x1000-000000-80-0-0.jpg",
        "md5_image": "06fe443fe49593fabfa4d46d81838217",
        "tracklist": "https://api.deezer.com/album/257692042/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1484025472",
      "readable": true,
      "title": "Pressure",
      "title_short": "Pressure",
      "title_version": "",
      "link": "https://www.deezer.com/track/1484025472",
      "duration": "193",
      "rank": "630245",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-3.dzcdn.net/stream/c-3708fddd883fc43684039843e67beef6-4.mp3",
      "md5_image": "35efe62690b138d64743530f50220c9a",
      "artist": {
        "id": "5478691",
        "name": "Ari Lennox",
        "link": "https://www.deezer.com/artist/5478691",
        "picture": "https://api.deezer.com/artist/5478691/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/73163a260b2f4b09f8ee15fbc77b064d/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/73163a260b2f4b09f8ee15fbc77b064d/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/73163a260b2f4b09f8ee15fbc77b064d/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/73163a260b2f4b09f8ee15fbc77b064d/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/5478691/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "256288812",
        "title": "Pressure",
        "cover": "https://api.deezer.com/album/256288812/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/35efe62690b138d64743530f50220c9a/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/35efe62690b138d64743530f50220c9a/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/35efe62690b138d64743530f50220c9a/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/35efe62690b138d64743530f50220c9a/1000x1000-000000-80-0-0.jpg",
        "md5_image": "35efe62690b138d64743530f50220c9a",
        "tracklist": "https://api.deezer.com/album/256288812/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1303844762",
      "readable": true,
      "title": "Pack Lite",
      "title_short": "Pack Lite",
      "title_version": "",
      "link": "https://www.deezer.com/track/1303844762",
      "duration": "176",
      "rank": "508855",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-b.dzcdn.net/stream/c-bb752c8674a336943517fbeebbab5d1c-4.mp3",
      "md5_image": "ced733819d1584dc24e1e1520d782043",
      "artist": {
        "id": "13895003",
        "name": "Queen Naija",
        "link": "https://www.deezer.com/artist/13895003",
        "picture": "https://api.deezer.com/artist/13895003/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/038adcc2a17e05d1ae7b70dd63b8b309/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/038adcc2a17e05d1ae7b70dd63b8b309/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/038adcc2a17e05d1ae7b70dd63b8b309/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/038adcc2a17e05d1ae7b70dd63b8b309/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/13895003/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "219628242",
        "title": "missunderstood…still",
        "cover": "https://api.deezer.com/album/219628242/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/ced733819d1584dc24e1e1520d782043/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/ced733819d1584dc24e1e1520d782043/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/ced733819d1584dc24e1e1520d782043/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/ced733819d1584dc24e1e1520d782043/1000x1000-000000-80-0-0.jpg",
        "md5_image": "ced733819d1584dc24e1e1520d782043",
        "tracklist": "https://api.deezer.com/album/219628242/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1352360622",
      "readable": true,
      "title": "Save Your Tears (Remix)",
      "title_short": "Save Your Tears",
      "title_version": "(Remix)",
      "link": "https://www.deezer.com/track/1352360622",
      "duration": "191",
      "rank": "997068",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-0.dzcdn.net/stream/c-01dcc039d46062295b454782349f2273-4.mp3",
      "md5_image": "4acc3760e12996fe21a77115fc67760b",
      "artist": {
        "id": "4050205",
        "name": "The Weeknd",
        "link": "https://www.deezer.com/artist/4050205",
        "picture": "https://api.deezer.com/artist/4050205/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/bd3f01a27e692074ed40bf8755b06afe/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/bd3f01a27e692074ed40bf8755b06afe/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/bd3f01a27e692074ed40bf8755b06afe/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/bd3f01a27e692074ed40bf8755b06afe/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/4050205/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "225079122",
        "title": "Save Your Tears (Remix)",
        "cover": "https://api.deezer.com/album/225079122/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/4acc3760e12996fe21a77115fc67760b/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/4acc3760e12996fe21a77115fc67760b/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/4acc3760e12996fe21a77115fc67760b/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/4acc3760e12996fe21a77115fc67760b/1000x1000-000000-80-0-0.jpg",
        "md5_image": "4acc3760e12996fe21a77115fc67760b",
        "tracklist": "https://api.deezer.com/album/225079122/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1280165222",
      "readable": true,
      "title": "Peaches",
      "title_short": "Peaches",
      "title_version": "",
      "link": "https://www.deezer.com/track/1280165222",
      "duration": "198",
      "rank": "992645",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-1.dzcdn.net/stream/c-179bee1bfc65440d7df06d2246209699-4.mp3",
      "md5_image": "87468622c8e7ac9dce7b541be136aa4c",
      "artist": {
        "id": "288166",
        "name": "Justin Bieber",
        "link": "https://www.deezer.com/artist/288166",
        "picture": "https://api.deezer.com/artist/288166/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/288166/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "215962322",
        "title": "Justice",
        "cover": "https://api.deezer.com/album/215962322/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/87468622c8e7ac9dce7b541be136aa4c/1000x1000-000000-80-0-0.jpg",
        "md5_image": "87468622c8e7ac9dce7b541be136aa4c",
        "tracklist": "https://api.deezer.com/album/215962322/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1234186262",
      "readable": true,
      "title": "Complicated",
      "title_short": "Complicated",
      "title_version": "",
      "link": "https://www.deezer.com/track/1234186262",
      "duration": "244",
      "rank": "515308",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 6,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1a0bb593160e743049ad3da0f04520ed-3.mp3",
      "md5_image": "a5696d4ec83e8f31f7dd7003de415074",
      "artist": {
        "id": "5841",
        "name": "Leela James",
        "link": "https://www.deezer.com/artist/5841",
        "picture": "https://api.deezer.com/artist/5841/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/1e9b0888ba481fface48631d0752caff/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/1e9b0888ba481fface48631d0752caff/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/1e9b0888ba481fface48631d0752caff/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/1e9b0888ba481fface48631d0752caff/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/5841/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "205559662",
        "title": "Complicated",
        "cover": "https://api.deezer.com/album/205559662/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/a5696d4ec83e8f31f7dd7003de415074/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/a5696d4ec83e8f31f7dd7003de415074/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/a5696d4ec83e8f31f7dd7003de415074/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/a5696d4ec83e8f31f7dd7003de415074/1000x1000-000000-80-0-0.jpg",
        "md5_image": "a5696d4ec83e8f31f7dd7003de415074",
        "tracklist": "https://api.deezer.com/album/205559662/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1503648372",
      "readable": true,
      "title": "fue mejor",
      "title_short": "fue mejor",
      "title_version": "",
      "link": "https://www.deezer.com/track/1503648372",
      "duration": "230",
      "rank": "797069",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-6.dzcdn.net/stream/c-699cdc5ac142f0e835b5540ebbd34fcf-4.mp3",
      "md5_image": "fa5966e5a97b0404ee727761a69de1c3",
      "artist": {
        "id": "6043160",
        "name": "Kali Uchis",
        "link": "https://www.deezer.com/artist/6043160",
        "picture": "https://api.deezer.com/artist/6043160/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/e8de75e61158ef7f4656da2f46f202eb/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/e8de75e61158ef7f4656da2f46f202eb/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/e8de75e61158ef7f4656da2f46f202eb/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/e8de75e61158ef7f4656da2f46f202eb/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/6043160/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "261124542",
        "title": "fue mejor",
        "cover": "https://api.deezer.com/album/261124542/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/fa5966e5a97b0404ee727761a69de1c3/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/fa5966e5a97b0404ee727761a69de1c3/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/fa5966e5a97b0404ee727761a69de1c3/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/fa5966e5a97b0404ee727761a69de1c3/1000x1000-000000-80-0-0.jpg",
        "md5_image": "fa5966e5a97b0404ee727761a69de1c3",
        "tracklist": "https://api.deezer.com/album/261124542/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1221170412",
      "readable": true,
      "title": "Slow Down",
      "title_short": "Slow Down",
      "title_version": "",
      "link": "https://www.deezer.com/track/1221170412",
      "duration": "229",
      "rank": "515325",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b8dfcbab571a08b16b4f0ed197faad26-3.mp3",
      "md5_image": "c7cafdf9170d306f885ad9741dfcc53b",
      "artist": {
        "id": "3239791",
        "name": "VanJess",
        "link": "https://www.deezer.com/artist/3239791",
        "picture": "https://api.deezer.com/artist/3239791/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/52f8cfd24c633f4ae630f656faa1e196/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/52f8cfd24c633f4ae630f656faa1e196/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/52f8cfd24c633f4ae630f656faa1e196/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/52f8cfd24c633f4ae630f656faa1e196/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/3239791/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "202643812",
        "title": "Homegrown",
        "cover": "https://api.deezer.com/album/202643812/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/c7cafdf9170d306f885ad9741dfcc53b/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/c7cafdf9170d306f885ad9741dfcc53b/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/c7cafdf9170d306f885ad9741dfcc53b/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/c7cafdf9170d306f885ad9741dfcc53b/1000x1000-000000-80-0-0.jpg",
        "md5_image": "c7cafdf9170d306f885ad9741dfcc53b",
        "tracklist": "https://api.deezer.com/album/202643812/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1015720672",
      "readable": true,
      "title": "My Affection",
      "title_short": "My Affection",
      "title_version": "",
      "link": "https://www.deezer.com/track/1015720672",
      "duration": "213",
      "rank": "601099",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-0.dzcdn.net/stream/c-04185e401cec9ce251abb81334b3574b-4.mp3",
      "md5_image": "d734d316cc7cabb4e2a59be2fb779963",
      "artist": {
        "id": "14482665",
        "name": "Summer Walker",
        "link": "https://www.deezer.com/artist/14482665",
        "picture": "https://api.deezer.com/artist/14482665/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/07bd402b3e05b0fc0db54dcd045d2ddc/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/07bd402b3e05b0fc0db54dcd045d2ddc/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/07bd402b3e05b0fc0db54dcd045d2ddc/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/07bd402b3e05b0fc0db54dcd045d2ddc/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/14482665/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "159514962",
        "title": "Life On Earth - EP",
        "cover": "https://api.deezer.com/album/159514962/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/d734d316cc7cabb4e2a59be2fb779963/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/d734d316cc7cabb4e2a59be2fb779963/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/d734d316cc7cabb4e2a59be2fb779963/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/d734d316cc7cabb4e2a59be2fb779963/1000x1000-000000-80-0-0.jpg",
        "md5_image": "d734d316cc7cabb4e2a59be2fb779963",
        "tracklist": "https://api.deezer.com/album/159514962/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "914652682",
      "readable": true,
      "title": "BELIEVE IT",
      "title_short": "BELIEVE IT",
      "title_version": "",
      "link": "https://www.deezer.com/track/914652682",
      "duration": "183",
      "rank": "719400",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-a.dzcdn.net/stream/c-a67ccf0ec463335d76a0d40285338420-5.mp3",
      "md5_image": "9d3742c3e8e5a50160cbf549f1e6c7e6",
      "artist": {
        "id": "4925172",
        "name": "PARTYNEXTDOOR",
        "link": "https://www.deezer.com/artist/4925172",
        "picture": "https://api.deezer.com/artist/4925172/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/9cc27c783c1fc8477398ca027b3aa6a3/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/9cc27c783c1fc8477398ca027b3aa6a3/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/9cc27c783c1fc8477398ca027b3aa6a3/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/9cc27c783c1fc8477398ca027b3aa6a3/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/4925172/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "138472122",
        "title": "PARTYMOBILE",
        "cover": "https://api.deezer.com/album/138472122/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/9d3742c3e8e5a50160cbf549f1e6c7e6/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/9d3742c3e8e5a50160cbf549f1e6c7e6/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/9d3742c3e8e5a50160cbf549f1e6c7e6/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/9d3742c3e8e5a50160cbf549f1e6c7e6/1000x1000-000000-80-0-0.jpg",
        "md5_image": "9d3742c3e8e5a50160cbf549f1e6c7e6",
        "tracklist": "https://api.deezer.com/album/138472122/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1474353022",
      "readable": true,
      "title": "Essence (feat. Justin Bieber & Tems)",
      "title_short": "Essence (feat. Justin Bieber & Tems)",
      "title_version": "",
      "link": "https://www.deezer.com/track/1474353022",
      "duration": "263",
      "rank": "709305",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8138966fd4acf1f4d208043928883f7b-3.mp3",
      "md5_image": "ad33274548de3455303618bb650b6d86",
      "artist": {
        "id": "3933641",
        "name": "Wizkid",
        "link": "https://www.deezer.com/artist/3933641",
        "picture": "https://api.deezer.com/artist/3933641/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/0a5d34bab78b51067698dd51767154aa/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/0a5d34bab78b51067698dd51767154aa/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/0a5d34bab78b51067698dd51767154aa/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/0a5d34bab78b51067698dd51767154aa/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/3933641/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "254027212",
        "title": "Made In Lagos: Deluxe Edition",
        "cover": "https://api.deezer.com/album/254027212/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/1000x1000-000000-80-0-0.jpg",
        "md5_image": "ad33274548de3455303618bb650b6d86",
        "tracklist": "https://api.deezer.com/album/254027212/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1392506662",
      "readable": true,
      "title": "I Believed It (feat. Mac Miller)",
      "title_short": "I Believed It (feat. Mac Miller)",
      "title_version": "",
      "link": "https://www.deezer.com/track/1392506662",
      "duration": "246",
      "rank": "535065",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-5.dzcdn.net/stream/c-5c14444f925491f3502d5daab1f030f0-3.mp3",
      "md5_image": "b1205d6f97b3156cc205f9bfb0780a28",
      "artist": {
        "id": "8835400",
        "name": "dvsn",
        "link": "https://www.deezer.com/artist/8835400",
        "picture": "https://api.deezer.com/artist/8835400/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/79bc6077b4bce2e06e9adeda7dc3d126/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/79bc6077b4bce2e06e9adeda7dc3d126/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/79bc6077b4bce2e06e9adeda7dc3d126/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/79bc6077b4bce2e06e9adeda7dc3d126/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/8835400/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "234625842",
        "title": "I Believed It (feat. Mac Miller)",
        "cover": "https://api.deezer.com/album/234625842/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b1205d6f97b3156cc205f9bfb0780a28/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b1205d6f97b3156cc205f9bfb0780a28/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b1205d6f97b3156cc205f9bfb0780a28/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b1205d6f97b3156cc205f9bfb0780a28/1000x1000-000000-80-0-0.jpg",
        "md5_image": "b1205d6f97b3156cc205f9bfb0780a28",
        "tracklist": "https://api.deezer.com/album/234625842/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1276494302",
      "readable": true,
      "title": "No Plans for Love (with Ne-Yo & Kent Jones)",
      "title_short": "No Plans for Love (with Ne-Yo & Kent Jones)",
      "title_version": "",
      "link": "https://www.deezer.com/track/1276494302",
      "duration": "204",
      "rank": "541098",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 6,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-7.dzcdn.net/stream/c-7a8d15247a4c98b80bfc01ff791715ab-3.mp3",
      "md5_image": "eb180cb997b09bb5f9ec81a98858246f",
      "artist": {
        "id": "2358",
        "name": "D-Nice",
        "link": "https://www.deezer.com/artist/2358",
        "picture": "https://api.deezer.com/artist/2358/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/b66c2005ac859a1ba878336681cee41a/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/b66c2005ac859a1ba878336681cee41a/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/b66c2005ac859a1ba878336681cee41a/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/b66c2005ac859a1ba878336681cee41a/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/2358/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "215016642",
        "title": "No Plans for Love (with Ne-Yo & Kent Jones)",
        "cover": "https://api.deezer.com/album/215016642/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/eb180cb997b09bb5f9ec81a98858246f/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/eb180cb997b09bb5f9ec81a98858246f/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/eb180cb997b09bb5f9ec81a98858246f/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/eb180cb997b09bb5f9ec81a98858246f/1000x1000-000000-80-0-0.jpg",
        "md5_image": "eb180cb997b09bb5f9ec81a98858246f",
        "tracklist": "https://api.deezer.com/album/215016642/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "862847042",
      "readable": true,
      "title": "Know Your Worth",
      "title_short": "Know Your Worth",
      "title_version": "",
      "link": "https://www.deezer.com/track/862847042",
      "duration": "181",
      "rank": "771794",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-e.dzcdn.net/stream/c-ed2573aabf067da82f640fa7f67b444e-5.mp3",
      "md5_image": "34cb1dcadca75c2d57a4a2bcb2d9f0fd",
      "artist": {
        "id": "362326",
        "name": "Khalid",
        "link": "https://www.deezer.com/artist/362326",
        "picture": "https://api.deezer.com/artist/362326/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/0a583310e16929d26a6123a57f46786d/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/0a583310e16929d26a6123a57f46786d/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/0a583310e16929d26a6123a57f46786d/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/0a583310e16929d26a6123a57f46786d/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/362326/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "129053642",
        "title": "Know Your Worth",
        "cover": "https://api.deezer.com/album/129053642/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/34cb1dcadca75c2d57a4a2bcb2d9f0fd/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/34cb1dcadca75c2d57a4a2bcb2d9f0fd/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/34cb1dcadca75c2d57a4a2bcb2d9f0fd/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/34cb1dcadca75c2d57a4a2bcb2d9f0fd/1000x1000-000000-80-0-0.jpg",
        "md5_image": "34cb1dcadca75c2d57a4a2bcb2d9f0fd",
        "tracklist": "https://api.deezer.com/album/129053642/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1303233332",
      "readable": true,
      "title": "Otra Noche Sin Ti",
      "title_short": "Otra Noche Sin Ti",
      "title_version": "",
      "link": "https://www.deezer.com/track/1303233332",
      "duration": "228",
      "rank": "789310",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-4.dzcdn.net/stream/c-4ed2db81c90460e05794e804d62b6c1e-4.mp3",
      "md5_image": "27cbb0ccda458676f3877415074a72c4",
      "artist": {
        "id": "4860761",
        "name": "J Balvin",
        "link": "https://www.deezer.com/artist/4860761",
        "picture": "https://api.deezer.com/artist/4860761/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/330420f615ec0c189bf9c729316f1558/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/330420f615ec0c189bf9c729316f1558/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/330420f615ec0c189bf9c729316f1558/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/330420f615ec0c189bf9c729316f1558/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/4860761/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "219568402",
        "title": "Otra Noche Sin Ti",
        "cover": "https://api.deezer.com/album/219568402/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/27cbb0ccda458676f3877415074a72c4/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/27cbb0ccda458676f3877415074a72c4/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/27cbb0ccda458676f3877415074a72c4/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/27cbb0ccda458676f3877415074a72c4/1000x1000-000000-80-0-0.jpg",
        "md5_image": "27cbb0ccda458676f3877415074a72c4",
        "tracklist": "https://api.deezer.com/album/219568402/tracks",
        "type": "album"
      },
      "type": "track"
    }
  ]
}
  
  

    return (
        <Container fluid>
            <Row>
            </Row>
            <SearchBar />
            <Row>
                <Col>
                    <PlaylistDetails playlist={dummy_data} key={dummy_data.id}/>
                </Col>
            </Row>
            <Row>
                <PlaylistTracks tracks={data.data}/>
            </Row>
        </Container>
    )
}

export default PlaylistPage;