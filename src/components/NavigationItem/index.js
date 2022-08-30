import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.scss";

const NavigationItem = ({ item: { title, to } }) => {
  return (
    <li className={styles.nav_item}>
      <NavLink className={styles.nav_link} to={to}>
        {title}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
