import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.jpg";

const stageData = [
  {
    bg: "bg-[#C2E0FF]",
    title: "Starting with you.",
    subtitle: "Spottr for small sized businesses",
    items: [
      {
        title: "The Proposal",
        description: "Pitch ideas 24/7 and secure startup capital.",
        img: item1,
        name: "Portable Bluetooth Speaker",
        brand: "Soundwave",
        price: "₦15,000.00",
      },
      {
        title: "Quick Start Funding",
        description: "Fast-track micro funding to kick off operations.",
        img: item2,
        name: "Portable Bluetooth Speaker",
        brand: "Soundwave",
        price: "₦15,000.00",
      },
      {
        title: "Idea Validation Grants",
        description: "Test market fit with small validation grants.",
        img: item3,
        name: "Portable Bluetooth Speaker",
        brand: "Soundwave",
        price: "₦15,000.00",
      },
    ],
  },
  {
    bg: "bg-[#274B89]",
    title: "Growing with you.",
    subtitle: "Spottr for medium sized businesses & Startups",
    items: [
      {
        title: "Inventory financing",
        description: "Restock on the go powered by Cliq token.",
        img: item2,
        name: "Portable Bluetooth Speaker",
        brand: "Soundwave",
        price: "₦15,000.00",
      },
      {
        title: "Supplier Onboarding Credit",
        description:
          "Credit lines to onboard and scale supplier relationships.",
        img: item1,
        name: "Portable Bluetooth Speaker",
        brand: "Soundwave",
        price: "₦15,000.00",
      },
      {
        title: "Stock Rotation Support",
        description: "Smooth cashflow for cyclical stock turnover.",
        img: item3,
        name: "Portable Bluetooth Speaker",
        brand: "Soundwave",
        price: "₦15,000.00",
      },
    ],
  },
  {
    bg: "bg-[#701DA0]",
    title: "Scaling with you.",
    subtitle: "Spottr for manufacturers & corporates",
    items: [
      {
        title: "One Dashboard global reach",
        description: "Expand distribution with unified global operations.",
        img: item3,
        name: "Portable Bluetooth Speaker",
        brand: "Soundwave",
        price: "₦15,000.00",
      },
      {
        title: "Regional Insights",
        description: "Plan demand with real-time regional analytics.",
        img: item2,
        name: "Portable Bluetooth Speaker",
        brand: "Soundwave",
        price: "₦15,000.00",
      },
      {
        title: "Distribution Analytics",
        description:
          "Track performance and optimize your distribution network.",
        img: item1,
        name: "Portable Bluetooth Speaker",
        brand: "Soundwave",
        price: "₦15,000.00",
      },
    ],
  },
];

function StageRow({ bg, title, subtitle, items }) {
  return (
    <div className={`${bg} py-12 md:py-16 h-[50vh]`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-8 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="text-left md:pr-8">
          <h3 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-1 md:mb-3">
            {title}
          </h3>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-0">
            {subtitle}
          </p>
        </div>

        {/* RIGHT SIDE: CARD SLIDER */}
        <div className="block md:flex justify-center md:justify-end">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={12}
            loop
            pagination={{ clickable: true }}
            className="pb-6 w-[100%] sm:w-[360px] md:w-[380px] bg-[#3A3A3A] rounded-xl border border-white/20  mx-0"
          >
            {items.map((it, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-xl text-white p-4">
                  <div className="font-semibold text-white mb-1">
                    {it.title}
                  </div>
                  <div className="text-xs text-white/70 mb-3">
                    {it.description}
                  </div>

                  {/* ITEM CARD */}
                  <div className="flex items-center gap-3 rounded-xl p-3 mb-2 bg-[#464748D1]">
                    <img
                      src={it.img}
                      alt={it.name}
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        {it.name}
                      </div>
                      <div className="text-xs text-white/70">{it.brand}</div>
                      <div className="text-sm font-semibold">{it.price}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default function Stages() {
  return (
    <section className="mt-20">
      {stageData.map((row, i) => (
        <StageRow key={i} {...row} />
      ))}
    </section>
  );
}
