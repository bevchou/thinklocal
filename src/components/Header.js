import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";
import { UserContext } from "../UserContext";
import Cookies from 'js-cookie';

const Header = () => {
  const updateUserState = (e) => {
    setIsLoggedInState(e.target.checked);
  };
  const history = useHistory();
  const {isLoggedInState, setIsLoggedInState, user, setUser} = useContext(UserContext);
  
  const handleLogout = (e) => {
    e.preventDefault();
    setUser(null);
    setIsLoggedInState(false);
    Cookies.remove("thinklocal");
  }
  return (

    <div className="header">
      <div className="logo">
        <Link to="/">ThinkLocal</Link>
      </div>

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
