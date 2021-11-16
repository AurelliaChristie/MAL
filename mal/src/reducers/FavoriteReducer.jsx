export const FavoriteReducer = (tracks, action) => {
    const profile = JSON.parse(localStorage.getItem(action.user));
    switch(action.type) {
        case "FAVORITE":
            localStorage.setItem(action.user, JSON.stringify({
                "name": profile.name,
                "pass": profile.pass,
                "favorite": [
                    ...tracks,
                    {   
                        id: action.id,
                        album:{
                            cover_small: action.album.cover_small
                        },
                        title: action.title,
                        artist:{
                            name: action.artist.name
                        },
                        preview: action.preview
                    }
                ],
                "follow": profile.follow
            }))
            return [
                ...tracks,
                {   
                    id: action.id,
                    album:{
                        cover_small: action.album.cover_small
                    },
                    title: action.title,
                    artist:{
                        name: action.artist.name
                    },
                    preview: action.preview
                }
            ];
        case "UNFAVORITE":
            const fav = tracks.filter((track) => track.id !== action.id);
            localStorage.setItem(action.user, JSON.stringify({
                "name": profile.name,
                "pass": profile.pass,
                "favorite": [
                ...fav
                ],
                "follow": profile.follow
            }))
            return [
                ...fav
            ];
        default:
            return tracks;
    }
}