import { useBookingNavigation } from "../../utils/helpers";
import ReserveBtn from "../common/Button";
import logo from "../../assets/images/brand.svg";
import { useState } from "react";

const NavBar = () => {
  const { goToBooking } = useBookingNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar-container bg-[var(--primary-gray)] relative">
      <div className="navbar-layout flex items-center justify-between md:py-8 py-4 max-w-7xl mx-auto">
        <div className="brand mx-2 md:mx-0">
          <img src={logo} alt="Brand logo" />
        </div>

        <nav className="nav-links hidden md:block">
          <ul className="flex space-x-12 text-[20px] text-[var(--primary-green-cold)] font-bold">
            <li>Home</li>
            <li>Menu</li>
            <li>Testimonials</li>
            <li>About</li>
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
          <li>Home</li>
          <li>Menu</li>
          <li>Testimonials</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
