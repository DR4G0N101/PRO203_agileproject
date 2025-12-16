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
      <Tab to="/home" label="home" icon="👥" />
      <Tab to="/messages" label="messages" icon="💬" />
      {/* <Tab to="/messages-parents" label="Meldinger" icon="💬" /> */}
      <Tab to="/overview" label="overview" icon="📋" />
      <Tab to="/settings" label="settings" icon="⚙️" />
    </nav>
  );
}
