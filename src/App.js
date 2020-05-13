import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Homepage from "./pages/Homepage";
import Event from "./pages/Event";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CommunityProfile from "./pages/CommunityProfile";
import About from "./pages/About";

import Header from "./components/Header";

import "./App.scss";

const history = createBrowserHistory();

function App() {
  const [isLoggedInState, setIsLoggedInState] = useState(false);

  const [zipcodeState, setZipcodeState] = useState(null);

  return (
    <>
      <Header isLoggedInState={isLoggedInState} setIsLoggedInState={setIsLoggedInState} />

      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Homepage isLoggedInState={isLoggedInState} zipcodeState={zipcodeState} setZipcodeState={setZipcodeState}/>
            )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/event/:eventId" component={Event} />
          <Route exact path="/community" component={CommunityProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
