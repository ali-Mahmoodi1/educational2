import React from "react";
import styles from "./join.module.css";
let Join = ({ item }) => {
  return (
    <div className={styles.container}>
      <span className={styles.img}>{item.image}</span>
      <h3 className={styles.title}>{item.name}</h3>
      <span className={styles.span}> ❗ {item[1]}</span>
      <br />
      <span className={styles.span}> ❗ {item[2]}</span>
      <br />
      <span className={styles.span}> ❗ {item[3]}</span>
      <br/>
      <button className={styles.btn}>خرید</button>
    </div>
  );
};

export default Join;
