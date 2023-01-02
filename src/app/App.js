import "../App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Home from "./layouts/home";
import Reservations from "./layouts/reservations";
import Login from "./layouts/login";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reservations" exact component={Reservations} />
        <Route path="/login/:type?" component={Login} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
