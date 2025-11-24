import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.jpg";
import world from "../../assets/world.jpg";
import map from "../../assets/map1.jpg";

const resources = [
  {
    img: item1,
    title: "New marketing playbook for Africa & the Middle East",
    year: 2022,
  },
  {
    img: item2,
    title: "New Marketing Playbook for Africa & the Middle East",
    year: 2022,
  },
  {
    img: item3,
    title: "New Marketing Playbook for Africa & the Middle East",
    year: 2022,
  },
  {
    img: world,
    title: "Regional Go-to-Market Guide: Emerging Markets",
    year: 2023,
  },
  {
    img: map,
    title: "Distribution and Viral Growth Toolkit",
    year: 2023,
  },
];

function ResourceCard({ img, title, year }) {
  return (
    <div className="rounded-2xl bg-[#F5F5F5] overflow-hidden h-[370px]">
      <div className="relative">
        <img src={img} alt="resource" className="w-full h-60 object-cover" />
        {/* <div className="absolute left-4 bottom-4 right-4 bg-black/70 text-white rounded-md px-4 py-3">
          <div className="font-semibold text-xl leading-tight">
            {title}
          </div>
        </div> */}
      </div>
      <div className="px-4 py-4">
        <div className="text-[#171717] font-bold text-base ">
          {title}
        </div>
        <div className="text-[#7A7A7A] text-xs mt-[20px]">Published: {year}</div>
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <section className="bg-[#274B89] py-12">
      <div className="max-w-7xl md:mx-auto px-6 md:px-0">
        <div className="bg-white rounded-2xl p-6 md:px-16 md:py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#274B89] text-4xl md:text-6xl font-bold">Resources</h2>
            <div className="hidden md:flex items-center gap-3">
              <button className="resources-prev bg-[#F0F0F0] hover:bg-[#E6E6E6] text-[#274B89] w-9 h-9 rounded-md flex items-center justify-center"> <ChevronLeft size={20} /></button>
              <button className="resources-next bg-[#F0F0F0] hover:bg-[#E6E6E6] text-[#274B89] w-9 h-9 rounded-md flex items-center justify-center"><ChevronRight size={20} /></button>
            </div>

          
          </div>

          <Swiper
            modules={[Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            navigation={{ prevEl: ".resources-prev", nextEl: ".resources-next" }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {resources.map((res, idx) => (
              <SwiperSlide className="mb-12" key={idx}>
                <ResourceCard img={res.img} title={res.title} year={res.year} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}