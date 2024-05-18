import React from "react";
import movieWebsite from "../assets/portfolio/movieWebsite.png";
import ObysClone from "../../src/assets/portfolio/ObysClone.png"
import Todo from "../assets/portfolio/Todo.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: movieWebsite,
      title: "Movie Website",
      demo:"https://rishab-jha-react-movie-project.vercel.app/",
      code:"https://github.com/RishabJha134/React-Movie-App-Project"
    },
    {
      id: 2,
      src: Todo,
      title: "Todo App",
      demo:"https://todo-app-mini-project.vercel.app/",
      code:"https://github.com/RishabJha134/React-Movie-App-Project"
    },
    {
      id: 3,
      src: ObysClone,
      title: "Obys Clone",
      demo:"https://rishabjha-awward-website.vercel.app/",
      code:"https://github.com/RishabJha134/Awwward-Website-Clone"
    },
    
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,title,demo,code }) => (
            
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h1 className="text-xl p-2 text-center">{title}</h1>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank">Demo</a>
                </button>
                <a href={code}  target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
