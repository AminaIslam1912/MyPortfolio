"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaGithub, FaPlayCircle } from "react-icons/fa";

const projects = [
  {
    title: "Hotel Management System",
    category: "Java Desktop Application",
    description:
      "A comprehensive Java-based application developed using Object-Oriented Programming principles to streamline hotel operations. Features include room booking, guest management, check-in/check-out, and room inventory control.",
    image: "/assets/project/project-pic-hms.png",
    technologies: ["Java", "Java Swing", "MySQL", "OOP"],
    videoLink:
      "https://drive.google.com/file/d/1fWMEJN6H49mIlJFoVi9YstGGuwMEPjpT/view?usp=sharing",
    codeLink: "https://github.com/AminaIslam1912/HotelManagementSystem",
    emoji: "🏨",
  },
  {
    title: "LearnLoop",
    category: "Android Mobile App",
    description:
      "A peer-to-peer skill-sharing platform that makes education accessible and engaging. Features include one-to-one skill swaps, free courses, progress tracking, real-time chat, community forum, and gamified challenges.",
    image: "/assets/project/project-pic-learnloop.jpg",
    technologies: ["Flutter", "Firebase", "Supabase", "PostgreSQL"],
    videoLink:
      "https://drive.google.com/file/d/1YydCDekDBhEHkHPqtTMFlpGUagg4nywZ/view?usp=sharing",
    codeLink: "https://github.com/AminaIslam1912/learnloop/tree/main/learnloop",
    emoji: "📚",
  },
  {
    title: "World Time App",
    category: "Android Mobile App",
    description:
      "A Flutter-based application designed to display real-time clocks for global time zones. Features customizable city time displays, time zone conversions, and a sleek, user-friendly interface.",
    image: "/assets/project/project-pic-time.jpg",
    technologies: ["Flutter", "Dart", "World Time API"],
    videoLink: null,
    codeLink: "https://github.com/AminaIslam1912/world_time",
    emoji: "🌍",
  },
];

const Project = () => {
  return (
    <section
      id="project"
      className="bg-secondary py-20 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container px-5 py-24 mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col text-center w-full mb-16">
          <h2 className="text-sm text-primary tracking-widest font-bold mb-3 uppercase animate-pulse">
            Portfolio
          </h2>
          <h1 className="sm:text-5xl text-4xl font-extrabold title-font mb-4 text-foreground">
            Featured Projects
          </h1>
          <div className="w-[100px] h-[4px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey in building innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50"
            >
              {/* Project Image */}
              <div className="relative h-44 sm:h-52 md:h-56 overflow-hidden">
                <Image
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  src={project.image}
                />
                {/* Overlay gradient (reduced for clarity) */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-50" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.emoji} {project.title}
                </h3>
                {/* Prominent Category Label */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs sm:text-sm font-semibold shadow-sm ring-1 ring-primary/30">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary text-foreground text-xs rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.videoLink && (
                    <Link
                      href={project.videoLink}
                      target="_blank"
                      className="flex-1"
                    >
                      <button className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 px-4 rounded-lg font-medium hover:opacity-90 transition-all shadow-md hover:shadow-lg">
                        <FaPlayCircle className="text-lg" />
                        Demo
                      </button>
                    </Link>
                  )}
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    className={project.videoLink ? "flex-1" : "w-full"}
                  >
                    <button className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-foreground border border-border py-2.5 px-4 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                      <FaGithub className="text-lg" />
                      Code
                    </button>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
