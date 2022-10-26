import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import logo from "./images/habib-grifa-logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
function App() {
  return (
    <div classNameName="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" target="_blank" href="#">
              <img
                className="img-fluid"
                src={logo}
                style={{ width: "auto", height: "75px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <div style={{ width: "100%" }}>
                <ul
                  className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center"
                  style={{ width: "100%" }}
                >
                  <li className="nav-item active">
                    <a className="nav-link p-3" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-3" href="#about-us">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-3" href="#about-us">
                      About us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
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
      <footer className="pt-4 pt-md-5 border-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
              <a href="#">
                <img
                  className="img-fluid footer-logo"
                  src={logo}
                  style={{ width: "auto", height: "200px", marginTop: "10px" }}
                />
              </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3 footer-info">
              <h5>Contacts</h5>
              <ul className="list-unstyled text-small">
                <li className="text-muted d-flex flex-row phone-contacts">
                  <LocalPhoneIcon />
                  <p>0561460954</p>
                </li>
                <li className="text-muted d-flex flex-row phone-contacts">
                  <LocalPhoneIcon />
                  <p>0561460994</p>
                </li>
                <li className="text-muted d-flex flex-row phone-contacts">
                  <LocalPhoneIcon />
                  <p>0561450068</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3 footer-info">
              <h5>Social</h5>
              <ul className="list-unstyled text-small ">
                <li className="text-muted d-flex align-items-center social">
                  <InstagramIcon fontSize="large" />
                  <a
                    className="text-muted social-links"
                    href="https://www.instagram.com/habib_grifa_babat_zawali/"
                    target="_blank"
                  >
                    Babat~zawali
                  </a>
                </li>
                <li className="text-muted d-flex align-items-center social">
                  <InstagramIcon fontSize="large" />
                  <a
                    className="text-muted social-links"
                    href="https://www.instagram.com/babat_zawali/"
                    target="_blank"
                  >
                    babat_zawali
                  </a>
                </li>
                <li className="text-muted d-flex align-items-center social">
                  <FacebookIcon fontSize="large" />
                  <a
                    className="text-muted"
                    href="https://www.facebook.com/groups/1479252915486583"
                    target="_blank"
                  >
                    Habib_grifa
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3 footer-info">
              <h5>Localisation</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <div class="mapouter col-sm-12 col-md-auto d-flex justify-content-center">
                    <div class="gmap_canvas col-sm-12 col-md-6 d-flex justify-content-center">
                      <iframe
                        class="gmap_iframe"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q=habib grifa&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      ></iframe>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-4 mt-4 copyRights">
          Copyright 2022 HabibGrifa | Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
export default App;
