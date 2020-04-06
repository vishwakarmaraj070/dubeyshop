import React from "react";
import PropTypes from "prop-types";

const IntroSection = (props) => {
  return (
    <div className="pt-5">
      <div
        id="home"
        className="view jarallax"
        data-jarallax='{"speed": 0.2}'
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/Photos/Others/img%20%2853%29.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="mask rgba-stylish-light">
          <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className="row pt-5 mt-3">
              <div className="col-md-12 mb-3">
                <div className="intro-info-content text-center">
                  <h1
                    className="display-3 white-text mb-5 wow fadeInDown"
                    data-wow-delay="0.3s"
                  >
                    ABOUT <a className="white-text font-weight-bold">US</a>
                  </h1>
                  <h5
                    className="text-uppercase white-text mb-5 mt-1 font-weight-bold wow fadeInDown"
                    data-wow-delay="0.3s"
                  >
                    Lorem ipsum dolor sit amet consectetur.{" "}
                  </h5>
                  <a
                    className="btn btn-pink wow fadeInDown btn-rounded"
                    data-wow-delay="0.3s"
                    href="#product"
                  >
                    Product
                  </a>
                  <a
                    className="btn btn-cyan wow fadeInDown btn-rounded"
                    data-wow-delay="0.3s"
                    href="#about"
                  >
                    About
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

IntroSection.propTypes = {};

export default IntroSection;
