import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../settings.css";
import "./contact.css";

export default function Contact() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: send til backend senere
    console.log({ email, message });

    setSent(true);     // vis popup
    setMessage("");    // tøm beskjed (valgfritt)
  };

  const closeModal = () => {
    setSent(false);
  };

  return (
    <div className="settings-screen">
      {/* Header */}
      <div className="contact-header">
        <button
          type="button"
          className="contact-back-btn"
          onClick={() => navigate("/settings")}
          aria-label="Tilbake"
        >
          ←
        </button>
        <div className="contact-back-title">INNSTILLINGER</div>
      </div>

      <h1 className="contact-title">Kontakt Huskelista</h1>

      <p className="contact-text">
        Send en beskjed, så kommer vi tilbake til deg så fort som mulig. Du mottar
        svaret i din e-post.
      </p>

      <hr className="contact-divider" />

      <form className="contact-form" onSubmit={onSubmit}>
        <label className="contact-label" htmlFor="email">
          E-post*
        </label>

        <div className="contact-input-wrap">
          <span className="contact-icon" aria-hidden="true">✉</span>
          <input
            id="email"
            className="contact-input"
            type="email"
            placeholder="eksempel@post.no"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <label className="contact-label" htmlFor="message">
          Beskjed
        </label>

        <textarea
          id="message"
          className="contact-textarea"
          placeholder="Hva har du på hjertet?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={7}
          required
        />

        <button type="submit" className="contact-submit">
          Send inn
        </button>
      </form>

      {/* POPUP */}
      {sent && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-icon">
              <div className="modal-badge">
                ✓
              </div>
            </div>

            <div className="modal-title">Beskjed sendt</div>

            <button
              type="button"
              className="modal-btn"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
