import React from 'react';
import CONSTANTS from '../../constants';
import NavigationItem from '../NavigationItem';

import styles from "./Navigation.module.scss";

const {NAVIGATION} = CONSTANTS;

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {NAVIGATION.LINKS.map((item) => (
          <NavigationItem item={item} key={item.id}/>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
