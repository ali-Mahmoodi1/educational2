import React from "react";
// css
import styles from "./newProjects.module.css";
// images
import ImageTop from "../../../images/casual-life-3d-young-man-in-orange-headphones-sitting-at-the-computer.png";
import NewProject from "./NewProject/NewProject";
// servises
import api from "../../../servises/api";
let dataes = api().courses;

let NewProjects = () => {
  return (
    <div className={styles.container}>
      <img src={ImageTop} className={styles.titleImg} alt="ilistration"/>
      <div className={styles.titleContainer}>
        <div className={styles.titlewrapper}></div>
        <h1 className={styles.title}>جدیدترین دوره ها</h1>
        <div className={styles.titlewrapper}></div>
      </div>
      <div className={styles.newProductsWrapper}>
        <div className={styles.newProducts}>
          {dataes.map((data) => (
            <NewProject data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewProjects;
