import { Routes, Route, Navigate } from "react-router-dom";

// settings
import SettingsLayout from "../pages/settings/SettingsLayout";
import SettingsMain from "../pages/settings/SettingsMain";

// subpages
import Preferences from "../pages/settings/subpages/Preferences";
import Contact from "../pages/settings/subpages/Contact";
import Register from "../pages/settings/subpages/Register";
import ChangePassword from "../pages/settings/subpages/ChangePassword";
import DeleteAccount from "../pages/settings/subpages/DeleteAccount";
import Privacy from "../pages/settings/subpages/Privacy";

// overview (ligger direkte i pages/)
import Overview from "../pages/Overview";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/settings" replace />} />

      {/* OVERVIEW */}
      <Route path="/overview" element={<Overview />} />

      {/* SETTINGS */}
      <Route path="/settings" element={<SettingsLayout />}>
        <Route index element={<SettingsMain />} />
        <Route path="preferences" element={<Preferences />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="delete-account" element={<DeleteAccount />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>

      <Route path="*" element={<div>404 – Fant ikke siden</div>} />
    </Routes>
  );
}
