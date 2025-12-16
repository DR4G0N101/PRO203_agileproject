import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import BurgerMenu from "../components/BurgerMenu";
import BottomNav from "../components/BottomNav";

import "./settings/settings.css";
import "./messages.css";

export default function MessagesParents() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [showNew, setShowNew] = useState(false);
  const [contact, setContact] = useState("");
  const [text, setText] = useState("");

  // Foreldre/foresatte (samme struktur som Messages)
  const messages = useMemo(
    () => [
      { id: 1, name: "Kari (mor)", text: "Kan du bekrefte hentetid i dag?", time: "09:12" },
      { id: 2, name: "Ola (far)", text: "Vi kommer litt senere i dag.", time: "08:44" },
      { id: 3, name: "Lea (foresatt)", text: "Har dere fått med regntøy?", time: "I går" },
    ],
    []
  );

  const filteredMessages = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return messages;
    return messages.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.text.toLowerCase().includes(q)
    );
  }, [messages, search]);

  // BurgerMenu: samme stil, men "Foreldre" aktiv (valgfritt)
  const sections = useMemo(
    () => [
      {
        heading: "Navigasjon",
        items: [
          { label: "Meldinger", value: "messages", onSelect: () => navigate("/messages") },
          { label: "Foreldre", value: "messages-parents", onSelect: () => navigate("/messages-parents"), active: true },
          { label: "Oversikt", value: "overview", onSelect: () => navigate("/overview") },
          { label: "Innstillinger", value: "settings", onSelect: () => navigate("/settings") },
        ],
      },
    ],
    [navigate]
  );

  return (
    <div className="msg-container">
      <BurgerMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        title="MENY"
        sections={sections}
      />

      {/* Header */}
      <div className="msg-header">
        <button
          type="button"
          className="msg-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Åpne meny"
        >
          ☰
        </button>
        <h2 className="msg-title">MELDINGER</h2>
      </div>

      <p className="msg-subtitle">Foreldre</p>

      {/* Search */}
      <div className="msg-search">
        <span className="msg-search-icon" aria-hidden="true">🔍</span>
        <input
          className="msg-search-input"
          placeholder="Søk i meldinger ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Meldingsliste */}
      <div className="msg-list">
        {filteredMessages.map((m) => (
          <div key={m.id} className="msg-card">
            <div>
              <div className="msg-name">{m.name}</div>
              <div className="msg-preview">{m.text}</div>
            </div>
            <div className="msg-time">{m.time}</div>
          </div>
        ))}
      </div>

      {/* ➕ New message button */}
      <button
        className="msg-fab"
        aria-label="Ny beskjed"
        onClick={() => setShowNew(true)}
      >
        +
      </button>

      {/* Popup */}
      {showNew && (
        <div className="msg-modal-overlay" onClick={() => setShowNew(false)}>
          <div className="msg-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="msg-modal-title">Ny beskjed</h3>

            <label className="msg-label">Velg forelder/foresatt</label>
            <select
              className="msg-select"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            >
              <option value="">Velg…</option>
              <option value="Kari (mor)">Kari (mor)</option>
              <option value="Ola (far)">Ola (far)</option>
              <option value="Lea (foresatt)">Lea (foresatt)</option>
            </select>

            <label className="msg-label">Beskjed</label>
            <textarea
              className="msg-textarea"
              placeholder="Hva har du på hjertet?"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="msg-actions">
              <button
                type="button"
                className="msg-cancel"
                onClick={() => setShowNew(false)}
              >
                Avbryt
              </button>

              <button
                type="button"
                className="msg-send"
                onClick={() => {
                  alert("Beskjed sendt (demo)");
                  setShowNew(false);
                  setContact("");
                  setText("");
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
