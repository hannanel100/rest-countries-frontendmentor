import React from "react";
import { useDispatch } from "react-redux";
import { setRegion } from "../../redux/reducers";
export const Dropdown = () => {
  const dispatch = useDispatch();

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
    >
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
