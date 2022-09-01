import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import countryInfoReducer from "./countryInfoReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  countryInfo: countryInfoReducer,
})

export default rootReducer;