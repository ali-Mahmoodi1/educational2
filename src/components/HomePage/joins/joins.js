import React from "react";
import styles from "./Joins.module.css"
import api from "../../../servises/api";
import Join from "./Join";
let dataes = api().join;

let Joins = () => {
  return (
    <div className="container" id={styles.container}>
      {dataes.map((item) => (
        <Join key={item.image} item={item}/>
      ))}
    </div>
  );
};

export default Joins;
