import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faPause, faHeart, faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faPause, faHeart, faSearch, faUserCircle);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);