import shoe from "../../assets/shoe.png";
import { motion } from "framer-motion";
import halfellipse from "../../assets/half-ellipse.svg";
import ellipse from "../../assets/ellips.svg";
export default function LaunchMarketing() {
  return (

    <div className="relative">

      <img src={halfellipse} alt="spottr" className="absolute bottom-[50px] left-0  hidden md:block w-[150px]" />
      <img src={ellipse} alt="spottr" className="absolute top-[450px] right-0 hidden md:block " />

      <section className="relative max-w-7xl mx-auto mt-20 bg-[#2F2F2F26] rounded-2xl p-6 sm:p-10 md:p-20 overflow-hidden z-10">

        <div className="pointer-events-none">
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 h-[80px] w-[120px] md:h-[100px] md:w-[150px] border-t-[6px] border-l-[6px] md:border-t-[8px] md:border-l-[8px] border-white/80 rounded-tl-sm" />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 h-[60px] w-[80px] md:h-[100px] md:w-[150px] border-b-[6px] border-r-[6px] md:border-b-[8px] md:border-r-[8px] border-white/80 rounded-br-sm" />
        </div>

        {/* Top heading */}
        <div className="relative py-6 sm:py-8 px-4 sm:px-10">
          <h3 className="text-[#9374FF] font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tight select-none">
            Viral
          </h3>
          <h2 className="-mt-2 sm:-mt-4 md:-mt-6 text-white font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight select-none">
            Launches
          </h2>
        </div>

        {/* Center visual */}
        <div className="relative flex items-center justify-center mt-10 md:mt-14">
          {/* Soft colored glow */}
          <div className="absolute -z-10 w-[220px] sm:w-[300px] md:w-[480px] h-[220px] sm:h-[300px] md:h-[480px] rounded-full bg-gradient-to-r from-[#7bc8ff]/40 via-[#a585ff]/30 to-[#ff6a4a]/30 blur-3xl" />

          <motion.img
            src={shoe}
            alt="shoe"
            className="w-[220px] sm:w-[320px] md:w-[440px] drop-shadow-xl"
            initial={{ y: 0, rotate: 6 }}
            animate={{ y: -18, rotate: 10 }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.06, rotate: 0 }}
          />
        </div>

        {/* Bottom heading */}
        <div className="mt-10 md:mt-14 relative py-6 sm:py-8 px-4 sm:px-10">
          <div className="text-right">
            <h3 className="text-[#FF4B3E] font-extrabold text-4xl sm:text-5xl md:text-7xl tracking-tight select-none">
              Audacious
            </h3>
            <h2 className="-mt-2 sm:-mt-3 text-white font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight select-none">
              Marketing
            </h2>
          </div>
        </div>
      </section>
    </div>

  );
}
