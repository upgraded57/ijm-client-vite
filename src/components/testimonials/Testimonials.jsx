import testimonials_img from "@/src/assets/images/testimonials_img.png";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useState } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      user: "Mr. Hut",
      words:
        "Spytrac equipt my dispatch motor bikes with quality trackers and even updated to better tracking devices for free. They  were also actively engaged in the recovery of one of the moto bikes in an attempted theft . I would recommend their professional and effective customer service.",
    },
    {
      user: "General Shola - The Bismack",
      words:
        "A reliable,efficient and time-conscious Logistic company  and also  a reliable tracking company with a formidable security conscious. The company is highly  recommended to track all kinds of automobiles. And bound to render a variety of other forms of tracking services in the wider world 🌎 .",
    },
    {
      user: "Ayodele Mustafa",
      words:
        "Best place for perfect tracking, flexible control and efficient management of your fleet. If you value your mobile properties like Boat, SUV, smart Car and construction equipments, you have to SPYTRAC them. Let SPYTRAC secure your home and offices with cameras, electronics locking systems and security alert system. Track your Children and your spouse in this Kidnapping Era. For more information on their various telematics security and care services just contact SPYTRAC!",
    },
    {
      user: "Ezra Akintonde",
      words: "Trusted company in Nigeria providing tracking devices.",
    },
    {
      user: "Ogochukwu Ukachi",
      words:
        "The app is really good. User friendly interface. Generally a wonderful experience since i have been using the app.",
    },
    {
      user: "Joshua Ilabor",
      words:
        "They are a reliable tracking company. They track all kinds of automobiles. And render a variety of other forms of tracking too",
    },
  ];

  const increaseCount = () => {
    if (testimonials.length <= currentTestimonial + 1) return;
    setCurrentTestimonial((prev) => prev + 1);
  };

  const decreaseCount = () => {
    if (currentTestimonial <= 0) return;
    setCurrentTestimonial((prev) => prev - 1);
  };

  return (
    <section className="px-[4vw] mb-10 py-10  w-full max-w-[1440px] mx-auto">
      <h1 className="h-text text-grey-clr text-center uppercase">
        testimonials
      </h1>
      <div className="block md:flex items-center gap-10 my-10">
        <div className="basis-2/3">
          <h3
            data-aos="fade-right"
            className="text-xl md:text-3xl text-green-clr font-normal mb-10"
          >
            Find out what our past and current satisfied clients have to say
            about how we&apos;ve served them
          </h3>
          <p
            data-aos="fade-right"
            className="p-text text-sm md:text-[18px] mb-3 leading-8"
          >
            {testimonials[currentTestimonial].words}
          </p>

          <h5
            data-aos="fade-up"
            className="text-xl text-green-clr font-semibold uppercase"
          >
            {testimonials[currentTestimonial].user}
          </h5>
          <div className="flex w-full items-center justify-end mt-5">
            <div className="flex items-center gap-5">
              <BsArrowLeft
                className="text-3xl cursor-pointer"
                onClick={decreaseCount}
              />
              <h3 className="text-3xl font-300">
                {currentTestimonial + 1} / {testimonials.length}
              </h3>
              <BsArrowRight
                className="text-3xl cursor-pointer"
                onClick={increaseCount}
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block basis-1/3">
          <div
            data-aos="fade-left"
            className="w-full relative flex items-center justify-center"
          >
            <img
              src={testimonials_img}
              alt="Images of testimonials"
              width={490}
              height={490}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
