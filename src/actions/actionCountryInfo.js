import ACTIONS_TYPES from "./actionsTypes";

export const dataResponseSuccessAC = (country) => ({
  type: ACTIONS_TYPES.DATA_RESPONSE_SUCCESS,
  country: country[0],
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