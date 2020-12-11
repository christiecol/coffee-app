import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { HomePage } from "./pages/home-page/HomePage";
import { Navbar } from "./components/navbar/Navbar";
import { OriginsPage } from "./pages/origins-page/OriginsPage";
import { MyRecipesPage } from "./pages/recipes-page/MyRecipesPage";
import { Mui } from "./components/Mui";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />

        <Navbar />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/messaroundwithmui">
            <Mui />
          </Route>

          <Route exact path="/origins">
            <OriginsPage />
          </Route>

          <Route exact path="/myrecipes">
            <MyRecipesPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

// const NavDiv = styled.div`
//   margin-top: 0;
// `;
export default App;
