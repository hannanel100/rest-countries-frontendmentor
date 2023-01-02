import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { FilterContainer } from "../../Components/FilterContainer/FilterContainer";
import { Main } from "../../Components/Main/Main";
import { ThemeContext } from "../../Context/theme";
export const Home = () => {
  const { darkToggle } = useContext(ThemeContext);

  return (
    <div
      className={`flex flex-col gap-12 ${darkToggle ? "dark" : "light"} pt-8`}
    >
      <FilterContainer />
      <Main />
    </div>
  );
};
