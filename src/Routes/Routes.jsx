// router component
import React from "react";
import { Layout } from "../Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { CountryDetails } from "../Pages/CountryDetails/CountryDetails";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="countryDetails/:countryName"
          element={<CountryDetails />}
        />
      </Route>
    </Routes>
  );
};
