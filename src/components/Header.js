import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";

// user states for: signed in, not signed it
// { userLoggedIn }
const Header = ({ isLoggedInState, setIsLoggedInState }) => {
  const updateUserState = (e) => {
    setIsLoggedInState(e.target.checked);
  };
  const history = useHistory();
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">ThinkLocal</Link>
      </div>

      <div>
        toggle log in
        <input
          type="checkbox"
          checked={isLoggedInState}
          onChange={(e) => updateUserState(e)}
        />
      </div>

      {isLoggedInState ? (
        <div className="userActions">
          <Link to="/startgroup">+ Start a group</Link>
          <Link to="/groups">Your groups</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/">Log out</Link>
        </div>
      ) : (
        <div className="userActions">
          <Link to="/about">About ThinkLocal</Link>
          <button
            onClick={() => {
              history.push("/signin");
            }}
          >
            Sign In / Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
