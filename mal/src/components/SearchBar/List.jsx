// /* eslint-disable no-underscore-dangle */
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const NotesListContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-width: 30vw;
//   text-align: left;
//   margin: 1rem;
//   padding: 1rem;
//   border: 2px solid #a0aec0;
//   border-radius: 5px;
// `;

// const List = styled.ul`
//   list-style: none;
// `;

// const ListItem = styled.li`
//   margin: 0.5rem;
// `;

// const Separator = styled.hr`
//   width: 90%;
//   margin: -1px;
//   background-color: #edf2f7;
//   color: #edf2f7;
// `;

// export const fetch = () => {
//   const [notes, setNotes] = useState(null);

//   useEffect(() => {

//     async function fetchData() {
//       const response = await fetch(`${process.env.REACT_APP_API_URL}/notes`);
//       const data = await response.json();
//       setNotes({data});
//     }

//     fetchData();

//   }, []);

//   const listItems =
//     notes &&
//     notes.data.map((note) => {
//       return (
//         <ListItem key={note._id}>
//           <h4>
//             <Link to={`/edit/${note._id}`}>{note.title}</Link>
//           </h4>
//           <p>{note.note.slice(0, 101)}</p>
//           <Separator />
//         </ListItem>
//       );
//     });


// export const getFilteredNotes = (state, keyword) => {
//   if (keyword) {
//     const isKeywordExist = (array, string) => array.toLowerCase().includes(string);

