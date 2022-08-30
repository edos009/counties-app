import ACTIONS_TYPES from "../actions/actionsTypes";

const initialState = {
  countries: [],
  isFetching: false,
  error: null,
  inputValue: ''
}

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.DATA_RESPONSE_SUCCESS: {
      const {countries} = action;
      return {...state, countries}
    }

    case ACTIONS_TYPES.DATA_RESPONSE_ERROR: {
      const {error} = action;
      return {...state, error}
    }

    case ACTIONS_TYPES.DATA_RESPONSE_IS_FETCHING_FALSE: {
      return {...state, isFetching: false}
    }

    case ACTIONS_TYPES.DATA_RESPONSE_IS_FETCHING_TRUE: {
      return {...state, isFetching: true}
    }

    case ACTIONS_TYPES.SET_INPUT_VALUE: {
      const {value} = action;
      return {...state, inputValue: value}
    }

    default:
      return state;
  }
};

export default countriesReducer;