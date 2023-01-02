import { useState, useContext } from "react";
import { useCountriesQuery } from "../../Hooks/useCountriesQuery";
import { Country } from "../Country/Country";
import { ThemeContext } from "../../Context/theme";
import { useSelector } from "react-redux";
export const Main = () => {
  const search = useSelector((state) => state.search.query);
  const region = useSelector((state) => state.search.region);
  const { darkToggle } = useContext(ThemeContext);
  const { data, isLoading, error } = useCountriesQuery();
  console.log("🚀 ~ file: Main.jsx:10 ~ Main ~ data", data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div
      className={`flex flex-wrap justify-center gap-16 mx-auto h-full ${
        darkToggle ? "dark" : "light"
      }`}
    >
      {/* map over data and render Country component with the needed props */}
      {/* filter by country name, unless search is empty string */}
      {
        // If the search bar is empty and the region filter is set to "All", then display all countries.
        search === "" && region === ""
          ? data
              .sort((a, b) => {
                return a.name.common.localeCompare(b.name.common);
              })
              .map((country) => {
                return (
                  <Country
                    key={country.name.common}
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                );
              })
          : data
              // Filter the results based on the search bar and region filter.
              .filter((country) => {
                return country.name.common
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .filter((country) => {
                return country.region
                  .toLowerCase()
                  .includes(region.toLowerCase());
              })
              .sort((a, b) => {
                return a.name.common.localeCompare(b.name.common);
              })
              // Display the filtered results.
              .map((country) => {
                return (
                  <Country
                    key={country.name.common}
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                );
              })
      }
    </div>
  );
};
