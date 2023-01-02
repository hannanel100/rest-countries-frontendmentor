import { Search } from "../Search/Search";
import { Dropdown } from "../Dropdown/Dropdown";
import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";

export const FilterContainer = () => {
  const { darkToggle } = useContext(ThemeContext);
  return (
    <div
      className={`container mx-auto flex flex-col md:flex-row gap-4 justify-between align-center w-11/12 md:w-full h-full ${
        darkToggle ? "dark" : "light"
      }`}
    >
      <Search />
      <Dropdown />
    </div>
  );
};
