import { useContext } from "react";
import { useDispatch } from "react-redux";
import { setRegion } from "../../redux/reducers";
import { ThemeContext } from "../../Context/theme";
import { useSelector } from "react-redux";

export const Dropdown = () => {
  const region = useSelector((state) => state.search.region);

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
      aria-label="Filter by region"
      value={region}
    >
      <option value={region} disabled className="light__card">
        {region === "" ? "Filter by Region" : region}
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
