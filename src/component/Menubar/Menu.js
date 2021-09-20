import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <nav className="menubar">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/blogs">Blogs</a>
        <a href="/history">History</a>
      </nav>
    </div>
  );
};

export default Menu;
