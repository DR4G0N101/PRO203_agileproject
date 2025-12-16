import { useEffect } from "react";
import "./burgerMenu.css";

export default function BurgerMenu({
  open,
  onClose,
  title = "VELG",
  sections = [],
}) {
  // ESC for å lukke
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="bm-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <aside className="bm-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="bm-header">
          <button className="bm-back" type="button" onClick={onClose} aria-label="Tilbake">
            ←
          </button>
          <div className="bm-title">{title}</div>
        </div>

        <div className="bm-content">
          {sections.map((sec) => (
            <div className="bm-section" key={sec.heading}>
              <div className="bm-section-heading">{sec.heading}</div>

              <div className="bm-list">
                {sec.items.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className={`bm-item ${item.active ? "is-active" : ""}`}
                    onClick={() => {
                      item.onSelect?.(item.value);
                      onClose();
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
