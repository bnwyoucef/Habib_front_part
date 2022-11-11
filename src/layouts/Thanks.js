import React, { useEffect } from "react";
import Confetti from "../components/Confetti";

export default function Thanks() {
  useEffect(() => {
    Confetti();
  });
  return (
    <div className="thanks-container">
      <div className="thanks-content">
        <h3>Thank You for Shopping With Us!</h3>
        <p>By HabibGrifa babat zawali</p>
      </div>
    </div>
  );
}
