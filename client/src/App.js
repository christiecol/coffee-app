import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";

import store from "./index";
import { responseUser } from "./redux/actions/actions";
import { getUser } from "./redux/reducers/UsersReducer";
import { getFav } from "./redux/reducers/UsersReducer";

import { HomePage } from "./pages/home-page/HomePage";
import { Navbar } from "./components/navbar/Navbar";
import { OriginsPage } from "./pages/origins-page/OriginsPage";
import { MyRecipesPage } from "./pages/recipes-page/MyRecipesPage";
import { LogInPage } from "./pages/log-in/LoginPage";
import { BrewMethodsPage } from "./pages/brew-methods/BrewMethodsPage";

function App() {
  // let currentUserEmail = useSelector(getUser);
  // let currentUserFav = useSelector(getFav);
  // const [user, setUser] = useState(currentUserEmail)

  let persistedState = useSelector((state) => {
    return state?.users;
  });

  console.log("STATE", persistedState);

  const MainLayout = ({ children }) => (
    <>
      <Navbar />
      {children}
    </>
  );

  useEffect(() => {
    console.log("LOG1 UE1", persistedState);
    const data = localStorage.getItem("user");
    if (data) {
      persistedState = JSON.parse(data);
    }
    console.log("LOG2 UE1", persistedState);
  }, []);

  useEffect(() => {
    console.log("LOG1 UE2", persistedState);
    localStorage.setItem("user", JSON.stringify(persistedState));
    console.log("LOG2 UE2", persistedState);
  });

  return (
    <>
      {/* <Provider store={store}> */}
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

          <Route exact path="/brewmethods">
            <MainLayout>
              <BrewMethodsPage />
            </MainLayout>
          </Route>

          <Route exact path="/myrecipes">
            <MainLayout>
              <MyRecipesPage />
            </MainLayout>
          </Route>
        </Switch>
      </Router>
      {/* </Provider> */}
    </>
  );
}

// const NavDiv = styled.div`
//   margin-top: 0;
// `;
export default App;
