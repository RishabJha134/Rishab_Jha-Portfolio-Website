import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/qbloljxa"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
<div className="flex justify-center items-center w-[20vw]   relative md:-top-20 md:left-[658px]  -top-24 left-36 ">
<div className="group w-[15vw]  mr-36  text-white  px-6 py-3 my-2 flex gap-5 items-center justify-between rounded-md  cursor-pointer   ">
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
     


    </div>
  );
};

export default Contact;
