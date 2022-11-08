import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../style/order.css";

export default function Order() {
  const { id } = useParams();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{id}</h1>
      <div className="d-flex justify-content-center order-container">
        <form className="order-form">
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Nom et prénom</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="entrez votre nom"
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
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleFormControlSelect1">Wilaya</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Adrar</option>
              <option>Chlef</option>
            </select>
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Taille</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Taille"
            />
          </div>
          <div className="form-group my-3">
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
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
