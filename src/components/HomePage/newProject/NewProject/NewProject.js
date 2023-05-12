import React from "react";
import {Link} from "react-router-dom"
import styles from "./newProject.module.css";

let NewProject = ({ data }) => {
  return (
    <Link to={"/courses/" + (data.id -1)} className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={data.image} alt="course" className={styles.newProjectImg} />
      </div>
      <div className={styles.dataesWrapper}>
        <div>
          <h4>{(data.time / 60).toFixed(0)} H</h4>
          <span>⏱</span>
        </div>
        <h4>{data.price.toLocaleString()} تومان</h4>
      </div>
      <button className={styles.button}>مشاهده بیشتر</button>
    </Link>
  );
};

export default NewProject;
