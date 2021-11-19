import { useReducer } from "react";
import MainRouter from "./routers/MainRouter";

import { UserContext } from "./contexts/UserContext";
import { FavoriteContext } from "./contexts/FavoriteContext";
import { FollowContext } from "./contexts/FollowContext";
import { PlayContext } from "./contexts/PlayContext";

import { LoginReducer } from "./reducers/LoginReducer";
import { FavoriteReducer } from "./reducers/FavoriteReducer";
import { FollowReducer } from "./reducers/FollowReducer";
import { PlayReducer } from "./reducers/PlayReducer";

function App(){

    const [user, dispatch] = useReducer(LoginReducer, {loggedIn: null})
    const profile = user.loggedIn ? JSON.parse(localStorage.getItem(user.loggedIn)) : "";

    let fav = profile.favorite ? profile.favorite : [];
    let follow = profile.follow ? profile.follow : [];
    
    const [tracks, dispatchTracks] = useReducer(FavoriteReducer, fav)
    const [artists, dispatchArtists] = useReducer(FollowReducer, follow)
    const [title, dispatchPlay] = useReducer(PlayReducer, {play: null})

    return( 
        <UserContext.Provider value = {{user, dispatch}}>
            <FavoriteContext.Provider value = {{tracks, dispatchTracks}}>
                <FollowContext.Provider value = {{artists, dispatchArtists}}>
                    <PlayContext.Provider value = {{title, dispatchPlay}}>
                        <MainRouter/>
                    </PlayContext.Provider>
                </FollowContext.Provider>
            </FavoriteContext.Provider>
        </UserContext.Provider>
    )
}

export default App;