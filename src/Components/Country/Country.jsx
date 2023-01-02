import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../Context/theme";
export const Country = ({ flag, name, population, region, capital }) => {
  const { darkToggle } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div
      className={`
        flex flex-col items-start justify-between w-64 h-80 rounded-md shadow-md ${
          darkToggle ? "dark__card" : "light__card"
        } cursor-pointer
    
    `}
      onClick={() => navigate(`/countryDetails/${name}`)}
    >
      <img src={flag} alt={name} className=" w-64 h-40" />

      <div className="px-6 pb-16">
        <h2 className="font-bold text-lg pt-6 pb-4">{name}</h2>
        <p className="text-sm">
          <strong>Population:</strong>
          {new Intl.NumberFormat().format(population)}
        </p>
        <p className="text-sm">
          <strong>Region:</strong> {region}
        </p>
        <p className="text-sm">
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </div>
  );
};
