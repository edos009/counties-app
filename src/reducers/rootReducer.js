import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
})

export default rootReducer;