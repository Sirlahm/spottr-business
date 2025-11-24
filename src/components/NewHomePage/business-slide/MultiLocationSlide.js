import React from "react";
import screenshot from "../../../assets/images/screenshot.png";
import Button from "../Button";

export default function MultiLocationSlide() {
    return (
        <section className="rounded-3xl bg-[#2F2F2F] p-6 sm:p-8 md:p-16 md:px-[30px]">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center">
                    Multi-location Targeting
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-0 ">
                    Game changing feature allowing FMCG manufacturers, distributors,
                    multi-location fairs to broadcast up to 1m locations in real time for
                </p>
            </div>

            {/* Screenshot Container */}
            <div className="relative w-full max-w-6xl mx-auto relative">
                <img
                    src={screenshot}
                    alt="Multi-location targeting dashboard"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="flex justify-center mt-8 absolute bottom-[20px]  md:bottom-[50px] left-0 right-0">
                    <Button
                        text="Create your lists now"
                        className="bg-black text-white px-8 py-3 text-base"
                    />
                </div>
            </div>

            {/* CTA Button */}

        </section>
    );
}
