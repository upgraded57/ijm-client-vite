import "../home/home.css";
import RequestForm from "./RequestForm";

export default function RequestAMeeting() {
  return (
    <div className="px-[4vw]">
      <section className="request_a_meeting py-10 my-10 bg-green-clr rounded-[20px] md:rounded-[40px] flex flex-col md:flex-row items-start md:items-center gap-10 w-full max-w-[1440px] mx-auto">
        <div className="basis-full md:basis-1/2 px-[4vw]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white pb-6">
            Request a Meeting
          </h2>
          <p className="text-white text-18px leading-loose">
            Need a personalized service or you&apos;ll like to reach out to us
            personally? We&apos;re here to help you. Start by filling out the
            contact form and you&apos;ll hear from us as soon as possible.
          </p>
        </div>
        <div className="basis-full md:basis-1/2 px-[4vw] w-full">
          <RequestForm />
        </div>
      </section>
    </div>
  );
}
