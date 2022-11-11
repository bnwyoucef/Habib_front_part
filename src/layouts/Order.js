import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import wilayaList from "../Api/Wilayas";
import "../style/order.css";
import axios from "../Api/Axios";
import baseUrl from "../Api/BaseUrl";
import Loading from "../components/Loading";

export default function Order() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientWilaya, setClientWilaya] = useState("");
  const [productSize, setProductSize] = useState("");
  const [image, setImage] = useState(""); // the payement image prove
  const [currentProduct, setCurrentProduct] = useState({});
  const productImageName = localStorage.getItem("orderImageName")
    ? JSON.parse(localStorage.getItem("orderImageName"))
    : "";

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
    setLoading(true);
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
      setTimeout(async () => {
        await axios
          .post("order/create-order", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((data) => {
            setLoading(false);
            navigate("/command/merci");
          });
      }, 5000);
    } catch (error) {
      return error.message;
    }
  }

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={`${baseUrl}product/image/${productImageName}`}
              style={{
                width: "300px",
                height: "300px",
                objectFit: "contain",
              }}
            />
          </div>
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

              <button
                type="submit"
                className="btn btn-primary confirm-order-btn"
              >
                confirmer
              </button>
            </form>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
