import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#495E57] text-white p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-x-16 items-start">

          <div className="flex items-center justify-start lg:justify-center h-full">
            <img
              src="/images/building/restaurant.png"
              alt="Little Lemon restaurant exterior"
              className="w-40 rounded-md hidden md:block"
            />
            <img
              src="/footer-logo.png"
              alt="Little Lemon logo"
              className="rounded-md block md:hidden w-32"
            />
          </div>

          <div className="flex flex-col items-start justify-center h-full">
            <h3 className="font-semibold mb-3">Little Lemon</h3>

            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("specials")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:underline bg-transparent border-none p-0"
                  >
                    Menu
                  </button>
                </li>
                <li>
                  <Link to="/booking" className="hover:underline">
                    Reservations
                  </Link>
                </li>
                <li>
                  <span className="opacity-70 cursor-not-allowed">
                    Order Online
                  </span>
                </li>
                <li>
                  <span className="opacity-70 cursor-not-allowed">Login</span>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col items-start justify-center h-full">
            <h3 className="font-semibold mb-3">Contact</h3>

            <address className="not-italic text-sm space-y-1">
              <p>Little Lemon</p>
              <p>331 E Chicago</p>
              <p>LaSalle Street Chicago,</p>
              <p>Illinois 60602</p>
              <p>USA</p>

              <p className="mt-2">
                <a href="tel:+551199999999" className="hover:underline">
                  +55 11 9999-9999
                </a>
              </p>

              <p>
                <a
                  href="mailto:contact@littlelemon.com"
                  className="hover:underline"
                >
                  contact@littlelemon.com
                </a>
              </p>
            </address>
          </div>

          <div className="flex flex-col items-start justify-center h-full">
            <h3 className="font-semibold mb-3">Social Media</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <span className="opacity-70">Facebook</span>
              </li>
              <li>
                <span className="opacity-70">Instagram</span>
              </li>
              <li>
                <span className="opacity-70">Twitter</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-white/70 mt-8">
        © {new Date().getFullYear()} Little Lemon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
