import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../settings.css";
import "./preferences.css";

function ToggleRow({ label, value, onToggle }) {
  return (
    <div className="pref-row">
      <span className="pref-label">{label}</span>

      <button
        type="button"
        className={`pref-toggle ${value ? "on" : ""}`}
        onClick={onToggle}
        aria-pressed={value}
        aria-label={label}
      >
        <span className="pref-toggle-knob"></span>
      </button>
    </div>
  );
}

export default function Preferences() {
  const navigate = useNavigate();

  // Defaults
  const [push, setPush] = useState(true);
  const [sound, setSound] = useState(false);
  const [vibration, setVibration] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("bokmal");

  return (
    <div className="settings-screen">
      {/* Tom spacer for å matche høyden på SettingsMain (Merete + rolle) */}
      <div className="pref-spacer-header" />

      <div className="pref-header">
        <button
          type="button"
          className="pref-back-btn"
          onClick={() => navigate("/settings")}
          aria-label="Tilbake"
        >
          ←
        </button>

        <div className="pref-back-title">INNSTILLINGER</div>
      </div>

      <h1 className="pref-title">Preferanser</h1>

      <section className="pref-card">
        <h2 className="pref-card-title">Varsler og lyd</h2>

        <ToggleRow
          label="Push varsler"
          value={push}
          onToggle={() => setPush(!push)}
        />
        <ToggleRow
          label="Lyd ved varsler"
          value={sound}
          onToggle={() => setSound(!sound)}
        />
        <ToggleRow
          label="Vibrasjon ved varsler"
          value={vibration}
          onToggle={() => setVibration(!vibration)}
        />
      </section>

      <section className="pref-card">
        <h2 className="pref-card-title">Utseende</h2>

        <ToggleRow
          label="Mørk modus"
          value={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />
      </section>

      <section className="pref-card">
        <h2 className="pref-card-title">Språk</h2>

        <ToggleRow
          label="Norsk | BOKMÅL"
          value={lang === "bokmal"}
          onToggle={() => setLang("bokmal")}
        />
        <ToggleRow
          label="Norsk | NYNORSK"
          value={lang === "nynorsk"}
          onToggle={() => setLang("nynorsk")}
        />
        <ToggleRow
          label="English"
          value={lang === "en"}
          onToggle={() => setLang("en")}
        />
      </section>
    </div>
  );
}
