"use client"

import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';



const Hero = () => {
  return (

     <section className="text-black-600 bg-indigo-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hi, I am
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['an undergraduate student in the Department of Computer Science and Engineering at the University of Dhaka.', 'a web developer.', 'an Android developer.'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className="w-[100px] h-[2px] bg-indigo-900"></div>
      <p className="mb-8 leading-relaxed">
        I’m Amina Islam, a Computer Science and Engineering student at the University of Dhaka, with a passion for web and Android development. Proficient in Python, C++, Flutter, Java, JavaScript, React, Next.js, HTML, CSS, and Tailwind CSS, I’ve developed impactful projects like LearnLoop, a skill-sharing Android app built with Flutter, a Hotel Management System in Java, and Cosmo Shooter, a game developed using C-SDL. I thrive on crafting user-centric solutions that address real-world problems. When I'm not coding, I explore new tech trends and collaborate with peers. I’m eager to build innovative applications and contribute to the tech community.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto wid w-[15rem]"
        alt="hero"
        width={500}
        height={500}
        src="/assets/picture/portfolio_logo.png"
      />
    </div>
  </div>
</section>

    
  );
};

export default Hero;
