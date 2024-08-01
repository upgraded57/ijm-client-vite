import "./about.css";
import CountUp, { useCountUp } from "react-countup";
import Nav from "../../components/nav/Nav";
import vision_icon from "@/src/assets/images/vision_icon.svg";
import mission_icon from "@/src/assets/images/mission_icon.svg";
import vettmeImg from "@/src/assets/images/vettmeimg.png";
import spytracImg from "@/src/assets/images/spytracimg.png";
import spystoreImg from "@/src/assets/images/spystoreimg.png";
import ProblemImg1 from "@/src/assets/images/HomeInsecurityImg.png";
import ProblemImg2 from "@/src/assets/images/CommunityInsecurityImg.png";
import ProblemImg3 from "@/src/assets/images/OrganizationalInsecurityImg.png";
import Person1Img from "@/src/assets/images/person1.jpg";
import Person2Img from "@/src/assets/images/person2.jpg";
import Person3Img from "@/src/assets/images/person3.jpg";
import Person4Img from "@/src/assets/images/person4.jpg";
import mapImg from "@/src/assets/images/reachImg.png";
import Testimonials from "@/src/components/testimonials/Testimonials";
import Footer from "@/src/components/footer/Footer";
import { Link } from "react-router-dom";

export default function AboutPage() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
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

  const services = [
    {
      image: spytracImg,
      title: "Spytrac",
      text: "Advanced asset management and tracking services",
      path: "/service/spytrac",
    },
    {
      image: vettmeImg,
      title: "Vettme",
      text: "Comprehensive Identity Verification and Authentication Services.",
      path: "/service/vettme",
    },
    {
      image: spystoreImg,
      title: "Smart IoT",
      text: "IoT-enabled smart security systems",
      path: "/service/spystore",
    },
  ];

  const problems = [
    {
      image: ProblemImg1,
      title: "Home and Personal Insecurity",
      points: [
        "Robberies",
        "Homicides",
        "Kidnappings",
        "Rapes",
        "Vehicle Thefts",
      ],
    },
    {
      image: ProblemImg2,
      title: "Community Insecurity",
      points: [
        "Attacks on Communities",
        "Attacks on Schools",
        "Attacks on Churches",
        "Attacks on Agricultural Settlements",
      ],
    },
    {
      image: ProblemImg3,
      title: "Organizational Insecurity",
      points: [
        "Inadequate Organizational Asset Management",
        "Loss Prevention and Recovery",
      ],
    },
  ];

  const impacts = ["Enhanced Quality of Life", "Sustainable Growth"];

  const faces = [
    {
      image: Person1Img,
      name: "Ijeoma Chukwu - CEO",
    },
    {
      image: Person2Img,
      name: "Paul Obalonye",
    },
    {
      image: Person3Img,
      name: "Adeniyi Adeniran",
    },
    {
      image: Person4Img,
      name: "Tolani Jemi Alade",
    },
  ];

  const tractions = [
    {
      digit: 275,
      text: "rescue operations",
    },
    {
      digit: 17000,
      text: "assets tracked",
    },
    {
      digit: 1000,
      text: "cameras deployed",
    },
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

      <div className="w-full max-w-screen-lg mx-auto">
        <section className="px-[4vw] mt-10">
          <h1 className="h-text uppercase text-center mb-5">
            about our company
          </h1>
          <p className="p-text">
            IJM Global Limited, based in Lagos, Nigeria, is a leading technology
            security company dedicated to addressing the security challenges
            faced by individuals, communities, and organizations across Africa.
            Leveraging advanced tracking, IoT, and cybersecurity solutions, IJM
            Global delivers comprehensive and innovative security services
            designed to ensure safety, efficiency, and peace of mind. Our
            mission is to empower our clients with cutting-edge technology tools
            that provide real-time protection and support, making us the trusted
            partner for security in an increasingly complex world.
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

        <section className="px-[4vw] mt-[100px]">
          <h1 className="h-text uppercase text-center mb-5">our services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center md:items-end justify-center gap-5">
            {services.map((service, idx) => (
              <div key={idx} className="p-4 max-w-[300px] w-full mx-auto">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full object-contain mb-4"
                />

                <h3 className="text-2xl">{service.title}</h3>
                <p className="p-text">{service.text}</p>
                <Link
                  to={service.path}
                  className="btn font-normal bg-transparent mt-4 border-2 border-green-clr text-green-clr hover:text-white hover:border-transparent hover:bg-green-clr"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="px-[4vw] mt-[100px]">
          <h1 className="h-text uppercase text-center mb-5">
            The problems we solve
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center md:items-stretch justify-center gap-10 md:gap-5">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className="p-2 pb-6 max-w-[300px] w-full shadow-md mx-auto rounded-xl"
              >
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="w-full object-contain mb-4 rounded-md overflow-hidden"
                />

                <h3 className="text-xl mb-2">{problem.title}</h3>
                <ul>
                  {problem.points.map((point, idx) => (
                    <li key={idx} className="p-text list-disc ml-6">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="px-[4vw] mt-[100px] relative w-full">
          <h1 className="h-text uppercase text-center mb-5">Our Reach</h1>
          <div className="relative w-full py-10">
            <img
              src={mapImg}
              alt="Map"
              className=" overflow-hidden w-full h-full mt-4 md:mt-0 object-cover absolute top-0 left-0 -z-10"
            />
            <div className="md:flex gap-10 items-stretch justify-center mb-10">
              {tractions.map((traction, idx) => (
                <div
                  key={idx}
                  className="rounded-sm p-6 shadow-xl mb-6 md:mb-0 w-[300px] mx-auto border-[1px] border-white aspect-square flex items-center justify-center flex-col gap-6 backdrop-blur-sm"
                >
                  <h2 className="text-6xl font-semibold text-blue-clr">
                    <CountUp
                      end={
                        traction.digit < 500
                          ? traction.digit
                          : Math.floor(traction.digit / 1000)
                      }
                      enableScrollSpy
                    />
                    {traction.digit < 500 ? "+" : "k+"}
                  </h2>
                  <p className="text-md font-normal">{traction.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[4vw] mt-[100px]">
          <h1 className="h-text uppercase text-center mb-5">Our Impact</h1>
          <div className="flex items-center justify-center gap-10 flex-wrap">
            {impacts.map((impact, idx) => (
              <div
                key={idx}
                className={`impact${
                  idx + 1
                } w-full min-w-[300px] max-w-[400px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center p-4`}
              >
                <p className="text-lg text-white font-medium">{impact}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-[4vw] mt-[100px]">
          <h1 className="h-text uppercase text-center mb-5">
            The faces behind our brand
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
            {faces.map((face, idx) => (
              <div className="p-4 w-full max-w-[270px] mx-auto mb-4" key={idx}>
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-2">
                  <img
                    src={face.image}
                    alt={face.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl">{face.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Testimonials />
      <Footer />
    </>
  );
}
