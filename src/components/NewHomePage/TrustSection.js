import Button from "./Button"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import netlify from "../../assets/netlify.svg";
import uber from "../../assets/uber.svg";
import uberEat from "../../assets/uber-eat.svg";
import spotify from "../../assets/spotify.svg";
import amazon from "../../assets/amazon.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import wholeFood from "../../assets/wholefood.svg";

export default function TrustSection() {
    const logos = [
        netlify,
        uberEat,
        spotify,
        uber,
        amazon,
        google,
        facebook,
        netlify,
        uberEat,
        spotify,
        uber,
        amazon,
        google,
        facebook,
        wholeFood
    ];

    const colA = logos.filter((_, i) => i % 2 === 0); 
    const colB =  [...logos].sort(() => Math.random() - 0.5);

    const swiperBreakpoints = {
        0: { slidesPerView: 2, spaceBetween: 16 },
        768: { slidesPerView: 3, spaceBetween: 24 },
    };

    return (
        <div className="px-6 md:px-0 flex max-w-7xl md:mx-auto mt-20">
            <div className="rounded-2xl text-white grid grid-cols-1 md:grid-cols-2 shadow-lg w-full">
                {/* LEFT SIDE */}
                <div className=" bg-[#2F2F2F]/95 backdrop-blur-md text-left flex flex-col gap-5 px-6 sm:px-10 md:px-20 py-8 sm:py-10 md:py-20 rounded-t-2xl md:rounded-tr-none  md:rounded-l-2xl justify-center">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 md:mb-4 leading-tight">
                        <span className="text-[#FEC3C7]">Trusted by</span>{" "}
                        <span className="text-[#9AD7F3]">the</span>{" "}
                        <span className="text-[#6BDFDA]">best.</span>
                    </h2>
                    <p className="text-gray-300 mb-4 md:mb-6 text-base sm:text-base max-w-md">
                    We work with audacious brands, agencies, creators & affiliates to plan and launch immersive brand & product campaigns
                    </p>
                    <Button
                        text="Get it now"
                        className="bg-white text-[#274B89] px-5 sm:px-6 py-3 self-start text-sm sm:text-base"
                        // onClick={openModal}
                    />
                </div>

                {/* RIGHT SIDE */}
                <div className="bg-[#EBEBF1ED] px-6 sm:px-10 md:px-24 rounded-b-2xl md:rounded-bl-none  md:rounded-r-2xl">
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <Swiper
                                modules={[Autoplay]}
                                direction="vertical"
                                breakpoints={swiperBreakpoints}
                                loop
                                allowTouchMove={false}
                                speed={3500}
                                autoplay={{ delay: 0, disableOnInteraction: false }}
                                className="h-[380px] sm:h-[480px] md:h-[600px] lg:h-[660px]"
                            >
                                {colA.map((logo, idx) => (
                                    <SwiperSlide key={`A-${idx}`} className="flex items-center justify-center">
                                        <div className="rounded-2xl bg-white flex items-center justify-center shadow-sm w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
                                            <img src={logo} alt="brand" className="object-contain w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="flex-1">
                            <Swiper
                                modules={[Autoplay]}
                                direction="vertical"
                                breakpoints={swiperBreakpoints}
                                loop
                                allowTouchMove={false}
                                speed={3800}
                                autoplay={{ delay: 0, disableOnInteraction: false }}
                                className="h-[380px] sm:h-[480px] md:h-[600px] lg:h-[660px]"
                            >
                                {colB.map((logo, idx) => (
                                    <SwiperSlide key={`B-${idx}`} className="flex items-center justify-center">
                                        <div className="rounded-2xl bg-white flex items-center justify-center shadow-sm w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48">
                                            <img src={logo} alt="brand" className="object-contain w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}