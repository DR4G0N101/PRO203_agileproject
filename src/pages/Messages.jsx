import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import BurgerMenu from "../components/BurgerMenu";
import BottomNav from "../components/BottomNav";

import "./messages.css";

export default function Messages() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [showNew, setShowNew] = useState(false);
  const [contact, setContact] = useState("");
  const [text, setText] = useState("");

  const messages = useMemo(
    () => [
      { id: 1, name: "Kari", text: "Kan du bekrefte hentetid i dag?", time: "09:12" },
      { id: 2, name: "Ola", text: "Vi kommer litt senere i dag.", time: "08:44" },
      { id: 3, name: "Lea", text: "Har dere fått med regntøy?", time: "I går" },
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

  const sections = useMemo(
    () => [
      {
        heading: "Navigasjon",
        items: [
          { label: "Meldinger", value: "messages", onSelect: () => navigate("/messages"), active: true },
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

      <p className="msg-subtitle">Innboks</p>

      <div className="msg-search">
        <span className="msg-search-icon" aria-hidden="true">🔍</span>
        <input
          className="msg-search-input"
          placeholder="Søk i meldinger ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

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

      <button
        className="msg-fab"
        aria-label="Ny beskjed"
        onClick={() => setShowNew(true)}
      >
        +
      </button>

      {showNew && (
        <div className="msg-modal-overlay" onClick={() => setShowNew(false)}>
          <div className="msg-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="msg-modal-title">Ny beskjed</h3>

            <label className="msg-label">Velg kontakt</label>
            <select
              className="msg-select"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            >
              <option value="">Velg…</option>
              <option value="Kari">Kari</option>
              <option value="Ola">Ola</option>
              <option value="Lea">Lea</option>
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
