import { useContext } from "react";
import { useDispatch } from "react-redux";
import { setRegion } from "../../redux/reducers";
import { ThemeContext } from "../../Context/theme";

export const Dropdown = () => {
  const dispatch = useDispatch();
  const { darkToggle } = useContext(ThemeContext);
  const handleRegionSelect = (e) => {
    console.log(e.target.value);
    dispatch(setRegion(e.target.value));
  };
  return (
    // dropdown with filter options (region)
    <select
      name="region"
      id="region"
      placeholder="Filter by region"
      onChange={handleRegionSelect}
      className={`w-52 rounded-md ${
        darkToggle ? "dark__card" : "light__card"
      } `}
      ariaLabel="Filter by region"
    >
      <option value="" selected className="light__card">
        Filter by Region
      </option>
      <option value="Africa" className="light__card">
        Africa
      </option>
      <option value="Americas" className="light__card">
        Americas
      </option>
      <option value="Asia" className="light__card">
        Asia
      </option>
      <option value="Europe" className="light__card">
        Europe
      </option>
      <option value="Oceania" className="light__card">
        Oceania
      </option>
    </select>
  );
};
