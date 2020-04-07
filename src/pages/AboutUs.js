import React from "react";
import DubeyImg from "../assets/images/dubey.jpeg";

const AboutUs = (props) => {
  return (
    <div className="container my-5" id="about">
      <section className="">
        <h2 className="text-center font-weight-bold mb-4 pb-3 text-info">
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
              We are the team with best customer services
            </h3>
            <p className="text-muted">
              Hi, This is Ugarshen Dubey, we are working from last three year in
              this field, when i started my journey in this field, i was to
              young and i was working in small shop, while doing hard and smart
              work i got more and more hike, but my dream was not that, i just
              want be an self employee (entrepreneur), so i started my own work
              shop with my friend and my brother and now i have 3 mistree, 8
              helper, as well as we have painter, plumber, carpenter,
              electrician, we help our customer with full satisfaction
              guaranteed services, Thank you!
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
