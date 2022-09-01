import ACTIONS_TYPES from "../actions/actionsTypes";

const initialState = {
  country: {},
  isFetching: false,
  error: null,
};

const countryInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.DATA_INFO_RESPONSE_SUCCESS: {
      const { country } = action;
      return { ...state, country };
    }

    case ACTIONS_TYPES.DATA_INFO_RESPONSE_ERROR: {
      const { error } = action;
      return { ...state, error };
    }

    case ACTIONS_TYPES.DATA_INFO_RESPONSE_IS_FETCHING_FALSE: {
      return { ...state, isFetching: false };
    }

    case ACTIONS_TYPES.DATA_INFO_RESPONSE_IS_FETCHING_TRUE: {
      return { ...state, isFetching: true };
    }

    default:
      return state;
  }
};

export default countryInfoReducer;
