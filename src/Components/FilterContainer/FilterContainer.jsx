import { Search } from "../Search/Search";
import { Dropdown } from "../Dropdown/Dropdown";
import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";

export const FilterContainer = () => {
  const { darkToggle } = useContext(ThemeContext);
  return (
    <div
      className={`container mx-auto flex justify-between w-full h-full ${
        darkToggle ? "dark" : "light"
      }`}
    >
      <Search />
      <Dropdown />
    </div>
  );
};
