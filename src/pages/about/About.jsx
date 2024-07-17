import "./about.css";
import Nav from "../../components/nav/Nav";
import vision_icon from "@/src/assets/images/vision_icon.svg";
import mission_icon from "@/src/assets/images/mission_icon.svg";
import Founder from "@/src/components/founder/Founder";
import Testimonials from "@/src/components/testimonials/Testimonials";
import Footer from "@/src/components/footer/Footer";

export default function AboutPage() {
  const cards = [
    {
      title: "Our Vision",
      text: "To be the first choice of call for real time security services across africa by 2030.",
      icon: vision_icon,
    },
    {
      title: "Our Mission",
      text: "To consistently connect humans and machines for the sole purpose of providing real time security and response services to our customers through the solutions we provide.",
      icon: mission_icon,
    },
  ];

  const values = [
    "People First",
    "Innovate the Impossible",
    "Excellent Delivery",
    "Speedy Delivery",
  ];

  return (
    <>
      <Nav />
      <div className="about_hero w-full h-[240px] md:h-[350px] flex flex-col items-center pt-[60px] justify-start">
        <h3 className="text-white uppercase text-xl font-bold  tracking-wider">
          get to know
        </h3>
        <h1 className="text-blue-clr uppercase text-[40px] md:text-[60px] font-bold tracking-wider">
          about us
        </h1>
      </div>

      <div className="flex justify-center px-[4vw] items-center md:items-stretch gap-10 flex-col md:flex-row relative -translate-y-10">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="p-6 md:p-10 rounded-xl border-2 border-blue-clr shadow-md bg-white max-w-[500px]"
          >
            <div className="flex items-center gap-5 mb-6">
              <img
                src={card.icon}
                alt={card.title}
                className="w-[50px] md:w-[72px] aspect-square"
              />
              <p className="p-text font-semibold">{card.title}</p>
            </div>
            <p className="text-sm">{card.text}</p>
          </div>
        ))}
      </div>

      <div className=" w-full max-w-[1440px] mx-auto">
        <section className="px-[4vw] mt-10">
          <h1 className="h-text uppercase text-center mb-5">
            about our company
          </h1>
          <p className="p-text">
            IJM Global Limited is a tech security company that innovates,
            develops and deploys solutions anchored around Tracking and IOT
            technology to solve the daily organizational, community and
            individual challenges associated with fleet management, community
            security management, emergency challenges, SOS response for
            individuals and organizations.
          </p>
        </section>

        <section className="px-[4vw] block md:flex gap-10 my-10 pt-10">
          <div className="our_core_values basis-1/2 w-full aspect-[2/1] rounded-xl flex p-10 items-center justify-center">
            <h1 className="text-blue-clr uppercase text-3xl text-center font-bold tracking-wider">
              our core values
            </h1>
          </div>
          <div className="basis-1/2 grid grid-cols-2 gap-6 place-content-center mt-6 md:mt-0">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="w-full flex items-stretch justify-center rounded-lg border-2 aspect-[2/1] hover:text-white hover:border-0 hover:bg-blue-clr transition-all"
              >
                <p className="text-lg text-center p-5 w-full h-full flex items-center justify-center">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Founder />
      <Testimonials />
      <Footer />
    </>
  );
}
