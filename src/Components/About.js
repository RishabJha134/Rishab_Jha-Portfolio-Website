import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16 sm:py-20"
    >
      <div className="max-w-screen-lg mt-[220px] md:mt-0 p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-300">
          <p className="text-lg sm:text-xl leading-relaxed">
            Hi, I’m <strong>Rishab Jha</strong>, a full-stack developer currently pursuing a B.Tech in Computer Science
            with a focus on AI and Data Science at the University School of Automation and Robotics, Delhi. I specialize in
            building dynamic, scalable web applications using technologies like <strong>React.js</strong>, <strong>Node.js</strong>,
            <strong> Express.js</strong>, <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed">
            I have experience in front-end development, working with <strong>Redux Toolkit</strong> for state management and
            integrating APIs seamlessly. I create responsive and visually appealing UIs and have hands-on experience with
            UI libraries like <strong>Material UI</strong> and <strong>ShadCN</strong>. On the back-end, I’m proficient in
            building RESTful APIs, handling databases like <strong>MongoDB</strong> and <strong>MySQL</strong>, and ensuring
            secure authentication with <strong>JWT</strong> and <strong>bcrypt.js</strong>.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed">
          I’m continually learning and exploring new technologies, especially in the areas of <strong>AI</strong> and{" "}
            <strong>Machine Learning</strong>. My goal is to leverage my skills in both software development and AI to build
            applications that not only solve real-world problems but also enhance user experiences through intelligent systems.
            I’m eager to contribute to impactful projects and collaborate with like-minded professionals to drive innovation
            in the tech industry.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed">
            I'm always learning and excited to work on innovative projects that leverage AI and web technologies. I believe in
            continuous growth, and I'm looking forward to contributing to impactful solutions while collaborating with
            talented teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
