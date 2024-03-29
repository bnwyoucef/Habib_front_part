import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../style/product.css";
import baseUrl from "../Api/BaseUrl";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllProducts,
  fetchProducts,
} from "../features/products/ProductsSlice";
import Loading from "../components/Loading";

export default function Product() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const currentProduct = allProducts?.find(
    (prod) => parseInt(prod.id) === parseInt(id)
  );
  const productsStatus = useSelector((state) => state.products.status);
  const [bigImage, setBigImage] = useState("");

  useEffect(() => {
    setBigImage(currentProduct?.images.split(",")[0]);
  }, [currentProduct]);

  useEffect(() => {
    if (productsStatus === "idle") dispatch(fetchProducts());
  }, [dispatch, productsStatus]);

  const [index, setIndex] = useState(0);
  function handleBuyNow() {
    console.log(currentProduct);
    localStorage.setItem("orderImageName", JSON.stringify(bigImage));
    localStorage.setItem(
      "orderProduct",
      JSON.stringify({
        bigImage,
        name: currentProduct.name,
        description: currentProduct.description,
      })
    );
  }

  return (
    <div>
      {productsStatus === "loading" && <Loading />}
      {productsStatus === "succeeded" && (
        <>
          <div className="product-detail-container d-flex justify-content-center">
            <div>
              <div className="image-container">
                <img
                  src={`${baseUrl}product/image/${bigImage}`}
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
                          onClick={() => setBigImage(image)}
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
              <div className="buttons">
                <Link
                  to={`/command/${currentProduct?.id}`}
                  onClick={handleBuyNow}
                >
                  <button type="button" className="buy-now">
                    Buy Now
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>

          <div className="maylike-products-wrapper">
            <h2>You may also like</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                {allProducts?.slice(0, 11).map((product) => (
                  <div className="p-2" key={product.id}>
                    <div className="card">
                      <img
                        src={`${baseUrl}product/image/${
                          product.images?.split(",")[0]
                        }`}
                        className="card-img-top img-liked"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
