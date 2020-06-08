import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";
import { UserContext } from "../UserContext";

const Header = () => {
  const updateUserState = (e) => {
    setIsLoggedInState(e.target.checked);
  };
  const history = useHistory();

  const {isLoggedInState, setIsLoggedInState, user, setUser} = useContext(UserContext);
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("logged out");
    setUser(null);
    setIsLoggedInState(false);
  }
  return (

    <div className="header">
      <div className="logo">
        <Link to="/">ThinkLocal</Link>
        {console.log("state", isLoggedInState)}
      </div>

      {/* <div>
        toggle log in
        <input
          type="checkbox"
          checked={isLoggedInState}
          onChange={(e) => updateUserState(e)}
        />
      </div> */}

      {isLoggedInState ? (
        <div className="userActions">
          <Link to="/startgroup">+ Start a group</Link>
          <Link to="/groups">Your groups</Link>
          {/* <Link to="/profile">Profile</Link> */}
          <button
            onClick={(e) => handleLogout(e)}>Log out</button>
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
