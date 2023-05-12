let api = () => {
  let data = {
    courses: [
      {
        id: 1,
        name: "html-css",
        image: "https://www.uplooder.net/img/image/39/3131e0cb77ff91e639a55455fc47d995/1.jpg",
        time: 600,
        category: "front",
        description:
          "اگر میخواهید (html , css) را به صورت اصولی یادبگیرید و در عین حال هزینه کنری انجام بدهید ، به شما دوره این وبسایت را پیشنهاد میکنم . من در این دوره در ده ساعت به شما (html , css) را به صورت کامل آموزش میدهم",
        price: 200000,
      },
      {
        id: 2,
        name: "javascript",
        image: "https://up.20script.ir/file/5f68-javascript-1200x385.jpg",
        time: 2200,
        category: "front",
        description:
          "ما در این دوره شما را در جاوا اسکریپت از 0 به 80 میرسانیم ، زیرا هیچ زبانی را نمیتوان 100 درصد یادگرفت . پس  از اتمام این دوره شما میتوانید وبسایت طراحی کنید",
        priceBeforeDiscount: 1200000,
        price: 1000000,
        discount: true,
        discountDay: 3,
      },
      {
        id: 3,
        name: "php,mySQL",
        image: "https://up.20script.ir/file/b739-images2.jpg",
        time: 1800,
        category: "back",
        description:
          "شما با یادگیری php , mySQL میتوانید بک اند پروژه ها را انجام دهید . ما در این دوره به صورت اصولی به شما این دو تکنولوژی را در 30 ساعت آموزش میدهیم",
        price: 1000000,
      },
      {
        id: 4,
        name: "laravel",
        image: "https://up.20script.ir/file/b739-z1.jpg",
        time: 1500,
        category: "back",
        description:
          "لاراول یک فریمورک پی اچ پی است و با استفاده از آن میتوانید راحتتر پروژه هایتان را هندل کنید . این دوره در 25 ساعت به شما این فریمورک را آموزش میدهد",
        price: 400000,
      },
    ],
    join: [
      {
        image:"🥈",
        name: "نقره ای",
        1: "لورم ایپسوم",
        2: "لورم ایپسوم",
        3: "لورم ایپسوم",
      },
      {
        image:"🥇",
        name: "طلایی",
        1: "لورم ایپسوم",
        2: "لورم ایپسوم",
        3: "لورم ایپسوم",
      },
      {
        image:"🥉",
        name: "برنزه",
        1: "لورم ایپسوم",
        2: "لورم ایپسوم",
        3: "لورم ایپسوم",
      },
    ],
  };
  return data;
};

export default api;
