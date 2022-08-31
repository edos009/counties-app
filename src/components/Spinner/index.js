import React from "react";
import cx from "classnames";
import { connect } from "react-redux";

import CONSTANTS from "../../constants";

import styles from "./Spinner.module.scss";

const { THEMES } = CONSTANTS;

const Spinner = (props) => {
  const {
    theme: { theme },
  } = props;

  const stylesSpinner = cx(styles.loader, {
    [styles.color_circle_light_theme]: theme === THEMES.LIGHT,
    [styles.color_circle_dark_theme]: theme === THEMES.DARK,
  });

  return <div className={stylesSpinner}></div>;
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Spinner);
