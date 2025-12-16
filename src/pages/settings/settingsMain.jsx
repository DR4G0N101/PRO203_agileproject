import { useNavigate } from "react-router-dom";
import "./settings.css";

function Row({ label, onClick, danger = false }) {
  return (
    <button
      type="button"
      className={`s-row ${danger ? "is-danger" : ""}`}
      onClick={onClick}
    >
      <span className="s-row__label">{label}</span>
      <span className="s-row__chev" aria-hidden="true">
        &gt;
      </span>
    </button>
  );
}

export default function SettingsMain() {
  const navigate = useNavigate();

  return (
    <div className="settings-screen">
      <div className="settings-kicker">INNSTILLINGER</div>

      <div className="settings-user">
        <div className="settings-user__name">Merete</div>
        <div className="settings-user__role">Pedagogisk lærer</div>
      </div>

      <section className="s-section">
        <h2 className="s-title">Generelt</h2>
        <div className="s-stack">
          <Row label="Preferanser" onClick={() => navigate("preferences")} />
          <Row label="Kontakt oss" onClick={() => navigate("contact")} />
          <Row label="Registrer ny bruker" onClick={() => navigate("register")} />
          <Row label="Logg ut" onClick={() => navigate("/settings")} />
        </div>
      </section>

      <section className="s-section">
        <h2 className="s-title">Administrer konto</h2>
        <div className="s-stack">
          <Row label="Endre passord" onClick={() => navigate("change-password")} />
          <Row label="Slett konto" danger onClick={() => navigate("delete-account")} />
          <Row label="Personvern" onClick={() => navigate("privacy")} />
        </div>
      </section>
    </div>
  );
}
