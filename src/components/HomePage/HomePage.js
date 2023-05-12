import React, {useState } from "react";
// components
import Loader from "../loader/loader.js";
import HeaderBottom from "./header bottom/HeaderBottom";
import Joins from "./joins/joins";
import NewProjects from "./newProject/NewProhects";
// style
import styles from "./homePage.module.css"


let HomePage = () => {
  let [hideLoader,setHideLoader] = useState(false)
  window.addEventListener("load",() => {
    setHideLoader(true)
  })

  return (
    <>
      <div className={styles.loaderWrapper} id={hideLoader ? styles.hide : ""}>
        <Loader/>
      </div>
      <div className={styles.bodyWrapper} id={!hideLoader ? styles.hide : styles.show}>
        <HeaderBottom />
        <NewProjects />
        <Joins />
      </div>
    </>
  );

};

export default HomePage;
