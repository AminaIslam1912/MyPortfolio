import Link from "next/dist/client/link";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font bg-[#fae3c9]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom.
      </p> */}
          </div>
          <div className="flex flex-wrap m-5 -mt-[5rem]">
            {/* project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  fill
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src="/assets/project/project-pic-hms.png"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-black-200 bg-[#f7e8d7] opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    JAVA Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                   🏨 Hotel Management System 
                  </h1>
                  <p className="leading-relaxed line-clamp-3 text-black-900">
                    A Java-based application developed using Object-Oriented
                    Programming (OOP) principles to streamline hotel operations.
                    I built features like room booking, guest management,
                    check-in/check-out, and room inventory control. Powered by
                    Java, Java Swing for the GUI, and MySQL for data management,
                    this project showcases efficient, user-friendly design.
                  </p>
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 mt-6">
                    <Link
                      href="https://drive.google.com/file/d/1fWMEJN6H49mIlJFoVi9YstGGuwMEPjpT/view?usp=sharing"
                      target="_blank"
                    >
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg px-auto ml-2 mt-6">
                        View Video
                      </button>
                    </Link>

                    <Link
                      href="https://github.com/AminaIslam1912/HotelManagementSystem"
                      target="_blank"
                    >
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg px-auto ml-4 mt-6">
                        View Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  fill
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src="/assets/project/project-pic-learnloop.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-black-200 bg-[#f7e8d7] opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Android Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    📚 LearnLoop
                  </h1>
                  <p className="leading-relaxed line-clamp-3 text-black-900">
                    LearnLoop is a peer-to-peer skill-sharing platform I developed to make education accessible and engaging. I built features like one-to-one skill swaps, free courses, progress tracking, real-time chat with Google Meet, a community forum, gamified challenges, bookmarking, and secure authentication. Using Flutter, Cloud Firestore, Postgres, Supabase, Firebase, Figma, and Canva, I created an interactive learning experience
                  </p>
                  <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 mt-6">
                    <Link
                      href="https://drive.google.com/file/d/1YydCDekDBhEHkHPqtTMFlpGUagg4nywZ/view?usp=sharing"
                      target="_blank"
                    >
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg px-auto ml-2  mt-6">
                        View Video
                      </button>
                    </Link>

                    <Link
                      href="https://github.com/AminaIslam1912/learnloop/tree/main/learnloop"
                      target="_blank"
                    >
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg px-auto ml-4 mt-6">
                        View Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  fill
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src="/assets/project/project-pic-time.jpg"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-black-200 bg-[#f7e8d7] opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Android Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    World Time App 🌍
                  </h1>
                  <p className="leading-relaxed line-clamp-3 text-black-900">
                   A Flutter-based Android application designed to display real-time clocks for global time zones. I built features like customizable city time displays, time zone conversions, and a sleek, user-friendly interface. 
                  </p>
                 <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 mt-6">
                    {/* <Link
                      href="https://drive.google.com/file/d/1fWMEJN6H49mIlJFoVi9YstGGuwMEPjpT/view?usp=sharing"
                      target="_blank"
                    >
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg px-auto ml-10 mt-6">
                        View Video
                      </button>
                    </Link> */}

                    <Link
                      href="https://github.com/AminaIslam1912/world_time"
                      target="_blank"
                    >
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg px-auto ml-1 mt-6">
                        View Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
