import ACTIONS_TYPES from "../actions/actionsTypes";

const initialState = {
  countries: [],
  isFetching: false,
  error: null,
  inputValue: "",
  checkedCountries: [],
  removedCountries: [],
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.DATA_RESPONSE_SUCCESS: {
      const { countries } = action;
      return { ...state, countries };
    }

    case ACTIONS_TYPES.DATA_RESPONSE_ERROR: {
      const { error } = action;
      return { ...state, error };
    }

    case ACTIONS_TYPES.DATA_RESPONSE_IS_FETCHING_FALSE: {
      return { ...state, isFetching: false };
    }

    case ACTIONS_TYPES.DATA_RESPONSE_IS_FETCHING_TRUE: {
      return { ...state, isFetching: true };
    }

    case ACTIONS_TYPES.SET_INPUT_VALUE: {
      const { value } = action;
      return { ...state, inputValue: value };
    }

    case ACTIONS_TYPES.SET_CHECKED_COUNTRY: {
      const { name, isAdd } = action;
      let checkedCountries;

      if (isAdd) {
        checkedCountries = [...state.checkedCountries, name];
      } else {
        checkedCountries = state.checkedCountries.filter(
          (item) => item !== name
        );
      }

      return {
        ...state,
        checkedCountries,
      };
    }

    case ACTIONS_TYPES.SET_REMOVED_COUNTRY: {
      const { name } = action;
      let removedCountries = [...state.removedCountries, name];

      return {
        ...state,
        removedCountries,
      };
    }

    default:
      return state;
  }
};

export default countriesReducer;
