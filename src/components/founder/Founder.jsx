import "../home/home.css";

import founder_img from "@/src/assets/images/founder_img.jpg";

export default function Founder() {
  const founder_highlights = [
    "12 years experience in GPS Technology, Navigational Systems and Intelligent Transport Solutions.",
    "Her experience cuts across Marine satellite Technology, Robbery/kidnap Tracking and Rescue Operations, Fleet Management Solutions, Safety and Security Solutions.",
    "Deployment of IOT Security Solutions for assets, people and their investments, by connecting humans to machines.",
    "A Computer Science Graduate, Security Expert, A Superintendent Officer of the Nigeria Police Force, A Transport professional, Member of Chartered Institute of Logistics and Transport, Certified ITIL Professional EXIN, Netherland. An ALA business Gladiator, and most recently an MBA from Tekedia Institute, Boston.",
    "A founder of the NGO - Daughter of Valor - where she helps to rehabilitates and shelter survivors of abusive marriages and their children",
  ];
  return (
    <section className="px-[4vw] mb-10 pt-10 w-full max-w-[1440px] mx-auto overflow-hidden">
      <h1 className="h-text text-grey-clr text-center uppercase mb-10">
        meet the founder
      </h1>
      <div className="flex items-start gap-10 justify-between flex-col md:flex-row">
        <div className="basis-1/2 relative">
          <div
            data-aos="flip-right"
            className="founder_img max-w-550px aspect-10/12 border-2 border-green-clr rounded-lg relative"
          >
            <img
              src={founder_img}
              alt="Ijeoma Mary Chukwu. Founder - IJM Global Limited"
              width={580}
              height={688}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="basis-1/2">
          <ul>
            {founder_highlights.map((highlight, idx) => (
              <li
                data-aos="fade-left"
                key={idx}
                className="p-text ml-5 pb-5 list-disc md:list-none"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
