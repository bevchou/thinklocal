import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div>Hello this is a header</div>
      <a href="/about">About ThinkLocal</a>
      <button>Sign in</button>
    </div>
  );
};

export default Header;
