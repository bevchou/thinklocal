import React, {useState} from "react";
import "./Header.scss";

// user states for: signed in, not signed it
// { userLoggedIn }
const Header = ({isLoggedInState, setIsLoggedInState}) => {

  const updateUserState = (e) => {
    setIsLoggedInState(e.target.checked);
  }
  return (
    <div className="header">
      <div className="logo"><a href="/">ThinkLocal</a></div>

      <div>toggle log in<input type="checkbox" checked={isLoggedInState} onChange={(e) => updateUserState(e)}/></div>


      {isLoggedInState ? (
        <div className="userActions">
          <a href="/startgroup">+ Start a group</a>
          <a href="/groups">Your groups</a>
          <a href="/profile">Profile</a>
          <a href="/">Log out</a>
        </div>
      ) : (
        <div className="userActions">
          <a href="/about">About ThinkLocal</a>
          <button>Sign In / Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Header;
