import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest }) {
    const currentUser = false; //Hardcoded for now
    return (
        <Route
            {...rest}
            render={props => currentUser ? <Component {...props} /> : <Redirect to="/signup" />
            }
        ></Route>
    )
}