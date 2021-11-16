import React from "react";
import { Carousel } from "react-bootstrap";

import Trend from "../../images/music.svg";
import Favourite from "../../images/playlist.svg";
import Playlist from "../../images/radio.svg";

function Layer2(){
    return(
        <div className="carousel" style={{backgroundColor: "#6558f5"}}>
            <h1 style={{color: "#292b2c", textAlign: "center", padding: "30px 0px 30px 0px"}}>Why <span style={{color: "white", fontWeight: "bold"}}>MAL</span> ?</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Trend}
                    width="300px"
                    height= "300px"
                    alt="First slide"
                    />
                    <h1 style={{textAlign: "center", color:"white", margin:"40px"}}>What's on Trend</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Favourite}
                    width="300px"
                    height= "300px"
                    alt="Second slide"
                    />
                    <h1 style={{textAlign: "center", color:"white", margin:"40px"}}>Add Songs to Favourite</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Playlist}
                    width="300px"
                    height= "300px"
                    alt="Third slide"
                    />
                    <h1 style={{textAlign: "center", color:"white", margin:"40px"}}>Various Playlist</h1>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Layer2;