import "./contact.css";
import Nav from "../../components/nav/Nav";
import ContactForm from "./ContactForm";
import Footer from "../../components/footer/Footer";

export default function ContactPage() {
  const contactInfos = [
    {
      title: "head office",
      texts: ["426 A Oluwadamilola Fasade Street, Omole Phase 1, Lagos"],
    },
    {
      title: "phone numbers",
      texts: ["+234 903 783 8141", "+234 906 295 1504"],
    },
    {
      title: "support email",
      texts: ["customerservice@ijmgloballimited.com"],
    },
    {
      title: "opening hours",
      texts: ["8:0am - 5:00pm", "Monday - Friday"],
    },
  ];
  return (
    <>
      <Nav />
      <div className="contact_hero px[4vw] w-full h-[240px] md:h-[350px] flex flex-col items-center pt-[60px] justify-start">
        <h1 className="text-blue-clr uppercase text-[40px] md:text-[60px] font-bold tracking-wider">
          get in touch
        </h1>
        <p className="text-sm text-white text-center max-w-[400px]">
          Be it physical, in-office or virtual, we can&apos;t wait to have you.
          Reach out to us using any of the contact options below.
        </p>
      </div>

      <div className="px-[4vw] -translate-y-10">
        <div className="w-full max-w-[1230px] mx-auto relative border-2 border-blue-clr rounded-xl overflow-hidden flex bg-white shadow-lg">
          <div className="basis-full md:basis-2/3 px-[4vw] md:px-10 py-10">
            <h1 className="text-blue-clr text-3xl">Leave Us a Message</h1>

            <ContactForm />
          </div>
          <div className="contact_img hidden md:block basis-1/3 w-full min-h-full"></div>
        </div>
      </div>

      <div className="bg-light-grey-clr px-[4vw] py-10  my-10">
        <div className=" w-full max-w-[1440px] block md:flex gap-10 mx-auto">
          <div data-aos="fade-right" className="basis-1/3 ">
            <h2 className="text-green-clr text-[30px] md:text-[40px] lg:text-[50px] text-center mb-10">
              We Are Here
            </h2>
            {contactInfos.map((info, idx) => (
              <p
                key={idx}
                className="text-xl font-normal uppercase text-center mb-4"
              >
                {info.title}
                {info.texts.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-sm text-grey-clr text-center lowercase"
                  >
                    {text}
                  </p>
                ))}
              </p>
            ))}
          </div>

          <div data-aos="fade-left" className="basis-2/3">
            <div className="w-full min-h-[350px] h-full border-[6px] border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.119693920329!2d3.357552275087456!3d6.632053293362374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9395423999b5%3A0xc75150a81c7cfb61!2s426%20Oluwadamilola%20Fasade%20St%2C%20Isheri%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716402796394!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ minHeight: "350px" }}
                allowfullscreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
