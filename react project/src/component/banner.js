import React from "react";
import styles from "./banner.module.css";
import banner from "../img/banner.jpg";
const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} />
      <div className={styles.text}>
            <h1>Webdev</h1>
      <p>React project</p>
      </div>
    
    </div>
  );
};
export default Banner;
