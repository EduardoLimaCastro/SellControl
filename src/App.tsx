import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Header from "./shared/Components/Header";
import SuppliersSite from "./suppliers/Pages/SuppliersSite";
import Login from "./login/Pages/Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/suppliers" exact>
          <SuppliersSite />
        </Route>
        <Redirect to={"/"} exact />
      </Switch>
    </Router>
  );
}

export default App;
