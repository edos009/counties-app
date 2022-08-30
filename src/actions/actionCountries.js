import ACTIONS_TYPES from "./actionsTypes";

export const dataResponseSuccessAC = (countries) => ({
  type: ACTIONS_TYPES.DATA_RESPONSE_SUCCESS,
  countries,
});

export const dataResponseErrorAC = (error) => ({
  type: ACTIONS_TYPES.DATA_RESPONSE_ERROR,
  error,
});

export const dataResponseIsFetchingTrueAC = () => ({
  type: ACTIONS_TYPES.DATA_RESPONSE_IS_FETCHING_TRUE,
});

export const dataResponseIsFetchingFalseAC = () => ({
  type: ACTIONS_TYPES.DATA_RESPONSE_IS_FETCHING_FALSE,
});

export const setInputValueAC = (value) => ({
  type: ACTIONS_TYPES.SET_INPUT_VALUE, value
});
