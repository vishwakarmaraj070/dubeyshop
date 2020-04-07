import React from "react";
import DubeyImg from "../assets/images/dubey.jpeg";

const AboutUs = (props) => {
  return (
    <div className="container my-5" id="about">
      <section className="">
        <h2 className="text-center font-weight-bold mb-4 pb-2 text-info">
          About Us
        </h2>
        <div className="row">
          <div className="col-md-5 col-sm-12 mb-md-0 mb-4">
            <div className="view overlay rounded z-depth-1 mb-lg-0 mb-4 ">
              <div className="about-img">
                <img className="img-fluid" src={DubeyImg} alt="Sample" />
              </div>
              <a>
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>
          </div>

          <div className="col-md-7 col-sm-12 mb-md-0 mb-4 mt-xl-4">
            <h3 className="font-weight-normal mb-4">
              Convert your visitors to real customers
            </h3>
            <p className="text-muted">
              Option as can distributors. And to suppliers, given a copy the
              horrible arrange yes, we had hundreds leave was more which a I the
              king's had the so soon throughout in necessary which at way did
              phase a young written, descriptions, late uninspired, to times
              owner themselves them. Get sported uninspired, the a box to an to
              but on been the succeed have couldn't set.
            </p>
            <a className="btn btn-outline-cyan mx-0 waves-effect btn-rounded">
              Read More <i className="fas fa-arrow-right fs-9 ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
