import "../home/home.css";

import founder_img from "@/src/assets/images/founder_img.webp";

export default function Founder() {
  // const founder_highlights = [
  //   "12 years experience in GPS Technology, Navigational Systems and Intelligent Transport Solutions. Her experience cuts across Marine satellite Technology, Robbery/kidnap Tracking and Rescue Operations, Fleet Management Solutions, Safety and Security Solutions, Deployment of IOT Security Solutions for assets, people and their investments, by connecting humans to machines.",
  //   "A Computer Science Graduate, Security Expert, A Superintendent Officer of the Nigeria Police Force, A Transport professional, Member of Chartered Institute of Logistics and Transport, Certified ITIL Professional EXIN, Netherland. An ALA business Gladiator, and most recently an MBA from Tekedia Institute, Boston.",
  //   "A founder of the NGO - Daughter of Valor - where she helps to rehabilitates and shelter survivors of abusive marriages and their children",
  // ];

  const founder_highlights = [
    "Ijeoma brings over 12 years of experience in GPS Technology, Navigational Systems, and Intelligent Transport Solutions. Her journey has been diverse, encompassing various domains such as Marine Satellite Technology, Robbery/Kidnap Tracking and Rescue Operations, Fleet Management Solutions, and Safety and Security Solutions. She specializes in deploying loT Security Solutions that bridge the gap between assets, individuals, and technology, effectively connecting humans to machines.",

    "She is a Computer Science Graduate, Security Expert, A Superintendent Officer of the Nigeria Police Force, A Transport professional, Member of Chartered Institute of Logistics and Transport, Certified ITIL Professional EXIN, Netherland. An ALA business Gladiator, and most recently an MBA from Tekedia Institute, Boston.",

    "Ijeoma's professional journey has seen her manage projects for renowned organizations, including a World Bank initiative in Sierra Leone, where she spearheaded the deployment of a passenger information system for public transport automation. Notably, she has also developed and launched an E-Hailing application, positioning it as a competitive alternative to industry giants. Her expertise extends to empowering transport companies with software solutions that enable efficient vehicle tracking, fleet management, and utilization monitoring.",

    "In the realm of Security Technology, Ijeoma has made significant strides, launching product brands such as VettMe, Call4Help, and SpyStore. Her role involves conducting audits and designing tailored security solutions for diverse entities, induding NGOs, organizations, communities, homes, and individuals.",

    "Beyond her professional endeavors, Ijeoma's commitment to social causes shines through her role as the founder of Daughters of Valor, an NGO dedicated to rehabilitating and sheltering survivors of abusive marriages and their children.",
  ];
  return (
    <section className="px-[4vw] mb-10 pt-10 w-full max-w-screen-lg mx-auto overflow-hidden">
      <h1 className="h-text text-grey-clr text-center uppercase mb-10">
        meet the founder
      </h1>
      <div className="block">
        <div className="w-full max-w-[400px] mr-5 mb-5 float-left">
          <img
            src={founder_img}
            alt="Ijeoma Mary Chukwu. Founder - IJM Global Limited"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <ul>
            {founder_highlights.map((highlight, idx) => (
              <li key={idx} className="p-text mb-5 list-none">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