//     return state.notes.data.filter((note) => isKeywordExist(note.note, keyword) || isKeywordExist(note.title, keyword));
//   }
//   return state.notes.data; 
// };
 const dummy = {
  "data": [
    {
      "id": "3135553",
      "readable": true,
      "title": "One More Time",
      "title_short": "One More Time",
      "title_version": "",
      "isrc": "GBDUW0000053",
      "link": "https://www.deezer.com/track/3135553",
      "duration": "320",
      "track_position": 1,
      "disk_number": 1,
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
      "isrc": "GBDUW0000057",
      "link": "https://www.deezer.com/track/3135554",
      "duration": "212",
      "track_position": 2,
      "disk_number": 1,
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
      "isrc": "GBDUW0000058",
      "link": "https://www.deezer.com/track/3135555",
      "duration": "301",
      "track_position": 3,
      "disk_number": 1,
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
      "isrc": "GBDUW0000059",
      "link": "https://www.deezer.com/track/3135556",
      "duration": "224",
      "track_position": 4,
      "disk_number": 1,
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
      "isrc": "GBDUW0000060",
      "link": "https://www.deezer.com/track/3135557",
      "duration": "211",
      "track_position": 5,
      "disk_number": 1,
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
      "isrc": "GBDUW0000061",
      "link": "https://www.deezer.com/track/3135558",
      "duration": "104",
      "track_position": 6,
      "disk_number": 1,
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
      "isrc": "GBDUW0000062",
      "link": "https://www.deezer.com/track/3135559",
      "duration": "237",
      "track_position": 7,
      "disk_number": 1,
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
      "isrc": "GBDUW0000063",
      "link": "https://www.deezer.com/track/3135560",
      "duration": "201",
      "track_position": 8,
      "disk_number": 1,
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
      "isrc": "GBDUW0000064",
      "link": "https://www.deezer.com/track/3135561",
      "duration": "232",
      "track_position": 9,
      "disk_number": 1,
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
      "isrc": "GBDUW0000065",
      "link": "https://www.deezer.com/track/3135562",
      "duration": "227",
      "track_position": 10,
      "disk_number": 1,
      "rank": "590933",
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
      "isrc": "GBDUW0000066",
      "link": "https://www.deezer.com/track/3135563",
      "duration": "345",
      "track_position": 11,
      "disk_number": 1,
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
      "isrc": "GBDUW0000067",
      "link": "https://www.deezer.com/track/3135564",
      "duration": "206",
      "track_position": 12,
      "disk_number": 1,
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
      "isrc": "GBDUW0000068",
      "link": "https://www.deezer.com/track/3135565",
      "duration": "240",
      "track_position": 13,
      "disk_number": 1,
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
      "isrc": "GBDUW0000069",
      "link": "https://www.deezer.com/track/3135566",
      "duration": "600",
      "track_position": 14,
      "disk_number": 1,
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
    },
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
      "nb_fan": 641839,
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
      "nb_fan": 2075313,
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
      "nb_fan": 375123,
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
      "nb_fan": 805206,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/7/top?limit=50",
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
      "nb_fan": 377718,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/13570/top?limit=50",
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
      "nb_fan": 1059964,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/142381/top?limit=50",
      "type": "artist"
    },
    {
      "id": "68540642",
      "name": "Stardust",
      "link": "https://www.deezer.com/artist/68540642",
      "picture": "https://api.deezer.com/artist/68540642/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/2d6dd0062507fca8e7b6bd19b697271e/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/2d6dd0062507fca8e7b6bd19b697271e/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/2d6dd0062507fca8e7b6bd19b697271e/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/2d6dd0062507fca8e7b6bd19b697271e/1000x1000-000000-80-0-0.jpg",
      "nb_album": 1,
      "nb_fan": 11238,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/68540642/top?limit=50",
      "type": "artist"
    },
    {
      "id": "569",
      "name": "The Strokes",
      "link": "https://www.deezer.com/artist/569",
      "picture": "https://api.deezer.com/artist/569/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/88e8ecd06aae5cd69d414af57a67f339/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/88e8ecd06aae5cd69d414af57a67f339/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/88e8ecd06aae5cd69d414af57a67f339/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/88e8ecd06aae5cd69d414af57a67f339/1000x1000-000000-80-0-0.jpg",
      "nb_album": 15,
      "nb_fan": 1254915,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/569/top?limit=50",
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
      "nb_fan": 1562677,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/2046/top?limit=50",
      "type": "artist"
    },
    {
      "id": "85",
      "name": "The Prodigy",
      "link": "https://www.deezer.com/artist/85",
      "picture": "https://api.deezer.com/artist/85/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/4d884e6864623a3446040eaa8e9fb18d/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/4d884e6864623a3446040eaa8e9fb18d/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/4d884e6864623a3446040eaa8e9fb18d/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/4d884e6864623a3446040eaa8e9fb18d/1000x1000-000000-80-0-0.jpg",
      "nb_album": 58,
      "nb_fan": 1547419,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/85/top?limit=50",
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
      "nb_fan": 622079,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/134790/top?limit=50",
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
      "nb_fan": 499388,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/15/top?limit=50",
      "type": "artist"
    },
    {
      "id": "1545",
      "name": "Modjo",
      "link": "https://www.deezer.com/artist/1545",
      "picture": "https://api.deezer.com/artist/1545/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/df579128a4b6c1796c6f8b34432a741a/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/df579128a4b6c1796c6f8b34432a741a/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/df579128a4b6c1796c6f8b34432a741a/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/df579128a4b6c1796c6f8b34432a741a/1000x1000-000000-80-0-0.jpg",
      "nb_album": 0,
      "nb_fan": 20651,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/1545/top?limit=50",
      "type": "artist"
    },
    {
      "id": "678",
      "name": "M83",
      "link": "https://www.deezer.com/artist/678",
      "picture": "https://api.deezer.com/artist/678/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/4d6f153601cf2f506b358c5dce148f52/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/4d6f153601cf2f506b358c5dce148f52/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/4d6f153601cf2f506b358c5dce148f52/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/4d6f153601cf2f506b358c5dce148f52/1000x1000-000000-80-0-0.jpg",
      "nb_album": 24,
      "nb_fan": 807833,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/678/top?limit=50",
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
      "nb_fan": 246472,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/369/top?limit=50",
      "type": "artist"
    },
    {
      "id": "157",
      "name": "Bob Sinclar",
      "link": "https://www.deezer.com/artist/157",
      "picture": "https://api.deezer.com/artist/157/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/94a5a994340c501e6441d4bbb82250fe/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/94a5a994340c501e6441d4bbb82250fe/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/94a5a994340c501e6441d4bbb82250fe/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/94a5a994340c501e6441d4bbb82250fe/1000x1000-000000-80-0-0.jpg",
      "nb_album": 82,
      "nb_fan": 1778719,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/157/top?limit=50",
      "type": "artist"
    },
    {
      "id": "1408",
      "name": "Sébastien Tellier",
      "link": "https://www.deezer.com/artist/1408",
      "picture": "https://api.deezer.com/artist/1408/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/ba318de5e3ebb74afddb840853d247d6/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/ba318de5e3ebb74afddb840853d247d6/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/ba318de5e3ebb74afddb840853d247d6/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/ba318de5e3ebb74afddb840853d247d6/1000x1000-000000-80-0-0.jpg",
      "nb_album": 43,
      "nb_fan": 138417,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/1408/top?limit=50",
      "type": "artist"
    },
    {
      "id": "1981",
      "name": "The Police",
      "link": "https://www.deezer.com/artist/1981",
      "picture": "https://api.deezer.com/artist/1981/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/5b4796f1d81da41fa45db0eda8d51b04/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/5b4796f1d81da41fa45db0eda8d51b04/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/5b4796f1d81da41fa45db0eda8d51b04/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/5b4796f1d81da41fa45db0eda8d51b04/1000x1000-000000-80-0-0.jpg",
      "nb_album": 11,
      "nb_fan": 2458325,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/1981/top?limit=50",
      "type": "artist"
    },
    {
      "id": "153394",
      "name": "The Supermen Lovers",
      "link": "https://www.deezer.com/artist/153394",
      "picture": "https://api.deezer.com/artist/153394/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/3a344404ebc70225cf15b5f22e7fce51/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/3a344404ebc70225cf15b5f22e7fce51/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/3a344404ebc70225cf15b5f22e7fce51/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/3a344404ebc70225cf15b5f22e7fce51/1000x1000-000000-80-0-0.jpg",
      "nb_album": 41,
      "nb_fan": 10195,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/153394/top?limit=50",
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
      "nb_fan": 282044,
      "radio": true,
      "tracklist": "https://api.deezer.com/artist/641/top?limit=50",
      "type": "artist"
    }
  ],
  
 }
export default dummy;