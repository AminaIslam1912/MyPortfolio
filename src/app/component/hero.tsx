"use client";

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto flex px-4 sm:px-6 py-12 sm:py-20 md:flex-row flex-col items-center gap-10">
        <div className="lg:flex-grow md:w-1/2 md:pr-12 lg:pr-20 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
          <h1 className="title-font text-3xl sm:text-4xl mb-4 font-bold leading-tight text-foreground">
            Hi, I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "an undergraduate student in the Department of Computer Science and Engineering at the University of Dhaka.",
                  "a web developer.",
                  "an Android developer.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[80px] sm:w-[100px] h-[3px] bg-primary mb-6"></div>
          <p className="mb-8 leading-relaxed text-muted-foreground text-sm sm:text-base">
            I&apos;m Amina Islam, a Computer Science and Engineering student at
            the University of Dhaka, with a passion for web and Android
            development. Proficient in Python, C++, Flutter, Java, JavaScript,
            React, Next.js, HTML, CSS, and Tailwind CSS, I've developed
            impactful projects like LearnLoop, a skill-sharing Android app built
            with Flutter, a Hotel Management System in Java, and Cosmo Shooter,
            a game developed using C-SDL. I thrive on crafting user-centric
            solutions that address real-world problems. When I&apos;m not
            coding, I explore new tech trends and collaborate with peers.
            I&apos;m eager to build innovative applications and contribute to
            the tech community.
          </p>
          <div className="flex justify-center w-full">
            <Link href="#contact">
              <button className="inline-flex bg-primary text-primary-foreground border-0 py-3 px-6 sm:px-8 focus:outline-none hover:opacity-90 rounded-lg text-base sm:text-lg font-medium transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center">
          <Image
            className="object-cover object-center rounded-full mx-auto shadow-2xl border-4 border-primary w-56 h-56 sm:w-72 sm:h-72 md:w-[20rem] md:h-[20rem]"
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
