import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../App.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
      <main>
        <section>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a target="_blank" href="#">
                  <img
                    src="https://via.placeholder.com/1468x500"
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
              </div>
              <div className="carousel-item">
                <a target="_blank" href="#">
                  <img
                    src="https://via.placeholder.com/1468x500"
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
              </div>
              <div className="carousel-item">
                <a target="_blank" href="#">
                  <img
                    src="https://via.placeholder.com/1468x500"
                    className="d-block w-100"
                    alt="..."
                  />
                </a>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
        <section id="about-us" className="py-5">
          <div className="container">
            <div className="text-center py-4">
              <h1>Habib Grifa Babat Zawali</h1>
            </div>
            <div className="row">
              <div className="col-md-3">
                <a target="_blank" href="#">
                  <img
                    src="https://via.placeholder.com/250x250"
                    className="d-block img-fluid"
                    alt="..."
                  />
                </a>
              </div>
              <div className="col-md-9">
                <p className="lead text-muted">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book. It usually
                  begins. Lorem ipsum, or lipsum as it is sometimes known, is
                  dummy text used in laying out print, graphic or web designs.
                  The passage is attributed to an unknown typesetter in the 15th
                  century.
                </p>
                <p>
                  <a href="#" className="btn btn-primary my-2 me-2">
                    More Details
                  </a>
                  <a
                    href="https://www.instagram.com/habib_grifa_babat_zawali/"
                    className="btn btn-secondary my-2"
                  >
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="py-5 bg-light">
          <div className="container">
            <div className="text-center py-4">
              <h1>Features</h1>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 mb-2">
                <div className="box-part text-center">
                  <i
                    className="text-primary fas fa-heart fa-3x mb-3"
                    aria-hidden="true"
                  ></i>
                  <div className="title">
                    <h4>Premium Design</h4>
                  </div>
                  <div className="text mb-3">
                    <span>
                      Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.
                      Assum decore te sed. Elitr scripta ocurreret qui ad.
                    </span>
                  </div>
                  <a className="btn btn-outline-primary" href="#">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 mb-2">
                <div className="box-part text-center">
                  <i
                    className="text-success fas fa-laptop fa-3x mb-3"
                    aria-hidden="true"
                  ></i>
                  <div className="title">
                    <h4>Responsive Design</h4>
                  </div>
                  <div className="text mb-3">
                    <span>
                      Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.
                      Assum decore te sed. Elitr scripta ocurreret qui ad.
                    </span>
                  </div>
                  <a className="btn btn-outline-success" href="#">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 mb-2">
                <div className="box-part text-center">
                  <i
                    className="text-danger fas fa-box-open fa-3x mb-3"
                    aria-hidden="true"
                  ></i>
                  <div className="title">
                    <h4>Easy to Manage</h4>
                  </div>
                  <div className="text mb-3">
                    <span>
                      Lorem ipsum dolor sit amet, id quo eruditi eloquentiam.
                      Assum decore te sed. Elitr scripta ocurreret qui ad.
                    </span>
                  </div>
                  <a className="btn btn-outline-danger" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="py-5">
          <div className="container">
            <div className="row text-center">
              <div className="py-4">
                <h1>Pricing</h1>
              </div>

              <div className="col-sm-4 mb-2">
                <div className="card shadow-sm">
                  <div className="card-header bg-light">
                    <h4 className="my-0 font-weight-normal">Free</h4>
                  </div>
                  <div className="card-body bg-light">
                    <h1 className="card-title pricing-card-title">
                      $0 <small className="text-muted">/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>10 users included</li>
                      <li>2 GB of storage</li>
                      <li>Email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-block btn-outline-primary"
                    >
                      Get started
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-2">
                <div className="card shadow-sm">
                  <div className="card-header bg-info text-light">
                    <h4 className="my-0 font-weight-normal">Pro</h4>
                  </div>
                  <div className="card-body bg-info text-light">
                    <h1 className="card-title pricing-card-title">
                      $15 <small>/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>20 users included</li>
                      <li>10 GB of storage</li>
                      <li>Priority email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-block btn-light">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-2">
                <div className="card shadow-sm">
                  <div className="card-header bg-success text-light">
                    <h4 className="my-0 font-weight-normal">Enterprise</h4>
                  </div>
                  <div className="card-body bg-success text-light">
                    <h1 className="card-title pricing-card-title">
                      $29 <small>/ mo</small>
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>30 users included</li>
                      <li>15 GB of storage</li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <button type="button" className="btn btn-block btn-light">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial" className="py-5 bg-light">
          <div className="container">
            <div className="text-center py-4">
              <h1>Testimonials</h1>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/416x225"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <div className="stars d-inline">
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star"></span>
                    </div>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Jassa</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/416x225"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <div className="stars d-inline">
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star"></span>
                    </div>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Jassa</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="https://via.placeholder.com/416x225"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <div className="stars d-inline">
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star text-warning"></span>
                      <span className="fas fa-star"></span>
                    </div>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">By Jassa</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
