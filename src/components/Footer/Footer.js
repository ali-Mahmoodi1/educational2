import React from "react";
import styles from "./footer.module.css";
import twitter from "../../images/icons8-twitter-48.png";
import whatsApp from "../../images/icons8-whatsapp-50.png";
import instagram from "../../images/icons8-instagram-64.png";
import telegram from "../../images/icons8-telegram-app-64.png";

let Footer = () => {
  return (
    <div className={styles.container}>
      <div id={styles.infoes} className="container">
        <h3 className={styles.title}>درباره ما</h3>
        <p className={styles.p}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <hr />
      <div className="container" id={styles.images}>
        <img className={styles.image} src={twitter} alt="twitter" />
        <img className={styles.image} src={instagram} alt="instagram" />
        <img className={styles.image} src={telegram} alt="telegram" />
        <img className={styles.image} src={whatsApp} alt="whatsApp" />
      </div>
    </div>
  );
};

export default Footer;
