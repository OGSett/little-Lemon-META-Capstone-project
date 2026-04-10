import logo from '../../assets/images/brand.svg'

const Footer = () => {
  return (
    <footer className="bg-[#495E57] text-white p-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-x-16 items-start">
          <div className='flex items-center justify-center h-full'>
            <img
              src="/images/building/restaurant.png"
              alt="Little Lemon restaurant"
              className="w-40 rounded-md hidden md:block"
            />
            <img
              src={logo} 
              alt="Little Lemon restaurant"
              className="rounded-md block md:hidden w-32"
            />
          </div>

          <div className='flex flex-col items-start justify-center h-full'  >
            <h3 className="font-semibold mb-3">Little Lemon</h3>
            <nav>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Reservations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Order Online
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className='flex flex-col items-start justify-center h-full'>
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

          <div className='flex flex-col items-start justify-center h-full'>
            <h3 className="font-semibold mb-3">Social Media</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
