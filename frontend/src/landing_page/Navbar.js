import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 fixed-top">
      <div className="container px-5">

        {/* LOGO */}
        <NavLink className="navbar-brand" to="/">
          <img
            src="media/Images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </NavLink>

        {/* NAV ITEMS */}
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav align-items-center">

            <li className="nav-item px-3">
              <a href="http://localhost:3001/signup" className="nav-link">
                Signup
              </a>
            </li>

            <li className="nav-item px-3">
              <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>
                About
              </NavLink>
            </li>

            <li className="nav-item px-3">
              <NavLink to="/product" className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>
                Products
              </NavLink>
            </li>

            <li className="nav-item px-3">
              <NavLink to="/pricing" className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>
                Pricing
              </NavLink>
            </li>

            <li className="nav-item px-3">
              <NavLink to="/support" className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>
                Support
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;