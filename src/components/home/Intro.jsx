import "./home.css";
import ijm_brands from "@/src/assets/images/ijm_brands.png";

export default function Intro() {
  return (
    <section className="intro my-10 py-10 px-[4vw]">
      <div className=" w-full max-w-[1440px] mx-auto">
        <h1 className="px-[4vw] h-text text-center uppercase">who are we?</h1>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between py-10">
          <div className="basis-1/2">
            <p data-aos="fade-right" className="p-text">
              IJM Global Limited is a tech security company that innovates,
              develops and deploys solutions anchored around Tracking and IOT
              technology to solve the daily organizational, community and
              individual challenges associated with fleet management, community
              security management, emergency challenges, SOS response for
              individuals and organizations.
            </p>
          </div>
          <div className="basis-1/2">
            <div className="w-full max-h-[500px] aspect-square flex items-center justify-center overflow-hidden">
              <img
                data-aos="fade-left"
                src={ijm_brands}
                alt="IJM Global Limited Brands"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
