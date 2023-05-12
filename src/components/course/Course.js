import React from "react";
import { useParams } from "react-router-dom";
// api
import api from "../../servises/api";
// css
import styles from "./course.module.css";
// icon
import videoIcon from "../../images/video-player.png";
import instagram from "../../images/icons8-instagram-64.png";
import telegram from "../../images/icons8-telegram-app-64.png";
import whatsApp from "../../images/icons8-whatsapp-50.png";

let Course = () => {
  let id = useParams().id;
  let course = api().courses[id];
  return (
    <div className={styles.background}>
      <div className={styles.course}>
        <div className={styles.courseLeft}>
          <img src={course.image} className={styles.courseImg} />
          <div className={styles.infoes}>
            <h1 className={styles.courseTitle}>{course.name}</h1>
            <h3 className={styles.courseTime}>
              H {Math.round(course.time / 60)}
            </h3>
            <h3 className={styles.coursePrice}>
              تومان {course.price.toLocaleString()}
            </h3>
            <button className={styles.courseBtn}>خرید</button>
          </div>
        </div>
        <div className={styles.videoIcon}>
          <div>
            <img src={videoIcon} />
          </div>
          <p>watch demo</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <h4 className={styles.description}>{course.description}</h4>
        <div className={styles.bottom__bottom}>
          <div className={styles.wrapperIcons}>
            <div>
              <img src={whatsApp} />
            </div>
            <div>
              <img src={telegram} />
            </div>
            <div>
              <img src={instagram} />
            </div>
          </div>
          <p className={styles.afterBuy}>
            توجه داشته باشید بعد از خرید به شماره شما پیامی ارسال خواهد شد و در
            آن لایسنس و شماره پشتیبانی دوره قرار دارد
          </p>
        </div>
      </div>
    </div>
  );
}

export default Course;
