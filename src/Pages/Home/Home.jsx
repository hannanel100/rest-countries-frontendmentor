import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { FilterContainer } from "../../Components/FilterContainer/FilterContainer";
import { Main } from "../../Components/Main/Main";
import { ThemeContext } from "../../Context/theme";
export const Home = () => {
  const { darkToggle } = useContext(ThemeContext);

  return (
    <main className={`flex flex-col gap-12 ${darkToggle ? "dark" : "light"}`}>
      <FilterContainer />
      <Main />
    </main>
  );
};
