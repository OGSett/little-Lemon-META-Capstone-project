import { useBookingNavigation, useGlobalNavigation } from "../../utils/helpers";
import ReserveBtn from "../common/Button";
import logo from "../../assets/images/brand.svg";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const { goToBooking } = useBookingNavigation();
  const { goToPath } = useGlobalNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionNav = (sectionId) => {
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      goToPath(`/#${sectionId}`);
    }

    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (pathname === "/" && hash) {
      const sectionId = hash.replace("#", "");
      const timer = setTimeout(() => {
        scrollToSection(sectionId);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  const navItems = [
    { label: "Home", sectionId: "home" },
    { label: "Menu", sectionId: "specials" },
    { label: "Testimonials", sectionId: "testimonials" },
    { label: "About", sectionId: "about" },
  ];

  return (
    <div className="navbar-container bg-[var(--primary-gray)] relative">
      <div className="navbar-layout flex items-center justify-between md:py-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="brand mx-2 md:mx-0" aria-label="Go to homepage">
          <img src={logo} alt="Little Lemon restaurant logo" />
        </Link>

        <nav
          className="nav-links hidden md:block"
          aria-label="Primary navigation"
        >
          <ul className="flex space-x-12 text-[18px] text-[var(--primary-green-cold)] font-bold">
            {navItems.map((item) => (
              <li key={item.sectionId}>
                <button
                  type="button"
                  onClick={() => handleSectionNav(item.sectionId)}
                  className="text-[18px] font-bold text-[var(--primary-green-cold)] bg-transparent border-none cursor-pointer hover:opacity-80 transition"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="icon_berg p-2 rounded-lg border border-[var(--primary-green-cold)] mx-2 block md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <img src="/icon_berg.svg" alt="" className="w-5 h-5" />
        </button>

        <ReserveBtn
          text="Book Now!"
          onClick={goToBooking}
          textColor="--white"
          isItNav={true}
        />

        <nav
          className={`absolute z-10 top-full right-0 bg-[var(--primary-gray)] p-4 rounded-lg md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
          aria-label="Mobile navigation"
        >
          <ul
            id="mobile-menu"
            className="flex flex-col space-y-4 text-[16px] text-[var(--primary-green-cold)] font-bold"
          >
            {navItems.map((item) => (
              <li key={item.sectionId}>
                <button
                  type="button"
                  onClick={() => handleSectionNav(item.sectionId)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
