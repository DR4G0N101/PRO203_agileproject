import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../settings.css";
import "./register.css";

function InputRow({ id, label, icon, type = "text", placeholder, value, onChange }) {
  return (
    <div className="reg-field">
      <label className="reg-label" htmlFor={id}>
        {label}
      </label>

      <div className="reg-input-wrap">
        <span className="reg-icon" aria-hidden="true">
          {icon}
        </span>

        <input
          id={id}
          className="reg-input"
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

export default function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Bruker opprettet");
  const [modalVariant, setModalVariant] = useState("success");

  const openModal = (title, variant = "success") => {
    setModalTitle(title);
    setModalVariant(variant);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const e1 = email.trim().toLowerCase();
    const e2 = email2.trim().toLowerCase();

    if (e1 !== e2) {
      openModal("E-postene matcher ikke", "error");
      return;
    }

    // TODO: send til backend senere
    console.log({ firstName, lastName, email: e1 });

    openModal("Bruker opprettet", "success");
  };

  return (
    <div className="settings-screen">
      <div className="reg-header">
        <button
          type="button"
          className="reg-back-btn"
          onClick={() => navigate("/settings")}
          aria-label="Tilbake"
        >
          ←
        </button>
        <div className="reg-back-title">INNSTILLINGER</div>
      </div>

      <h1 className="reg-title">Registrer ny tilgang</h1>

      <p className="reg-text">
        Registrer ny tilgang for foresatte. Den foresatte logger inn ved å bruke
        e-posten som blir registrert.
      </p>

      <hr className="reg-divider" />

      <form className="reg-form" onSubmit={onSubmit}>
        <InputRow
          id="firstName"
          label="Fornavn*"
          icon="👤"
          placeholder="Ola"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <InputRow
          id="lastName"
          label="Etternavn*"
          icon="👤"
          placeholder="Nordmann"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <InputRow
          id="email"
          label="E-post*"
          icon="✉"
          type="email"
          placeholder="eksempel@post.no"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputRow
          id="email2"
          label="Gjenta e-post*"
          icon="✉"
          type="email"
          placeholder="eksempel@post.no"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
        />

        <button type="submit" className="reg-submit">
          Opprett ny bruker
        </button>
      </form>

      {modalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <div className={`modal-badge ${modalVariant === "error" ? "is-error" : ""}`}>
                {modalVariant === "error" ? "!" : "✓"}
              </div>
            </div>

            <div className="modal-title">{modalTitle}</div>

            <button type="button" className="modal-btn" onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
