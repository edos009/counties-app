import React from "react";
import cx from "classnames";

import CONSTANTS from "../../../constants";

import styles from "./Home.module.scss";
import { useSelector } from "react-redux";

const { THEMES } = CONSTANTS;

const Home = () => {
  const theme = useSelector(state => state.theme.theme)

  const stylesHome = cx(
    styles.home,
    {
      [styles.bg_light_theme]: theme === THEMES.DARK,
    },
    {
      [styles.color_dark_theme]: theme === THEMES.LIGHT,
      [styles.color_light_theme]: theme === THEMES.DARK,
    }
  );

  return (
    <section className={stylesHome}>
      <div className={styles.container}>
        <div className={styles.home_inner}>
          <h1 className={styles.home_title}>Home</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
