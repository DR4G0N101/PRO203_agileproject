import { Outlet } from "react-router-dom";
import BottomNav from "../../components/BottomNav";

export default function SettingsLayout() {
  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  );
}
