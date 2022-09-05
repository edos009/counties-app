import React from "react";
import { useSelector } from "react-redux";
import cx from 'classnames';

import CONSTANTS from "../../constants";

import styles from "./Footer.module.scss";

const {THEMES} = CONSTANTS;

const Footer = () => {
  const theme = useSelector(state => state.theme.theme)

  const stylesFooter = cx(
    styles.footer,
    {
      [styles.bg_light_theme]: theme === THEMES.LIGHT,
      [styles.bg_dark_theme]: theme === THEMES.DARK,
    },
    {
      [styles.color_dark_theme]: theme === THEMES.LIGHT,
      [styles.color_light_theme]: theme === THEMES.DARK,
    }
  );

  return (
    <footer className={stylesFooter}>
      <div className={styles.container}>
        <div className={styles.footer_inner}>
          <p className={styles.footer_text}>
            ediktuyutyunnik@gmail.com | @2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
