import { NavLink } from "react-router-dom";
import "./bottomNav.css";

function Tab({ to, label, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `bn-tab ${isActive ? "is-active" : ""}`}
      aria-label={label}
    >
      <span className="bn-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="bn-label">{label}</span>
    </NavLink>
  );
}

export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Hovedmeny">
      <Tab to="/children" label="Barn" icon="👥" />
      <Tab to="/messages" label="Meldinger" icon="💬" />
      <Tab to="/overview" label="Oversikt" icon="📋" />
      <Tab to="/settings" label="Innstillinger" icon="⚙️" />
    </nav>
  );
}
