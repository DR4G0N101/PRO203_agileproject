import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import BurgerMenu from "../components/BurgerMenu";
import BottomNav from "../components/BottomNav"; // ✅ lagt til

import "./overview.css";
import "./settings/settings.css";

export default function Overview() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const children = useMemo(
    () => [
      { name: "Lea", img: "https://i.pravatar.cc/80?img=1" },
      { name: "Kari", img: "https://i.pravatar.cc/80?img=2" },
      { name: "Hans", img: "https://i.pravatar.cc/80?img=3" },
      { name: "Ola", img: "https://i.pravatar.cc/80?img=4" },
      { name: "Muhammed", img: "https://i.pravatar.cc/80?img=5" },
    ],
    []
  );

  const filteredChildren = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return children;
    return children.filter((c) => c.name.toLowerCase().includes(q));
  }, [children, search]);

  const sections = useMemo(
    () => [
      {
        heading: "Navigasjon",
        items: [
          {
            label: "Oversikt",
            value: "overview",
            onSelect: () => navigate("/overview"),
          },
          {
            label: "Innstillinger",
            value: "settings",
            onSelect: () => navigate("/settings"),
          },
          {
            label: "Personvern",
            value: "privacy",
            onSelect: () => navigate("/settings/privacy"),
          },
        ],
      },
    ],
    [navigate]
  );

  return (
    <div className="overview-container">
      {/* Burger meny */}
      <BurgerMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        title="MENY"
        sections={sections}
      />

      {/* Header */}
      <div className="overview-header">
        <button
          type="button"
          className="overview-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Åpne meny"
        >
          ☰
        </button>

        <h2 className="overview-title">OVERSIKT</h2>
      </div>

      <p className="overview-subtitle">Rompetroll</p>

      {/* Søk */}
      <div className="overview-search">
        <span className="overview-search-icon">🔍</span>
        <input
          placeholder="Søk ..."
          className="overview-search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Liste */}
      <div className="overview-list">
        {filteredChildren.map((child, index) => (
          <div key={`${child.name}-${index}`} className="overview-card">
            <img src={child.img} alt={child.name} className="overview-avatar" />
            <span className="overview-name">{child.name}</span>
            <button
              type="button"
              className="overview-card-menu"
              aria-label="Handlinger"
            >
              ⋮
            </button>
          </div>
        ))}
      </div>

      {/* Bottom navigation */}
      <BottomNav />
    </div>
  );
}
