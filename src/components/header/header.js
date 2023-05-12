import React, { useState } from "react";
// styles
import styles from "./header.module.css";
// api
import api from "../../servises/api";
// react-router-dom
import { Link } from "react-router-dom";
let dataes = api().courses;
let fronts = dataes.filter((item) => item.category === "front");
let backs = dataes.filter((item) => item.category === "back");

let Header = () => {
  let [showMenu, setShowMenu] = useState(true);
  let showMenuHandler = () => {
    setShowMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="container">
      <div className={styles.container} id="top">
        <Link className={styles.h1} to="/Home">
          my project
        </Link>
        <li className={styles.hamburger} onClick={showMenuHandler}>
          <div></div>
          <div></div>
          <div></div>
        </li>
        <ul className={styles.ul} id={showMenu ? styles.showMenu : ""}>
          <li className={styles.exit} onClick={showMenuHandler}>
            x
          </li>
          <li>
            فرانت اند
            <div className={styles.linkWrapper}>
              {fronts.map((front) => (
                <Link
                  key={front.id}
                  to={"/courses/" + (front.id - 1)}
                  className={styles.link}
                >
                  {front.name}
                </Link>
              ))}
            </div>
          </li>
          <li>
            بک اند
            <div className={styles.linkWrapper}>
              {backs.map((back) => (
                <Link
                  key={back.id}
                  to={"/courses/" + (back.id - 1)}
                  className={styles.link}
                >
                  {back.name}
                </Link>
              ))}
            </div>
          </li>
          <Link className={styles.About} to="/AboutUS">
            درباره ما
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
