import React, { useState } from "react";
import PropTypes from "prop-types";
import $ from "jquery";

const Gallery = (props) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const handleFilter = (filter) => {
    const selectedClass = filter;
    setActiveFilter(filter);
    $(".gallery").fadeTo(100, 0.1);
    $(".gallery div")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("animation");
    setTimeout(function () {
      $("." + selectedClass)
        .fadeIn()
        .addClass("animation");
      $(".gallery").fadeTo(300, 1);
    }, 300);
  };
  const btnText = ["all", "gate", "railing", "window", "door"];

  return (
    <div className="container my-5 pt-5" id="gallery">
      <section>
        <h2 className="font-weight-bold text-center text-info pb-2 ">
          Gallery
        </h2>
        <div className="row">
          <div className="col-md-12 dark-grey-text d-flex justify-content-center mb-5">
            {btnText.map((btn) => (
              <button
                key={btn}
                type="button"
                className={`btn ${
                  activeFilter === btn ? "btn-info" : "btn-outline-info"
                }  filter waves-effect btn-rounded`}
                onClick={() => handleFilter(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery mb-5">
          <div className="mb-3 pics all 2 animation">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                className="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
                alt="Card image cap"
              />
            </a>
          </div>

          <div className="mb-3 pics animation all 1">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                className="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Vertical/7.jpg"
                alt="Card image cap"
              />
            </a>
          </div>

          <div className="mb-3 pics animation all 1">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                className="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Vertical/4.jpg"
                alt="Card image cap"
              />
            </a>
          </div>

          <div className="mb-3 pics all 2 animation">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                className="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Others/images/63.jpg"
                alt="Card image cap"
              />
            </a>
          </div>

          <div className="mb-3 pics all 2 animation">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                className="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Others/images/64.jpg"
                alt="Card image cap"
              />
            </a>
          </div>

          <div className="mb-3 pics animation all 1">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                className="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Vertical/5.jpg"
                alt="Card image cap"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
