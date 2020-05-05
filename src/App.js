import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Homepage from "./pages/Homepage";
import Event from "./pages/Event";
import CommunityProfile from "./pages/CommunityProfile";
import About from "./pages/About";

import Header from "./components/Header";

import "./App.scss";

const history = createBrowserHistory();

function App() {
  const [isLoggedIn, isLoggedInState] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} isLoggedInState={isLoggedInState} />

      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Homepage isLoggedIn={isLoggedIn} />}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/community" component={CommunityProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
