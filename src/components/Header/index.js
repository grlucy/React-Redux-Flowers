import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./header.css";

function Header() {
  const location = useLocation();
  const numLikes = useSelector((state) => state.numLikes);

  return (
    <header>
      <div className="flex-head">
        <p className="logo">Flower Counter</p>
        <nav>
          <div className="flex-head nav">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-active" : "nav-inactive"
              }
            >
              Home
            </Link>
            <Link
              to="/red"
              className={
                location.pathname === "/red" ? "nav-active" : "nav-inactive"
              }
            >
              Red Flowers
            </Link>
            <Link
              to="/blue"
              className={
                location.pathname === "/blue" ? "nav-active" : "nav-inactive"
              }
            >
              Blue Flowers
            </Link>
          </div>
        </nav>
        <p className="like-num">
          <i className="fa fa-heart" aria-hidden="true"></i> {numLikes}
        </p>
      </div>
    </header>
  );
}

export default Header;
