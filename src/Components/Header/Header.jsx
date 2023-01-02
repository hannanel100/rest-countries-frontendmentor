import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { ThemeContext } from "../../Context/theme";
export const Header = () => {
  const { darkToggle, setDarkToggle } = useContext(ThemeContext);
  return (
    <header
      className={` shadow-md h-20 ${darkToggle ? "dark__card" : "light__card"}`}
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 h-full">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <div className="flex gap-4 items-center justify-between">
          <FontAwesomeIcon
            icon={darkToggle ? faSun : faMoon}
            onClick={() => setDarkToggle(!darkToggle)}
            className="text-2xl cursor-pointer"
          />
          <span className="text-base">
            {darkToggle ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </div>
    </header>
  );
};
