import React, { useEffect } from "react";
import cx from "classnames";
import { connect } from "react-redux";

import CONSTANTS from "../../../constants";

import styles from "./Countries.module.scss";
import {
  dataResponseErrorAC,
  dataResponseIsFetchingFalseAC,
  dataResponseIsFetchingTrueAC,
  dataResponseSuccessAC,
  setInputValueAC,
} from "../../../actions/actionCountries";
import { loadCountries } from "../../../api";

const { THEMES } = CONSTANTS;

const Countries = (props) => {
  const {
    theme,
    countries: { countries, error, isFetching, inputValue },
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

  return (
    <section className={stylesCountries}>
      <div className={styles.container}>
        <div className={styles.countries_inner}>
          <h1 className={styles.countries_title}>Countries</h1>
          <input
            type="text"
            value={inputValue}
            onChange={({ target: { value } }) => setValueInput(value)}
            placeholder="Search..."
          />
          {isFetching ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error</div>
          ) : (
            <div>
              {countries
                .filter((country) =>
                  country.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((country, i) => (
                  <p key={i}>{country.name}</p>
                ))}
            </div>
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
