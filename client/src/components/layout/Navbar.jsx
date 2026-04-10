import { useBookingNavigation, useGlobalNavigation } from "../../utils/helpers";
import ReserveBtn from "../common/Button";
import logo from "../../assets/images/brand.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { goToBooking } = useBookingNavigation();
  const { goToPath } = useGlobalNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const handleSectionNav = (sectionId) => {
    if (pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      goToPath(`/#${sectionId}`);
    }

    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-container bg-[var(--primary-gray)] relative">
      <div className="navbar-layout flex items-center justify-between md:py-6 py-4 max-w-7xl mx-auto">
        <div
          onClick={() => goToPath("/")}
          className="brand mx-2 md:mx-0 hover:cursor-pointer"
        >
          <img src={logo} alt="Brand logo" />
        </div>

        <nav className="nav-links hidden md:block">
          <ul className="flex space-x-12 text-[20px] text-[var(--primary-green-cold)] font-bold">
            <li
              onClick={() => handleSectionNav("home")}
              className="hover:cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => handleSectionNav("specials")}
              className="hover:cursor-pointer"
            >
              Menu
            </li>
            <li
              onClick={() => handleSectionNav("testimonials")}
              className="hover:cursor-pointer"
            >
              Testimonials
            </li>
            <li
              onClick={() => handleSectionNav("about")}
              className="hover:cursor-pointer"
            >
              About
            </li>
          </ul>
        </nav>

        <div className="icon_berg p-2 rounded-lg border border-[var(--primary-green-cold)] mx-2 block md:hidden">
          <img
            src="/icon_berg.svg"
            alt="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer"
          />
        </div>

        <ReserveBtn
          text="Book Now!"
          onClick={goToBooking}
          textColor="--white"
          isItNav={true}
        />

        <ul
          className={`flex flex-col space-y-4 text-[20px] text-[var(--primary-green-cold)] font-bold absolute z-10 top-full right-0 bg-[var(--primary-gray)] p-4 rounded-lg md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li
            onClick={() => handleSectionNav("home")}
            className="hover:cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => handleSectionNav("specials")}
            className="hover:cursor-pointer"
          >
            Menu
          </li>
          <li
            onClick={() => handleSectionNav("testimonials")}
            className="hover:cursor-pointer"
          >
            Testimonials
          </li>
          <li
            onClick={() => handleSectionNav("about")}
            className="hover:cursor-pointer"
          >
            About
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
