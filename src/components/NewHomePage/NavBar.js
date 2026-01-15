import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo-White.svg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Disable background scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Close mobile menu if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur md:bg-[#143772]/95 md:rounded-full md:max-w-7xl md:mx-auto md:mt-2">
      <div className="px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          // onClick={() => navigate("/")}
          className="flex items-center focus:outline-none"
        >
          <img alt="logo" src={Logo} className="h-8 w-auto" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-white/80 hover:text-white transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#cta"
          className="hidden md:inline-flex items-center rounded-full bg-white px-6 py-3 text-[15px] font-medium text-[#274B89] shadow-sm hover:opacity-95 transition-all duration-200"
        >
          Download App
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#274B89] p-2 bg-white rounded-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={25} color="#274B89" />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-3/4 max-w-xs bg-[#143772] text-white shadow-xl z-50 flex flex-col p-6 transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none opacity-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img alt="logo" src={Logo} className="h-7 w-auto" />
          </div>
          <button
            className="text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white/90 hover:text-white transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="my-8 border-t border-white/20"></div>

        {/* Download Button */}
        <a
          href="#cta"
          onClick={() => setIsOpen(false)}
          className="mt-auto inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#274B89] shadow-sm hover:opacity-95 transition-all duration-200"
        >
          Download App
        </a>
      </div>
    </header>
  );
}
