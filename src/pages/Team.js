import React from "react";
import PropTypes from "prop-types";

const Team = (props) => {
  return (
    <div className="container pt-5 my-2 " id="team">
      <section className="p-md-3 mx-md-5 text-center text-lg-left">
        <h2 className="text-center mx-auto font-weight-bold text-info mb-4 pb-2">
          Our Team
        </h2>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="p-4">
              <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  className="img-fluid rounded-circle z-depth-1"
                />
              </div>
              <div className="text-center mt-3">
                <h6 className="font-weight-bold pt-2">Alan Turing</h6>
                <p className="text-muted">
                  <small>
                    <i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </i>
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="p-4">
              <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                  className="img-fluid rounded-circle z-depth-1"
                />
              </div>
              <div className="text-center mt-3">
                <h6 className="font-weight-bold pt-2">Nathalie Fry</h6>
                <p className="text-muted">
                  <small>
                    <i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </i>
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="p-4">
              <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                  className="img-fluid rounded-circle z-depth-1"
                />
              </div>
              <div className="text-center mt-3">
                <h6 className="font-weight-bold pt-2">Billy Turner</h6>
                <p className="text-muted">
                  <small>
                    <i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </i>
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="p-4">
              <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
                  className="img-fluid rounded-circle z-depth-1"
                />
              </div>
              <div className="text-center mt-3">
                <h6 className="font-weight-bold pt-2">Veronica Smith</h6>
                <p className="text-muted">
                  <small>
                    <i>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </i>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Team.propTypes = {};

export default Team;
