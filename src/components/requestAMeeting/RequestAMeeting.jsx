import "../home/home.css";

export default function RequestAMeeting() {
  const openCalendly = () => {
    Calendly.initPopupWidget({
      url: "https://calendly.com/sales-spytrac/ijm-global-limited-consulting",
    });
    return false;
  };
  return (
    <div className="px-[4vw]">
      <section className="request_a_meeting py-10 px-[4vw] text-center my-10 bg-green-clr rounded-[20px] md:rounded-[40px] w-full max-w-screen-lg mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white pb-3">
          Request a Meeting
        </h2>
        <p className="text-white text-18px leading-loose">
          Need a personalized service or you'll like to reach out to us
          personally? We're here to help you. Start by filling out the contact
          form and you'll hear from us as soon as possible.
        </p>

        <button
          className="btn btn-wide mt-6 bg-blue-clr hover:bg-blue-clr border-0 text-white font-[500]"
          onClick={openCalendly}
        >
          Request a Meeting
        </button>
      </section>
    </div>
  );
}
