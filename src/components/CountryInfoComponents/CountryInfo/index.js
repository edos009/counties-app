import React, { useEffect } from "react";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import CONSTANTS from "../../../constants";
import Spinner from "../../Spinner";
import {
  dataInfoResponseError,
  dataInfoResponseIsFetchingFalse,
  dataInfoResponseIsFetchingTrue,
  dataInfoResponseSuccess,
} from "../../../store/countryInfoReducer";

import styles from "./CountryInfo.module.scss";

const { THEMES } = CONSTANTS;

const CountryInfo = () => {
  const {
    theme: { theme },
    countryInfo: { country, error, isFetching },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigateCountry = useNavigate();
  console.log({ country });

  const {
    name,
    flag,
    capital,
    region,
    population,
    languages = [],
    area,
    borders = [],
  } = country;
  const nameLanguage = languages[0]?.name;

  const stylesCountry = cx(
    styles.country,
    {
      [styles.bg_light_theme]: theme === THEMES.DARK,
    },
    {
      [styles.color_dark_theme]: theme === THEMES.LIGHT,
      [styles.color_light_theme]: theme === THEMES.DARK,
    }
  );

  const stylesCountryBox = cx(styles.country_box, {
    [styles.bg_dark_theme]: theme === THEMES.DARK,
    [styles.bg_light_theme]: theme === THEMES.LIGHT,
  });

  const stylesBtnBack = cx(styles.country_btn_back, {
    [styles.color_dark_theme]: theme === THEMES.LIGHT,
  });

  const load = async () => {
    // dataResponseIsFetchingTrue();
    // loadCountry(id)
    //   .then((country) => dataResponseSuccess(country))
    //   .catch((error) => dataResponseError(error))
    //   .finally(() => dataResponseIsFetchingFalse());

    try {
      dispatch(dataInfoResponseIsFetchingTrue());
      const res = await fetch(`https://restcountries.com/v2/name/${id}`);
      const country = await res.json();
      dispatch(dataInfoResponseSuccess({ country: country[0] }));
    } catch (error) {
      dispatch(dataInfoResponseError({ error }));
    } finally {
      dispatch(dataInfoResponseIsFetchingFalse());
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []);

  const setBorderCountries = (border, i) => (
    <li className={styles.country_border_countries_item} key={i}>
      {border}
    </li>
  );

  return (
    <section className={stylesCountry}>
      <div className={styles.container}>
        <div className={styles.country_inner}>
          {isFetching ? (
            <Spinner />
          ) : error ? (
            <div>Error</div>
          ) : (
            <div className={stylesCountryBox}>
              <h1 className={styles.country_name}>{name}</h1>
              <div className={styles.country_box_img}>
                <img className={styles.country_img} src={flag} alt={name} />
              </div>
              <div className={styles.country_info}>
                <p className={styles.country_region}>
                  Region: <span>{region}</span>
                </p>
                <p className={styles.country_capital}>
                  Capital: <span>{capital}</span>
                </p>
                {nameLanguage && (
                  <p className={styles.country_nameLanguage}>
                    Language: <span>{nameLanguage}</span>
                  </p>
                )}
                <p className={styles.country_population}>
                  Population: <span>{population}</span>
                </p>
                <p className={styles.country_area}>
                  Area: <span>{area} km²</span>
                </p>
                <div className={styles.country_border_countries}>
                  {borders && (
                    <>
                      <h2 className={styles.country_border_countries_title}>
                        Neighboring countries:
                      </h2>
                      <ul className={styles.country_border_countries_list}>
                        {borders.length === 0 ? (
                          <li
                            className={styles.country_has_not_border_countries}
                          >
                            Has not neighboring countries
                          </li>
                        ) : (
                          borders.map(setBorderCountries)
                        )}
                      </ul>
                    </>
                  )}
                </div>
                <button
                  className={stylesBtnBack}
                  onClick={() => navigateCountry(`/countries`)}
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryInfo;
