import React from "react";
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      title: "Movie Website",
      demo: "https://rishab-jha-react-movie-project.vercel.app/",
      code: "https://github.com/RishabJha134/React-Movie-App-Project",
      description: "A modern movie browsing platform"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      title: "Todo App",
      demo: "https://todo-app-mini-project.vercel.app/",
      code: "https://github.com/RishabJha134/React-Movie-App-Project",
      description: "A sleek task management application"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Obys Clone",
      demo: "https://rishabjha-awward-website.vercel.app/",
      code: "https://github.com/RishabJha134/Awwward-Website-Clone",
      description: "A pixel-perfect clone of Obys Agency"
    },
  ];

  return (
    <div
      id="portfolio"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-16 sm:py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </h2>
          <p className="py-6 text-gray-300">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map(({ id, src, title, demo, code, description }) => (
            <div 
              key={id} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="font-medium">{description}</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                
                <div className="flex items-center justify-between mt-4">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  
                  <a
                    href={code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;