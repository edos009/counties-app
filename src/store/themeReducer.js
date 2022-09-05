import { createSlice } from "@reduxjs/toolkit";

import CONSTANTS from "../constants";

const { THEMES } = CONSTANTS;

const themeSlice = createSlice({
  name: "themes",
  initialState: { theme: THEMES.DARK },
  reducers: {
    setTheme(state, action){
      state.theme = state.theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    }
  }
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
