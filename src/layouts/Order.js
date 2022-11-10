import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import wilayaList from "../Api/Wilayas";
import "../style/order.css";
import axios from "../Api/Axios";
import { useSelector } from "react-redux";
import { getImage } from "../features/orderImage/orderImageSlice";

export default function Order() {
  const { id } = useParams();
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientWilaya, setClientWilaya] = useState("");
  const [productSize, setProductSize] = useState("");
  const [image, setImage] = useState(""); // the payement image prove
  const [currentProduct, setCurrentProduct] = useState({});
  const productImageName = useSelector((state) => state.orderImage.imageName);

  useEffect(() => {
    async function getProductById(id) {
      try {
        const response = await axios.get(`product/${id}`);
        setCurrentProduct(response.data);
      } catch (error) {
        return error.message;
      }
    }
    getProductById(id);
  }, []);

  async function submitOrder(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("clientName", clientName);
    formData.append("clientPhone", clientPhone);
    formData.append("clientWilaya", clientWilaya);
    formData.append("productSize", productSize);
    formData.append("productImageName", productImageName);
    formData.append("productQuantity", "1");
    formData.append("productId", id);
    formData.append("image", image[0]);
    try {
      console.log(">>>>>>", productImageName);
      const response = await axios.post("order/create-order", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
    } catch (error) {
      return error.message;
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{id}</h1>
      <div className="d-flex justify-content-center order-container">
        <form className="order-form" onSubmit={submitOrder}>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Nom et prénom</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="entrez votre nom"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Numéro de téléphone</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="téléphone"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleFormControlSelect1">Wilaya</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={clientWilaya}
              onChange={(e) => setClientWilaya(e.target.value)}
            >
              {wilayaList.map((wilaya) => (
                <option key={wilaya.id}>{wilaya.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Taille</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={productSize}
              onChange={(e) => setProductSize(e.target.value)}
            >
              {currentProduct?.sizes?.split(",").map((size, i) => (
                <option key={i}>{size}</option>
              ))}
            </select>
          </div>
          <div className="form-group my-3">
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              onChange={(e) => setImage(e.target.files)}
            />
          </div>

          <button type="submit" className="btn btn-primary confirm-order-btn">
            confirmer
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
