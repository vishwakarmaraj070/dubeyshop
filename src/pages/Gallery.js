import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";

const Gallery = (props) => {
  const handleFilter = (filter) => {
    const selectedClass = filter;
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

  return (
    <div class="container my-5 py-2" id="gallery">
      <section>
        <h2 class="font-weight-bold text-center text-info pb-2 ">Gallery</h2>
        <div class="row">
          <div class="col-md-12 dark-grey-text d-flex justify-content-center mb-5">
            <button
              type="button"
              class="btn btn-flat btn-lg m-0 px-3 py-1 filter"
              data-rel="all"
              onClick={() => handleFilter("all")}
            >
              All
            </button>
            <p class="font-weight-bold mb-0 px-1 py-1">/</p>
            <button
              type="button"
              class="btn btn-flat btn-lg m-0 px-3 py-1 filter"
              data-rel="1"
              onClick={() => handleFilter("1")}
            >
              Design
            </button>
            <p class="font-weight-bold mb-0 px-1 py-1">/</p>
            <button
              type="button"
              class="btn btn-flat btn-lg m-0 px-3 py-1 filter"
              data-rel="2"
              onClick={() => handleFilter("2")}
            >
              Mockup
            </button>
          </div>
        </div>

        <div class="gallery mb-5">
          <div class="mb-3 pics all 2 animation">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                class="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
                alt="Card image cap"
              />
            </a>
          </div>

          <div class="mb-3 pics animation all 1">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                class="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Vertical/7.jpg"
                alt="Card image cap"
              />
            </a>
          </div>

          <div class="mb-3 pics animation all 1">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                class="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Vertical/4.jpg"
                alt="Card image cap"
              />
            </a>
          </div>

          <div class="mb-3 pics all 2 animation">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                class="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Others/images/63.jpg"
                alt="Card image cap"
              />
            </a>
          </div>

          <div class="mb-3 pics all 2 animation">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                class="img-fluid z-depth-1 rounded"
                src="https://mdbootstrap.com/img/Photos/Others/images/64.jpg"
                alt="Card image cap"
              />
            </a>
          </div>

          <div class="mb-3 pics animation all 1">
            <a data-toggle="modal" data-target="#basicExampleModal">
              <img
                class="img-fluid z-depth-1 rounded"
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
