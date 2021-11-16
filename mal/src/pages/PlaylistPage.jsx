import SearchBar from "../components/Searchbar";
import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import AlbumDetail from "../components/Album/AlbumDetail";
import AlbumTracks from "../components/Track/AlbumTracks";

function PlaylistPage() {

  const { albumId } = useParams();

  useEffect(() => {
    async function getAlbumDetail() {
      try{
        const fetchRecipes = await fetch(`https://api.deezer.com/radio/top`)
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
         
  ]
}
  }

  const data={
   
  "data": [
    {
      "id": "1376060592",
      "readable": true,
      "title": "Right Here (Alok Remix)",
      "title_short": "Right Here",
      "title_version": "(Alok Remix)",
      "link": "https://www.deezer.com/track/1376060592",
      "duration": "155",
      "rank": "792479",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-6.dzcdn.net/stream/c-6086bf69ea496261aed6a84628dbc406-3.mp3",
      "md5_image": "1b808946481c22c550f5a5eddff3ca6e",
      "artist": {
        "id": "4331004",
        "name": "Zara Larsson",
        "link": "https://www.deezer.com/artist/4331004",
        "picture": "https://api.deezer.com/artist/4331004/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/ba6f651e38a361a823f63a360eac4f02/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/ba6f651e38a361a823f63a360eac4f02/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/ba6f651e38a361a823f63a360eac4f02/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/ba6f651e38a361a823f63a360eac4f02/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/4331004/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "231022032",
        "title": "Poster Girl (Summer Edition)",
        "cover": "https://api.deezer.com/album/231022032/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/1b808946481c22c550f5a5eddff3ca6e/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/1b808946481c22c550f5a5eddff3ca6e/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/1b808946481c22c550f5a5eddff3ca6e/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/1b808946481c22c550f5a5eddff3ca6e/1000x1000-000000-80-0-0.jpg",
        "md5_image": "1b808946481c22c550f5a5eddff3ca6e",
        "tracklist": "https://api.deezer.com/album/231022032/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1400169412",
      "readable": true,
      "title": "Solar Power",
      "title_short": "Solar Power",
      "title_version": "",
      "link": "https://www.deezer.com/track/1400169412",
      "duration": "192",
      "rank": "780657",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1e5d301df150f56ce9e2e36827d295ed-4.mp3",
      "md5_image": "b0c86b4720b7ccf37750d466e18b981e",
      "artist": {
        "id": "4448485",
        "name": "Lorde",
        "link": "https://www.deezer.com/artist/4448485",
        "picture": "https://api.deezer.com/artist/4448485/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/87bfb468a0446c260029547fb0627e38/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/87bfb468a0446c260029547fb0627e38/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/87bfb468a0446c260029547fb0627e38/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/87bfb468a0446c260029547fb0627e38/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/4448485/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "236415462",
        "title": "Solar Power",
        "cover": "https://api.deezer.com/album/236415462/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b0c86b4720b7ccf37750d466e18b981e/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b0c86b4720b7ccf37750d466e18b981e/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b0c86b4720b7ccf37750d466e18b981e/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b0c86b4720b7ccf37750d466e18b981e/1000x1000-000000-80-0-0.jpg",
        "md5_image": "b0c86b4720b7ccf37750d466e18b981e",
        "tracklist": "https://api.deezer.com/album/236415462/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1264567492",
      "readable": false,
      "title": "Beautiful Mistakes",
      "title_short": "Beautiful Mistakes",
      "title_version": "",
      "link": "https://www.deezer.com/track/1264567492",
      "duration": "227",
      "rank": "318967",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b263c54ad7803f908411d0f3a6bf4448-6.mp3",
      "md5_image": "2142a4ef30938af73401a8e7f471b6c8",
      "artist": {
        "id": "1188",
        "name": "Maroon 5",
        "link": "https://www.deezer.com/artist/1188",
        "picture": "https://api.deezer.com/artist/1188/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/87b78013cc705abb6afb7b83a2276e1f/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/87b78013cc705abb6afb7b83a2276e1f/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/87b78013cc705abb6afb7b83a2276e1f/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/87b78013cc705abb6afb7b83a2276e1f/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/1188/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "212313332",
        "title": "Beautiful Mistakes",
        "cover": "https://api.deezer.com/album/212313332/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/2142a4ef30938af73401a8e7f471b6c8/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/2142a4ef30938af73401a8e7f471b6c8/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/2142a4ef30938af73401a8e7f471b6c8/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/2142a4ef30938af73401a8e7f471b6c8/1000x1000-000000-80-0-0.jpg",
        "md5_image": "2142a4ef30938af73401a8e7f471b6c8",
        "tracklist": "https://api.deezer.com/album/212313332/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1124841712",
      "readable": true,
      "title": "Love Again",
      "title_short": "Love Again",
      "title_version": "",
      "link": "https://www.deezer.com/track/1124841712",
      "duration": "258",
      "rank": "974680",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-e.dzcdn.net/stream/c-e5959c1271ddc34c1ef5efe1bc7b0c9c-8.mp3",
      "md5_image": "d0f8d853e871838a4a6d8e5b7cdd1432",
      "artist": {
        "id": "8706544",
        "name": "Dua Lipa",
        "link": "https://www.deezer.com/artist/8706544",
        "picture": "https://api.deezer.com/artist/8706544/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/8706544/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "182811182",
        "title": "Future Nostalgia",
        "cover": "https://api.deezer.com/album/182811182/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/d0f8d853e871838a4a6d8e5b7cdd1432/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/d0f8d853e871838a4a6d8e5b7cdd1432/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/d0f8d853e871838a4a6d8e5b7cdd1432/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/d0f8d853e871838a4a6d8e5b7cdd1432/1000x1000-000000-80-0-0.jpg",
        "md5_image": "d0f8d853e871838a4a6d8e5b7cdd1432",
        "tracklist": "https://api.deezer.com/album/182811182/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1449727522",
      "readable": true,
      "title": "Happier Than Ever",
      "title_short": "Happier Than Ever",
      "title_version": "",
      "link": "https://www.deezer.com/track/1449727522",
      "duration": "298",
      "rank": "716904",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 3,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-c.dzcdn.net/stream/c-c95d882d601b0ced6b263d788d5e80fe-6.mp3",
      "md5_image": "9955047483278bd0f93420951226ac44",
      "artist": {
        "id": "9635624",
        "name": "Billie Eilish",
        "link": "https://www.deezer.com/artist/9635624",
        "picture": "https://api.deezer.com/artist/9635624/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/9635624/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "248214242",
        "title": "Happier Than Ever",
        "cover": "https://api.deezer.com/album/248214242/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/9955047483278bd0f93420951226ac44/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/9955047483278bd0f93420951226ac44/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/9955047483278bd0f93420951226ac44/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/9955047483278bd0f93420951226ac44/1000x1000-000000-80-0-0.jpg",
        "md5_image": "9955047483278bd0f93420951226ac44",
        "tracklist": "https://api.deezer.com/album/248214242/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1361110392",
      "readable": true,
      "title": "Get Together",
      "title_short": "Get Together",
      "title_version": "",
      "link": "https://www.deezer.com/track/1361110392",
      "duration": "162",
      "rank": "689541",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-f.dzcdn.net/stream/c-f198c0bdce7b58fb4c4ba5df2d07dc67-3.mp3",
      "md5_image": "e03caa9a6ca8f6b7d61644df8aa80bae",
      "artist": {
        "id": "542",
        "name": "David Guetta",
        "link": "https://www.deezer.com/artist/542",
        "picture": "https://api.deezer.com/artist/542/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/e21bc6e42211c589982c2d7994cd53f4/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/e21bc6e42211c589982c2d7994cd53f4/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/e21bc6e42211c589982c2d7994cd53f4/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/e21bc6e42211c589982c2d7994cd53f4/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/542/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "227232022",
        "title": "Get Together",
        "cover": "https://api.deezer.com/album/227232022/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/e03caa9a6ca8f6b7d61644df8aa80bae/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/e03caa9a6ca8f6b7d61644df8aa80bae/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/e03caa9a6ca8f6b7d61644df8aa80bae/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/e03caa9a6ca8f6b7d61644df8aa80bae/1000x1000-000000-80-0-0.jpg",
        "md5_image": "e03caa9a6ca8f6b7d61644df8aa80bae",
        "tracklist": "https://api.deezer.com/album/227232022/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1529509482",
      "readable": true,
      "title": "Overpass Graffiti",
      "title_short": "Overpass Graffiti",
      "title_version": "",
      "link": "https://www.deezer.com/track/1529509482",
      "duration": "236",
      "rank": "993843",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b3c0e379974d5b4ad3e7c755d80352cd-3.mp3",
      "md5_image": "82f1bc61739e54407f05674256747ae4",
      "artist": {
        "id": "384236",
        "name": "Ed Sheeran",
        "link": "https://www.deezer.com/artist/384236",
        "picture": "https://api.deezer.com/artist/384236/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/384236/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "267392512",
        "title": "=",
        "cover": "https://api.deezer.com/album/267392512/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/82f1bc61739e54407f05674256747ae4/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/82f1bc61739e54407f05674256747ae4/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/82f1bc61739e54407f05674256747ae4/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/82f1bc61739e54407f05674256747ae4/1000x1000-000000-80-0-0.jpg",
        "md5_image": "82f1bc61739e54407f05674256747ae4",
        "tracklist": "https://api.deezer.com/album/267392512/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1518077862",
      "readable": true,
      "title": "Let Somebody Go",
      "title_short": "Let Somebody Go",
      "title_version": "",
      "link": "https://www.deezer.com/track/1518077862",
      "duration": "241",
      "rank": "931124",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-f.dzcdn.net/stream/c-f258b3cfa3ccef24f830c0c65511878a-3.mp3",
      "md5_image": "1abb9a47ab25986493537b08f00c57d3",
      "artist": {
        "id": "892",
        "name": "Coldplay",
        "link": "https://www.deezer.com/artist/892",
        "picture": "https://api.deezer.com/artist/892/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/892/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "264785262",
        "title": "Music Of The Spheres",
        "cover": "https://api.deezer.com/album/264785262/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/1abb9a47ab25986493537b08f00c57d3/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/1abb9a47ab25986493537b08f00c57d3/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/1abb9a47ab25986493537b08f00c57d3/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/1abb9a47ab25986493537b08f00c57d3/1000x1000-000000-80-0-0.jpg",
        "md5_image": "1abb9a47ab25986493537b08f00c57d3",
        "tracklist": "https://api.deezer.com/album/264785262/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1522223672",
      "readable": true,
      "title": "Easy On Me",
      "title_short": "Easy On Me",
      "title_version": "",
      "link": "https://www.deezer.com/track/1522223672",
      "duration": "224",
      "rank": "1000000",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8b175d5fccd6b1c54973c9307f572010-3.mp3",
      "md5_image": "a87ee7c212c7b0f9ae687c378f260324",
      "artist": {
        "id": "75798",
        "name": "Adele",
        "link": "https://www.deezer.com/artist/75798",
        "picture": "https://api.deezer.com/artist/75798/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/75798/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "265655342",
        "title": "Easy On Me",
        "cover": "https://api.deezer.com/album/265655342/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/1000x1000-000000-80-0-0.jpg",
        "md5_image": "a87ee7c212c7b0f9ae687c378f260324",
        "tracklist": "https://api.deezer.com/album/265655342/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1260522302",
      "readable": true,
      "title": "Leave The Door Open",
      "title_short": "Leave The Door Open",
      "title_version": "",
      "link": "https://www.deezer.com/track/1260522302",
      "duration": "242",
      "rank": "995120",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-9.dzcdn.net/stream/c-967c980e9a1f3ef484f46447050e131b-3.mp3",
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
        "id": "211423112",
        "title": "Leave The Door Open",
        "cover": "https://api.deezer.com/album/211423112/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/faada8a8c545b2e3d454267b55c82e14/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/faada8a8c545b2e3d454267b55c82e14/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/faada8a8c545b2e3d454267b55c82e14/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/faada8a8c545b2e3d454267b55c82e14/1000x1000-000000-80-0-0.jpg",
        "md5_image": "faada8a8c545b2e3d454267b55c82e14",
        "tracklist": "https://api.deezer.com/album/211423112/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1302137012",
      "readable": false,
      "title": "deja vu",
      "title_short": "deja vu",
      "title_version": "",
      "link": "https://www.deezer.com/track/1302137012",
      "duration": "215",
      "rank": "242856",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-0.dzcdn.net/stream/c-0cd46d08832a6aa69384de0e0de12f98-4.mp3",
      "md5_image": "ef2c7017d2e75f81a2d04140b32062ba",
      "artist": {
        "id": "11152580",
        "name": "Olivia Rodrigo",
        "link": "https://www.deezer.com/artist/11152580",
        "picture": "https://api.deezer.com/artist/11152580/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/11152580/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "219470062",
        "title": "deja vu",
        "cover": "https://api.deezer.com/album/219470062/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/ef2c7017d2e75f81a2d04140b32062ba/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/ef2c7017d2e75f81a2d04140b32062ba/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/ef2c7017d2e75f81a2d04140b32062ba/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/ef2c7017d2e75f81a2d04140b32062ba/1000x1000-000000-80-0-0.jpg",
        "md5_image": "ef2c7017d2e75f81a2d04140b32062ba",
        "tracklist": "https://api.deezer.com/album/219470062/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1368665692",
      "readable": true,
      "title": "Electric (Pokemon 25 Version)",
      "title_short": "Electric",
      "title_version": "(Pokemon 25 Version)",
      "link": "https://www.deezer.com/track/1368665692",
      "duration": "193",
      "rank": "766219",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-e.dzcdn.net/stream/c-ef44f1833d102ef9b8af53dbe5db090e-4.mp3",
      "md5_image": "38bb0a2c4203076cb50fcc0298b109f9",
      "artist": {
        "id": "144227",
        "name": "Katy Perry",
        "link": "https://www.deezer.com/artist/144227",
        "picture": "https://api.deezer.com/artist/144227/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f8a978f52348bf28c8cc5be1b8ad496b/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f8a978f52348bf28c8cc5be1b8ad496b/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f8a978f52348bf28c8cc5be1b8ad496b/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f8a978f52348bf28c8cc5be1b8ad496b/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/144227/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "229185392",
        "title": "Electric",
        "cover": "https://api.deezer.com/album/229185392/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/38bb0a2c4203076cb50fcc0298b109f9/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/38bb0a2c4203076cb50fcc0298b109f9/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/38bb0a2c4203076cb50fcc0298b109f9/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/38bb0a2c4203076cb50fcc0298b109f9/1000x1000-000000-80-0-0.jpg",
        "md5_image": "38bb0a2c4203076cb50fcc0298b109f9",
        "tracklist": "https://api.deezer.com/album/229185392/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1399983012",
      "readable": true,
      "title": "I Want Love",
      "title_short": "I Want Love",
      "title_version": "",
      "link": "https://www.deezer.com/track/1399983012",
      "duration": "197",
      "rank": "728121",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-8.dzcdn.net/stream/c-84ddbb381abee832699eed6cb4e52303-10.mp3",
      "md5_image": "c0290f11bddbeddc4a341666c8f1a7da",
      "artist": {
        "id": "985109",
        "name": "Jessie J",
        "link": "https://www.deezer.com/artist/985109",
        "picture": "https://api.deezer.com/artist/985109/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/e120d9dd49e600d24a117d252c873f0d/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/e120d9dd49e600d24a117d252c873f0d/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/e120d9dd49e600d24a117d252c873f0d/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/e120d9dd49e600d24a117d252c873f0d/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/985109/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "236371222",
        "title": "I Want Love",
        "cover": "https://api.deezer.com/album/236371222/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/c0290f11bddbeddc4a341666c8f1a7da/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/c0290f11bddbeddc4a341666c8f1a7da/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/c0290f11bddbeddc4a341666c8f1a7da/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/c0290f11bddbeddc4a341666c8f1a7da/1000x1000-000000-80-0-0.jpg",
        "md5_image": "c0290f11bddbeddc4a341666c8f1a7da",
        "tracklist": "https://api.deezer.com/album/236371222/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1347589142",
      "readable": true,
      "title": "Break My Heart Myself (feat. Travis Barker)",
      "title_short": "Break My Heart Myself (feat. Travis Barker)",
      "title_version": "",
      "link": "https://www.deezer.com/track/1347589142",
      "duration": "151",
      "rank": "707973",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1ff008b749913cf34b1164543f60dbd0-3.mp3",
      "md5_image": "d18a8d8e983bf6ad4c62f31e9a3a99f6",
      "artist": {
        "id": "4492087",
        "name": "Bebe Rexha",
        "link": "https://www.deezer.com/artist/4492087",
        "picture": "https://api.deezer.com/artist/4492087/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/c562b7e0b940d4f8ad430f14f4a484a3/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/c562b7e0b940d4f8ad430f14f4a484a3/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/c562b7e0b940d4f8ad430f14f4a484a3/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/c562b7e0b940d4f8ad430f14f4a484a3/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/4492087/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "223923492",
        "title": "Better Mistakes",
        "cover": "https://api.deezer.com/album/223923492/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/d18a8d8e983bf6ad4c62f31e9a3a99f6/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/d18a8d8e983bf6ad4c62f31e9a3a99f6/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/d18a8d8e983bf6ad4c62f31e9a3a99f6/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/d18a8d8e983bf6ad4c62f31e9a3a99f6/1000x1000-000000-80-0-0.jpg",
        "md5_image": "d18a8d8e983bf6ad4c62f31e9a3a99f6",
        "tracklist": "https://api.deezer.com/album/223923492/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1470349542",
      "readable": true,
      "title": "Summer Of Love",
      "title_short": "Summer Of Love",
      "title_version": "",
      "link": "https://www.deezer.com/track/1470349542",
      "duration": "184",
      "rank": "968862",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-b.dzcdn.net/stream/c-ba61182141536f7421c5d768075de1e9-4.mp3",
      "md5_image": "064600c898c03d52835315f7984e0a0d",
      "artist": {
        "id": "5962948",
        "name": "Shawn Mendes",
        "link": "https://www.deezer.com/artist/5962948",
        "picture": "https://api.deezer.com/artist/5962948/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/9106de4de092ecb05ec8862d3415337d/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/9106de4de092ecb05ec8862d3415337d/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/9106de4de092ecb05ec8862d3415337d/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/9106de4de092ecb05ec8862d3415337d/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/5962948/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "253100112",
        "title": "Summer Of Love",
        "cover": "https://api.deezer.com/album/253100112/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/064600c898c03d52835315f7984e0a0d/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/064600c898c03d52835315f7984e0a0d/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/064600c898c03d52835315f7984e0a0d/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/064600c898c03d52835315f7984e0a0d/1000x1000-000000-80-0-0.jpg",
        "md5_image": "064600c898c03d52835315f7984e0a0d",
        "tracklist": "https://api.deezer.com/album/253100112/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1484103082",
      "readable": true,
      "title": "Una Nota",
      "title_short": "Una Nota",
      "title_version": "",
      "link": "https://www.deezer.com/track/1484103082",
      "duration": "170",
      "rank": "865169",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-c.dzcdn.net/stream/c-c5332f19b9536c7c0f88cbf612a72d85-4.mp3",
      "md5_image": "47f2a0c032c6eb5bbaed7fe833424e1c",
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
        "id": "256304072",
        "title": "JOSE",
        "cover": "https://api.deezer.com/album/256304072/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/47f2a0c032c6eb5bbaed7fe833424e1c/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/47f2a0c032c6eb5bbaed7fe833424e1c/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/47f2a0c032c6eb5bbaed7fe833424e1c/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/47f2a0c032c6eb5bbaed7fe833424e1c/1000x1000-000000-80-0-0.jpg",
        "md5_image": "47f2a0c032c6eb5bbaed7fe833424e1c",
        "tracklist": "https://api.deezer.com/album/256304072/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1375067352",
      "readable": true,
      "title": "Butter",
      "title_short": "Butter",
      "title_version": "",
      "link": "https://www.deezer.com/track/1375067352",
      "duration": "164",
      "rank": "968755",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-3.dzcdn.net/stream/c-305df5cd81ffc730a3688dd8a6b00303-3.mp3",
      "md5_image": "0cc1c0ada6f9aab8128e7d8a7d61aec2",
      "artist": {
        "id": "6982223",
        "name": "BTS",
        "link": "https://www.deezer.com/artist/6982223",
        "picture": "https://api.deezer.com/artist/6982223/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/6982223/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "230795192",
        "title": "Butter",
        "cover": "https://api.deezer.com/album/230795192/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/0cc1c0ada6f9aab8128e7d8a7d61aec2/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/0cc1c0ada6f9aab8128e7d8a7d61aec2/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/0cc1c0ada6f9aab8128e7d8a7d61aec2/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/0cc1c0ada6f9aab8128e7d8a7d61aec2/1000x1000-000000-80-0-0.jpg",
        "md5_image": "0cc1c0ada6f9aab8128e7d8a7d61aec2",
        "tracklist": "https://api.deezer.com/album/230795192/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1409072752",
      "readable": true,
      "title": "Bad Habits",
      "title_short": "Bad Habits",
      "title_version": "",
      "link": "https://www.deezer.com/track/1409072752",
      "duration": "230",
      "rank": "998193",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-e.dzcdn.net/stream/c-e418ea9b43553bdaddc74fcad6649ec3-3.mp3",
      "md5_image": "63af28b4e046c59293eaf313be13f8f7",
      "artist": {
        "id": "384236",
        "name": "Ed Sheeran",
        "link": "https://www.deezer.com/artist/384236",
        "picture": "https://api.deezer.com/artist/384236/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/384236/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "238407992",
        "title": "Bad Habits",
        "cover": "https://api.deezer.com/album/238407992/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/63af28b4e046c59293eaf313be13f8f7/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/63af28b4e046c59293eaf313be13f8f7/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/63af28b4e046c59293eaf313be13f8f7/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/63af28b4e046c59293eaf313be13f8f7/1000x1000-000000-80-0-0.jpg",
        "md5_image": "63af28b4e046c59293eaf313be13f8f7",
        "tracklist": "https://api.deezer.com/album/238407992/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1410738172",
      "readable": true,
      "title": "Kiss Me More (feat. SZA)",
      "title_short": "Kiss Me More (feat. SZA)",
      "title_version": "",
      "link": "https://www.deezer.com/track/1410738172",
      "duration": "208",
      "rank": "857806",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-4.dzcdn.net/stream/c-4ef56239024990cece3882aad46c54b0-3.mp3",
      "md5_image": "1e012b5bba83edac911b09ca1ab29e1e",
      "artist": {
        "id": "5578942",
        "name": "Doja Cat",
        "link": "https://www.deezer.com/artist/5578942",
        "picture": "https://api.deezer.com/artist/5578942/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/5578942/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "238876612",
        "title": "Planet Her",
        "cover": "https://api.deezer.com/album/238876612/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/1e012b5bba83edac911b09ca1ab29e1e/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/1e012b5bba83edac911b09ca1ab29e1e/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/1e012b5bba83edac911b09ca1ab29e1e/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/1e012b5bba83edac911b09ca1ab29e1e/1000x1000-000000-80-0-0.jpg",
        "md5_image": "1e012b5bba83edac911b09ca1ab29e1e",
        "tracklist": "https://api.deezer.com/album/238876612/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1457025872",
      "readable": true,
      "title": "Cold Heart (PNAU Remix)",
      "title_short": "Cold Heart",
      "title_version": "(PNAU Remix)",
      "link": "https://www.deezer.com/track/1457025872",
      "duration": "202",
      "rank": "971038",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-2.dzcdn.net/stream/c-25db2884830acedda712cb498dd59a86-4.mp3",
      "md5_image": "dd4e748c3b0ae1a553832908fee96c15",
      "artist": {
        "id": "413",
        "name": "Elton John",
        "link": "https://www.deezer.com/artist/413",
        "picture": "https://api.deezer.com/artist/413/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/b0fe7bfd530a33ada202a6d7c2d77d3e/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/b0fe7bfd530a33ada202a6d7c2d77d3e/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/b0fe7bfd530a33ada202a6d7c2d77d3e/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/b0fe7bfd530a33ada202a6d7c2d77d3e/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/413/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "249925992",
        "title": "Cold Heart (PNAU Remix)",
        "cover": "https://api.deezer.com/album/249925992/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/dd4e748c3b0ae1a553832908fee96c15/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/dd4e748c3b0ae1a553832908fee96c15/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/dd4e748c3b0ae1a553832908fee96c15/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/dd4e748c3b0ae1a553832908fee96c15/1000x1000-000000-80-0-0.jpg",
        "md5_image": "dd4e748c3b0ae1a553832908fee96c15",
        "tracklist": "https://api.deezer.com/album/249925992/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1194052302",
      "readable": false,
      "title": "drivers license",
      "title_short": "drivers license",
      "title_version": "",
      "link": "https://www.deezer.com/track/1194052302",
      "duration": "242",
      "rank": "335897",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 1,
      "preview": "https://cdns-preview-b.dzcdn.net/stream/c-b801b0c9e24d1dde1a9f404e61d4d813-12.mp3",
      "md5_image": "685f01e690ee802ad74ef64608d9b3d5",
      "artist": {
        "id": "11152580",
        "name": "Olivia Rodrigo",
        "link": "https://www.deezer.com/artist/11152580",
        "picture": "https://api.deezer.com/artist/11152580/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/11152580/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "196857302",
        "title": "drivers license",
        "cover": "https://api.deezer.com/album/196857302/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/685f01e690ee802ad74ef64608d9b3d5/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/685f01e690ee802ad74ef64608d9b3d5/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/685f01e690ee802ad74ef64608d9b3d5/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/685f01e690ee802ad74ef64608d9b3d5/1000x1000-000000-80-0-0.jpg",
        "md5_image": "685f01e690ee802ad74ef64608d9b3d5",
        "tracklist": "https://api.deezer.com/album/196857302/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1439691952",
      "readable": true,
      "title": "INDUSTRY BABY",
      "title_short": "INDUSTRY BABY",
      "title_version": "",
      "link": "https://www.deezer.com/track/1439691952",
      "duration": "212",
      "rank": "997645",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-9.dzcdn.net/stream/c-99f593e355757003328afde5fac2bdbe-3.mp3",
      "md5_image": "a65e86966cfd34b2aa292856136ef9ac",
      "artist": {
        "id": "15166511",
        "name": "Lil Nas X",
        "link": "https://www.deezer.com/artist/15166511",
        "picture": "https://api.deezer.com/artist/15166511/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/15166511/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "245878832",
        "title": "INDUSTRY BABY",
        "cover": "https://api.deezer.com/album/245878832/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/a65e86966cfd34b2aa292856136ef9ac/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/a65e86966cfd34b2aa292856136ef9ac/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/a65e86966cfd34b2aa292856136ef9ac/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/a65e86966cfd34b2aa292856136ef9ac/1000x1000-000000-80-0-0.jpg",
        "md5_image": "a65e86966cfd34b2aa292856136ef9ac",
        "tracklist": "https://api.deezer.com/album/245878832/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1265280922",
      "readable": true,
      "title": "Hold On",
      "title_short": "Hold On",
      "title_version": "",
      "link": "https://www.deezer.com/track/1265280922",
      "duration": "170",
      "rank": "864151",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-a.dzcdn.net/stream/c-a9727e44cdf4410a25ab5df7e3a893e4-10.mp3",
      "md5_image": "d41b74715e354e84afc098d4850664ad",
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
        "id": "212470822",
        "title": "Hold On",
        "cover": "https://api.deezer.com/album/212470822/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/d41b74715e354e84afc098d4850664ad/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/d41b74715e354e84afc098d4850664ad/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/d41b74715e354e84afc098d4850664ad/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/d41b74715e354e84afc098d4850664ad/1000x1000-000000-80-0-0.jpg",
        "md5_image": "d41b74715e354e84afc098d4850664ad",
        "tracklist": "https://api.deezer.com/album/212470822/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "1410738112",
      "readable": true,
      "title": "You Right",
      "title_short": "You Right",
      "title_version": "",
      "link": "https://www.deezer.com/track/1410738112",
      "duration": "186",
      "rank": "953005",
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 2,
      "preview": "https://cdns-preview-e.dzcdn.net/stream/c-e71f1e96bd61a7a1b0dccba4fb71e402-3.mp3",
      "md5_image": "1e012b5bba83edac911b09ca1ab29e1e",
      "artist": {
        "id": "5578942",
        "name": "Doja Cat",
        "link": "https://www.deezer.com/artist/5578942",
        "picture": "https://api.deezer.com/artist/5578942/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/5578942/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "238876612",
        "title": "Planet Her",
        "cover": "https://api.deezer.com/album/238876612/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/1e012b5bba83edac911b09ca1ab29e1e/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/1e012b5bba83edac911b09ca1ab29e1e/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/1e012b5bba83edac911b09ca1ab29e1e/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/1e012b5bba83edac911b09ca1ab29e1e/1000x1000-000000-80-0-0.jpg",
        "md5_image": "1e012b5bba83edac911b09ca1ab29e1e",
        "tracklist": "https://api.deezer.com/album/238876612/tracks",
        "type": "album"
      },
      "type": "track"
    },
    {
      "id": "968255852",
      "readable": false,
      "title": "Rain On Me",
      "title_short": "Rain On Me",
      "title_version": "",
      "link": "https://www.deezer.com/track/968255852",
      "duration": "182",
      "rank": "632054",
      "explicit_lyrics": false,
      "explicit_content_lyrics": 0,
      "explicit_content_cover": 0,
      "preview": "https://cdns-preview-a.dzcdn.net/stream/c-a23cd42b4fb21af5050e454953766e52-4.mp3",
      "md5_image": "a27404530a2bdda5f0c8576af65c7b74",
      "artist": {
        "id": "75491",
        "name": "Lady Gaga",
        "link": "https://www.deezer.com/artist/75491",
        "picture": "https://api.deezer.com/artist/75491/image",
        "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/de53e52fddf43850e6eff3d9f292d6c8/56x56-000000-80-0-0.jpg",
        "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/de53e52fddf43850e6eff3d9f292d6c8/250x250-000000-80-0-0.jpg",
        "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/de53e52fddf43850e6eff3d9f292d6c8/500x500-000000-80-0-0.jpg",
        "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/de53e52fddf43850e6eff3d9f292d6c8/1000x1000-000000-80-0-0.jpg",
        "tracklist": "https://api.deezer.com/artist/75491/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": "149867702",
        "title": "Rain On Me",
        "cover": "https://api.deezer.com/album/149867702/image",
        "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/a27404530a2bdda5f0c8576af65c7b74/56x56-000000-80-0-0.jpg",
        "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/a27404530a2bdda5f0c8576af65c7b74/250x250-000000-80-0-0.jpg",
        "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/a27404530a2bdda5f0c8576af65c7b74/500x500-000000-80-0-0.jpg",
        "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/a27404530a2bdda5f0c8576af65c7b74/1000x1000-000000-80-0-0.jpg",
        "md5_image": "a27404530a2bdda5f0c8576af65c7b74",
        "tracklist": "https://api.deezer.com/album/149867702/tracks",
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
                    <AlbumDetail album={dummy_data} key={dummy_data.id}/>
                </Col>
            </Row>
            <Row>
                <AlbumTracks tracks={data.data}/>
            </Row>
        </Container>
    )
}

export default PlaylistPage;