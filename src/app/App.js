import "../App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Home from "./layouts/home";
import Reservations from "./layouts/reservations";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";
import Rental from "./layouts/rental";
import Statistics from "./layouts/statistics";
import ProtectedRouteAdmin from "./components/common/protectedRoute/protectedRouteAdmin";
import ProtectedRouteJobs from "./components/common/protectedRoute/protectedRouteJobs";
import AppLoader from "./components/ui/hoc/appLoader";

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />

                <Switch>
                    <Route path="/reservations" component={Reservations} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <ProtectedRouteJobs path="/rental" component={Rental} />
                    <ProtectedRouteAdmin
                        path="/statistic"
                        component={Statistics}
                    />
                    <Route path="/" exact component={Home} />

                    <Redirect to="/" />
                </Switch>
            </AppLoader>
        </div>
    );
}

export default App;
