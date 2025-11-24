import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import img1 from "../../../assets/images/item.jpg";
import img2 from "../../../assets/images/item2.png";
import img4 from "../../../assets/images/img3.jpg";

const images = [img1, img2, img4, img2, img1];
const colors = ["#58FF11CC", "#C6140CB2", "#2DA771", "#11D7FFCC", "#FFBD00"];

function makeCards(total = 40) {
    const types = ["split", "transparent", "full"];
    const transparentTitles = [
        "Experience it yourself",
        "Tech meetups this month",
        "Inside creative studios",
        "Best food trucks",
        "New artists to follow",
        "Culture & nightlife",
    ];

    const otherTitles = [
        "5% Off",
        "15% Off",
        "100% Off",
        "65% Off",
    ];

    return Array.from({ length: total }).map((_, i) => {
        const type = types[i % types.length];
        const title =
            type === "transparent"
                ? transparentTitles[i % transparentTitles.length]
                : otherTitles[i % otherTitles.length];

        return {
            id: i + 1,
            type,
            title,
            description: "Bibies Monday Happy Hour",
            image: images[i % images.length],
            bgColor: colors[i % colors.length],
        };
    });
}

export default function MultiRowMixedCardsCarousel({
    totalCards = 20,
    rows = 4,
}) {
    const allCards = makeCards(totalCards);

    const chunkSize = Math.ceil(allCards.length / rows);
    const rowsData = Array.from({ length: rows }).map((_, r) =>
        allCards.slice(r * chunkSize, r * chunkSize + chunkSize)
    );

    return (
        <section className="py-12 bg-[#2F2F2F] rounded-3xl">

            <div className="text-white flex flex-col space-y-3  text-center px-6">
                <p className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-0">Broadcast like its CoolFM</p>
                <p className=" text-base md:text-xl leading-relaxed mt-[10px] mb-0">
                    Reach people up to 1km from your business location with prompts before the competition
                </p>
            </div>

            <div className="max-w-[1400px] mx-auto space-y-2 mt-10">
                {rowsData.map((rowCards, rowIndex) => {
                    const reverse = rowIndex % 2 === 1;

                    return (
                        <Swiper
                            key={rowIndex}
                            modules={[Autoplay, FreeMode]}
                            slidesPerView="auto"
                            // freeMode={{ enabled: true }}
                            loop={true}
                            spaceBetween={10}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                reverseDirection: reverse,
                            }}
                            speed={rowIndex % 2 === 0 ? 15000 : 12000}
                            className="py-[20px]"
                        >
                            {rowCards.map((card) => (
                                <SwiperSlide
                                    key={card.id}
                                    style={{
                                        width: "400px",
                                        height: "120px",
                                    }}
                                    className="shrink-0"
                                >
                                    {card.type === "split" && (
                                        <article
                                            className="flex h-full rounded-2xl overflow-hidden bg-white shadow-lg"
                                            style={{ backgroundColor: card.bgColor }}
                                        >
                                            <div
                                                className="w-1/2 bg-cover bg-center"
                                                style={{ backgroundImage: `url(${card.image})` }}
                                            ></div>
                                            <div className="w-1/2 p-3 flex flex-col justify-center text-black">
                                                <h3 className="font-bold text-lg mb-0">{card.title}</h3>
                                                <p className="text-sm mt-1 mb-0">{card.description}</p>
                                            </div>
                                        </article>
                                    )}

                                    {card.type === "transparent" && (
                                        <article className="h-full flex flex-col justify-center rounded-2x bg-transparent text-white text-center px-4">
                                            <div
                                                className="px-4 py-2 rounded-full"
                                                style={{
                                                    backgroundColor: card.bgColor,
                                                }}
                                            >
                                                <h3 className="font-semibold text-lg mb-0">{card.title}</h3>
                                            </div>
                                        </article>
                                    )}

                                    {card.type === "full" && (
                                        <article
                                            className="h-full rounded-2xl overflow-hidden relative flex items-end p-4"
                                            style={{
                                                backgroundImage: `url(${card.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent text-white" />
                                            <div className="relative text-white">
                                                <h3 className="text-lg font-bold mb-0">{card.title}</h3>
                                                <p className="text-sm text-white/80 mt-1 mb-0">
                                                    {card.description}
                                                </p>
                                            </div>
                                        </article>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    );
                })}
            </div>
        </section>
    );
}
