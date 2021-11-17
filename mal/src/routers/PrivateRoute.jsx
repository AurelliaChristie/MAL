import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';

const PrivateRoute = ({component: Component, ...rest}) => {
    const {user} = useContext(UserContext);
    return (
        <Route {...rest} render={props => (
            user.loggedIn ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;