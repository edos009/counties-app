import React from "react";
import cx from "classnames";
import { connect } from "react-redux";

import CONSTANTS from "../../../constants";

import styles from "./Countries.module.scss";

const { THEMES } = CONSTANTS;

const Countries = (props) => {
  const { theme } = props;

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

  return (
    <section className={stylesCountries}>
      <div className={styles.container}>
        <div className={styles.countries_inner}>
          <h1 className={styles.countries_title}>Countries</h1>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ theme }) => theme;

export default connect(mapStateToProps)(Countries);
