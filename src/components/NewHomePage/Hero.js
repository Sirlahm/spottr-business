import { useState } from "react";
import image from "../../assets/play-video.jpg";
import arrow from "../../assets/arr.svg";
import Globe from "components/Globe/globe";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl bg-black">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-[220px] sm:h-[350px] md:h-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="relative px-6 sm:px-8 md:px-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 items-center gap-10 md:gap-0 overflow-hidden h-[50vh] md:h-auto">
      {/* ✅ MOBILE Globe (absolute & only on mobile) */}
      <div className="absolute inset-0 flex justify-center items-center sm:items-start md:hidden z-0">
        <div className="w-[280px] sm:w-[360px] opacity-50 mt-12">
          <Globe width={280} height={280} />
        </div>
      </div>

      {/* ✅ LEFT SIDE — Text */}
      <div className="relative flex flex-col gap-4 md:gap-6 md:col-span-3 z-10">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] md:leading-[80px] mt-16 sm:mt-20 text-left">
          We are Built for <br className="hidden sm:block" />
          Brands
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed text-left">
          and businesses who want to crack sales, viral <br className="hidden sm:block" />
          marketing & distribution
        </p>

        {/* Play Video */}
        <div className="bg-white rounded-xl px-3 py-3 flex gap-3 items-center w-fit">
          <img
            src={image}
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-md cursor-pointer"
            onClick={openModal}
          />
          <div>
            <p className="text-[#171717] text-sm sm:text-base font-bold mb-0">
              Our Brand Promise
            </p>
            <p className="text-[#595959] text-xs sm:text-sm mb-0">
              and how we work with you
            </p>
          </div>
        </div>

        {/* Arrow — Desktop only */}
        <img
          src={arrow}
          className="hidden md:block h-28 w-28 ml-[100px] mt-2"
          alt="spottr"
        />
      </div>

      {/* ✅ RIGHT SIDE — Globe (desktop only) */}
      <div className="hidden md:flex md:col-span-2 justify-center md:justify-start mt-10 md:mt-0">
        <div className="w-[90%] sm:w-[80%] md:w-full max-w-[500px]">
          <Globe />
        </div>
      </div>

      {/* ✅ Video Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </section>
  );
}
