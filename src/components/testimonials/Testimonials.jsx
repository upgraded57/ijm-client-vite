import testimonials_img from "@/src/assets/images/testimonials_img.png";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useState } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      user: "John Doe",
      position: "Creative Manager, Sample Company",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      user: "Jane Doe",
      position: "Creative Manager, Sample Company",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      user: "Thomas Wayne",
      position: "Creative Manager, Sample Company",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      user: "Connor Rotherm",
      position: "Creative Manager, Sample Company",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      user: "Felix Spline",
      position: "Creative Manager, Sample Company",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      user: "Henry Birch",
      position: "Creative Manager, Sample Company",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      user: "Paul Rooney",
      position: "Creative Manager, Sample Company",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      user: "Francis Caeser",
      position: "Creative Manager, Sample Company",
      words:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    <section className="px-[4vw] mb-10 py-10">
      <h1 className="h-text text-grey-clr text-center uppercase">
        testimonials
      </h1>
      <div className="block md:flex items-center gap-10 my-10">
        <div className="basis-2/3">
          <h3 className="text-xl md:text-3xl text-green-clr font-normal mb-10">
            Find out what our past and current satisfied clients have to say
            about how we&apos;ve served them
          </h3>
          <p className="p-text text-sm md:text-[18px] mb-3">
            {testimonials[currentTestimonial].words}
          </p>

          <h5 className="text-xl text-green-clr font-semibold uppercase">
            {testimonials[currentTestimonial].user}
          </h5>
          <p className="text-xs text-grey-clr font-300">
            {testimonials[currentTestimonial].position}
          </p>
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
          <div className="w-full relative flex items-center justify-center">
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
