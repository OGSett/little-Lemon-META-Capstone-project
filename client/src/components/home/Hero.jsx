import heroImage from '../../assets/images/hero-image2.png'
import { useBookingNavigation } from '../../utils/helpers';
import ReserveBtn from '../common/Button';
const Hero = () => {
    const { goToBooking } = useBookingNavigation()
    return ( 
        <section className='w-full bg-[var(--primary-green-cold)] relative text-white py-16 mb-38'> 
            <div className="hero-layout flex items-center justify-between max-w-7xl mx-auto px-4">
                <div className="hero-text max-w-sm space-y-6">
                    <h1 className="text-5xl font-semibold text-[84px] text-[var(--secondary-btn)]">Little Lemon</h1>
                    <h2 className="text-3xl font-semibold text-[56px] ">Chicago</h2>
                    <p className="text-lg text-[22px] tracking-[1%] py-2">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <ReserveBtn text='Reserve a Table' onClick={goToBooking} color='--secondary-btn' textColor='--black'/>
                </div>
                <div className="hero-image">
                    <img src={heroImage} alt="hero" className=" absolute right-[16%] top-18"/>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;