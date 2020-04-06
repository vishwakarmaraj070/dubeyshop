import React from "react";
import PropTypes from "prop-types";

const Testimonial = (props) => {
  return (
    <div className="container my-5">
      <section className="text-center dark-grey-text">
        <h2 className="font-weight-bold mb-4 pb-2 text-info">Testimonials</h2>

        <div className="wrapper-carousel-fix">
          <div
            id="carousel-example-1"
            className="carousel no-flex testimonial-carousel slide carousel-fade"
            data-ride="carousel"
            data-interval="false"
          >
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="testimonial">
                  <div className="avatar mx-auto mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                      className="rounded-circle img-fluid"
                      alt="First sample avatar image"
                    />
                  </div>
                  <p>
                    <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Quod eos id officiis hic
                    tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Dolore cum accusamus
                    eveniet molestias voluptatum inventore laboriosam labore
                    sit, aspernatur praesentium iste impedit quidem dolor
                    veniam.
                  </p>
                  <h4 className="font-weight-bold">Anna Deynah</h4>
                  <h6 className="font-weight-bold my-3">
                    Founder at ET Company
                  </h6>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star-half-alt blue-text"> </i>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial">
                  <div className="avatar mx-auto mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
                      className="rounded-circle img-fluid"
                      alt="Second sample avatar image"
                    />
                  </div>
                  <p>
                    <i className="fas fa-quote-left"></i> Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore.{" "}
                  </p>
                  <h4 className="font-weight-bold">Maria Kate</h4>
                  <h6 className="font-weight-bold my-3">
                    Photographer at Studio LA
                  </h6>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star blue-text"> </i>
                </div>
              </div>
              <div className="carousel-item">
                <div className="testimonial">
                  <div className="avatar mx-auto mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                      className="rounded-circle img-fluid"
                      alt="Third sample avatar image"
                    />
                  </div>
                  <p>
                    <i className="fas fa-quote-left"></i> Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium.
                  </p>
                  <h4 className="font-weight-bold">John Doe</h4>
                  <h6 className="font-weight-bold my-3">
                    Front-end Developer in NY
                  </h6>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="fas fa-star blue-text"> </i>
                  <i className="far fa-star blue-text"> </i>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev left carousel-control"
              href="#carousel-example-1"
              role="button"
              data-slide="prev"
            >
              <span className="icon-prev" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next right carousel-control"
              href="#carousel-example-1"
              role="button"
              data-slide="next"
            >
              <span className="icon-next" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

Testimonial.propTypes = {};

export default Testimonial;
