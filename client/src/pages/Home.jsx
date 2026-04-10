import { useNavigate } from "react-router-dom";
import Hero from "../components/home/Hero";
import Specials from "../components/home/Specials";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";

const Home  = () => {
    const navigate = useNavigate()
    return ( 
       <main>
        <Hero/>
        <Specials/>
        <Testimonials/>
        <About/>
       </main>
     );
}
 
export default Home ;