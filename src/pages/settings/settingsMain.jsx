import { useNavigate } from "react-router-dom";

export default function SettingsMain() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Innstillinger</h1>

      <button onClick={() => navigate("preferences")}>
        Preferanser
      </button>

      <button onClick={() => navigate("contact")}>
        Kontakt Huskelista
      </button>

      <button onClick={() => navigate("register")}>
        Registrer ny tilgang
      </button>

      <button onClick={() => navigate("change-password")}>
        Endre passord
      </button>

      <button onClick={() => navigate("account")}>
        Slett konto
      </button>

      <button onClick={() => navigate("privacy")}>
        Personvern
      </button>
    </div>
  );
}
