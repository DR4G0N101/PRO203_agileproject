import { Routes, Route, Navigate } from "react-router-dom";

// settings
import SettingsLayout from "../pages/settings/SettingsLayout";
import SettingsMain from "../pages/settings/SettingsMain";
import Preferences from "../pages/settings/subpages/Preferences";
import ContactHuskelista from "../pages/settings/subpages/ContactHuskelista";
import RegisterNewAccess from "../pages/settings/subpages/RegisterNewAccess";
import ChangePassword from "../pages/settings/subpages/ChangePassword";
import DeleteAccount from "../pages/settings/subpages/DeleteAccount";
import Privacy from "../pages/settings/subpages/Privacy";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Start appen rett i settings */}
      <Route path="/" element={<Navigate to="/settings" replace />} />

      <Route path="/settings" element={<SettingsLayout />}>
        <Route index element={<SettingsMain />} />
        <Route path="preferanser" element={<Preferences />} />
        <Route path="kontakt-huskelista" element={<ContactHuskelista />} />
        <Route path="registrer-ny-tilgang" element={<RegisterNewAccess />} />
        <Route path="endre-passord" element={<ChangePassword />} />
        <Route path="slett-konto" element={<DeleteAccount />} />
        <Route path="personvern" element={<Privacy />} />
      </Route>

      {/* fallback */}
      <Route path="*" element={<div>404 – Fant ikke siden</div>} />
    </Routes>
  );
}
