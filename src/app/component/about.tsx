import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <section className="bg-secondary py-16 sm:py-20">
        <div className="container mx-auto flex px-4 sm:px-6 py-12 sm:py-20 md:flex-row flex-col items-center gap-10">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
            <Image
              className="object-cover object-center rounded-xl mx-auto shadow-2xl w-56 h-72 sm:w-64 sm:h-80 md:w-[300px] md:h-[400px]"
              alt="hero"
              src="/assets/picture/portfolio_logo.png"
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 md:pl-10 lg:pl-16 flex flex-col md:items-start md:text-left items-center text-center max-w-xl">
            <h1 className="title-font text-3xl sm:text-4xl mb-6 font-bold text-foreground leading-tight">
              About Me
            </h1>
            <div className="w-[70px] sm:w-[80px] h-[3px] bg-primary mb-6"></div>
            <p className="mb-6 leading-relaxed text-muted-foreground text-sm sm:text-base">
              I am a third-year undergraduate student pursuing a degree in
              Computer Science and Engineering at the University of Dhaka. I am
              passionate about software development, networking, and
              cybersecurity. Currently, I am focusing on building practical
              skills in web development and system programming, along with
              gaining experience in real-world projects.
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground text-sm sm:text-base">
              I enjoy working on challenging problems and continuously strive to
              improve my technical and problem-solving skills. I am actively
              seeking opportunities to apply my knowledge in internships,
              collaborative projects, and open-source contributions.
            </p>
            <div className="flex justify-center">
              <a
                href="/assets/cv/My_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex bg-primary text-primary-foreground border-0 py-3 px-6 sm:px-8 focus:outline-none hover:opacity-90 rounded-lg text-base sm:text-lg font-medium transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
