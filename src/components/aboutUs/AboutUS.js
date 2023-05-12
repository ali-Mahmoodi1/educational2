import React from "react";
import {Link} from "react-router-dom"
import styles from "./aboutUs.module.css";
import Image from "../../images/image_processing20200323-16179-l6gw3d.jpg";

let AboutUs = () => {
  return (
    <>
      <h1 className={styles.title}>راه های ارتباطی</h1>
      <p className={styles.description}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با{" "}
      </p>
      <div className={styles.btns}>
        <button className={styles.btn}>
          <a className={styles.aLink} href="tel:+989103337253">
            number
          </a>
        </button>
        <button className={styles.btn}>
          <a className={styles.aLink} href="mailto:alimahmoodi1706@gmail.com">
            email
          </a>
        </button>
        <button className={styles.btn}><Link className={styles.aLink} to="/Home">back</Link></button>
      </div>
      <img className={styles.image} src={Image} alt="about" />
    </>
  );
};

export default AboutUs;
