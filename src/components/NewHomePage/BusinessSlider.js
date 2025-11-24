import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import phone1 from "../../assets/phone1.png";
import phone2 from "../../assets/phone2.png";
import Button from "./Button";
import { ChevronLeft, ChevronRight, Play, Users, Clock } from "lucide-react";
import JourneySlide from "./business-slide/JourneySlide";
import BroadcastSlide from "./business-slide/BroadcastSlide";
import CheckinSlide from "./business-slide/CheckinSlide";
import UnlimitedLeadsSlide from "./business-slide/UnlimitedLeadsSlide";
import MultiLocationSlide from "./business-slide/MultiLocationSlide";

const slides = [
  {
    titleA: "Contests",
    titleB: "& Challenges.",
    description:
      "Turn customers to fans with preview locks, seat reservations and monetization for product drops, events or any campaign hype.",
    cta: "It’s easy, get started",
    phones: [phone1, phone2],
    cards: [
      { title: "Help us decide what to build next", body: "Share your ideas and influence our upcoming feature roadmap." },
      { title: "Vote on new community perks", body: "Choose the rewards and experiences you’d love to see unlocked first." },
      { title: "Pick our next event theme", body: "Cast your vote to shape the look and feel of our next live event." },
      { title: "Suggest new badge designs", body: "We’re refreshing our achievement badges — send us your creative input!" },
      { title: "Choose our next charity partner", body: "Help us select a cause to support in our upcoming community drive." },
      { title: "Decide the next product drop", body: "Your vote determines which limited-edition item goes live first." },
      { title: "Name our next big feature", body: "We’re taking suggestions for what to call our upcoming release." },
    ],

  },
  // {
  //   titleA: "Drops",
  //   titleB: "& Reservations.",
  //   description:
  //     "Create hype with timed drops and reserved seats. Reward fans and drive conversions with gamified launches.",
  //   cta: "Plan a drop",
  //   phones: [phone2, phone1],
  //   cards: [
  //     { title: "Early-Bird access", body: "Open slots with CLIQToken badges and countdown timers." },
  //     { title: "VIP preview", body: "Lock exclusive content behind easy fan challenges." },
  //     { title: "Limited slots", body: "Generate urgency with dynamic slot counters." },
  //     { title: "Community perks", body: "Reward top fans with badges, shoutouts, and exclusive rewards." },
  //     { title: "Creator spotlight", body: "Feature trending creators with auto-updating highlights." },
  //     { title: "Gamified engagement", body: "Boost fan participation with leaderboard-driven rewards." },
  //     { title: "Real-time updates", body: "Sync event details and slot availability dynamically across devices." },
  //   ],
  // },
];

// Helper: expand any base card set to 10 items
// const expandToTen = (base) =>
//   Array.from({ length: 6 }, (_, i) => {
//     const src = base[i % base.length];
//     return {
//       title: `${src.title} #${i + 1}`,
//       body: src.body,
//     };
//   });

export default function BusinessSlider() {
  return (
    <section className="max-w-7xl mx-auto mt-24 px-4 sm:px-6 md:px-0">
      {/* Heading */}
      <div className="mb-6 flex flex-col">
        <p className="text-white text-5xl sm:text-5xl md:text-6xl font-extrabold text-slide">
          Spottr for Business
        </p>
        <p className="text-white/80 mt-[8px] text-lg sm:text-lg md:text-xl max-w-2xl text-slide">
          Grab attention, convert customers to fans and make monster sales with these features built with love
        </p>
      </div>

      {/* Custom Nav Buttons */}
      <div className="flex gap-3 z-10 justify-end mb-3">
        <button className="feature-prev p-2 rounded-md bg-white/10 text-white hover:bg-white/20">
          <ChevronLeft size={20} />
        </button>
        <button className="feature-next p-2 rounded-md bg-white/10 text-white hover:bg-white/20">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Swiper Section */}
      <div className="relative rounded-2xl">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={24}
          autoHeight={true}
          navigation={{ prevEl: ".feature-prev", nextEl: ".feature-next" }}
          className="rounded-2xl overflow-hidden"
        >
          {slides.map((s, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#2F2F2F]/95 text-white p-[20px] sm:p-8 md:py-12 md:px-16 rounded-2xl">
                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                  {/* Left Text */}
                  <div className="md:col-span-2 text-left flex flex-col items-center md:items-start">
                    <h3 className="text-4xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-slide">
                      <span className="text-[#FEC3C7]">{s.titleA}</span>{" "}
                      <span className="text-[#6BDFDA]">{s.titleB}</span>
                    </h3>
                    <p className="mt-[10px] md:mt-4 text-white/90 max-w-md text-base sm:text-lg md:text-xl">
                      {s.description}
                    </p>

                    <div className="mt-3 md:mt-6 flex items-center gap-4">
                      <Button
                        text={s.cta}
                        className="bg-white text-[#274B89] px-[30px] py-3 text-sm sm:text-base font-bold"
                      />
                      <button className="h-12 w-12 rounded-full bg-[#D9D9D9] text-white flex items-center justify-center">
                        <Play size={18} color="#FC752C" />
                      </button>
                    </div>
                  </div>

                  {/* Right Phones */}
                  <div className="md:col-span-3 flex flex-col sm:flex-row items-center justify-center gap-5 hidden md:flex">
                    <img
                      src={s.phones[0]}
                      alt="phone"
                      className="w-[200px] sm:w-[240px] md:w-[280px] drop-shadow-2xl"
                    />
                    <img
                      src={s.phones[1]}
                      alt="phone"
                      className="w-[180px] sm:w-[220px] md:w-[260px] drop-shadow-2xl sm:mt-20 md:mt-28"
                    />
                  </div>
                </div>

                {/* Cards: Swiper with pagination, 10 items */}
                <div className="mt-10">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 2, spaceBetween: 16 },
                      768: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    className=""
                  >
                    {s.cards.map((c, i) => (
                      <SwiperSlide key={i} className="mb-[45px] md:mb-[40px]">
                        <div className="rounded-xl bg-[#0F1827] p-3 sm:p-5 flex flex-col justify-between h-full">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <div className="flex items-center gap-2 text-white/90 whitespace-nowrap">
                              <span className="w-3 h-3 rounded-full bg-[#FF4B4B]" />
                              <span className="text-xs ">129 Cliqtokens</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90 whitespace-nowrap">
                              <Users className="w-4 h-4" />
                              <span className="text-xs ">Slots: 30</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#FF6A5C] font-semibold whitespace-nowrap">
                              <Clock className="w-4 h-4" />
                              <span className="text-xs ">02:33min left</span>
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-white mb-1">{c.title}</div>
                            <div className="text-sm text-white/80">{c.body}</div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Journey Slide */}
          <SwiperSlide>
            <JourneySlide />
          </SwiperSlide>

          {/* Broadcast Slide */}
          <SwiperSlide>
            <BroadcastSlide />
          </SwiperSlide>

          {/* Check-in Slide */}
          <SwiperSlide>
            <CheckinSlide />
          </SwiperSlide>

          {/* Unlimited Leads Slide */}
          <SwiperSlide>
            <UnlimitedLeadsSlide />
          </SwiperSlide>

          {/* Multi-location Targeting Slide */}
          <SwiperSlide>
            <MultiLocationSlide />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
