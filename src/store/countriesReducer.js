import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    isFetching: false,
    error: null,
    inputValue: "",
    checkedCountries: [],
    removedCountries: [],
  },
  reducers: {
    dataResponseSuccess(state, action) {
      state.countries = action.payload.countries;
    },
    dataResponseError(state, action) {
      state.error = action.payload.error;
    },
    dataResponseIsFetchingFalse(state, action) {
      state.isFetching = false;
    },
    dataResponseIsFetchingTrue(state, action) {
      state.isFetching = true;
    },
    setValueInput(state, action) {
      state.inputValue = action.payload.value;
    },
    setCheckedCountry(state, action) {
      const { name, valueChecked } = action.payload;

      if (valueChecked) {
        state.checkedCountries.push(name);
      } else {
        state.checkedCountries = state.checkedCountries.filter(
          (item) => item !== name
        );
      }
    },
    setRemovedCountry(state, action) {
      state.removedCountries.push(action.payload.name);
    },
  },
});

export const {
  dataResponseSuccess,
  dataResponseError,
  dataResponseIsFetchingFalse,
  dataResponseIsFetchingTrue,
  setValueInput,
  setCheckedCountry,
  setRemovedCountry,
} = countriesSlice.actions;
export default countriesSlice.reducer;
