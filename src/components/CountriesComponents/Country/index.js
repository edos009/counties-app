import React from "react";
import cx from "classnames";
import { connect } from "react-redux";

import CONSTANTS from "../../../constants";

import styles from "./Country.module.scss";

const { THEMES } = CONSTANTS;

const Country = (props) => {
  const {
    theme: { theme },
  } = props;
  const { name, flags, population, region, capital } = props.country;

  const stylesCountryCard = cx(styles.card, {
    [styles.bg_light_theme]: theme === THEMES.LIGHT,
    [styles.bg_dark_theme]: theme === THEMES.DARK,
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
      </div>
    </article>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Country);
