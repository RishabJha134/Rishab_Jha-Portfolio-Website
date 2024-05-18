import React from "react";
import HeroImage from "../assets/Absolute_Reality_v16_a_software_engineer_using_laptop_and_loo_3.jpg";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquareXTwitter } from "react-icons/fa6";
// import Contact from "../Components/Contact"

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
          I'm a Front-End Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            As a dedicated Frontend Developer specializing in React.js and Redux
            Toolkit, I love to work with these technologies to transform
            innovative ideas into responsive, high-performance web applications.
            Ready to elevate your project with cutting-edge solutions.
          </p>

          <div className="flex items-center gap-7">
            <Link to="Contact" smooth duration={500}>
              <button className="group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  hover:scale-110 duration-300">
                Hire Me
              </button>
            </Link>

            <a
              className="group text-white w-fit px-5 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300"
              href="./Fake resume.pdf"
              download={true}
              target="_blank"
              rel="noreferrer"
            >
              <>
                Resume <BsFillPersonLinesFill className="ml-2" size={25} />
              </>
            </a>
          </div>

          <div className="group w-[15vw] ml-2  text-white  px-6 py-3 mt-6 flex gap-5 items-center justify-between rounded-md  cursor-pointer">
            <a href="https://github.com/RishabJha134" target="_blank">
              <FaGithub className="w-8 h-7 cursor-pointer hover:scale-110 duration-300"></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/Rishab-Jha
              "
              target="_blank"
            >
              <FaLinkedin className="w-8 h-7 cursor-pointer hover:scale-110 duration-300"></FaLinkedin>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jharishu2003@gmail.com"
              target="_blank"
            >
              <HiOutlineMail className="w-8 h-9 cursor-pointer hover:scale-110 duration-300"></HiOutlineMail>
            </a>
            <a href="https://twitter.com/Rishabjha134" target="_blank">
              <FaSquareXTwitter className="w-8 h-8 cursor-pointer hover:scale-110 duration-300" />
            </a>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

<a
  className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
  href="/resume.pdf"
  download={true}
  target="_blank"
  rel="noreferrer"
>
  <>
    Resume <BsFillPersonLinesFill size={25} />
  </>
</a>;
