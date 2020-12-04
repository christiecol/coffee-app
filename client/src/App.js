import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { HomePage } from "./pages/home-page/HomePage";
import { Navbar } from "./components/navbar/Navbar";
import { OriginsPage } from "./pages/origins-page/OriginsPage";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />

        <NavDiv>
          <Navbar />
        </NavDiv>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/origins">
            <OriginsPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

const NavDiv = styled.div`
  margin-top: 0;
`;
export default App;
