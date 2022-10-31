import React from "react";
import image1 from "../images/habibImage1.png";
import image2 from "../images/habibimage2.png";
import image3 from "../images/habibimage3.png";
import image4 from "../images/habibImage4.png";
import image5 from "../images/image1.png";
import image6 from "../images/image2.png";
import image7 from "../images/image3.png";
import image8 from "../images/image4.png";
import image9 from "../images/image5.png";
import Footer from "../components/Footer";

export default function Products() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="container products-container">
          {[
            { image1, image2, image3 },
            { image1: image4, image2: image5, image3: image6 },
            { image1: image7, image2: image8, image3: image9 },
          ].map((product) => (
            <div className="row justify-content-md-center">
              <div className="p-2 col-xs-12 col-sm-4 col-lg-4">
                <div className="card">
                  <img
                    src={product.image1}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 col-xs-12 col-sm-4 col-lg-4">
                <div className="card">
                  <img
                    src={product.image2}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 col-xs-12 col-sm-4 col-lg-4">
                <div className="card">
                  <img
                    src={product.image3}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
