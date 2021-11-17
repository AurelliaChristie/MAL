import React, {useEffect} from "react";
import { useParams } from "react-router";

import { Container, Row, Col } from "react-bootstrap";

import SearchTracks from "../components/Track/SearchTracks";
import SearchAlbums from "../components/Album/SearchAlbums";
import SearchArtists from "../components/Artist/SearchArtists";

function SearchResultPage() {

    let { keyword } = useParams();

    // useEffect(() => {
    //     async function getSearchTracks() {
    //       try{
    //         const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
    //         const recipes = await fetchRecipes.json();
    //         console.log(recipes.results);       
    //       } catch(error){
    //           console.log('getSearchTracks', error);
    //       }
    //     }
    //     getSearchTracks();
    // }, [])

    // useEffect(() => {
    //     async function getSearchAlbums() {
    //       try{
    //         const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
    //         const recipes = await fetchRecipes.json();
    //         console.log(recipes.results);       
    //       } catch(error){
    //           console.log('getSearchAlbums', error);
    //       }
    //     }
    //     getSearchAlbums();
    // }, [])


    // useEffect(() => {
    //     async function getSearchArtists() {
    //       try{
    //         const fetchRecipes = await fetch(`https://masakapahariini-api.eddypermana.com/api/search/?q=soto`)
    //         const recipes = await fetchRecipes.json();
    //         console.log(recipes.results);       
    //       } catch(error){
    //           console.log('getSearchArtists', error);
    //       }
    //     }
    //     getSearchArtists();
    // }, [])

    const dummy_data = {
        "data": [
          {
            "id": 1425844092,
            "title": "STAY",
            "title_short": "STAY",
            "title_version": "",
            "link": "https://www.deezer.com/track/1425844092",
            "duration": 141,
            "rank": 989040,
            "explicit_lyrics": true,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-f.dzcdn.net/stream/c-fd9572c7a11401267a6c5c3402254160-3.mp3",
            "md5_image": "dd6fe7fa9267185c4b835bd4f155d1d2",
            "position": 1,
            "artist": {
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
              "type": "artist"
            },
            "album": {
              "id": 242430582,
              "title": "STAY",
              "cover": "https://api.deezer.com/album/242430582/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/dd6fe7fa9267185c4b835bd4f155d1d2/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/dd6fe7fa9267185c4b835bd4f155d1d2/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/dd6fe7fa9267185c4b835bd4f155d1d2/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/dd6fe7fa9267185c4b835bd4f155d1d2/1000x1000-000000-80-0-0.jpg",
              "md5_image": "dd6fe7fa9267185c4b835bd4f155d1d2",
              "tracklist": "https://api.deezer.com/album/242430582/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": 1359487582,
            "title": "rainbow",
            "title_short": "rainbow",
            "title_version": "",
            "link": "https://www.deezer.com/track/1359487582",
            "duration": 201,
            "rank": 395610,
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-a.dzcdn.net/stream/c-a52020eb48eeb873800de3504edce30a-3.mp3",
            "md5_image": "b05c21d57cd206fa33c2142d8f23250b",
            "position": 2,
            "artist": {
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
              "type": "artist"
            },
            "album": {
              "id": 226857562,
              "title": "dreamlover",
              "cover": "https://api.deezer.com/album/226857562/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/b05c21d57cd206fa33c2142d8f23250b/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/b05c21d57cd206fa33c2142d8f23250b/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/b05c21d57cd206fa33c2142d8f23250b/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/b05c21d57cd206fa33c2142d8f23250b/1000x1000-000000-80-0-0.jpg",
              "md5_image": "b05c21d57cd206fa33c2142d8f23250b",
              "tracklist": "https://api.deezer.com/album/226857562/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": 1199557762,
            "title": "The Archer",
            "title_short": "The Archer",
            "title_version": "",
            "link": "https://www.deezer.com/track/1199557762",
            "duration": 216,
            "rank": 399846,
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-b.dzcdn.net/stream/c-bff1b1bec342021717233af43218d800-3.mp3",
            "md5_image": "63471f4246564bdf6e06e3365fe99b18",
            "position": 3,
            "artist": {
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
              "type": "artist"
            },
            "album": {
              "id": 198116102,
              "title": "The Archer",
              "cover": "https://api.deezer.com/album/198116102/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/63471f4246564bdf6e06e3365fe99b18/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/63471f4246564bdf6e06e3365fe99b18/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/63471f4246564bdf6e06e3365fe99b18/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/63471f4246564bdf6e06e3365fe99b18/1000x1000-000000-80-0-0.jpg",
              "md5_image": "63471f4246564bdf6e06e3365fe99b18",
              "tracklist": "https://api.deezer.com/album/198116102/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": 1472052212,
            "title": "Your Mind (feat. Cecylia)",
            "title_short": "Your Mind (feat. Cecylia)",
            "title_version": "",
            "link": "https://www.deezer.com/track/1472052212",
            "duration": 131,
            "rank": 183762,
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-4.dzcdn.net/stream/c-41c58ca7f809c55ee710f2419efe7abd-3.mp3",
            "md5_image": "534ee22fb2f5f9c83dabfc98cb2d97c1",
            "position": 4,
            "artist": {
              "id": 143175542,
              "name": "Mrf",
              "link": "https://www.deezer.com/artist/143175542",
              "picture": "https://api.deezer.com/artist/143175542/image",
              "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/534ee22fb2f5f9c83dabfc98cb2d97c1/56x56-000000-80-0-0.jpg",
              "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/534ee22fb2f5f9c83dabfc98cb2d97c1/250x250-000000-80-0-0.jpg",
              "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/534ee22fb2f5f9c83dabfc98cb2d97c1/500x500-000000-80-0-0.jpg",
              "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/534ee22fb2f5f9c83dabfc98cb2d97c1/1000x1000-000000-80-0-0.jpg",
              "radio": true,
              "tracklist": "https://api.deezer.com/artist/143175542/top?limit=50",
              "type": "artist"
            },
            "album": {
              "id": 253516032,
              "title": "Your Mind (feat. Cecylia)",
              "cover": "https://api.deezer.com/album/253516032/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/534ee22fb2f5f9c83dabfc98cb2d97c1/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/534ee22fb2f5f9c83dabfc98cb2d97c1/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/534ee22fb2f5f9c83dabfc98cb2d97c1/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/534ee22fb2f5f9c83dabfc98cb2d97c1/1000x1000-000000-80-0-0.jpg",
              "md5_image": "534ee22fb2f5f9c83dabfc98cb2d97c1",
              "tracklist": "https://api.deezer.com/album/253516032/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": 1375067352,
            "title": "Butter",
            "title_short": "Butter",
            "title_version": "",
            "link": "https://www.deezer.com/track/1375067352",
            "duration": 164,
            "rank": 968755,
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-3.dzcdn.net/stream/c-305df5cd81ffc730a3688dd8a6b00303-3.mp3",
            "md5_image": "0cc1c0ada6f9aab8128e7d8a7d61aec2",
            "position": 5,
            "artist": {
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
              "type": "artist"
            },
            "album": {
              "id": 230795192,
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
            "id": 1430482052,
            "title": "Run",
            "title_short": "Run",
            "title_version": "",
            "link": "https://www.deezer.com/track/1430482052",
            "duration": 220,
            "rank": 199666,
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-6.dzcdn.net/stream/c-67a6ca6b48e3f73a8cb734e3d4324f91-3.mp3",
            "md5_image": "996ffb1d355a6d4727fe63169edb34eb",
            "position": 6,
            "artist": {
              "id": 57585292,
              "name": "Alex Kuple",
              "link": "https://www.deezer.com/artist/57585292",
              "picture": "https://api.deezer.com/artist/57585292/image",
              "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/2166af63df1632660c610dda65513436/56x56-000000-80-0-0.jpg",
              "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/2166af63df1632660c610dda65513436/250x250-000000-80-0-0.jpg",
              "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/2166af63df1632660c610dda65513436/500x500-000000-80-0-0.jpg",
              "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/2166af63df1632660c610dda65513436/1000x1000-000000-80-0-0.jpg",
              "radio": true,
              "tracklist": "https://api.deezer.com/artist/57585292/top?limit=50",
              "type": "artist"
            },
            "album": {
              "id": 243492332,
              "title": "Run",
              "cover": "https://api.deezer.com/album/243492332/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/996ffb1d355a6d4727fe63169edb34eb/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/996ffb1d355a6d4727fe63169edb34eb/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/996ffb1d355a6d4727fe63169edb34eb/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/996ffb1d355a6d4727fe63169edb34eb/1000x1000-000000-80-0-0.jpg",
              "md5_image": "996ffb1d355a6d4727fe63169edb34eb",
              "tracklist": "https://api.deezer.com/album/243492332/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": 1472971892,
            "title": "Butter (Megan Thee Stallion Remix)",
            "title_short": "Butter (Megan Thee Stallion Remix)",
            "title_version": "",
            "link": "https://www.deezer.com/track/1472971892",
            "duration": 164,
            "rank": 807899,
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-5.dzcdn.net/stream/c-548a53c11addf90a228967eeb73bc4f0-3.mp3",
            "md5_image": "a06996f37429652dd4ecc14cf00432c4",
            "position": 7,
            "artist": {
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
              "type": "artist"
            },
            "album": {
              "id": 253728402,
              "title": "Butter (Megan Thee Stallion Remix)",
              "cover": "https://api.deezer.com/album/253728402/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/a06996f37429652dd4ecc14cf00432c4/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/a06996f37429652dd4ecc14cf00432c4/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/a06996f37429652dd4ecc14cf00432c4/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/a06996f37429652dd4ecc14cf00432c4/1000x1000-000000-80-0-0.jpg",
              "md5_image": "a06996f37429652dd4ecc14cf00432c4",
              "tracklist": "https://api.deezer.com/album/253728402/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": 1421475872,
            "title": "Permission to Dance",
            "title_short": "Permission to Dance",
            "title_version": "",
            "link": "https://www.deezer.com/track/1421475872",
            "duration": 187,
            "rank": 894563,
            "explicit_lyrics": false,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-2.dzcdn.net/stream/c-27e8d6fcf25a4f82e8172dd4bea7a27d-3.mp3",
            "md5_image": "ec23c4a5654a47e27d38db0c099fe3b9",
            "position": 8,
            "artist": {
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
              "type": "artist"
            },
            "album": {
              "id": 241415882,
              "title": "Butter / Permission to Dance",
              "cover": "https://api.deezer.com/album/241415882/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/ec23c4a5654a47e27d38db0c099fe3b9/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/ec23c4a5654a47e27d38db0c099fe3b9/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/ec23c4a5654a47e27d38db0c099fe3b9/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/ec23c4a5654a47e27d38db0c099fe3b9/1000x1000-000000-80-0-0.jpg",
              "md5_image": "ec23c4a5654a47e27d38db0c099fe3b9",
              "tracklist": "https://api.deezer.com/album/241415882/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": 1378342642,
            "title": "happier",
            "title_short": "happier",
            "title_version": "",
            "link": "https://www.deezer.com/track/1378342642",
            "duration": 175,
            "rank": 920083,
            "explicit_lyrics": true,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-1.dzcdn.net/stream/c-1b6e15f9cac81065669458cc2dfc6ffe-4.mp3",
            "md5_image": "e68da86fd7976135c2d2d1715afaef7c",
            "position": 9,
            "artist": {
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
              "type": "artist"
            },
            "album": {
              "id": 231552772,
              "title": "SOUR",
              "cover": "https://api.deezer.com/album/231552772/image",
              "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/e68da86fd7976135c2d2d1715afaef7c/56x56-000000-80-0-0.jpg",
              "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/e68da86fd7976135c2d2d1715afaef7c/250x250-000000-80-0-0.jpg",
              "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/e68da86fd7976135c2d2d1715afaef7c/500x500-000000-80-0-0.jpg",
              "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/e68da86fd7976135c2d2d1715afaef7c/1000x1000-000000-80-0-0.jpg",
              "md5_image": "e68da86fd7976135c2d2d1715afaef7c",
              "tracklist": "https://api.deezer.com/album/231552772/tracks",
              "type": "album"
            },
            "type": "track"
          },
          {
            "id": 1439691952,
            "title": "INDUSTRY BABY",
            "title_short": "INDUSTRY BABY",
            "title_version": "",
            "link": "https://www.deezer.com/track/1439691952",
            "duration": 212,
            "rank": 997645,
            "explicit_lyrics": true,
            "explicit_content_lyrics": 0,
            "explicit_content_cover": 0,
            "preview": "https://cdns-preview-9.dzcdn.net/stream/c-99f593e355757003328afde5fac2bdbe-3.mp3",
            "md5_image": "a65e86966cfd34b2aa292856136ef9ac",
            "position": 10,
            "artist": {
              "id": 15166511,
              "name": "Lil Nas X",
              "link": "https://www.deezer.com/artist/15166511",
              "picture": "https://api.deezer.com/artist/15166511/image",
              "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/56x56-000000-80-0-0.jpg",
              "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/250x250-000000-80-0-0.jpg",
              "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/500x500-000000-80-0-0.jpg",
              "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/cb499091fda9a837d0059cbde5e52450/1000x1000-000000-80-0-0.jpg",
              "radio": true,
              "tracklist": "https://api.deezer.com/artist/15166511/top?limit=50",
              "type": "artist"
            },
            "album": {
              "id": 245878832,
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
          }
        ],
        "total": 10
    }

    const albums_data = {
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

    const artists_data = {
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

    return (
        <Container fluid>
            <Row>
            </Row>
                <SearchTracks tracks={dummy_data.data} keyword={keyword}/>
                <SearchAlbums albums={albums_data.data} keyword={keyword}/>
                <SearchArtists artists={artists_data.data} keyword={keyword}/>
        </Container>
    )
}

export default SearchResultPage;