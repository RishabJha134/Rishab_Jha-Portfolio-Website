import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full  min-h-screen  bg-gradient-to-b from-gray-800 to-black text-white py-16 sm:py-20"
    >
      <div className="max-w-screen-lg mt-[220px] md:mt-0 p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg sm:text-xl">
            Welcome to my portfolio! I'm Rishab Jha, currently pursuing my B. Tech
            degree in Computer Science with a specialization in Artificial
            Intelligence and Data Science.
          </p>

          <p className="text-lg sm:text-xl">
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

          <p className="text-lg sm:text-xl">
            With expertise in Front-End Web Development, I excel at building
            robust, dynamic web applications. I am proficient in Python, C, C++,
            Java, and JavaScript. In web development, I create impressive UIs
            using HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, and React.js.
            My curiosity also extends to Artificial Intelligence and Machine
            Learning, where I see great potential for transforming the digital
            landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;