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
  const [clientWilaya, setClientWilaya] = useState(wilayaList[0].name);
  const [productSize, setProductSize] = useState("");
  const [image, setImage] = useState(""); // the payement image prove
  const [currentProduct, setCurrentProduct] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const productImageName = localStorage.getItem("orderImageName")
    ? JSON.parse(localStorage.getItem("orderImageName"))
    : "";
  const productOrdered = localStorage.getItem("orderProduct")
    ? JSON.parse(localStorage.getItem("orderProduct"))
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

  useEffect(() => {
    setProductSize(currentProduct?.sizes?.split(",")[0]);
  }, [currentProduct]);

  async function submitOrder(event) {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData();
    formData.append("clientName", clientName);
    formData.append("clientPhone", clientPhone);
    formData.append("clientWilaya", clientWilaya);
    formData.append("productName", productOrdered.name);
    formData.append("productDescription", productOrdered.description);
    formData.append("productSize", productSize);
    formData.append("productImageName", productImageName);
    formData.append("productQuantity", "1");
    formData.append("productId", id);
    formData.append("image", image[0]);
    try {
      await axios
        .post("order/create-order", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          setLoading(false);
          navigate("/command/merci");
        });
    } catch (error) {
      setLoading(false);
      setErrorMsg("please enter all the information");
    }
  }

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={`${baseUrl}product/image/${productImageName}`}
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "2rem",
                border: "1px solid rgba(0, 0,0,.7)",
                marginTop: "2rem",
              }}
            />
          </div>
          {!loading && (
            <p
              style={{
                textAlign: "center",
                color: "red",
                margin: "0",
                marginTop: "2rem",
              }}
            >
              {errorMsg}
            </p>
          )}
          <div className="d-flex justify-content-center order-container">
            <form className="order-form" onSubmit={submitOrder}>
              <div className="form-group my-3">
                <label htmlFor="exampleInputEmail1">Nom et prénom</label>
                <input
                  autoFocus
                  required
                  type="text"
                  className="form-control inputBox"
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
                  required
                  type="text"
                  className="form-control inputBox"
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
                  required
                  className="form-control inputBox"
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
                  required
                  className="form-control inputBox"
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
                  required
                  type="file"
                  className="form-control-file inputBox"
                  id="exampleFormControlFile1"
                  onChange={(e) => setImage(e.target.files)}
                />
              </div>

              <button type="submit" className="btn confirm-order-btn">
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
