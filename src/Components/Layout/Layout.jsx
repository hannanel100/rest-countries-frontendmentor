import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import { useLocation } from "react-router-dom";
export const Layout = () => {
  const { darkToggle } = useContext(ThemeContext);
  const history = useLocation();
  return (
    <div className={`h-screen ${darkToggle ? "dark" : "light"}`}>
      <Header />
      <Outlet />
    </div>
  );
};
