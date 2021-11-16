export const FollowReducer = (artists, action) => {
    const profile = JSON.parse(localStorage.getItem(action.user));
    switch(action.type) {
        case "FOLLOW":
            localStorage.setItem(action.user, JSON.stringify({
                "name": profile.name,
                "pass": profile.pass,
                "favorite": profile.favorite,
                "follow": [
                    ...artists,
                    {
                        id: action.id,
                        picture_medium: action.picture_medium,
                        name: action.name
                    }
                ]
                }))
            return [
                ...artists,
                {
                    id: action.id,
                    picture_medium: action.picture_medium,
                    name: action.name
                }
            ];
        case "UNFOLLOW":
            const follow = artists.filter((artist) => artist.id !== action.id);
            localStorage.setItem(action.user, JSON.stringify({
                "name": profile.name,
                "pass": profile.pass,
                "favorite": profile.favorite,
                "follow": [
                    ...follow
                ]
            }))
            return [
                ...follow
            ];
        default:
            return artists;
    }
}