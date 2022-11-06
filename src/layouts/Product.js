import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../style/product.css";
import baseUrl from "../Api/BaseUrl";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllProducts,
  fetchProducts,
} from "../features/products/ProductsSlice";

export default function Product({ product, products }) {
  let { id } = useParams();

  const dispatch = useDispatch();
  const currentProduct = useSelector(selectAllProducts)?.find(
    (prod) => prod.id == id
  );
  const productsStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productsStatus === "idle") dispatch(fetchProducts());
  }, [dispatch, productsStatus]);

  const [index, setIndex] = useState(0);
  //const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    // onAdd(product, qty);
    // setShowCart(true);
  };

  return (
    <div>
      <h1>product id: {currentProduct?.name}</h1>
      <div className="product-detail-container d-flex justify-content-center">
        <div>
          <div className="image-container">
            <img
              src={`${baseUrl}product/image/${
                currentProduct?.images.split(",")[0]
              }`}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {currentProduct?.images.length > 1
              ? currentProduct?.images
                  .split(",")
                  .slice(0, -1)
                  .map((image, i) => (
                    <img
                      key={i}
                      src={`${baseUrl}product/image/${image}`}
                      className={
                        i === index
                          ? "small-image selected-image"
                          : "small-image"
                      }
                      onMouseEnter={() => setIndex(i)}
                    />
                  ))
              : currentProduct?.images
                  .split(",")
                  .map((image, i) => (
                    <img
                      key={i}
                      src={`${baseUrl}product/image/${image}`}
                      className={
                        i === index
                          ? "small-image selected-image"
                          : "small-image"
                      }
                      onMouseEnter={() => setIndex(i)}
                    />
                  ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{currentProduct?.name}</h1>
          <h4>Description: </h4>
          <p>{currentProduct?.description}</p>
          <h4>Tailles:</h4>
          <p>{currentProduct?.sizes}</p>
          <h4>Prix: </h4>
          <p className="price">{currentProduct?.price}DA</p>
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
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <div className="p-2" key={i}>
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
