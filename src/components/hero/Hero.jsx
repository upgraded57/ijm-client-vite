import "./hero.css";
import hero_img from "@/src/assets/images/hero_img.png";
export default function Hero() {
  return (
    <>
      <div className="hero px-[4vw] py-[60px] mb-10">
        <div className=" w-full max-w-[1440px] mx-auto flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between">
          <div
            data-aos="fade-right"
            className="basis-1/2 text-center md:text-left"
          >
            <h1 className="text-[46px] text-green-clr md:text-[54px] lg:text-[64px] xl:text-[80px] font-medium leading-none pb-8">
              Where Security Meets Happiness
            </h1>
            <h3 className="text-[18px] lg:text-[30px] text-black-clr">
              Number One Tech Security Company in Nigeria for Fleet Management,
              Personnel Identity Verification, Security Management Solution and
              Security Gadgets.
            </h3>
          </div>
          <div
            data-aos="fade-left"
            className="basis-1/2 flex items-center justify-center md:justify-end"
          >
            <div className="w-[340px] h-[420px] lg:w-[460px] lg:h-[560px] relative">
              <img
                src={hero_img}
                alt="Happy protected woman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
