import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import item2 from "../../assets/item2.png";

const stageData = [
  {
    bg: "bg-[#C2E0FF]",
    title: "Starting with you.",
    subtitle: "Spottr for small sized businesses",
    items: [
      {
        title: "The Proposal",
        description: "Have an idea but don't know where to start - or who will listen? The Proposal lets you turn your idea into something real. Share it, refine it, and get access to the support and capital you need to take your first confident step into business. No pressure. No gatekeeping. Just a clear path forward.",
        img: item2,
        name: "Join Smart Business hub",
        brand: "Entrepreneurship support centre",
      },
      {
        title: "Start Today",
        description: "You don’t need a perfect plan to begin - you just need a place to start. With Spottr, you can set up your business, list products, or resell for brands directly from your phone. Whether you’re testing an idea or going all in, you can move at your own pace and grow as you learn.",
        img: item2,
        name: "Join Smart Business hub",
        brand: "Entrepreneurship support centre",
      },
      {
        title: "Small business loans",
        description: "Cash flow shouldn’t be the reason your business slows down. Access flexible funding when you need it - without collateral, long bank queues, or unnecessary stress. Borrow against your activity, momentum and your crypto balance. No fluff.",
        img: item2,
        name: "Join Smart Business hub",
        brand: "Entrepreneurship support centre",
      },
      {
        title: "Still not sure?",
        description: "We understand how hard it can be to make up ones mind on decisions like starting a business. We see thousands of small business owners like you daily and so we put together the resources below to help you kill the fear to start. ",
        img: item2,
        name: "Join Smart Business hub",
        brand: "Entrepreneurship support centre",
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
        description: "Running out of stock shouldn’t mean running out of opportunities. Restock inventory exactly when demand is rising - not months later. Spottr helps you finance inventory on the go, so you can keep selling, keep customers happy, and keep momentum without locking up your cash.",
        img: item2,
        name: "Join Smart Business hub",
        brand: "Entrepreneurship support centre",
      },
      {
        title: "Expand product lines",
        description:
          "Growth doesn’t always mean doing more - sometimes it means offering better. Discover new products, test variations, and expand your catalogue based on real demand. Add to your stock confidently, knowing you’re responding to what customers actually want.",
        img: item2,
        name: "Join Smart Business hub",
        brand: "Entrepreneurship support centre",
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
        description: "Scaling shouldn’t mean losing control. From one dashboard, manage distribution, track demand by location, plan activations, and connect with resellers - without endless spreadsheets or guesswork. Grow into new territories with clarity, not chaos.",
        img: item2,
        name: "Join Smart Business hub",
        brand: "Entrepreneurship support centre",
      },
      {
        title: "Fight counterfeits",
        description: "The right partners can change everything. Spottr helps brands attract, onboard, and manage resellers seamlessly. Expand your network without friction, manual processes, or endless back-and-forth and focus on building real, profitable relationships.",
        img: item2,
        name: "Join Smart Business hub",
        brand: "Entrepreneurship support centre",
      },
      {
        title: "Grow your network",
        description:
          "The right partners can change everything. Spottr helps brands attract, onboard, and manage resellers seamlessly. Expand your network without friction, manual processes, or endless back-and-forth and focus on building real, profitable relationships.",
        img: item2,
        name: "Join Smart Business hub",
        brand: "Entrepreneurship support centre",
      },
      {
        title: "Beat the competition",
        description:
          "Visibility wins markets. Show customers exactly where to find your products, stay discoverable 24/7, and launch new offerings with confidence. When competitors slow down, you move faster - backed by data, reach, and demand insights.",
        img: item2,
        name: "Join Smart Business hub",
        brand: "Entrepreneurship support centre",
      },
    ],
  },
];

function StageRow({ bg, title, subtitle, items }) {
  return (
    <div className={`${bg} py-12 md:py-16 md:h-[50vh]`}>
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
