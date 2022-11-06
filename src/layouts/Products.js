import React, { useEffect } from "react";
import baseUrl from "../Api/BaseUrl";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllProducts,
  fetchProducts,
} from "../features/products/ProductsSlice";

export default function Products() {
  const dispatch = useDispatch();
  const productsList = useSelector(selectAllProducts);
  const productsStatus = useSelector((state) => state.products.status);

  useEffect(() => {
    if (productsStatus === "idle") dispatch(fetchProducts());
  }, [dispatch, productsStatus]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="container products-container">
          <div className="row justify-content-md-center">
            {productsList?.map((product) => (
              <div className="p-2 col-xs-12 col-sm-4 col-lg-4">
                <div className="card">
                  <img
                    src={`${baseUrl}product/image/${
                      product.images.split(",")[0]
                    }`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
