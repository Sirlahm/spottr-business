import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Button from "components/NewHomePage/Button";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import person4 from "../../assets/person4.png";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.jpg";

import { Heart, MessageSquare, Share2, Bookmark } from "lucide-react";

// Dummy slide data: each slide has different user and recommendations
const slideData = [
  {
    user: { avatar: person1, name: "Sarah Johnson", time: "2h ago" },
    body:
      "I just bought this speaker; it’s perfect for remote work presentations and video calls.",
    items: [
      { img: item1, name: "Sport Active Wear", brand: "Soundwave", price: "₦150,000.00" },
      { img: item2, name: "U‑fitness Weekly Plan", brand: "Soundwave", price: "₦150,000.00" },
      { img: item3, name: "Zenlife Essentials", brand: "Soundwave", price: "₦150,000.00" },
      { img: item1, name: "Zero Sugar Parfait", brand: "Soundwave", price: "₦150,000.00" },
    ],
  },
  {
    user: { avatar: person2, name: "David Kim", time: "1d ago" },
    body:
      "Clean sound and solid build quality. Great value for hybrid meetings and demos.",
    items: [
      { img: item2, name: "Pro Training Bundle", brand: "Soundwave", price: "₦120,000.00" },
      { img: item1, name: "Studio Mic Lite", brand: "Soundwave", price: "₦95,000.00" },
      { img: item3, name: "Wellness Starter Kit", brand: "Soundwave", price: "₦80,000.00" },
      { img: item2, name: "Fitness Pass", brand: "Soundwave", price: "₦60,000.00" },
    ],
  },
  {
    user: { avatar: person3, name: "Aisha Bello", time: "3d ago" },
    body:
      "Portable and reliable. We use it for pop‑up events and influencer sessions.",
    items: [
      { img: item3, name: "Event Essentials", brand: "Soundwave", price: "₦75,000.00" },
      { img: item1, name: "Active Wear Kit", brand: "Soundwave", price: "₦110,000.00" },
      { img: item2, name: "Weekly Fitness Plan", brand: "Soundwave", price: "₦65,000.00" },
      { img: item1, name: "Snack Box", brand: "Soundwave", price: "₦40,000.00" },
    ],
  },
  {
    user: { avatar: person4, name: "Markus Lee", time: "5d ago" },
    body:
      "Compact design with impressive battery life. Perfect for campus tours and collabs.",
    items: [
      { img: item1, name: "Campus Promo Pack", brand: "Soundwave", price: "₦88,000.00" },
      { img: item3, name: "Starter Wellness", brand: "Soundwave", price: "₦70,000.00" },
      { img: item2, name: "Coaching Pass", brand: "Soundwave", price: "₦55,000.00" },
      { img: item1, name: "Parfait Minis", brand: "Soundwave", price: "₦35,000.00" },
    ],
  },
];

function RecommendationCard({ user, body, items }) {
  return (
    <div className="w-full sm:w-[380px] rounded-xl bg-[#2F2F2F] text-white shadow-lg p-4 border border-white/20 mb-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img src={user.avatar} alt="user" className="h-9 w-9 rounded-full object-cover" />
        <div className="leading-tight">
          <div className="text-sm font-semibold">{user.name}</div>
          <div className="text-[11px] text-white/70">{user.time}</div>
        </div>
      </div>

      {/* Body text */}
      <p className="text-xs text-white/80 mb-4">{body}</p>

      <div className="text-sm text-white font-bold mb-2">Recommendations (4)</div>

      {/* List */}
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-3 bg-[#3A3A3A] rounded-lg p-3">
            <img src={it.img} alt="item" className="h-12 w-12 rounded-md object-cover" />
            <div className="flex-1 leading-tight">
              <div className="text-sm font-medium text-white">{it.name}</div>
              <div className="text-[11px] text-white/70">{it.brand}</div>
            </div>
            <div className="text-xs font-semibold">{it.price}</div>
          </div>
        ))}
      </div>

      {/* Footer actions */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-4 text-white/90">
          <div className="flex items-center gap-1"><Heart className="w-5 h-5" /> <span className="text-xs">44,389</span></div>
          <div className="flex items-center gap-1"><MessageSquare className="w-5 h-5" /> <span className="text-xs">6</span></div>
          <div className="flex items-center gap-1"><Share2 className="w-5 h-5" /> <span className="text-xs">4</span></div>
        </div>
        <Bookmark className="w-5 h-5 text-white/80" />
      </div>
    </div>
  );
}

export default function CollabRecommend() {
  return (
    <section className="bg-[#274B89] py-16 md:py-20">
      <div className="max-w-7xl md:mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left: Purple card */}
        <div className="bg-[#8B6CFB] rounded-2xl p-8 md:p-20 text-white shadow-lg flex flex-col items-center md:items-start justify-center">
          <div className="text-4xl md:text-6xl font-extrabold mb-6 centered-util">
            <div>Agencies</div>
            <div>Affiliates</div>
            <div>Influencers</div>
          </div>
          <p className="text-white/95 text-base md:text-xl max-w-md mb-8">
            Power up your game with brand collaborations. Work with our growth teams to get the app to work the best for your campaign
          </p>
          <Button
            text="Schedule a call"
            className="bg-white text-[#274B89] px-5 py-3 text-base sm:text-lg font-bold"
          />
        </div>

        {/* Right: Recommendations slider */}
        <div className="mt-10">
          <div className="text-white text-2xl md:text-2xl font-bold mb-4 text-center ">Recommend brands</div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            loop
            pagination={{ clickable: true }}
            className="pb-8"
          >
            {slideData.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex justify-center">
                  <RecommendationCard user={slide.user} body={slide.body} items={slide.items} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}