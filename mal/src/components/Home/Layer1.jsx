import React from "react";

import Gambar1 from "../../images/compose.svg";

import "../Home/Layer1.css"

function Layer1(){
    return(
        <div className="card1">
                <div className="row no-gutters">             
                    <div className="col isinya">
                        <div className="card-block px-2 margin">
                            <h1 className="card-title Title1"><span style={{color: "#6558f5", fontWeight: "bold"}}>Music</span> for Everyone</h1>
                            <p className="card-text isinya-text">Discover million of songs that will accompany your daily activities. Also enjoy the best music collections all around the world in our playlists.</p>
                            <div className="buttons">
                                <a href="/Login" className="btn btn-dark btn-lg" style={{marginRight: "20px"}}>Get Started</a>
                                <a href="/Music" className="btn btn-dark btn-lg" style={{marginLeft: "20px"}}>Find Songs</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <img src={Gambar1} className="img-fluid margin" alt="" width="600px" height="600px"/>
                    </div>
                </div>
        </div>
    )
}

export default Layer1;