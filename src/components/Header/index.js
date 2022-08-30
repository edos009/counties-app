import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { connect } from "react-redux";
import cx from 'classnames'

import Logo from "../Logo";
import Navigation from "../Navigation";
import { setThemeAC } from "../../actions/actionTheme";
import CONSTANTS from "../../constants";

import styles from "./Header.module.scss";

const {THEMES} = CONSTANTS;

const Header = (props) => {
  const { theme, setTheme } = props;

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
          <div className={styles.box_theme} onClick={() => setTheme()}>
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

const mapStateToProps = ({ theme }) => theme;

const mapDispatchToProps = (dispatch) => ({
  setTheme: () => dispatch(setThemeAC())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
