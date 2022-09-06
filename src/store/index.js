import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countriesReducer";
import countryInfoReducer from "./countryInfoReducer";
import themeReducer from "./themeReducer";

export default configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
    countryInfo: countryInfoReducer,
  }
});
