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
import SuppliersDashboardSite from "./suppliers/Pages/DashboardSite";
import ActiveSubSectionContextProvider from "./shared/Context/SubsectionContext";

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
              <ActiveSubSectionContextProvider>
                <Route path="/suppliers" exact>
                  <SuppliersSite />
                </Route>
                <Route path="/suppliers/dashboard" exact>
                  <SuppliersDashboardSite />
                </Route>
              </ActiveSubSectionContextProvider>
              <Redirect to={"/"} exact />
            </Switch>
          </main>
        </div>
      </Router>
    </ActiveSectionContextProvider>
  );
}

export default App;
