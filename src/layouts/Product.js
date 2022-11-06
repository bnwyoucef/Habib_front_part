import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../style/product.css";

export default function Product({ product, products }) {
  let { id } = useParams();

  const [index, setIndex] = useState(0);
  //const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    // onAdd(product, qty);
    // setShowCart(true);
  };

  return (
    <div>
      <h1>product id: {id}</h1>
      <div className="product-detail-container d-flex justify-content-center">
        <div>
          <div className="image-container">
            <img
              src="https://picsum.photos/200"
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {[
              "https://picsum.photos/200",
              "https://picsum.photos/201",
              "https://picsum.photos/202",
            ]?.map((item, i) => (
              <img
                key={i}
                src={item}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>name</h1>
          <h4>Description: </h4>
          <p>description</p>
          <h4>Tailles:</h4>
          <p>Tailles</p>
          <h4>Prix: </h4>
          <p className="price">2900DA</p>
          <div className="quantity"></div>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add to Cart
            </button>
            {/* onClick={() => onAdd(product, qty)} */}
            <button type="button" className="buy-now">
              Buy Now
            </button>{" "}
            {/* onClick={handleBuyNow} */}
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="p-2">
                <div className="card">
                  <img
                    src="https://picsum.photos/202"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
