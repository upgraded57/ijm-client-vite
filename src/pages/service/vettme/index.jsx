import Nav from "@/src/components/nav/Nav";
import banner from "@/src/assets/images/vettme_banner.webp";
import feature1img from "@/src/assets/images/feature1img.webp";
import feature2img from "@/src/assets/images/feature2img.webp";
import feature3img from "@/src/assets/images/feature3img.webp";
import feature4img from "@/src/assets/images/feature4img.webp";
import personnelImg from "@/src/assets/images/personnel.webp";
import step1img from "@/src/assets/images/step1img.webp";
import step2img from "@/src/assets/images/step2img.webp";
import step3img from "@/src/assets/images/step3img.webp";
import { FaCheckCircle } from "react-icons/fa";
import RequestAMeeting from "@/src/components/requestAMeeting/RequestAMeeting";
import Footer from "@/src/components/footer/Footer";
import { useSearchParams } from "react-router-dom";
import Waitlist from "./Waitlist";

export default function Vettme() {
  const [q, setQ] = useSearchParams();

  const modal = q.get("modal");

  const features = [
    {
      title: "document verification",
      image: feature1img,
    },
    {
      title: "background checks",
      image: feature2img,
    },
    {
      title: "identity verification",
      image: feature3img,
    },
    {
      title: "online security/privacy check",
      image: feature4img,
    },
  ];

  const steps = [
    {
      image: step1img,
      title: "Create a free account",
      text: "Welcome to VettMe! Getting started is simple and quick.",
    },
    {
      image: step2img,
      title: "Choose a verification type",
      text: "Select the verification type that best suits your needs, VettMe offers a variety of verification options to ensure you have the right information at your fingertips.",
      layout: "reverse",
    },
    {
      image: step3img,
      title: "Upload verification data",
      text: "Upload the necessary documents and information to ensure a smooth and thorough verification process. This step is crucial for obtaining accurate and reliable results.",
      layout: "normal",
    },
  ];

  const useCases = [
    {
      title: "Employers and Recruiters",
      text: "Streamline your hiring process and ensure you're bringing the right people into your organization with thorough employee background checks",
    },
    {
      title: "Homeowners",
      text: "Verify domestic workers, such as nannies, housekeepers, and caregivers, to ensure the safety and security of your home and loved ones",
    },
    {
      title: "Educational Institutions",
      text: "Conduct background checks on teachers and educators to maintain a safe and trustworthy learning environment.",
    },
    {
      title: "Financial Institutions",
      text: "Simplify customer KYC processes and compliance requirements with our comprehensive verification services.",
    },
  ];

  const plans = [
    {
      title: "vettme basic",
      options: [
        "Online Direct Assessment",
        "Domestic Checks",
        "New Employee Verification",
        "Quick Background Checks",
        "Immediate Result",
        "In App Cost",
      ],
      bg: true,
    },
    {
      title: "vettme pro",
      options: [
        "Data Gathering",
        "Staff Data Verification",
        "Physical Assessment for Employee and Guarantor",
        "Employment Histroy Check",
        "Basic Background Verification",
        "Result Duration: Two weeks",
        "Online Verification Fee",
      ],
      bg: false,
    },
    {
      title: "vettme premium",
      options: [
        "Comprehensive Background Check",
        "Everything in Pro",
        "Education and Cerification Claim Verification",
        "Criminal Record Check",
        "Behavioral Integrity Check",
        "Top Employment Check",
        "Result Duration: One Month",
      ],
      bg: true,
    },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.style.scrollMarginBlockStart = "5vh";
    aboutSection.scrollIntoView();
  };
  return (
    <>
      <Nav />

      <div className="w-full max-w-screen-lg mx-auto px-[4vw]">
        <div className="md:flex w-full gap-10 justify-between items-center mb-[100px]">
          <div className="basis-1/2 w-full flex flex-col gap-6 pt-[80px] pb-[20px] md:py-[80px]">
            <h1 className="v-text-regular text-5xl">
              Identity{" "}
              <span className="v-text-bold text-red-clr">Verification </span>{" "}
              <br />
              has never been easier
            </h1>
            <p className="p-text">
              Discover the power of secure and reliable personnel verification
              with the VettMe App. Designed for employers, recruiters, and
              individuals, VettMe is the go-to solution for comprehensive
              background checks and Know Your Customer (KYC) processes. Whether
              you're hiring domestic workers, educators, or corporate employees,
              VettMe ensures you have the information you need to make informed
              decisions.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setQ("modal=true")}
                className="btn bg-red-clr text-white shadow-none border-none hover:bg-red-600"
              >
                Join the Waitlist
              </button>
              <button
                onClick={scrollToAbout}
                className="btn bg-red-soft-clr text-red-clr shadow-none border-none hover:bg-red-200"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="basis-1/2 w-full">
            <img
              src={banner}
              alt="vettme mobile splashscreen"
              className="w-full object-cover"
            />
          </div>
        </div>

        <section className="mb-[100px]" id="about">
          <div className="md:text-center">
            <h1 className="v-text-regular text-3xl md:text-5xl mb-4">
              One <span className=" text-red-clr">Application</span>, Everything{" "}
              <span className=" text-red-clr">Verification</span>{" "}
            </h1>
          </div>

          <div className="md:grid grid-cols-5 gap-4 mt-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`w-full max-h-[300px] rounded-lg overflow-hidden relative bg-black mb-4 md:mb-0 vettme-feature-img-${
                  idx + 1
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-60 peer hover:opacity-100 transition-opacity"
                />
                <span className="invisible peer-hover:visible absolute top-2 left-2 rounded-lg bg-red-clr border-white border-2 px-2 py-1 uppercase text-white font-semibold pointer-events-none">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-[100px] ">
          <div className="md:flex items-center gap-10">
            <div className="hidden md:block basis-2/5">
              <img src={personnelImg} alt="Vettme Personnel" />
            </div>
            <div className="basis-3/5">
              <h1 className="v-text-regular text-3xl md:text-5xl mb-4">
                The <span className="uppercase text-red-clr">Only</span>{" "}
                Personnel Verfication Application you'll ever need
              </h1>

              <div className="w-full py-10 px-6 md:hidden">
                <img src={personnelImg} alt="Vettme Personnel" />
              </div>
              <div className="block md:md:grid grid-cols-2 gap-10 md:mt-10">
                {useCases.map((useCase, idx) => (
                  <div key={idx} className="block w-full">
                    <p className="p-text font-semibold">{useCase.title}</p>
                    <p className="text-body mb-4">{useCase.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-[100px] ">
          <h1 className="v-text-regular text-3xl md:text-5xl mb-4 md:text-center">
            Complete Verification in{" "}
            <span className="uppercase text-red-clr">three</span> Steps
          </h1>

          <div className="mt-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`md:flex justify-between items-center gap-10 mb-20 ${
                  step.layout === "reverse" && "flex-row-reverse"
                }`}
              >
                <div className="basis-1/2">
                  <h2 className="v-text-bold text-2xl uppercase text-red-clr">
                    {`step ${idx + 1}`}
                  </h2>

                  <h5 className="p-text font-semibold mt-4">{step.title}</h5>
                  <p className="p-text mt-2">{step.text}</p>
                </div>

                <div className="basis-1/2">
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`max-w-[350px] mx-auto ${
                      step.layout === "reverse" ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-[100px]  bg-red-soft-clr p-[4vw] rounded-lg">
          <h1 className="v-text-regular text-3xl md:text-5xl mb-4 text-center">
            There's a <span className="uppercase text-red-clr">package</span>{" "}
            for every need
          </h1>

          <div className="carousel carousel-center w-full items-stretch gap-3">
            {plans.map((plan, idx) => (
              <div key={idx} className="carousel-item">
                <div
                  className={`w-[300px] border-[1px] rounded-lg overflow-hidden  ${
                    plan.bg ? " border-[#011445]" : "border-red-clr"
                  }`}
                >
                  <div
                    className={`w-full p-4 uppercase text-white flex items-center justify-center font-semibold  ${
                      plan.bg ? "bg-[#011445]" : "bg-red-clr"
                    }`}
                  >
                    {plan.title}
                  </div>

                  <div className="text-center py-6">
                    {plan.options.map((option, idx) => (
                      <div
                        key={idx}
                        className="flex justify-start text-left px-4"
                      >
                        <span className="flex items-center gap-4 mb-3">
                          <div className="text-sm">
                            <FaCheckCircle className="text-green-600" />
                          </div>
                          <p key={idx} className="p-text font-normal">
                            {option}
                          </p>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="onboard mb-[100px]  py-20 px-[4vw]">
        <section className="text-center flex flex-col w-full gap-2 items-center">
          <h1 className="v-text-regular text-3xl md:text-5xl text-white">
            Still can't Have{" "}
            <span className="v-text-bold text-red-clr">enough? </span>
          </h1>
          <p className="p-text text-white">
            Try out the app and see for yourself
          </p>
          <button
            onClick={() => setQ("modal=true")}
            className="btn bg-red-clr text-white mt-6 shadow-none border-none hover:bg-red-600"
          >
            Join the Waitlist
          </button>
        </section>
      </div>

      <RequestAMeeting />
      <Footer />

      {modal && <Waitlist setQ={setQ} />}
    </>
  );
}
