import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MusicPage from "../pages/MusicPage";
import GenrePage from "../pages/GenrePage";
import GenreArtistsPage from "../pages/GenreArtistsPage";
import ArtistPage from "../pages/ArtistPage";
import AlbumPage from "../pages/AlbumPage";
import PlaylistPage from "../pages/PlaylistPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainRouter(){
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/signup" component={SignupPage} exact/>
                <Route path="/login" component={LoginPage} exact/>
                <Route path="/playlist" component={PlaylistPage} exact/>
                <Route path="/album/:albumId" component={AlbumPage} exact/>
                <Route path="/artist/:artistId" component={ArtistPage} exact/>
                <Route path="/genre/:genreId/artists" component={GenreArtistsPage} exact/>
                <Route path="/genre" component={GenrePage} exact/>
                <Route path="/music" component={MusicPage} exact/>
                <Route path="/" component={HomePage} exact/>
            </Switch>
            <Footer />
        </Router>

    )
}

export default MainRouter;