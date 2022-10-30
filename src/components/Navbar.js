import React from "react";
import logo from "../images/habib-grifa-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top position-sticky">
      <div className="container">
        <a className="navbar-brand" target="_blank" href="#">
          <img
            className="img-fluid"
            src={logo}
            style={{ width: "auto", height: "75px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div style={{ width: "100%" }}>
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center"
              style={{ width: "100%" }}
            >
              <li className="nav-item active">
                <Link to="/" className="nav-link p-3">
                  Home
                </Link>
                {/* <a className="nav-link p-3" href="#">
                  Home <span className="sr-only">(current)</span>
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="/produits" className="nav-link p-3">
                  Produits
                </Link>
                {/* <a className="nav-link p-3" href="#about-us">
                  Products
                </a> */}
              </li>
              <li className="nav-item">
                <Link to="about" className="nav-link p-3">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
