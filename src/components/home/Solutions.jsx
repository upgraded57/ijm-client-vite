import fleet_img_img from "@/src/assets/images/fleet_mgt_img.png";
import vettme_img from "@/src/assets/images/vettme_img.png";
import security_procurement_img from "@/src/assets/images/security_procurement_img.png";

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
    <section className="px-[4vw] mb-10 pt-10">
      <h1 className="h-text text-center uppercase">our solutions</h1>
      <div className="rounded-2xl overflow-hidden w-full">
        {solutions.map((sol, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-start md:items-center bg-light-grey-clr ${
              sol.layout === "normal" ? "md:flex-row-" : "md:flex-row-reverse"
            }`}
          >
            <div className="basis-1/2">
              <div className="w-full max-h-[250px] md:max-h-none overflow-hidden">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="basis-1/2 p-5 mb-10 md:mb-0">
              <h2 className="h-text pb-5">{sol.title}</h2>
              <ul>
                {sol.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-lg lg:text-3xl list-disc ml-8 pb-5 text-grey-clr"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
