import "./home.css";

import clientele_img_1 from "@/src/assets/images/clientele_img_1.webp";
import clientele_img_2 from "@/src/assets/images/clientele_img_2.webp";
import clientele_img_3 from "@/src/assets/images/clientele_img_3.webp";
import clientele_img_4 from "@/src/assets/images/clientele_img_4.webp";
import clientele_img_5 from "@/src/assets/images/clientele_img_5.webp";
import clientele_img_6 from "@/src/assets/images/clientele_img_6.webp";
import clientele_img_7 from "@/src/assets/images/clientele_img_7.webp";
import clientele_img_8 from "@/src/assets/images/clientele_img_8.webp";
import clientele_img_9 from "@/src/assets/images/clientele_img_9.webp";
import clientele_img_10 from "@/src/assets/images/clientele_img_10.webp";
import clientele_img_11 from "@/src/assets/images/clientele_img_11.webp";

export default function Clientele() {
  const clientImgs = [
    clientele_img_1,
    clientele_img_2,
    clientele_img_3,
    clientele_img_4,
    clientele_img_5,
    clientele_img_6,
    clientele_img_7,
    clientele_img_8,
    clientele_img_9,
    clientele_img_10,
    clientele_img_11,
  ];
  return (
    <section className="px-[4vw] mb-10  w-full max-w-screen-lg mx-auto overflow-x-hidden">
      <h1 className="h-text text-grey-clr text-center uppercase">
        Our Clientele
      </h1>
      <div className="carousel-container carousel w-full gap-10 mt-10">
        {clientImgs.map((image, idx) => (
          <div key={idx} className="carousel-item h-10 relative">
            <img
              src={image}
              alt="Clientele"
              className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        ))}
        {clientImgs.map((image, idx) => (
          <div key={idx} className="carousel-item h-10 relative">
            <img
              src={image}
              alt="Clientele"
              className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
