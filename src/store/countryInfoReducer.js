import { createSlice } from "@reduxjs/toolkit";

const countryInfoSlice = createSlice({
  name: "countryInfo",
  initialState: {
    country: {},
    isFetching: false,
    error: null,
  },
  reducers: {
    dataInfoResponseSuccess(state, action) {
      state.country = action.payload.country;
    },
    dataInfoResponseError(state, action) {
      state.error = action.payload.error;
    },
    dataInfoResponseIsFetchingFalse(state, action) {
      state.isFetching = false;
    },
    dataInfoResponseIsFetchingTrue(state, action) {
      state.isFetching = true;
    },
  },
});

export const {
  dataInfoResponseSuccess,
  dataInfoResponseError,
  dataInfoResponseIsFetchingFalse,
  dataInfoResponseIsFetchingTrue,
} = countryInfoSlice.actions;
export default countryInfoSlice.reducer;
