import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import $ from "jquery";

const Navbar = (props) => {
  const [activePage, setActivePage] = useState("home");
  useEffect(() => {
    setActivePage(
      window.location.href.slice(window.location.href.indexOf("#") + 1)
    );
  }, []);

  useEffect(() => {
    let tittle = $("title");
    tittle.text(`DubeyJi | ${activePage}`);
  }, [activePage]);

  const handleExpand = () => {
    const target = $("#dubeyNav");
    target.slideToggle("fast");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar cyan ">
      <div className="container smooth-scroll">
        <a
          className="navbar-brand"
          href="#home"
          onClick={() => setActivePage("home")}
        >
          <div className="text-center mr-4">
            <strong>Dubey Shop</strong>
            {/* <p className="mb-0 text-sm">Welding Shop</p> */}
          </div>
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          aria-label="Toggle navigation"
          onClick={handleExpand}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="dubeyNav">
          <ul className="navbar-nav mr-auto">
            <li
              className={`nav-item ${
                activePage === "home" && "active info-color"
              }`}
            >
              <a
                className="nav-link"
                href="#home"
                onClick={() => setActivePage("home")}
              >
                Home
              </a>
            </li>
            <li
              className={`nav-item ${
                activePage === "about" && "active info-color"
              }`}
            >
              <a
                className="nav-link"
                href="#about"
                data-offset="60"
                onClick={() => setActivePage("about")}
              >
                About
              </a>
            </li>
            <li
              className={`nav-item ${
                activePage === "team" && "active info-color"
              }`}
            >
              <a
                className="nav-link"
                href="#team"
                onClick={() => setActivePage("team")}
              >
                Team
              </a>
            </li>
            <li
              className={`nav-item ${
                activePage === "products" && "active info-color"
              }`}
            >
              <a
                className="nav-link"
                href="#products"
                onClick={() => setActivePage("products")}
              >
                Products
              </a>
            </li>
            <li
              className={`nav-item ${
                activePage === "gallery" && "active info-color"
              }`}
            >
              <a
                className="nav-link"
                href="#gallery"
                onClick={() => setActivePage("gallery")}
              >
                Gallery
              </a>
            </li>
            <li
              className={`nav-item ${
                activePage === "contact" && "active info-color"
              }`}
            >
              <a
                className="nav-link"
                href="#contact"
                onClick={() => setActivePage("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav nav-flex-icons">
            <li className="nav-item">
              <a
                href="https://www.facebook.com/mdbootstrap"
                className="nav-link waves-effect"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/MDBootstrap"
                className="nav-link waves-effect"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/MDBootstrap"
                className="nav-link waves-effect"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/MDBootstrap"
                className="nav-link waves-effect"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
