import { Routes, Route, Navigate } from "react-router-dom";

// entry / auth pages (first screens)
import AdminLogin from "../pages/login/AdminLogin";
import ForgotPassword from "../pages/login/ForgotPassword";

// Home, overview, messages
import Overview from "../pages/Overview";

// settings
import SettingsLayout from "../pages/settings/SettingsLayout";
import SettingsMain from "../pages/settings/SettingsMain";

// settings-subpages
import Preferences from "../pages/settings/subpages/Preferences";
import Contact from "../pages/settings/subpages/Contact";
import Register from "../pages/settings/subpages/Register";
import ChangePassword from "../pages/settings/subpages/ChangePassword";
import DeleteAccount from "../pages/settings/subpages/DeleteAccount";
import Privacy from "../pages/settings/subpages/Privacy";

export default function AppRoutes() {
  return (
    <Routes>
      {/* DEFAULT → LOGIN */}
      <Route path="/" element={<Navigate to="/admin-login" replace />} />

      {/* ENTRY / AUTH PAGES */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* HOME / OVERVIEW / MESSAGES */}
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

      {/* 404 */}
      <Route path="*" element={<div>404 – Fant ikke siden</div>} />
    </Routes>
  );
}
