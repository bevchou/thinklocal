import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Homepage from "./pages/Homepage";
import Event from "./pages/Event";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Group from "./pages/Group";
import About from "./pages/About";

import Header from "./components/Header";
import Cookies from 'js-cookie';

import { UserContext } from "./UserContext";
import "./App.scss";

const history = createBrowserHistory();

function App() {
  const userCookie = Cookies.get('thinklocal');
  const isCookieSet = userCookie === undefined ? false : true;

  const [isLoggedInState, setIsLoggedInState] = useState(isCookieSet);
  const [zipcodeState, setZipcodeState] = useState(null);
  const userObj = isCookieSet ? JSON.parse(userCookie) : null;
  const [user, setUser] = useState(userObj);

  const providerValue = useMemo(() => ({ 
    isLoggedInState, 
    setIsLoggedInState,
    user,
    setUser}), [isLoggedInState, setIsLoggedInState, user, setUser]);

  return (
    <>
      <Router history={history} basename="/demo">
          <UserContext.Provider value={providerValue}>
          <Header/>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Homepage
                  zipcodeState={zipcodeState}
                  setZipcodeState={setZipcodeState}
                />
              )}
            />
            <Route exact path="/about" component={About} />
            <Route 
              exact 
              path="/signin" 
              component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/event/:eventId" component={Event} />
            <Route exact path="/group/:name" component={Group} />
          </Switch>
          </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
