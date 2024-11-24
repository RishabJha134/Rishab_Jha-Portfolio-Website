import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Experience = () => {
  const techs = [
    {
      id: 1,
      Icon: FaHtml5,
      title: "HTML",
      style: "shadow-orange-500",
      color: "text-orange-500"
    },
    {
      id: 2,
      Icon: FaCss3Alt,
      title: "CSS",
      style: "shadow-blue-500",
      color: "text-blue-500"
    },
    {
      id: 3,
      Icon: FaJs,
      title: "JavaScript",
      style: "shadow-yellow-500",
      color: "text-yellow-500"
    },
    {
      id: 4,
      Icon: FaReact,
      title: "React",
      style: "shadow-cyan-500",
      color: "text-cyan-500"
    },
    {
      id: 5,
      Icon: SiTailwindcss,
      title: "Tailwind",
      style: "shadow-sky-400",
      color: "text-sky-400"
    },
    {
      id: 6,
      Icon: SiNextdotjs,
      title: "Next.js",
      style: "shadow-white",
      color: "text-white"
    },
    {
      id: 7,
      Icon: FaGithub,
      title: "GitHub",
      style: "shadow-gray-400",
      color: "text-gray-400"
    },
    {
      id: 8,
      Icon: FaPython,
      title: "Python",
      style: "shadow-blue-400",
      color: "text-blue-400"
    }
  ];

  return (
    <div
      id="experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16 sm:py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </h2>
          <p className="py-6 text-gray-300">Technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {techs.map(({ id, Icon, title, style, color }) => (
            <div
              key={id}
              className={`bg-gray-800 p-6 rounded-lg ${style} shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-4 group`}
            >
              <Icon className={`w-12 h-12 ${color} group-hover:scale-110 transition-transform duration-300`} />
              <p className="text-lg font-medium">{title}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-200">My Expertise</h3>
          <p className="text-gray-300 leading-relaxed">
            With years of experience in web development, I've mastered these technologies 
            to create modern, responsive, and performant web applications. My focus on 
            continuous learning keeps me updated with the latest trends and best practices 
            in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
