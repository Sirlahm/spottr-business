import React from "react";
import bentArrow from "../../assets/arr.svg";
import { ArrowRight } from "lucide-react";

const items = [
  { title: "Receive payments in", description: "Office of multiple interest content" },
  { title: "Pay for goods in", description: "Office of multiple interest content" },
  { title: "Get business loans with", description: "Office of multiple interest content" },
  { title: "Run promotions with", description: "Office of multiple interest content" },
];

export default function YesCrypto() {
  return (
    <section className="bg-[#274B89] py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-[30px] sm:px-8 md:px-0 flex flex-col">
        {/* Heading Section */}
        <div className="text-white self-center flex items-center gap-6 sm:gap-10 mb-7 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Yes,
          </h2>
          <img
            src={bentArrow}
            alt="bent arrow"
            className="w-16 sm:w-20 md:w-28 select-none"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-14 md:gap-16 items-center">
          {/* Left: Items list */}
          <div className="text-white">
            <div className="divide-y divide-white/25 border-t border-b border-white/25">
              {items.map((it, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between py-[10px] sm:py-6"
                >
                  <div className="pr-6">
                    <div className=" text-xl md:text-2xl md:text-3xl font-semibold">
                      {it.title}
                    </div>
                    <div className="text-white/85 mt-[8px] text-sm sm:text-base md:text-base leading-relaxed">
                      {it.description}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mt-1 opacity-90 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stacked “Crypto” reflection */}
          <div className="flex justify-center md:justify-center ">
            <div
              className="relative select-none w-auto"
              style={{ height: 280 }}
            >
              {/* Top bold text */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 text-white font-extrabold tracking-tight text-[56px] sm:text-[68px] md:text-[88px] hidden md:block">
                Crypto
              </div>

              {/* Reflections */}
              {[
                { y: 50, opacity: 0.75, size: "text-[72px]" },
                { y: 98, opacity: 0.62, size: "text-[68px]" },
                { y: 142, opacity: 0.52, size: "text-[64px]" },
                { y: 184, opacity: 0.44, size: "text-[60px]" },
                { y: 224, opacity: 0.36, size: "text-[56px]" },
              ].map((layer, idx) => (
                <div
                  key={idx}
                  className={`absolute left-1/2 -translate-x-1/2 font-extrabold text-white ${layer.size}`}
                  style={{ top: layer.y, opacity: layer.opacity }}
                >
                  Crypto
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
