import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import GenreArtists from "../components/Artist/GenreArtists";

function GenreArtistsPage() {

    const { genreId, genreName } = useParams();

    useEffect(() => {
        async function getGenreArtists() {
          try{
            const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
            const recipes = await fetchRecipes.json();
            console.log(recipes.results);       
          } catch(error){
              console.log('getGenreArtists', error);
          }
        }
        getGenreArtists();
    }, [])    

    const dummy_data={
        "data": [
          {
            "id": "6982223",
            "name": "BTS",
            "picture": "https://api.deezer.com/artist/6982223/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/f7cbf03e5b0963a68f51c68f20c919cb/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/6982223/top?limit=50",
            "type": "artist"
          },
          {
            "id": "288166",
            "name": "Justin Bieber",
            "picture": "https://api.deezer.com/artist/288166/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/22dd86b628a03d8dad3c7dfb33320a91/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/288166/top?limit=50",
            "type": "artist"
          },
          {
            "id": "1562681",
            "name": "Ariana Grande",
            "picture": "https://api.deezer.com/artist/1562681/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/3b99aa38bc4f58b05d6671c918eeb03e/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1562681/top?limit=50",
            "type": "artist"
          },
          {
            "id": "9635624",
            "name": "Billie Eilish",
            "picture": "https://api.deezer.com/artist/9635624/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/8b6e535e08ad7c5cb312102a5ede6c1e/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/9635624/top?limit=50",
            "type": "artist"
          },
          {
            "id": "11152580",
            "name": "Olivia Rodrigo",
            "picture": "https://api.deezer.com/artist/11152580/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/11152580/top?limit=50",
            "type": "artist"
          },
          {
            "id": "892",
            "name": "Coldplay",
            "picture": "https://api.deezer.com/artist/892/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/892/top?limit=50",
            "type": "artist"
          },
          {
            "id": "51204222",
            "name": "The Kid Laroi",
            "picture": "https://api.deezer.com/artist/51204222/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/16a31a932ff763f936853e4592b2f5f7/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/16a31a932ff763f936853e4592b2f5f7/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/16a31a932ff763f936853e4592b2f5f7/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/16a31a932ff763f936853e4592b2f5f7/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/51204222/top?limit=50",
            "type": "artist"
          },
          {
            "id": "230",
            "name": "Kanye West",
            "picture": "https://api.deezer.com/artist/230/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/bb76c2ee3b068726ab4c37b0aabdb57a/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/230/top?limit=50",
            "type": "artist"
          },
          {
            "id": "429675",
            "name": "Bruno Mars",
            "picture": "https://api.deezer.com/artist/429675/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/429675/top?limit=50",
            "type": "artist"
          },
          {
            "id": "384236",
            "name": "Ed Sheeran",
            "picture": "https://api.deezer.com/artist/384236/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/384236/top?limit=50",
            "type": "artist"
          },
          {
            "id": "1188",
            "name": "Maroon 5",
            "picture": "https://api.deezer.com/artist/1188/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/87b78013cc705abb6afb7b83a2276e1f/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/87b78013cc705abb6afb7b83a2276e1f/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/87b78013cc705abb6afb7b83a2276e1f/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/87b78013cc705abb6afb7b83a2276e1f/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1188/top?limit=50",
            "type": "artist"
          },
          {
            "id": "4050205",
            "name": "The Weeknd",
            "picture": "https://api.deezer.com/artist/4050205/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/bd3f01a27e692074ed40bf8755b06afe/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/bd3f01a27e692074ed40bf8755b06afe/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/bd3f01a27e692074ed40bf8755b06afe/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/bd3f01a27e692074ed40bf8755b06afe/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/4050205/top?limit=50",
            "type": "artist"
          },
          {
            "id": "173714",
            "name": "Sheila On 7",
            "picture": "https://api.deezer.com/artist/173714/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/9e6cc50e80a7dcb4dacc7eb15427335b/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/9e6cc50e80a7dcb4dacc7eb15427335b/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/9e6cc50e80a7dcb4dacc7eb15427335b/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/9e6cc50e80a7dcb4dacc7eb15427335b/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/173714/top?limit=50",
            "type": "artist"
          },
          {
            "id": "8706544",
            "name": "Dua Lipa",
            "picture": "https://api.deezer.com/artist/8706544/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/e6a04d735093a46dcc8be197681d1199/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/8706544/top?limit=50",
            "type": "artist"
          },
          {
            "id": "12246",
            "name": "Taylor Swift",
            "picture": "https://api.deezer.com/artist/12246/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/24eb277736e1295a548e683b584caa6a/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/24eb277736e1295a548e683b584caa6a/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/24eb277736e1295a548e683b584caa6a/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/24eb277736e1295a548e683b584caa6a/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/12246/top?limit=50",
            "type": "artist"
          },
          {
            "id": "108153772",
            "name": "YOASOBI",
            "picture": "https://api.deezer.com/artist/108153772/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/af5358d1f9ff762552f20b6ceec35664/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/af5358d1f9ff762552f20b6ceec35664/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/af5358d1f9ff762552f20b6ceec35664/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/af5358d1f9ff762552f20b6ceec35664/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/108153772/top?limit=50",
            "type": "artist"
          },
          {
            "id": "15166511",
            "name": "Lil Nas X",
            "picture": "https://api.deezer.com/artist/15166511/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/15166511/top?limit=50",
            "type": "artist"
          },
          {
            "id": "5578942",
            "name": "Doja Cat",
            "picture": "https://api.deezer.com/artist/5578942/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19fbc81561040ff686f4f0df247342f0/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/5578942/top?limit=50",
            "type": "artist"
          },
          {
            "id": "9927150",
            "name": "Pamungkas",
            "picture": "https://api.deezer.com/artist/9927150/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/cf78395171e26a522ba28f4d41b5b6bc/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/cf78395171e26a522ba28f4d41b5b6bc/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/cf78395171e26a522ba28f4d41b5b6bc/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/cf78395171e26a522ba28f4d41b5b6bc/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/9927150/top?limit=50",
            "type": "artist"
          },
          {
            "id": "10803980",
            "name": "BLACKPINK",
            "picture": "https://api.deezer.com/artist/10803980/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/bae36375018ab33d35a03b9edaa4fd48/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/bae36375018ab33d35a03b9edaa4fd48/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/bae36375018ab33d35a03b9edaa4fd48/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/bae36375018ab33d35a03b9edaa4fd48/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/10803980/top?limit=50",
            "type": "artist"
          },
          {
            "id": "84664612",
            "name": "Woro Widowati",
            "picture": "https://api.deezer.com/artist/84664612/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/1f1b4162d71dcee7fea551a5ad7a634c/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/1f1b4162d71dcee7fea551a5ad7a634c/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/1f1b4162d71dcee7fea551a5ad7a634c/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/1f1b4162d71dcee7fea551a5ad7a634c/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/84664612/top?limit=50",
            "type": "artist"
          },
          {
            "id": "274",
            "name": "Westlife",
            "picture": "https://api.deezer.com/artist/274/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/bef8cdfb730a1f3e84d7d2e4be2b6cd5/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/bef8cdfb730a1f3e84d7d2e4be2b6cd5/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/bef8cdfb730a1f3e84d7d2e4be2b6cd5/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/bef8cdfb730a1f3e84d7d2e4be2b6cd5/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/274/top?limit=50",
            "type": "artist"
          },
          {
            "id": "406",
            "name": "Avenged Sevenfold",
            "picture": "https://api.deezer.com/artist/406/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/5a2a72d22419c66cf63a74ede4cb29f6/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/5a2a72d22419c66cf63a74ede4cb29f6/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/5a2a72d22419c66cf63a74ede4cb29f6/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/5a2a72d22419c66cf63a74ede4cb29f6/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/406/top?limit=50",
            "type": "artist"
          },
          {
            "id": "1619043",
            "name": "Tulus",
            "picture": "https://api.deezer.com/artist/1619043/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/d1b96d02765586db390a817ad5c81311/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/d1b96d02765586db390a817ad5c81311/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/d1b96d02765586db390a817ad5c81311/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/d1b96d02765586db390a817ad5c81311/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1619043/top?limit=50",
            "type": "artist"
          },
          {
            "id": "173715",
            "name": "Padi",
            "picture": "https://api.deezer.com/artist/173715/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/bc40c7d63daa0874a65a3e55888edeb9/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/bc40c7d63daa0874a65a3e55888edeb9/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/bc40c7d63daa0874a65a3e55888edeb9/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/bc40c7d63daa0874a65a3e55888edeb9/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/173715/top?limit=50",
            "type": "artist"
          },
          {
            "id": "5551146",
            "name": "Dewa",
            "picture": "https://api.deezer.com/artist/5551146/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/8a6f81d0d3d218e5c72279bcec62057f/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/8a6f81d0d3d218e5c72279bcec62057f/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/8a6f81d0d3d218e5c72279bcec62057f/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/8a6f81d0d3d218e5c72279bcec62057f/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/5551146/top?limit=50",
            "type": "artist"
          },
          {
            "id": "4999707",
            "name": "Alan Walker",
            "picture": "https://api.deezer.com/artist/4999707/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/79d384488d390e65a6c27a95c431627e/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/79d384488d390e65a6c27a95c431627e/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/79d384488d390e65a6c27a95c431627e/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/79d384488d390e65a6c27a95c431627e/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/4999707/top?limit=50",
            "type": "artist"
          },
          {
            "id": "12816021",
            "name": "Megan Thee Stallion",
            "picture": "https://api.deezer.com/artist/12816021/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/bdf5115886be8286dcd30b5da1eadcd3/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/bdf5115886be8286dcd30b5da1eadcd3/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/bdf5115886be8286dcd30b5da1eadcd3/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/bdf5115886be8286dcd30b5da1eadcd3/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/12816021/top?limit=50",
            "type": "artist"
          },
          {
            "id": "399",
            "name": "Radiohead",
            "picture": "https://api.deezer.com/artist/399/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/9508c1217e880b52703a525d1bd5250c/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/9508c1217e880b52703a525d1bd5250c/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/9508c1217e880b52703a525d1bd5250c/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/9508c1217e880b52703a525d1bd5250c/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/399/top?limit=50",
            "type": "artist"
          },
          {
            "id": "3469",
            "name": "Sia",
            "picture": "https://api.deezer.com/artist/3469/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/12e3483ed6efd64bcc90f7afad2015c8/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/12e3483ed6efd64bcc90f7afad2015c8/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/12e3483ed6efd64bcc90f7afad2015c8/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/12e3483ed6efd64bcc90f7afad2015c8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/3469/top?limit=50",
            "type": "artist"
          },
          {
            "id": "13",
            "name": "Eminem",
            "picture": "https://api.deezer.com/artist/13/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/13/top?limit=50",
            "type": "artist"
          },
          {
            "id": "13874291",
            "name": "Rich Brian",
            "picture": "https://api.deezer.com/artist/13874291/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/094413c896dc45fe2d03357beb63054d/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/094413c896dc45fe2d03357beb63054d/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/094413c896dc45fe2d03357beb63054d/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/094413c896dc45fe2d03357beb63054d/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/13874291/top?limit=50",
            "type": "artist"
          },
          {
            "id": "13923487",
            "name": "Stray Kids",
            "picture": "https://api.deezer.com/artist/13923487/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/01816dd8a1376a8276964e64c069d921/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/01816dd8a1376a8276964e64c069d921/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/01816dd8a1376a8276964e64c069d921/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/01816dd8a1376a8276964e64c069d921/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/13923487/top?limit=50",
            "type": "artist"
          },
          {
            "id": "10794150",
            "name": "Happy Asmara",
            "picture": "https://api.deezer.com/artist/10794150/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/319ebe80dc30567147304585893a29dc/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/319ebe80dc30567147304585893a29dc/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/319ebe80dc30567147304585893a29dc/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/319ebe80dc30567147304585893a29dc/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/10794150/top?limit=50",
            "type": "artist"
          },
          {
            "id": "7002959",
            "name": "Payung Teduh",
            "picture": "https://api.deezer.com/artist/7002959/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/a286726bf6f34d79e3f627d4b285132b/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/a286726bf6f34d79e3f627d4b285132b/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/a286726bf6f34d79e3f627d4b285132b/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/a286726bf6f34d79e3f627d4b285132b/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/7002959/top?limit=50",
            "type": "artist"
          },
          {
            "id": "5962948",
            "name": "Shawn Mendes",
            "picture": "https://api.deezer.com/artist/5962948/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/9106de4de092ecb05ec8862d3415337d/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/9106de4de092ecb05ec8862d3415337d/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/9106de4de092ecb05ec8862d3415337d/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/9106de4de092ecb05ec8862d3415337d/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/5962948/top?limit=50",
            "type": "artist"
          },
          {
            "id": "12874",
            "name": "Bring Me the Horizon",
            "picture": "https://api.deezer.com/artist/12874/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/73b3db9a905349866cc9634c30d22bfd/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/73b3db9a905349866cc9634c30d22bfd/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/73b3db9a905349866cc9634c30d22bfd/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/73b3db9a905349866cc9634c30d22bfd/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/12874/top?limit=50",
            "type": "artist"
          },
          {
            "id": "161553",
            "name": "TWICE",
            "picture": "https://api.deezer.com/artist/161553/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/2a03e7b1880b35f0ac4da400976d0885/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/2a03e7b1880b35f0ac4da400976d0885/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/2a03e7b1880b35f0ac4da400976d0885/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/2a03e7b1880b35f0ac4da400976d0885/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/161553/top?limit=50",
            "type": "artist"
          },
          {
            "id": "1097709",
            "name": "Sam Smith",
            "picture": "https://api.deezer.com/artist/1097709/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/d42e724e123eb5c97865bc117c936d38/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/d42e724e123eb5c97865bc117c936d38/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/d42e724e123eb5c97865bc117c936d38/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/d42e724e123eb5c97865bc117c936d38/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1097709/top?limit=50",
            "type": "artist"
          },
          {
            "id": "416239",
            "name": "Imagine Dragons",
            "picture": "https://api.deezer.com/artist/416239/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/a9087f289c3bd826eb8c8bd48cd11f1e/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/a9087f289c3bd826eb8c8bd48cd11f1e/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/a9087f289c3bd826eb8c8bd48cd11f1e/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/a9087f289c3bd826eb8c8bd48cd11f1e/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/416239/top?limit=50",
            "type": "artist"
          },
          {
            "id": "1362735",
            "name": "Charlie Puth",
            "picture": "https://api.deezer.com/artist/1362735/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/cc854b82a23ad14204f7247d76335e21/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/cc854b82a23ad14204f7247d76335e21/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/cc854b82a23ad14204f7247d76335e21/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/cc854b82a23ad14204f7247d76335e21/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/1362735/top?limit=50",
            "type": "artist"
          },
          {
            "id": "12799",
            "name": "Dewa 19",
            "picture": "https://api.deezer.com/artist/12799/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/bb41dc1dcb5952fe49e4afbccf5227e7/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/bb41dc1dcb5952fe49e4afbccf5227e7/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/bb41dc1dcb5952fe49e4afbccf5227e7/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/bb41dc1dcb5952fe49e4afbccf5227e7/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/12799/top?limit=50",
            "type": "artist"
          },
          {
            "id": "74398",
            "name": "OneRepublic",
            "picture": "https://api.deezer.com/artist/74398/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/6164ff7a103961b88e6852147f31a33e/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/6164ff7a103961b88e6852147f31a33e/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/6164ff7a103961b88e6852147f31a33e/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/6164ff7a103961b88e6852147f31a33e/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/74398/top?limit=50",
            "type": "artist"
          },
          {
            "id": "92",
            "name": "Linkin Park",
            "picture": "https://api.deezer.com/artist/92/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/4eb6517a096da2ccd8768f1513593cb8/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/4eb6517a096da2ccd8768f1513593cb8/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/4eb6517a096da2ccd8768f1513593cb8/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/4eb6517a096da2ccd8768f1513593cb8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/92/top?limit=50",
            "type": "artist"
          },
          {
            "id": "4104927",
            "name": "The Chainsmokers",
            "picture": "https://api.deezer.com/artist/4104927/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/61871746a326aa46f5444dd69482364a/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/61871746a326aa46f5444dd69482364a/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/61871746a326aa46f5444dd69482364a/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/61871746a326aa46f5444dd69482364a/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/4104927/top?limit=50",
            "type": "artist"
          },
          {
            "id": "52",
            "name": "Green Day",
            "picture": "https://api.deezer.com/artist/52/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/ea15e157c48dd7cc28f3e1fe3ac029a8/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/ea15e157c48dd7cc28f3e1fe3ac029a8/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/ea15e157c48dd7cc28f3e1fe3ac029a8/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/ea15e157c48dd7cc28f3e1fe3ac029a8/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/52/top?limit=50",
            "type": "artist"
          },
          {
            "id": "80457",
            "name": "Glenn Fredly",
            "picture": "https://api.deezer.com/artist/80457/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/eddf1a3e7b6e57abef80ba3bfc5d4034/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/eddf1a3e7b6e57abef80ba3bfc5d4034/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/eddf1a3e7b6e57abef80ba3bfc5d4034/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/eddf1a3e7b6e57abef80ba3bfc5d4034/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/80457/top?limit=50",
            "type": "artist"
          },
          {
            "id": "5306539",
            "name": "Jonas Blue",
            "picture": "https://api.deezer.com/artist/5306539/image",
            "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/3ac0869507133993a62fec58168867e9/56x56-000000-80-0-0.jpg",
            "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/3ac0869507133993a62fec58168867e9/250x250-000000-80-0-0.jpg",
            "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/3ac0869507133993a62fec58168867e9/500x500-000000-80-0-0.jpg",
            "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/3ac0869507133993a62fec58168867e9/1000x1000-000000-80-0-0.jpg",
            "radio": true,
            "tracklist": "https://api.deezer.com/artist/5306539/top?limit=50",
            "type": "artist"
          }
        ]
    }

    return (
        <Container fluid>
            <Row>
            </Row>
            <Row>
                <Col>
                    <GenreArtists artists={dummy_data.data} genre={genreName}/>
                </Col>
            </Row>
        </Container>
    )
}

export default GenreArtistsPage;