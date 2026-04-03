import { useBookingNavigation } from "../../utils/helpers";
import ReserveBtn from "../common/Button";
import logo from '../../assets/images/brand.svg'

const NavBar = () => {
    const { goToBooking } = useBookingNavigation();
    return ( 
        <>
            <div className="navbar-container bg-[var(--primary-gray)]  ">
                <div className="navbar-layout flex items-center justify-between py-8 max-w-7xl mx-auto">
                <div className="brand">
                    <img src={logo} alt="" />
                </div>
                <nav className="nav-links">
                    <ul className="flex space-x-12 text-md text-[var(--primary-green-cold)] font-bold text-[20px]">
                        <li>Home</li>
                        <li>Menu</li>
                        <li>testomonies</li>
                        <li>About</li>
                    </ul>
                </nav>

                <ReserveBtn text='Book Now !' onClick={goToBooking} textColor='--white'/>
                </div>
            </div>
        </>
     );
}
 
export default NavBar;