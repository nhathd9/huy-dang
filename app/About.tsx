'use client';
import React, { useState, useEffect } from 'react';
import sparky from '../images/sparky.jpg';
import './about.css';

const About = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const roles = ['Developer', 'Designer', 'Writer', 'Problem Solver', 'Coffeeholic'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      setAnimate(true); // Trigger animation
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  // Reset animation after 0.5s
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimate(false);
    }, 1100);
    return () => clearTimeout(timeoutId);
  }, [currentRoleIndex]);

  return (
    <div 
      id='about'
      className='
        w-screen 
        min-h-screen 
        flex 
        flex-col 
        justify-center 
        items-center
        px-12 
        py-32 
        md:px-28
        sm:items-start
        lg:flex-row-reverse
        lg:items-center
      '
    >
      <div className='
        pb-24
        w-full
        max-w-2xl
        md:px-0
        lg:pb-6
        lg:w-2/5
        lg:pl-24
        flex
        flex-col
        justify-center
      '>
        <p 
          style={{
            background: 'rgb(38, 91, 237, 0.2)'
          }}
          className='w-24 py-1 mb-2 text-center border rounded-full text-royal-blue'
        >
          ABOUT
        </p>
        <h2 className={`my-3 text-4xl ${animate ? 'animate-text' : ''}`}><strong>{roles[currentRoleIndex]}</strong></h2>
        <p className='my-2'>
          Hey, I&lsquo;m Huy, a passionate freelancer from Toronto, Canada, bringing you <strong>web and email marketing solutions from the future</strong>.
          My expertise is developing next-level websites and marketing strategies that push boundaries and deliver results.
        </p>
      </div>
      <img 
        className='
        w-80
        '
        src={sparky.src}
      />
    </div>
  );
};

export default About;