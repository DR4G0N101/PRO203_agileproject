import "./forgotpassword.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Lenke sendt til epost!");
  };

  return (
    <div className="forgot-container">

      {/* Tilbake knapp */}
      <div className="forgot-back" onClick={() => navigate(-1)}>
        ← LOGG INN
      </div>

      {/* Tittel */}
      <h1 className="forgot-title">Glemt passord</h1>

      {/* Beskrivelse */}
      <p className="forgot-description">
        Følg lenken vi sender til eposten din <br /> for å lage et nytt passord.
      </p>

      <hr className="forgot-divider" />

      {/* Skjema */}
      <form onSubmit={handleSubmit} className="forgot-form">

        {/* Epost */}
        <label className="forgot-label">Epost*</label>
        <div className="forgot-input-wrapper">
          <span className="forgot-input-icon">✉️</span>
          <input
            type="email"
            placeholder="eksempel@post.no"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="forgot-input"
          />
        </div>

        {/* Gjenta epost */}
        <label className="forgot-label">Gjenta epost*</label>
        <div className="forgot-input-wrapper">
          <span className="forgot-input-icon">✉️</span>
          <input
            type="email"
            placeholder="eksempel@post.no"
            value={emailRepeat}
            onChange={(e) => setEmailRepeat(e.target.value)}
            className="forgot-input"
          />
        </div>

        {/* Send lenke */}
        <button type="submit" className="forgot-button">Send lenke</button>
      </form>
    </div>
  );
}
