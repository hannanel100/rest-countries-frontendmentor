// search component with magnifying glass on the left and search for country... text
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../Context/theme";
import { useDispatch } from "react-redux";
import { setQuery } from "../../redux/reducers";

export const Search = () => {
  const dispatch = useDispatch();
  const { darkToggle } = useContext(ThemeContext);

  function handleSearch(query) {
    dispatch(setQuery(query));
  }
  return (
    <form
      className="relative rounded-md shadow-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className={`form-input py-2 pl-10 pr-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
          darkToggle ? "dark__card" : "light__card"
        }`}
        placeholder="Search..."
        onChange={(event) => handleSearch(event.target.value)}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      </div>
    </form>
  );
};
