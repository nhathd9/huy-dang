import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div 
    className='
        sticky
        top-0 
        z-0
        w-screen 
        h-screen
        flex
        flex-col
        justify-center
        items-center
        bg-royal-blue
    '>
        <div className='max-w-5xl w-4/6 flex flex-col items-center'>
            <h2 className='text-3xl md:text-5xl 2xl:text-7xl text-center leading-tight'>Web and Email Marketing Solutions from the Future</h2>
            <div className='flex flex-row justify-center mt-9'>
                <a href='#services' className='services p-2 text-xs md:text-lg sm:p-4 mx-3'>See services</a>
                <a href='#contact' className='book p-2 text-xs md:text-lg sm:p-4 mx-3'>Book a call</a>
            </div>
        </div>
        <section id="section07">
                <a href="#about"><span></span><span></span><span></span></a>
        </section>
    </div>
  )
}

export default Hero