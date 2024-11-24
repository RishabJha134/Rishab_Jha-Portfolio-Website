import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        {/* Title */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        {/* Form */}
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/qbloljxa"
            method="POST"
            className="flex flex-col w-full max-w-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="https://github.com/RishabJha134"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 p-4 rounded-md hover:scale-110 duration-300"
          >
            <FaGithub className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/Rishab-Jha"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 p-4 rounded-md hover:scale-110 duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jharishu2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 p-4 rounded-md hover:scale-110 duration-300"
          >
            <HiOutlineMail className="w-6 h-6" />
            <span>Email</span>
          </a>
          <a
            href="https://twitter.com/Rishabjha134"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 p-4 rounded-md hover:scale-110 duration-300"
          >
            <FaTwitter className="w-6 h-6" />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
