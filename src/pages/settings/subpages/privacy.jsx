import { useNavigate } from "react-router-dom";
import "../settings.css";
import "./privacy.css";

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="settings-screen">
      {/* Header */}
      <div className="pr-header">
        <button
          type="button"
          className="pr-back-btn"
          onClick={() => navigate("/settings")}
          aria-label="Tilbake"
        >
          ←
        </button>
        <div className="pr-back-title">INNSTILLINGER</div>
      </div>

      <h1 className="pr-title">Personvern</h1>

      <h2 className="pr-section-title">Personlig informasjon</h2>

      <div className="pr-field">
        <div className="pr-label">Navn</div>
        <div className="pr-pill" aria-readonly="true">
          Merete Johnsen
        </div>
      </div>

      <div className="pr-field">
        <div className="pr-label">Epost</div>
        <div className="pr-pill" aria-readonly="true">
          merete.johnsen@oslo.kommune.no
        </div>
      </div>

      <hr className="pr-divider" />

      <h2 className="pr-section-title">OSS om personvern</h2>

      <div className="pr-faq">
        <div className="pr-q">Er sensitiv data sikkert lagret?</div>
        <div className="pr-a">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div className="pr-q">Hvorfor kan ikke foresatte se status på barnet sitt?</div>
        <div className="pr-a">
          Nei, foresatte kan kun se og endre informasjon om barn de har fått tilgang til.
        </div>

        <div className="pr-q">Kan foresatte se informasjon om alle barn?</div>
        <div className="pr-a">
          Nei, kun ansatte har tilgang til alle barn. Foresatte ser kun de barna de er knyttet til.
        </div>
      </div>
    </div>
  );
}
