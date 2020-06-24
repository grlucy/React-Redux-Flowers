import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="flex-head">
        <p className="logo">Flower Counter</p>
        <nav>
          <div className="flex-head nav">
            <Link
              to="/"
              className={location === "/" ? "nav-active" : "nav-inactive"}
            >
              Home
            </Link>
            <Link
              to="/red"
              className={location === "/red" ? "nav-active" : "nav-inactive"}
            >
              Red Flowers
            </Link>
            <Link
              to="/blue"
              className={location === "/blue" ? "nav-active" : "nav-inactive"}
            >
              Blue Flowers
            </Link>
          </div>
        </nav>
        <p>You have liked X flowers!</p>
      </div>
    </header>
  );
}

export default Header;
