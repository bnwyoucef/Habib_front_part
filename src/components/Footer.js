import React from "react";
import logo from "../images/habib-grifa-logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
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
                <div className="mapouter col-sm-12 col-md-auto d-flex justify-content-center">
                  <div className="gmap_canvas col-sm-12 col-md-6 d-flex justify-content-center">
                    <iframe
                      className="gmap_iframe"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
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
  );
}

export default Footer;
