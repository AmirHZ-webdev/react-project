import React, { Component } from "react";
import styles from "./menu.module.css";
const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <li>Menu</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
