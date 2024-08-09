import fleet_img_img from "@/src/assets/images/fleet_mgt_img.webp";
import vettme_img from "@/src/assets/images/vettme_img.webp";
import security_procurement_img from "@/src/assets/images/security_procurement_img.webp";

export default function Solutions() {
  const solutions = [
    {
      image: fleet_img_img,
      title: "Fleet Management",
      layout: "normal",
      points: [
        "Assets Tracking",
        "Maintenance Reporting",
        "Fuel Monitoring",
        "Auto Emergency",
        "Monitor Drivers",
        "Track Fleet Expenses",
      ],
    },
    {
      image: vettme_img,
      title: "Personnel Verification",
      layout: "reverse",
      points: [
        "Staff Verification Services",
        "Background Checks",
        "Physical Assessment",
        "Instant Report Generation",
        "Employment History Check",
        "Criminal Records",
      ],
    },
    {
      image: security_procurement_img,
      title: "Security Procurement",
      layout: "normal",
      points: [
        "Home Security Gadget",
        "Office Security Gadget",
        "Personal Security Gadget",
        "Asset Security Gadget",
      ],
    },
  ];
  return (
    <section className="px-[4vw] mb-10 md:pb-10 pt-10 w-full max-w-screen-lg mx-auto">
      <h1 className="h-text text-center uppercase md:mb-10">our solutions</h1>
      <div className="mx-auto w-full">
        {solutions.map((sol, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse justify-center md:flex-row md:items-center overflow-hidden gap-4 md:gap-10 mb-10 p-4 md:p-0 rounded-3xl shadow-lg md:shadow-none ${
              sol.layout === "reverse" && "md:flex-row-reverse"
            }`}
          >
            <div className="basis-1/2 mb-4 md:mb-0 md:flex flex-col items-center justify-center">
              <h3 className="text-2xl text-grey-clr mb-4">{sol.title}</h3>
              <ul>
                {sol.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="p-text flex items-center gap-5 pl-4 md:pl-0"
                  >
                    <div className="w-1 aspect-square rounded-full bg-grey-clr"></div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="basis-1/2 rounded-xl mx-auto overflow-hidden aspect-[2/1.2] md:aspect-[4/3] w-full md:max-w-[400px]">
              <img
                src={sol.image}
                alt={sol.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
