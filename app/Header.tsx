'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const links = [
    {
      name: 'About',
      to: 'about',
      animationTiming: '0.7s'
    },
    {
      name: 'Services',
      to: '#services',
      animationTiming: '1s'
    },
    {
      name: 'Contact',
      to: '#contact',
      animationTiming: '1.6s'
    },
  ]


  useEffect(() => {

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const heroSectionHeight = '110vh';
      
      // Check if the user has scrolled past the hero section
      if (currentScrollPos > parseInt(heroSectionHeight)) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }

      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < parseInt(heroSectionHeight));
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);



  return (
    <div 
      style={scrolledPastHero ? {backdropFilter: 'blur(8px)'} : {background: 'none'}}
      className={`
        fixed 
        w-screen 
        box-border 
        px-5 
        z-50
        flex 
        flex-row
        justify-center
        backdrop-blur-sm
        transition-all
        duration-500
        ${isVisible ? 'top-0': '-top-28'}
        `}
      >
      <header 
        className={`
          w-full 
          h-20 
          md:h-22 
          2xl:h-24
          box-border
          border-b
          `}
        >
        <nav className='h-full flex flex-row justify-between items-center md:px-3'>
          <Link href='/#home' className='text-2xl md:mr-12 animate-[translateXRight_1s_ease-out] transition-all duration-1000 ease-out hover:opacity-50'>HD</Link>
          <ul className='flex flex-row text-text justify-end'>
            {
              links.map((link, index) => (
                <li 
                  key={index}
                  style={{animation: `translateXLeft ${link.animationTiming} ease-out`}}
                  className={`mx-2 md:mx-4 xl:mx-6 transition-all duration-1000 ease-out hover:opacity-50`}>
                <Link href={`/${link.to}`} >
                  {link.name}
                </Link>
              </li>
              ))
            }
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;