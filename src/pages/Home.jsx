import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import BurgerMenu from "../components/BurgerMenu";
import BottomNav from "../components/BottomNav";

import "./home.css";

export default function ChildrenHome() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const categories = useMemo(
    () => [
      { title: "Til stede", count: "14/23", color: "#2E5C3F" },
      { title: "Venter på", count: "3/23", color: "#F2C94C" },
      { title: "Hentet", count: "4/23", color: "var(--navy)" },
      { title: "Fravær", count: "2/23", color: "#8B0012" },
    ],
    []
  );

  const sections = useMemo(
    () => [
      {
        heading: "Navigasjon",
        items: [
          { label: "Barn", value: "children", onSelect: () => navigate("/children"), active: true },
          { label: "Meldinger", value: "messages", onSelect: () => navigate("/messages") },
          { label: "Oversikt", value: "overview", onSelect: () => navigate("/overview") },
          { label: "Innstillinger", value: "settings", onSelect: () => navigate("/settings") },
        ],
      },
    ],
    [navigate]
  );

  return (
    <div className="ch-container">
      <BurgerMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        title="MENY"
        sections={sections}
      />

      <div className="ch-header">
        <button
          type="button"
          className="ch-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Åpne meny"
        >
          ☰
        </button>
        <h2 className="ch-title">BARN</h2>
      </div>

      <p className="ch-subtitle">Rompetroll</p>

      <button
        type="button"
        className="ch-parent-link"
        onClick={() => navigate("/messages-parents")}
      >
        ➜ For foresatte
      </button>

      <div className="ch-list">
        {categories.map((item) => (
          <button
            key={item.title}
            type="button"
            className="ch-card"
            onClick={() => alert(`${item.title} (demo)`)}
          >
            <div className="ch-colorbar" style={{ background: item.color }} />
            <div className="ch-card-content">
              <span className="ch-card-title">{item.title}</span>

              <div className="ch-card-right">
                <span className="ch-card-count">{item.count}</span>
                <span className="ch-chevron" aria-hidden="true">›</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
