import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Signup = lazy(() => import('../components/Signin/Signup/Signup'))
const MainPage = lazy(() => import('../containers/MainPage/MainPage'))
const PrivateRoute = lazy(() => import('./PrivateRoute'))

export default function Routes() {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>Page is Loading...</div>}>
                    <Switch>
                        <PrivateRoute exact path="/" component={MainPage} />
                        <Route path="/signup" component={Signup} />
                    </Switch>
                </Suspense>
            </Router>
        </div>
    )
};
