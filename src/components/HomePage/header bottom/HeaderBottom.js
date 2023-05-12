import React,{useRef} from "react";
import "./headerBottom.css";
// images
import searchIcon from "../../../images/icons8-search-50.png";
import usersIcon from "../../../images/icons8-user-64.png"
import coursesIcon from "../../../images/icons8-video-call-48.png"
import teachers from "../../../images/icons8-tuition-48.png"

let HeaderBottom = () => {
  // numbers
  //   1
  let p1Elem = useRef(null);
  let num1 = 0;
  let interval1 = setInterval(() => {
    num1++;
    p1Elem.current.innerHTML = num1;
    // console.log(num1);
    if (num1 > 200) {
      clearInterval(interval1);
    }
  }, 12);
  //   2
  let p2Elem = useRef(null);
  let num2 = 0;
  let interval2 = setInterval(() => {
    num2++;
    p2Elem.current.innerHTML = num2;
    // console.log(num2);
    if (num2 === 5) {
      clearInterval(interval2);
    }
  }, 480);
  //   3
  let p3Elem = useRef(null);
  let num3 = 0;
  let interval3 = setInterval(() => {
    num3++;
    p3Elem.current.innerHTML = num3;
    // console.log(num3);
    if (num3 === 15) {
      clearInterval(interval3);
    }
  }, 160);

  return (
    <div className="header-bottom">
      <div className="container">
        <h1 className="header-bottom-title">
          !ما به هر قیمتی دوره آموزشی تولید نمی کنیم
        </h1>
        <form className="header-bottom__search">
          <input
            type="search"
            id="inputSearch"
            placeholder="دنبال چی میگردی؟؟؟"
          />
          <button className="search__btn">
            <img
              src={searchIcon}
              alt="search icon"
              className="search__icon"
              draggable="false"
            />
          </button>
        </form>
        <div className="header-bottom__numbers">
          <div className="header-bottom-wrappers">
            <div className="header-bottom__wrapper__img">
              <img src={usersIcon} draggable="false" alt="دانشجویان" />
            </div>
            <p className="header-bottom__text">دانشجویان</p>
            <p
              className="header-bottom__number header-bottom__number1"
              ref={p1Elem}
            >
              {num1}
            </p>
          </div>
          <div className="header-bottom-wrappers">
            <div className="header-bottom__wrapper__img">
              <img src={coursesIcon} draggable="false" alt="دوره ها"/>
            </div>
            <p className="header-bottom__text">دوره ها</p>
            <p
              className="header-bottom__number header-bottom__number3"
              ref={p2Elem}
            >
              0
            </p>
          </div>
          <div className="header-bottom-wrappers">
            <div className="header-bottom__wrapper__img">
              <img src={teachers} draggable="false" alt="مدرسان"/>
            </div>
            <p className="header-bottom__text">مدرسان</p>
            <p
              className="header-bottom__number header-bottom__number2"
              ref={p3Elem}
            >
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
