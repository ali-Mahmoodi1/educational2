import React from "react";
import styles from "./goTop.module.css"
import goTopIcon from "../../images/right-arrow.svg"
let GoTop = () => {
  return <a className={styles.GoTop} href="#top">
    <img src={goTopIcon} alt="go top"/>
  </a>;
};

export default GoTop;
