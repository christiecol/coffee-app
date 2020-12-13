import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { HomePage } from "./pages/home-page/HomePage";
import { Navbar } from "./components/navbar/Navbar";
import { OriginsPage } from "./pages/origins-page/OriginsPage";
import { MyRecipesPage } from "./pages/recipes-page/MyRecipesPage";
import { Mui } from "./components/Mui";
import { LogInPage } from "./pages/log-in/LoginPage";

function App() {
  const MainLayout = ({ children }) => (
    <>
      <Navbar />
      {children}
    </>
  );

  return (
    <>
      <Router>
        <GlobalStyles />

        <Switch>
          <Route exact path="/">
            <LogInPage />
          </Route>

          <Route exact path="/home">
            <MainLayout>
              <HomePage />
            </MainLayout>
          </Route>

          <Route exact path="/origins">
            <MainLayout>
              <OriginsPage />
            </MainLayout>
          </Route>

          <Route exact path="/myrecipes">
            <MainLayout>
              <MyRecipesPage />
            </MainLayout>
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
