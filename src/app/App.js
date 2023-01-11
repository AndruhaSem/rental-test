import "../App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Home from "./layouts/home";
import Reservations from "./layouts/reservations";
import Login from "./layouts/login";
import AuthProvider from "./hooks/useAuth";
import LogOut from "./layouts/logOut";
import Rental from "./layouts/rental";
import Statistics from "./layouts/statistics";
import { StatisticsProvider } from "./hooks/useStatistics";
import { MoneyProvider } from "./hooks/useMoney";
import UserProvider from "./hooks/useUsers";

function App() {
    return (
        <div>
            <AuthProvider>
                <MoneyProvider>
                    <StatisticsProvider>
                        <UserProvider>
                            <NavBar />
                        </UserProvider>
                        <Switch>
                            <Route
                                path="/reservations"
                                component={Reservations}
                            />
                            <Route path="/login/:type?" component={Login} />
                            <Route path="/logout" component={LogOut} />

                            <Route path="/rental" component={Rental} />
                            <Route path="/statistic" component={Statistics} />
                            <Route path="/" exact component={Home} />

                            <Redirect to="/" />
                        </Switch>
                    </StatisticsProvider>
                </MoneyProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
