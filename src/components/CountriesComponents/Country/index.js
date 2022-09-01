import React from "react";
import cx from "classnames";
import { connect } from "react-redux";

import CONSTANTS from "../../../constants";

import styles from "./Country.module.scss";
import {
  setCheckedCountryAC,
  setRemovedCountryAC,
} from "../../../actions/actionCountries";

const { THEMES } = CONSTANTS;

const Country = (props) => {
  const {
    theme: { theme },
    countries: { checkedCountries },
    setCheckedCountry,
    setRemovedCountry,
  } = props;
  const { name, flags, population, region, capital } = props.country;
  const valueChecked = checkedCountries.includes(name);

  const stylesCountryCard = cx(styles.card, {
    [styles.bg_light_theme]: theme === THEMES.LIGHT,
    [styles.bg_dark_theme]: theme === THEMES.DARK,
  });
  const stylesControlBox = cx(styles.card_control_box, {
    [styles.card_control_box_active]: valueChecked,
  });

  return (
    <article className={stylesCountryCard}>
      <div className={styles.card_box_img}>
        <img className={styles.card_img} src={flags.png} alt={name} />
      </div>
      <div className={styles.card_box_info}>
        <h3 className={styles.card_name}>{name}</h3>
        <p className={styles.card_capital}>
          Capital: <span>{capital}</span>
        </p>
        <p className={styles.card_region}>
          Region: <span>{region}</span>
        </p>
        <p className={styles.card_population}>
          Population: <span>{population}</span>
        </p>
        <div
          className={stylesControlBox}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <input
            id={name}
            className={styles.card_checkbox}
            name={name}
            type="checkbox"
            checked={valueChecked}
            onChange={() => setCheckedCountry(name, !valueChecked)}
          />
          <label className={styles.card_checkbox_label} htmlFor={name}>
            Choose country:
          </label>
          <button
            className={styles.card_btn_remove}
            onClick={() => setRemovedCountry(name)}
          >
            X
          </button>
        </div>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setCheckedCountry: (name, isAdd) =>
    dispatch(setCheckedCountryAC(name, isAdd)),
  setRemovedCountry: (name) => dispatch(setRemovedCountryAC(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Country);
