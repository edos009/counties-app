import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useDispatch, useSelector } from "react-redux";
import cx from 'classnames'

import Logo from "../Logo";
import Navigation from "../Navigation";
import CONSTANTS from "../../constants";

import styles from "./Header.module.scss";
import { setTheme } from "../../store/themeReducer";

const {THEMES} = CONSTANTS;

const Header = () => {
  const theme = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const stylesHeader = cx(
    styles.header,
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
    <header className={stylesHeader}>
      <div className={styles.container}>
        <div className={styles.header_inner}>
          <Logo />
          <Navigation />
          <div className={styles.box_theme} onClick={() => dispatch(setTheme())}>
            {theme === THEMES.DARK ? (
              <DarkModeIcon className={styles.btn_theme} />
            ) : (
              <WbSunnyIcon className={styles.btn_theme} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
