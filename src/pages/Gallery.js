import React, { useState } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import door_1 from "../assets/images/door/door-1.jpg";
import door_2 from "../assets/images/door/door-2.jpg";
import door_3 from "../assets/images/door/door-3.jpg";
import door_4 from "../assets/images/door/door-4.jpeg";
import door_5 from "../assets/images/door/door-5.jpeg";
import door_6 from "../assets/images/door/door-6.jpeg";
import door_7 from "../assets/images/door/door-7.jpeg";
import gate_1 from "../assets/images/gate/gate-1.jpg";
import gate_2 from "../assets/images/gate/gate-2.jpg";
import gate_3 from "../assets/images/gate/gate-3.jpg";
import gate_4 from "../assets/images/gate/gate-4.jpg";
import gate_5 from "../assets/images/gate/gate-5.jpg";
import gate_6 from "../assets/images/gate/gate-6.jpg";
import gate_7 from "../assets/images/gate/gate-7.jpeg";
import gate_8 from "../assets/images/gate/gate-8.jpeg";
import gate_9 from "../assets/images/gate/gate-9.jpeg";
import railing_1 from "../assets/images/railing/railing-1.jpeg";
import railing_2 from "../assets/images/railing/railing-2.jpeg";
import railing_3 from "../assets/images/railing/railing-3.jpeg";
import railing_4 from "../assets/images/railing/railing-4.jpeg";
import railing_5 from "../assets/images/railing/railing-5.jpeg";
import railing_6 from "../assets/images/railing/railing-6.jpeg";
import railing_7 from "../assets/images/railing/railing-7.jpeg";
import railing_8 from "../assets/images/railing/railing-8.jpeg";
import railing_9 from "../assets/images/railing/railing-9.jpeg";
import railing_10 from "../assets/images/railing/railing-10.jpeg";
import railing_11 from "../assets/images/railing/railing-11.jpeg";
import railing_12 from "../assets/images/railing/railing-12.jpeg";
import railing_13 from "../assets/images/railing/railing-13.jpeg";
import railing_14 from "../assets/images/railing/railing-14.jpeg";
import railing_15 from "../assets/images/railing/railing-15.jpeg";
import window_1 from "../assets/images/window/window-1.jpg";
import window_2 from "../assets/images/window/window-2.jpg";
import window_3 from "../assets/images/window/window-3.jpg";
import window_4 from "../assets/images/window/window-4.jpeg";
import window_5 from "../assets/images/window/window-5.jpeg";
import window_6 from "../assets/images/window/window-6.jpeg";
import window_7 from "../assets/images/window/window-7.jpg";
import window_8 from "../assets/images/window/window-8.jpeg";
import all_1 from "../assets/images/all-1.jpeg";
import all_2 from "../assets/images/all-2.jpeg";
import all_3 from "../assets/images/all-3.jpeg";
import all_4 from "../assets/images/all-4.jpeg";

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
  const doorImgs = [door_1, door_2, door_3, door_4, door_5, door_6, door_7];
  const gateImgs = [
    gate_1,
    gate_2,
    gate_3,
    gate_4,
    gate_5,
    gate_6,
    gate_7,
    gate_8,
    gate_9,
  ];
  const railingImg = [
    railing_1,
    railing_10,
    railing_11,
    railing_12,
    railing_13,
    railing_13,
    railing_14,
    railing_15,
    railing_2,
    railing_3,
    railing_4,
    railing_5,
    railing_6,
    railing_7,
    railing_8,
    railing_9,
  ];

  const windowImg = [
    window_1,
    window_2,
    window_3,
    window_4,
    window_5,
    window_6,
    window_7,
    window_8,
  ];
  const allImg = [all_1, all_2, all_3, all_4];

  return (
    <div className="container my-5 pt-5" id="gallery">
      <section>
        <h2 className="font-weight-bold text-center text-info pb-2 ">
          Gallery
        </h2>
        <div className="row">
          <div className="col-md-12 dark-grey-text d-flex flex-wrap justify-content-center mb-5">
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
        <div
          style={{ maxHeight: "900px", overflow: "hidden", overflowY: "auto" }}
        >
          <div className="gallery mb-5">
            {doorImgs.map((img) => (
              <div key={img} className="mb-3 pics all door animation">
                <img
                  className="img-fluid z-depth-1 rounded"
                  src={img}
                  alt={`${img}`}
                />
              </div>
            ))}
            {gateImgs.map((img) => (
              <div key={img} className="mb-3 pics all gate animation">
                <img
                  className="img-fluid z-depth-1 rounded"
                  src={img}
                  alt={`${img}`}
                />
              </div>
            ))}
            {railingImg.map((img) => (
              <div key={img} className="mb-3 pics all railing animation">
                <img
                  className="img-fluid z-depth-1 rounded"
                  src={img}
                  alt={`${img}`}
                />
              </div>
            ))}
            {windowImg.map((img) => (
              <div key={img} className="mb-3 pics all window animation">
                <img
                  className="img-fluid z-depth-1 rounded"
                  src={img}
                  alt={`${img}`}
                />
              </div>
            ))}
            {allImg.map((img) => (
              <div key={img} className="mb-3 pics all animation">
                <img
                  className="img-fluid z-depth-1 rounded"
                  src={img}
                  alt={`${img}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

Gallery.propTypes = {};

export default Gallery;
