import Image from "next/image";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Hero />
      <div 
      style={{background: 'var(--dark-blue)'}}
      className='
        relative
        z-30
        flex
        flex-col
        justify-center
        items-center
      '>
        <About />
        <Services />
        <Contact />
        <Footer />
      </div> 

    </div>
  );
}
