import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";

export const BorderingCountry = ({ name }) => {
  const { darkToggle } = useContext(ThemeContext);
  return (
    <div
      key={name}
      className={`w-24 h-7 grid place-content-center shadow-[0px_0px_4px_1px_rgba(0,0,0,0.1)] ${
        darkToggle ? "dark__card" : "light__card"
      }`}
    >
      {name}
    </div>
  );
};
