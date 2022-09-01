import React, { useCallback, useEffect } from "react";
import cx from "classnames";
import { connect } from "react-redux";

import Country from "../Country";
import CONSTANTS from "../../../constants";
import {
  dataResponseErrorAC,
  dataResponseIsFetchingFalseAC,
  dataResponseIsFetchingTrueAC,
  dataResponseSuccessAC,
  setInputValueAC,
} from "../../../actions/actionCountries";
import { loadCountries } from "../../../api";
import Spinner from "../../Spinner";

import styles from "./Countries.module.scss";

const { THEMES } = CONSTANTS;

const Countries = (props) => {
  const {
    theme: { theme },
    countries: {
      countries = [],
      error,
      isFetching,
      inputValue,
      checkedCountries,
      removedCountries,
    },
    dataResponseSuccess,
    dataResponseError,
    dataResponseIsFetchingFalse,
    dataResponseIsFetchingTrue,
    setValueInput,
  } = props;

  const stylesCountries = cx(
    styles.countries,
    {
      [styles.bg_light_theme]: theme === THEMES.DARK,
    },
    {
      [styles.color_dark_theme]: theme === THEMES.LIGHT,
      [styles.color_light_theme]: theme === THEMES.DARK,
    }
  );

  const stylesCountriesInput = cx(
    styles.countries_input,
    {
      [styles.bg_light_theme]: theme === THEMES.LIGHT,
      [styles.bg_dark_theme]: theme === THEMES.DARK,
    },
    {
      [styles.color_dark_theme]: theme === THEMES.LIGHT,
      [styles.color_light_theme]: theme === THEMES.DARK,
    }
  );

  const load = () => {
    dataResponseIsFetchingTrue();
    loadCountries()
      .then((countries) => dataResponseSuccess(countries))
      .catch((error) => dataResponseError(error))
      .finally(() => dataResponseIsFetchingFalse());
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []);

  const renderCountries = useCallback(
    () =>
      countries
        .filter(
          (country) =>
            checkedCountries.includes(country.name) &&
            !removedCountries.includes(country.name)
        )
        .concat(
          countries.filter(
            (country) =>
              country.name.toLowerCase().includes(inputValue.toLowerCase()) &&
              !checkedCountries.includes(country.name) &&
              !removedCountries.includes(country.name)
          )
        )
        .map((country) => <Country country={country} key={country.name} />),
    [checkedCountries, countries, inputValue, removedCountries]
  );

  return (
    <section className={stylesCountries}>
      <div className={styles.container}>
        <div className={styles.countries_inner}>
          <h1 className={styles.countries_title}>Countries</h1>
          <input
            className={stylesCountriesInput}
            type="text"
            value={inputValue}
            onChange={({ target: { value } }) => setValueInput(value)}
            placeholder="Search..."
          />
          {isFetching ? (
            <Spinner />
          ) : error ? (
            <div>Error</div>
          ) : (
            <div className={styles.countries_list}>{renderCountries()}</div>
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  dataResponseSuccess: (countries) =>
    dispatch(dataResponseSuccessAC(countries)),
  dataResponseError: (error) => dispatch(dataResponseErrorAC(error)),
  dataResponseIsFetchingFalse: () => dispatch(dataResponseIsFetchingFalseAC()),
  dataResponseIsFetchingTrue: () => dispatch(dataResponseIsFetchingTrueAC()),
  setValueInput: (value) => dispatch(setInputValueAC(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countries);
