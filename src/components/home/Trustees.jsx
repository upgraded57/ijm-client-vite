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
    <section className="mb-10 pt-10">
      <h1 className="px-[4vw] h-text text-center uppercase">
        trusted by brands everywhere
      </h1>
      <div className="block md:flex items-center flex-col md:flex-row">
        {points.map((point, idx) => (
          <div key={idx} className={`basis-1/2 trustee_${idx + 1}`}>
            <div className="w-full h-[300px] md:h-[550px] flex items-center justify-center">
              <div className="min-w-[60%] p-3 border-2 border-white text-white flex items-center justify-center flex-col">
                <h1 className="text-[70px] md:text-[85px] lg:text-[100px] font-bold">
                  {/* {point.number} */}
                  <CountUp end={point.number} enableScrollSpy />+
                </h1>
                <p className="uppercase text-[30px] font-bold">{point.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
