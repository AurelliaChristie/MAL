import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import MusicPage from "../pages/MusicPage";
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
                <Route path="/music" component={MusicPage} exact/>
                <Route path="/" component={HomePage} exact/>
            </Switch>
            <Footer />
        </Router>

    )
}

export default MainRouter;