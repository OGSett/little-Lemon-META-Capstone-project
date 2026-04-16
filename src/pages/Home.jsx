import Hero from "../components/home/Hero";
import Specials from "../components/home/Specials";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoUpButton } from "../components/common/Button";

const Home = () => {
  const location = useLocation()


  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash ) {
      const section = document.getElementById(hash)
      if(section) {
        section.scrollIntoView({behavior: 'smooth'})
      }
    }
  },[location.hash])

  return (
    <>
      <GoUpButton/>
      <section id="home">
        <Hero />
      </section>
      <section id="specials">
        <Specials />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="about">
        <About />
      </section>
    </>
  );
};

export default Home;
