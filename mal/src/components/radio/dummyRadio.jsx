import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import PlaylistCard from "./cardPlaylist";


function TopRadio(){

  const dummy_data={
  "data": [
    {
      "id": "31061",
      "title": "Pop",
      "picture": "https://api.deezer.com/radio/31061/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/933805b7ebadc9c50845d7007e2c64d9/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/933805b7ebadc9c50845d7007e2c64d9/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/933805b7ebadc9c50845d7007e2c64d9/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/933805b7ebadc9c50845d7007e2c64d9/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/31061/tracks",
      "md5_image": "933805b7ebadc9c50845d7007e2c64d9",
      "type": "radio"
    },
    {
      "id": "31031",
      "title": "Jazz",
      "picture": "https://api.deezer.com/radio/31031/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/4cbd7a17e292c06fbd1fbb1ffddcecd3/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/4cbd7a17e292c06fbd1fbb1ffddcecd3/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/4cbd7a17e292c06fbd1fbb1ffddcecd3/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/4cbd7a17e292c06fbd1fbb1ffddcecd3/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/31031/tracks",
      "md5_image": "4cbd7a17e292c06fbd1fbb1ffddcecd3",
      "type": "radio"
    },
    {
      "id": "38295",
      "title": "Tahun '70-an",
      "picture": "https://api.deezer.com/radio/38295/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/cf3ff0820bd6a52bea2dffb14d3fc829/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/cf3ff0820bd6a52bea2dffb14d3fc829/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/cf3ff0820bd6a52bea2dffb14d3fc829/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/cf3ff0820bd6a52bea2dffb14d3fc829/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/38295/tracks",
      "md5_image": "cf3ff0820bd6a52bea2dffb14d3fc829",
      "type": "radio"
    },
    {
      "id": "37061",
      "title": "Opera",
      "picture": "https://api.deezer.com/radio/37061/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/d4303cdf410ace427896c922632697f4/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/d4303cdf410ace427896c922632697f4/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/d4303cdf410ace427896c922632697f4/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/d4303cdf410ace427896c922632697f4/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/37061/tracks",
      "md5_image": "d4303cdf410ace427896c922632697f4",
      "type": "radio"
    },
    {
      "id": "30881",
      "title": "R&B",
      "picture": "https://api.deezer.com/radio/30881/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/5829100d000027191e2e51f1855e1419/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/5829100d000027191e2e51f1855e1419/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/5829100d000027191e2e51f1855e1419/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/5829100d000027191e2e51f1855e1419/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/30881/tracks",
      "md5_image": "5829100d000027191e2e51f1855e1419",
      "type": "radio"
    },
    {
      "id": "37645",
      "title": "Sore Musim Panas",
      "picture": "https://api.deezer.com/radio/37645/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/af12c35bc5022b545ab67d1afe85d26e/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/af12c35bc5022b545ab67d1afe85d26e/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/af12c35bc5022b545ab67d1afe85d26e/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/af12c35bc5022b545ab67d1afe85d26e/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/37645/tracks",
      "md5_image": "af12c35bc5022b545ab67d1afe85d26e",
      "type": "radio"
    },
    {
      "id": "38395",
      "title": "Lagu Prancis",
      "picture": "https://api.deezer.com/radio/38395/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/948050291918ef5ce01db73a26e9965f/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/948050291918ef5ce01db73a26e9965f/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/948050291918ef5ce01db73a26e9965f/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/948050291918ef5ce01db73a26e9965f/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/38395/tracks",
      "md5_image": "948050291918ef5ce01db73a26e9965f",
      "type": "radio"
    },
    {
      "id": "39051",
      "title": "Lagu Melankolis",
      "picture": "https://api.deezer.com/radio/39051/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/ad6deec279499b2fd277de977df088fd/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/ad6deec279499b2fd277de977df088fd/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/ad6deec279499b2fd277de977df088fd/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/ad6deec279499b2fd277de977df088fd/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/39051/tracks",
      "md5_image": "ad6deec279499b2fd277de977df088fd",
      "type": "radio"
    },
    {
      "id": "30771",
      "title": "Indie",
      "picture": "https://api.deezer.com/radio/30771/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/5dfdae5fdb147623ed11a2513074a970/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/5dfdae5fdb147623ed11a2513074a970/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/5dfdae5fdb147623ed11a2513074a970/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/5dfdae5fdb147623ed11a2513074a970/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/30771/tracks",
      "md5_image": "5dfdae5fdb147623ed11a2513074a970",
      "type": "radio"
    },
    {
      "id": "38325",
      "title": "Tahun 2000-an",
      "picture": "https://api.deezer.com/radio/38325/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/0537ea8f5e7f8f6c637b60718c626026/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/0537ea8f5e7f8f6c637b60718c626026/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/0537ea8f5e7f8f6c637b60718c626026/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/0537ea8f5e7f8f6c637b60718c626026/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/38325/tracks",
      "md5_image": "0537ea8f5e7f8f6c637b60718c626026",
      "type": "radio"
    },
    {
      "id": "37765",
      "title": "Klasik Rock",
      "picture": "https://api.deezer.com/radio/37765/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/0a99395aa175e4dcec1d9fd4450ab3b8/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/0a99395aa175e4dcec1d9fd4450ab3b8/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/0a99395aa175e4dcec1d9fd4450ab3b8/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/0a99395aa175e4dcec1d9fd4450ab3b8/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/37765/tracks",
      "md5_image": "0a99395aa175e4dcec1d9fd4450ab3b8",
      "type": "radio"
    },
    {
      "id": "38385",
      "title": "Hari Hujan",
      "picture": "https://api.deezer.com/radio/38385/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/ddc78904a97d41c65c9fc1dab3adc249/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/ddc78904a97d41c65c9fc1dab3adc249/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/ddc78904a97d41c65c9fc1dab3adc249/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/ddc78904a97d41c65c9fc1dab3adc249/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/38385/tracks",
      "md5_image": "ddc78904a97d41c65c9fc1dab3adc249",
      "type": "radio"
    },
    {
      "id": "37675",
      "title": "Kedai Kopi",
      "picture": "https://api.deezer.com/radio/37675/image",
      "picture_small": "https://e-cdns-images.dzcdn.net/images/misc/298a3f304ad9d6283e2677a7795d8396/56x56-000000-80-0-0.jpg",
      "picture_medium": "https://e-cdns-images.dzcdn.net/images/misc/298a3f304ad9d6283e2677a7795d8396/250x250-000000-80-0-0.jpg",
      "picture_big": "https://e-cdns-images.dzcdn.net/images/misc/298a3f304ad9d6283e2677a7795d8396/500x500-000000-80-0-0.jpg",
      "picture_xl": "https://e-cdns-images.dzcdn.net/images/misc/298a3f304ad9d6283e2677a7795d8396/1000x1000-000000-80-0-0.jpg",
      "tracklist": "https://api.deezer.com/radio/37675/tracks",
      "md5_image": "298a3f304ad9d6283e2677a7795d8396",
      "type": "radio"
    }
  ],
}
return(
    <div className="my-3">
      <Container fluid>
        <Row>
            {
                dummy_data.data.slice(0,15).map((playlist) => (
                    <Col lg={2} md={3} sm={4} xs={6}>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <PlaylistCard playlist={playlist} key={playlist.id}/>
                  </div>
                  </Col>
                ))
            }
        </Row>
      </Container>
    </div>
  )
}

export default TopRadio;