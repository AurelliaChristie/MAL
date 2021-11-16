export const LoginReducer = (user, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                loggedIn : action.email
            };
        case "LOGOUT":
            return {
                loggedIn : null
            };
        default:
            return user;
    }
}