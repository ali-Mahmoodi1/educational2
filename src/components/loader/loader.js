import React from "react";
import styles from "./loader.module.css"
let Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
