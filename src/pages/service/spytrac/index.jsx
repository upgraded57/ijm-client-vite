import Nav from "@/src/components/nav/Nav";
import playStoreIcon from "@/src/assets/images/playstoreicon.webp";
import appStoreIcon from "@/src/assets/images/appstoreicon.webp";
import lgBanner from "@/src/assets/images/banner.webp";
import smBanner1 from "@/src/assets/images/banner1.webp";
import smBanner2 from "@/src/assets/images/banner2.webp";
import controlImg from "@/src/assets/images/control1.webp";
import featureImg1 from "@/src/assets/images/feature1.webp";
import featureImg2 from "@/src/assets/images/feature2.webp";
import featureImg3 from "@/src/assets/images/feature3.webp";
import offerImg from "@/src/assets/images/offer.webp";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import { FaChartLine, FaStar } from "react-icons/fa";
import RequestAMeeting from "@/src/components/requestAMeeting/RequestAMeeting";
import Footer from "@/src/components/footer/Footer";

export default function Spytrac() {
  const features = [
    {
      image: featureImg1,
      title: "Real-time GPS tracking",
      text: "Experience unparalleled precision and reliability with Spytrac, he leading platform for real-time GPS tracking. Unlock the power of real-time GPS tracking with Spytrac. Sign up now to experience enhanced safety, efficiency, and peace of mind.",
      layout: "normal",
    },
    {
      image: featureImg2,
      title: "Detailed vehicle status report",
      text: "Stay informed and in control with Spytrac, the leading app for detailed vehicle status reports. Designed for fleet managers, individual vehicle owners, and businesses, Spytrac provides real-time insights into vehicle performance, location, and health, ensuring optimal operation and peace of mind.",
      layout: "reverse",
    },
    {
      image: featureImg3,
      title: "Maintenance Reminder",
      text: "Ensure your assets are always in top condition with Spytrac's Maintenance Reminder feature. Designed to streamline maintenance scheduling and management, Spytrac helps you avoid costly repairs and downtime by keeping you informed about upcoming maintenance tasks.",
      layout: "normal",
    },
  ];

  const values = [
    {
      icon: <FaEnvelopeOpenText />,
      title: "Cut Cost",
      text: "Lower maintenance costs through preventative maintenance alerts and reduce operational expenses with our real-time fleet assistant product.",
      iconColor: "red",
    },
    {
      icon: <LuShieldCheck />,
      title: "Improve Safety",
      text: "Monitor your driver'ss behavior, get real-time alerts, and ensure your drivers' compliance with safety regulations to reduce accidents and liabilities.",
      iconColor: "green",
    },
    {
      icon: <FaChartLine />,
      iconColor: "blue",
      title: "Enhance Efficiency",
      text: "Streamline operations with Spytrac Fleet Assistant by optimizing routes, reducing fuel consumption, and minimizing vehicle downtime.",
    },
  ];

  const testimonials = [
    {
      user: "John Doe",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt laboriosam impedit suscipit porro. Iste vel, neque aliquam eveniet culpa voluptatem.",
      rating: [1, 2, 3, 4],
    },
  ];
  return (
    <>
      <Nav />

      <div className="w-full">
        <div className="max-w-screen-lg mx-auto px-[4vw] flex flex-col items-center justify-center w-full gap-10 py-10 text-center my-10">
          <div className="text-center max-w-screen-md ">
            <h1 className="text-4xl md:text-6xl font-bold text-green-clr text-balance mb-6">
              All-in-One Fleet Management Solution
            </h1>
            <p>
              Transform your fleet management with Spytrac, the app that puts
              you in control. Sign up today and experience the benefits of a
              smarter, more efficient fleet operation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img
              src={playStoreIcon}
              alt="Get the Spytrac app on Google Play Store"
              className="w-[150px]"
            />
            <img
              src={appStoreIcon}
              alt="Get the Spytrac app on Apple App Store"
              className="w-[150px]"
            />
          </div>
          <div className="hidden md:block w-full max-w-screen-lg">
            <img src={lgBanner} alt="Banner" />
          </div>
          <div className="block md:hidden w-full">
            <img src={smBanner1} alt="Banner" className="mb-[10px]" />
            <img src={smBanner2} alt="Banner" />
          </div>
        </div>

        <section className="max-w-screen-md rounded-xl shadow-lg mx-[4vw] md:mx-auto p-4 border-[1px] bg-white flex flex-col md:flex-row items-center justify-center gap-5 my-10">
          <div className="basis-1/2 w-full rounded-md overflow-hidden">
            <img
              src={controlImg}
              alt="Take Control of your vehicle"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="basis-1/2 w-full rounded-md overflow-hidden">
            <h3 className="text-2xl font-medium mb-4">
              Take control of all your vehicles
            </h3>

            <p className="p-text">
              Start your fleet management journey with Spytrac today and
              discover our cutting-edge intelligent vehicle tracking technology.
            </p>
          </div>
        </section>

        <section className=" max-w-screen-lg px-[4vw] mx-auto py-10 gap-5 my-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center justfy-between gap-6 md:gap-20 py-4 md:py-0 my-10 md:my-6 ${
                feature.layout === "reverse" && "md:flex-row-reverse"
              }`}
            >
              <div className="basis-1/2">
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="p-text">{feature.text}</p>
              </div>
              <div className="basis-1/2">
                <div className="w-full">
                  <img src={feature.image} alt={feature.title} />
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className=" max-w-screen-lg mx-auto px-[4vw] pb-10 gap-5 mb-10">
          <div className="text-center max-w-screen-md mx-auto mb-10">
            <h3 className="text-2xl mb-2 md:mb-0 font-semibold">
              Your Personal Fleet Management Assistance
            </h3>
            <p className="p-text text-balance">
              The premier personal fleet management assistant designed to
              streamline and optimize your vehicle tracking and management
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 items-stretch justify-between gap-10">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="max-w-[390px] border-[1px] w-full rounded-md text-center flex flex-col items-center justify-center p-10 gap-6 hover:scale-105 hover:shadow-md transition-transform"
              >
                <span className="text-4xl" style={{ color: value.iconColor }}>
                  {value.icon}
                </span>
                <div className="">
                  <h5 className="text-lg font-semibold mb-2">{value.title}</h5>
                  <p className="p-text">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className=" max-w-screen-lg mx-auto px-[4vw]  py-10 gap-5 my-10">
          <div className="text-center max-w-screen-md mx-auto mb-10">
            <h3 className="text-2xl mb-2 md:mb-0 font-semibold text-balance">
              There is a plan for every fleet size
            </h3>
            <p className="p-text text-balance">
              Check out our product catalog here
            </p>
          </div>

          {/* Table Here */}
        </section>

        <section className="w-full px-[4vw] py-10 gap-5 my-10 bg-slate-200">
          <div className=" max-w-screen-lg mx-auto">
            <div className="text-center max-w-screen-md mx-auto mb-10">
              <h3 className="text-2xl mb-2 md:mb-0 font-semibold text-balance">
                Get Started in few easy steps
              </h3>
              <p className="p-text text-balance">
                Join countless satisfied users who trust Spytrac for their
                vehicle tracking needs
              </p>

              <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-20 my-8">
                <div className="basis-4/5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  quis sed fugit error nemo vel aperiam pariatur cumque
                  accusamus reprehenderit.
                </div>
                <div className="basis-1/5">
                  <div className="text-center md:text-left">
                    <p className="font-semibold p-text">John Doe</p>
                    <span className="flex gap-2">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-slate-300" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:pt-6 items-center gap-2">
                <img
                  src={playStoreIcon}
                  alt="Get the Spytrac app on Google Play Store"
                  className="w-[150px]"
                />
                <img
                  src={appStoreIcon}
                  alt="Get the Spytrac app on Apple App Store"
                  className="w-[150px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className=" max-w-screen-lg px-[4vw] mx-auto py-10 gap-5 my-10">
          <div className="flex flex-col md:flex-row items-center justfy-between gap-6 md:gap-20 py-4 md:py-0 my-10 md:my-6 ">
            <div className="basis-1/2">
              <h3 className="text-2xl font-semibold mb-3">
                Sign up and get rewarded with a free 360<sup>0</sup> health
                check
              </h3>
              <div className="w-full md:hidden py-3">
                <img src={offerImg} alt="Spytrac 360 degrees vehicle check" />
              </div>
              <p className="p-text mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="btn rounded-full bg-green-clr text-white">
                Contact Sales
              </button>
            </div>
            <div className="hidden md:block basis-1/2">
              <div className="w-full">
                <img src={offerImg} alt="Spytrac 360 degrees vehicle check" />
              </div>
            </div>
          </div>
        </section>

        <RequestAMeeting />

        <Footer />
      </div>
    </>
  );
}
