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

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/settings" replace />} />

      <Route path="/settings" element={<SettingsLayout />}>
        <Route index element={<SettingsMain />} />
        <Route path="preferanser" element={<Preferences />} />
        <Route path="kontakt-huskelista" element={<Contact />} />
        <Route path="registrer-ny-tilgang" element={<Register />} />
        <Route path="endre-passord" element={<ChangePassword />} />
        <Route path="slett-konto" element={<DeleteAccount />} />
        <Route path="personvern" element={<Privacy />} />
      </Route>

      <Route path="*" element={<div>404 – Fant ikke siden</div>} />
    </Routes>
  );
}
