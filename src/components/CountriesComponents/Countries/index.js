import React, { useCallback, useEffect } from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Country from "../Country";
import CONSTANTS from "../../../constants";
import { loadCountries } from "../../../api";
import Spinner from "../../Spinner";

import styles from "./Countries.module.scss";
import {
  dataResponseError,
  dataResponseIsFetchingFalse,
  dataResponseIsFetchingTrue,
  dataResponseSuccess,
  setValueInput,
} from "../../../store/countriesReducer";

const { THEMES } = CONSTANTS;

const Countries = () => {
  const {
    theme: { theme },
    countries: {
      countries,
      error,
      isFetching,
      inputValue,
      checkedCountries,
      removedCountries,
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

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
    dispatch(dataResponseIsFetchingTrue());
    loadCountries()
      .then((countries) => dispatch(dataResponseSuccess({ countries })))
      .catch((error) => dispatch(dataResponseError({ error })))
      .finally(() => dispatch(dataResponseIsFetchingFalse()));
  };

  useEffect(() => {
    if (!countries.length) {
      load();
    }
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={stylesCountries}>
      <div className={styles.container}>
        <div className={styles.countries_inner}>
          <h1 className={styles.countries_title}>Countries</h1>
          <input
            className={stylesCountriesInput}
            type="text"
            value={inputValue}
            onChange={({ target: { value } }) =>
              dispatch(setValueInput({ value }))
            }
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

export default Countries;
