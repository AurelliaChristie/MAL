import React from "react";

import {Container, Row} from "react-bootstrap";

import TrackCard from "./TrackCard";


function TopTracks(){

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
  
  
  return(
    <div className="my-3">
      <Container fluid>
        <Row>
          <h3 className="d-inline mb-3">Top Tracks</h3>
        </Row>
        <Row className="mt-4">
            {
                dummy_data.data.slice(0,7).map((track) => (
                  <div className="d-flex flex-column justify-content-center">
                    <TrackCard track={track} key={track.id}/>
                  </div>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default TopTracks;