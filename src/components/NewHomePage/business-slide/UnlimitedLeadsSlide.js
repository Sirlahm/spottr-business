import React, { useState } from "react";
import { Info, X } from "lucide-react";
import Button from "../Button";

export default function UnlimitedLeadsSlide() {
    const [autoRespond, setAutoRespond] = useState(true);

    return (
        <section className="rounded-3xl bg-[#2F2F2F4D] p-6 sm:p-8 md:p-16 flex flex-col items-center justify-center">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-0">
                    Unlimited leads
                </h2>
            </div>

            {/* Notification Card */}
            <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl mb-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                            <Info className="w-6 h-6 text-[#274B89]" />
                        </div>
                        <div>
                            <p className="font-semibold text-[#274B89] mb-0">New Search Request</p>
                            <p className="text-xs text-gray-500 mb-0">Just now</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Product Info */}
                <div className="mb-4">
                    <h3 className="md:text-lg text-base font-bold text-gray-900 mb-2">
                        Nike Dry Academy Soccer Shoe
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#E3F2FD] text-[#274B89] text-sm font-semibold rounded-full">
                            90% match
                        </span>
                        <span className="text-sm text-[#10B981] font-medium">
                            3.2 miles away
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-0">
                        Someone is searching for Red Nike Shoe on Spottr. Is it available?
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-4 flex-col md:flex-row">
                    <button className="flex-1 px-[20px] py-[10px] bg-[#FEE2E2] text-[#DC2626] font-semibold rounded-full hover:bg-[#FECACA] transition-colors">
                        No, unavailable
                    </button>
                    <button className="flex-1    px-[20px] py-[10px] bg-[#10B981] text-white font-semibold rounded-full hover:bg-[#059669] transition-colors">
                        Respond with offer
                    </button>
                </div>

                {/* Auto Respond Toggle */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-sm text-gray-600">Auto respond for 1 hour</span>
                    <button
                        onClick={() => setAutoRespond(!autoRespond)}
                        className={`relative w-12 h-6 rounded-full transition-colors ${autoRespond ? "bg-[#274B89]" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${autoRespond ? "right-0.5" : "left-0.5"
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* CTA Button */}
            <Button
                text="See for yourself"
                className="bg-white text-black px-8 py-2 text-base"
            />
        </section>
    );
}
