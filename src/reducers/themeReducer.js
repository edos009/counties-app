import ACTIONS_TYPES from "../actions/actionsTypes";
import CONSTANTS from "../constants";

const { THEMES } = CONSTANTS;

const initialState = {
  theme: THEMES.DARK,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SET_THEME: {
      const { theme } = state;
      const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;

      return { ...state, theme: newTheme };
    }

    default:
      return state;
  }
};

export default themeReducer;
