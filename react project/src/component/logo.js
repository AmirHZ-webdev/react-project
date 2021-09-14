import React, { Component } from "react";
import styles from "./logo.module.css";
import apple from "../img/apple.png";
import samsung from "../img/samsung.jpg";
import lg from "../img/lg.png";
export default class Logo extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>what's your favorite </h1>
        </div>
        <div className={styles.image}>
          <img src={apple} />
          <img src={samsung} />
          <img src={lg} />
        </div>
      </div>
    );
  }
}
