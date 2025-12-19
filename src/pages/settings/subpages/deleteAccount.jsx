import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../settings.css";
import "./deleteAccount.css";

function InputRow({ id, label, icon, type = "text", placeholder, value, onChange }) {
  return (
    <div className="da-field">
      <label className="da-label" htmlFor={id}>
        {label}
      </label>

      <div className="da-input-wrap">
        <span className="da-icon" aria-hidden="true">
          {icon}
        </span>

        <input
          id={id}
          className="da-input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

export default function DeleteAccount() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [agree, setAgree] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!agree) return;

    // TODO: send til backend senere
    console.log({ email, pw, agree });

    setModalOpen(true);
  };

  return (
    <div className="settings-screen">
      <div className="da-header">
        <button
          type="button"
          className="da-back-btn"
          onClick={() => navigate("/settings")}
          aria-label="Tilbake"
        >
          ←
        </button>
        <div className="da-back-title">INNSTILLINGER</div>
      </div>

      <h1 className="da-title">Slett konto</h1>

      <p className="da-text">
        Så synd å se deg dra! Du er alltid velkommen tilbake når som helst!
      </p>

      <hr className="da-divider" />

      <form className="da-form" onSubmit={onSubmit}>
        <InputRow
          id="email"
          label="Epost*"
          icon="✉"
          type="email"
          placeholder="eksempel@post.no"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputRow
          id="pw"
          label="Passord*"
          icon="🔒"
          type="password"
          placeholder="Ditt passord"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />

        <label className="da-check-row">
          <input
            type="checkbox"
            className="da-checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span className="da-check-text">
            Jeg godkjenner at jeg ønsker å permanent slette min konto og data hos
            Huskelista. All min data blir fjernet.
          </span>
        </label>

        <button type="submit" className="da-submit" disabled={!agree}>
          Slett konto
        </button>
      </form>

      {modalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <div className="modal-badge is-danger">!</div>
            </div>

            <div className="modal-title">Konto slettet</div>

            <button
              type="button"
              className="modal-btn"
              onClick={() => navigate("/admin-login")}
            >
              Logg inn
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
