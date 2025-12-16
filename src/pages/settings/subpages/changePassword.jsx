import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../settings.css";
import "./changePassword.css";

function InputRow({ id, label, icon, type = "text", placeholder, value, onChange }) {
  return (
    <div className="cp-field">
      <label className="cp-label" htmlFor={id}>
        {label}
      </label>

      <div className="cp-input-wrap">
        <span className="cp-icon" aria-hidden="true">
          {icon}
        </span>

        <input
          id={id}
          className="cp-input"
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

export default function ChangePassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [repeatPw, setRepeatPw] = useState("");

  // modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalVariant, setModalVariant] = useState("success"); // success | error
  const [modalAction, setModalAction] = useState("ok"); // ok | login

  const openModal = ({ title, variant = "success", action = "ok" }) => {
    setModalTitle(title);
    setModalVariant(variant);
    setModalAction(action);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleModalButton = () => {
    if (modalAction === "login") {
      // etter passordbytte: "logg ut" og gå til login (demo)
      navigate("/login");
      return;
    }
    closeModal();
  };

 const onSubmit = (e) => {
  e.preventDefault();

  const current = currentPw.trim();
  const p1 = newPw.trim();
  const p2 = repeatPw.trim();

  // 1) Nye passord må matche
  if (p1 !== p2) {
    openModal({
      title: "Passordene matcher ikke",
      variant: "error",
      action: "ok",
    });
    return;
  }

  // 2) Nytt passord kan ikke være samme som nåværende
  if (p1 === current) {
    openModal({
      title: "Du kan ikke bruke gammelt passord",
      variant: "error",
      action: "ok",
    });
    return;
  }

  // TODO: send til backend senere
  console.log({ email, currentPw, newPw: p1 });

  openModal({
    title: "Passordet ble endret",
    variant: "success",
    action: "login",
  });
};


  return (
    <div className="settings-screen">
      {/* Header */}
      <div className="cp-header">
        <button
          type="button"
          className="cp-back-btn"
          onClick={() => navigate("/settings")}
          aria-label="Tilbake"
        >
          ←
        </button>
        <div className="cp-back-title">INNSTILLINGER</div>
      </div>

      <h1 className="cp-title">Endre passord</h1>

      <p className="cp-text">
        Merk at du vil bli logget ut når du bytter passord. Du vil da måtte logge
        inn med ditt nye passord.
      </p>

      <hr className="cp-divider" />

      <form className="cp-form" onSubmit={onSubmit}>
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
          id="currentPw"
          label="Nåværende passord*"
          icon="🔒"
          type="password"
          placeholder="Nåværende passord"
          value={currentPw}
          onChange={(e) => setCurrentPw(e.target.value)}
        />

        <InputRow
          id="newPw"
          label="Nytt passord*"
          icon="🔒"
          type="password"
          placeholder="Nytt passord"
          value={newPw}
          onChange={(e) => setNewPw(e.target.value)}
        />

        <InputRow
          id="repeatPw"
          label="Gjenta nytt passord*"
          icon="🔒"
          type="password"
          placeholder="Nytt passord"
          value={repeatPw}
          onChange={(e) => setRepeatPw(e.target.value)}
        />

        <button type="submit" className="cp-submit">
          Endre
        </button>
      </form>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <div className={`modal-badge ${modalVariant === "error" ? "is-error" : ""}`}>
                {modalVariant === "error" ? "!" : "✓"}
              </div>
            </div>

            <div className="modal-title">{modalTitle}</div>

            <button type="button" className="modal-btn" onClick={handleModalButton}>
              {modalAction === "login" ? "Logg inn" : "OK"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
