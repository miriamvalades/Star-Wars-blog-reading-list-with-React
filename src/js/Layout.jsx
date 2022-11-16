import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

import ScrollToTop from "./component/ScrollToTop.jsx";

import { Home } from "./views/Home.jsx";
import { SingleCharacter } from "./views/SingleCharacter.jsx";
import { SingleSpecies } from "./views/SingleSpecies.jsx";
import { SingleVehicle } from "./views/SingleVehicle.jsx";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";

//create your first component
const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/singleCharacter">
              <SingleCharacter />
            </Route>
            <Route exact path="/singleSpecies">
              <SingleSpecies />
            </Route>
            <Route exact path="/singleVehicle">
              <SingleVehicle />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);