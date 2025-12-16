import { useState } from "react";
import BurgerMenu from "../components/BurgerMenu";
import "../pages/settings/settings.css"; // bruker samme app-stil/padding (valgfritt)

export default function Overview() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [department, setDepartment] = useState("alle");

  const departmentLabel = {
    alle: "Alle",
    rompetroll: "Rompetroll",
    askeladden: "Askeladden",
    firklover: "Firkløver",
  }[department];

  return (
    <div className="settings-screen">
      {/* toppområde */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          style={{
            border: "none",
            background: "transparent",
            fontSize: 28,
            cursor: "pointer",
            color: "var(--navy)",
            padding: 6,
          }}
          aria-label="Åpne meny"
        >
          ☰
        </button>

        <div style={{ fontWeight: 800, letterSpacing: "0.06em" }}>OVERSIKT</div>
      </div>

      <h1 style={{ marginTop: 24, fontSize: 46, fontWeight: 500, color: "var(--navy)" }}>
        Oversikt
      </h1>

      <p style={{ marginTop: 10, fontSize: 22, color: "var(--navy)", opacity: 0.95 }}>
        Valgt avdeling: <strong>{departmentLabel}</strong>
      </p>

      <div
        style={{
          marginTop: 18,
          background: "#fff",
          borderRadius: 18,
          boxShadow: "var(--shadow)",
          padding: 18,
          maxWidth: 520,
        }}
      >
        <div style={{ fontSize: 18, opacity: 0.8 }}>
          (Demo) Her kan du senere vise barneliste/tilstede osv. filtrert på avdeling.
        </div>
      </div>

      {/* Burger menu */}
      <BurgerMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        title="VELG"
        sections={[
          {
            heading: "Alle",
            items: [
              {
                label: "Alle",
                value: "alle",
                active: department === "alle",
                onSelect: setDepartment,
              },
            ],
          },
          {
            heading: "Avdelinger",
            items: [
              {
                label: "Rompetroll",
                value: "rompetroll",
                active: department === "rompetroll",
                onSelect: setDepartment,
              },
              {
                label: "Askeladden",
                value: "askeladden",
                active: department === "askeladden",
                onSelect: setDepartment,
              },
              {
                label: "Firkløver",
                value: "firklover",
                active: department === "firklover",
                onSelect: setDepartment,
              },
            ],
          },
        ]}
      />
    </div>
  );
}
