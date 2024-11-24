import React from "react";
import { Github, Linkedin, Mail, Download, User, Twitter } from "lucide-react";

function Home() {
  const heroImage = "https://cdn-icons-png.flaticon.com/512/219/219970.png";

  return (
    <div
      id="home"
      className="min-h-screen border-none w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-full gap-8 lg:gap-16">
          {/* Content Section */}
          <div className="flex flex-col justify-center flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              I'm a Full Stack Developer
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8">
              Transforming innovative ideas into high-performance applications.
              Experienced in Full Stack Technologies, and scalable web
              solutions, delivering cutting-edge functionality and seamless user
              experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <button
                className="w-full sm:w-auto px-8 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <User className="w-5 h-5" />
                Hire Me
              </button>

              <a
                href="/Rishab_Jha_Resume.pdf"
                download
                className="w-full sm:w-auto px-8 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/RishabJha134"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/Rishab-Jha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="mailto:rishabjha134@gmail.com"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://twitter.com/Rishabjha134"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <Twitter className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full  flex justify-center items-center mt-[320px] sm:mt-20 md:mt-10 lg:mt-0 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto px-4 lg:px-0">
            <div className="relative">
              {/* Background Gradient Blur */}
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30"></div> */}
              {/* Image */}
              <img
                src={heroImage}
                alt="Developer Profile"
                className="relative w-[100%] h-[50%] rounded-2xl  transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
