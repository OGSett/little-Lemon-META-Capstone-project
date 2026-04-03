import { useNavigate } from "react-router-dom";
import Hero from "../components/home/Hero";
import Specials from "../components/home/Specials";
import Testimonials from "../components/home/Testimonials";

const Home  = () => {
    const navigate = useNavigate()
    return ( 
       <main>
        <Hero/>
        <Specials/>
        <Testimonials/>
       </main>
     );
}
 
export default Home ;