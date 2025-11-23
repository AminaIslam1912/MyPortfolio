"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaPython,
  FaReact,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiNextdotjs,
  SiFlutter,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    name: "HTML",
    level: 100,
    icon: FaHtml5,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "CSS",
    level: 90,
    icon: FaCss3Alt,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Bootstrap",
    level: 80,
    icon: FaBootstrap,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    icon: SiTailwindcss,
    color: "from-teal-500 to-blue-500",
  },
  {
    name: "JavaScript",
    level: 50,
    icon: FaJs,
    color: "from-yellow-500 to-orange-500",
  },
  { name: "C", level: 99, icon: SiC, color: "from-blue-600 to-indigo-600" },
  {
    name: "C++",
    level: 95,
    icon: SiCplusplus,
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "Java",
    level: 80,
    icon: FaJava,
    color: "from-red-500 to-orange-600",
  },
  {
    name: "React",
    level: 60,
    icon: FaReact,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Next.js",
    level: 50,
    icon: SiNextdotjs,
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Python",
    level: 60,
    icon: FaPython,
    color: "from-blue-500 to-yellow-500",
  },
  {
    name: "Flutter",
    level: 60,
    icon: SiFlutter,
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "SQL",
    level: 90,
    icon: SiMysql,
    color: "from-blue-600 to-indigo-500",
  },
];

const Skill = () => {
  return (
    <div id="skill">
      <section className="bg-background py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="container px-5 py-24 mx-auto relative z-10">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-sm text-primary tracking-widest font-bold title-font mb-3 uppercase animate-pulse">
              Technical Expertise
            </h2>
            <h1 className="sm:text-5xl text-4xl font-extrabold title-font text-foreground mb-4">
              My Skills & Technologies
            </h1>
            <div className="w-[100px] h-[4px] bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and programming
              languages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border hover:border-primary/50"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="text-2xl text-white" />
                      </div>
                      <span className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg animate-[slideIn_1s_ease-out_forwards]`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Skill level indicator */}
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Skill;
