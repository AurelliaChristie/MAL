export const PlayReducer = (title, action) => {
    switch(action.type) {
        case "PLAY":
            return {
                play : action.title
            };
        default:
            return title;
    }
}