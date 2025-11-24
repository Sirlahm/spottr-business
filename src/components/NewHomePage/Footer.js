import phone from "../../assets/spottr-iphone.png";
import Button from "./Button";

export default function Footer() {
  const links = {
    Company: ["About", "Contact", "Blog", "Cliq Token", "Terms", "Privacy", "Vacancies"],
    "For Business": ["Manufacturers", "Startups", "Brands & Spottr", "MSME", "Partnerships"],
    Community: ["Trading Card", "Two Rooms", "Grant", "Challenges", "Grants"],
  };

  return (
    <section className="bg-[#274B89] py-8 md:py-12">
    <div className="rounded-3xl max-w-7xl md:mx-auto px-6 bg-[#74618233] p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-10 mt-10">
      {/* Phone Image */}
      <div className="md:col-span-2 flex justify-center">
        <img
          src={phone}
          alt="Check-in phone"
          className="w-[70%] sm:w-[80%] md:w-[90%] h-auto object-contain"
        />
      </div>

      {/* Text + Buttons + Links */}
      <div className="md:col-span-3 text-white mt-10 md:mt-0">
        <div className="flex flex-col space-y-10 sm:space-y-16">
          {/* Header Text */}
          <p className="text-4xl sm:text-4xl md:text-6xl font-bold text-center md:text-left">
            Don’t keep the 
fans waiting
          </p>

          {/* Button + Text + Links */}
          <div className="flex flex-col gap-6 sm:gap-10">
            <div className="flex flex-col md:flex-row md:gap-6 items-center">
              <Button
                text="Secure username"
                className="bg-white text-[#274B89] text-lg sm:text-xl px-10 sm:px-20 py-3 sm:py-4"
              />
              <p className="text-xl sm:text-base mt-[10px] sm:mt-0 ">or hit us up</p>
            </div>


            {/* Links Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 mt-[20px]">
              {Object.entries(links).map(([section, items]) => (
                <div key={section}>
                  <h3 className="font-semibold text-lg mb-3 sm:mb-4">{section}</h3>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                    {items.map((item) => (
                      <li key={item} className="hover:underline cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
