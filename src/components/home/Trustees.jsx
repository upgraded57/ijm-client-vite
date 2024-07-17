import "./home.css";
import CountUp, { useCountUp } from "react-countup";

export default function Home() {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  const points = [
    {
      number: 15700,
      text: "assets tracked",
    },
    {
      number: 276,
      text: "assets recovered",
    },
  ];
  return (
    <section className="py-10 md:py-0 md:mb-10">
      <h1 className="px-[4vw] h-text text-center uppercase mb-4">
        trusted by brands
      </h1>
      <div className="block md:flex items-center justify-center flex-col gap-10 md:flex-row trustee py-10">
        {points.map((point, idx) => (
          <div key={idx} className=" py-6">
            <div className="w-full flex items-center justify-center">
              <div className="min-w-[250px] p-3 border-2 border-white text-white flex items-center justify-center flex-col rounded-lg">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-clr">
                  {/* {point.number} */}
                  <CountUp end={point.number} enableScrollSpy />+
                </h1>
                <p className="uppercase text-lg font-[400]">{point.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
