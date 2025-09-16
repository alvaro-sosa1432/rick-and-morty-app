import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
export const MainLayout = () => {
  return (
    <div className="transition-colors duration-300">
      <Header />
      <div className="relative">
        <Outlet />
      </div>
    </div>
  );
};
