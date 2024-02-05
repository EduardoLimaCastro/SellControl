import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import SuppliersSite from "./suppliers/Pages/SuppliersSite";
import Login from "./login/Pages/Login";
import MainNavigation from "./shared/Components/Navigation/MainNavigation";
import SideMenu from "./shared/Components/Navigation/SideMenu";
import ActiveSectionContextProvider from "./shared/Context/ActiveSectionContext";
import InsertSuppliersSite from "./suppliers/Pages/InsertSuppliersSite";
import SearchSuppliersSite from "./suppliers/Pages/SearchSuppliersSite";

function App() {
  return (
    <ActiveSectionContextProvider>
      <Router>
        <MainNavigation />
        <div className="flex w-[100%]">
          <aside className="hidden tablet:block w-[280px]">
            <SideMenu></SideMenu>
          </aside>
          <main className="flex w-screen">
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>
              <Route path="/suppliers" exact>
                <SuppliersSite />
              </Route>
              <Route path="/suppliers/cadastro" exact>
                <InsertSuppliersSite />
              </Route>
              <Route path="/suppliers/consulta" exact>
                <SearchSuppliersSite />
              </Route>
              <Redirect to={"/"} exact />
            </Switch>
          </main>
        </div>
      </Router>
    </ActiveSectionContextProvider>
  );
}

export default App;
