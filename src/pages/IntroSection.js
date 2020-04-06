import React from "react";
import PropTypes from "prop-types";
const Intro = () => (
  <div className="text-center white-text mx-5 wow fadeIn">
    <h1 className="mb-4">
      <strong>We are the welder with best services</strong>
    </h1>

    <p>
      <strong>Best & free guide and design for you dream home</strong>
    </p>

    <p className="mb-4 d-none d-md-block">
      <strong>
        we are alway try to give our best, we belive in good sevives,
      </strong>
    </p>

    <a className="btn btn-outline-info btn-lg" href="#contact">
      Contact
    </a>
  </div>
);

const IntroSection = (props) => {
  return (
    <div
      id="home"
      className="carousel slide carousel-fade"
      data-ride="carousel"
      style={{ height: "100vh" }}
    >
      <ol className="carousel-indicators">
        <li data-target="#home" data-slide-to="0" className="active"></li>
        <li data-target="#home" data-slide-to="1"></li>
        <li data-target="#home" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="view">
            <video className="video-intro" autoPlay loop muted>
              <source
                src="https://mdbootstrap.com/img/video/city.mp4"
                type="video/mp4"
              />
            </video>

            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
              <Intro />
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="view">
            <video className="video-intro" autoPlay loop muted>
              <source
                src="https://mdbootstrap.com/img/video/forest.mp4"
                type="video/mp4"
              />
            </video>

            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
              <Intro />
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="view">
            <video className="video-intro" autoPlay loop muted>
              <source
                src="https://mdbootstrap.com/img/video/Tropical.mp4"
                type="video/mp4"
              />
            </video>

            <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
              <Intro />
            </div>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#home"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#home"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

IntroSection.propTypes = {};

export default IntroSection;
