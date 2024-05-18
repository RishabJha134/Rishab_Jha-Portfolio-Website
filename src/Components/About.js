import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Welcome to my portfolio! I'm Rishab Jha, currently pursuing my B. Tech
          degree in Computer Science with a specialization in Artificial
          Intelligence and Data Science.
        </p>

        <br />

        <p className="text-xl">
          I have extensive experience in front-end development, particularly
          with React.js and state management using Redux Toolkit. My work
          involves integrating APIs seamlessly into the frontend, optimizing
          applications for performance, and adhering to best practices. I
          efficiently manage state and write modular code with a strong focus on
          component reusability. I excel at creating visually appealing and
          highly functional UIs using Tailwind CSS, and have hands-on experience
          with Material UI, shadcn, and various other libraries. My approach
          ensures robust, maintainable, and scalable applications.
        </p>

        <br />

       
      </div>
    </div>
  );
};

export default About;
