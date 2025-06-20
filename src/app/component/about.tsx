import Link from "next/link";
import React from "react";
import Image from "next/image";


const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-[#fae3c9]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              src="/assets/picture/portfolio_logo.png"
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a third-year undergraduate student pursuing a degree in
              Computer Science and Engineering at the University of Dhaka. I am
              passionate about software development, networking, and
              cybersecurity. Currently, I am focusing on building practical
              skills in web development and system programming, along with
              gaining experience in real-world projects.
            </p>
            <p className="mb-8 leading-relaxed">
              I enjoy working on challenging problems and continuously strive to
              improve my technical and problem-solving skills. I am actively
              seeking opportunities to apply my knowledge in internships,
              collaborative projects, and open-source contributions.
            </p>
            <div className="flex justify-center">
              {/* <a href="/assets/cv/My_CV.pdf" target="_blank" rel="noopener noreferrer">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button>
        </a> */}

              <a
                href="/assets/cv/My_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
