import React, { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Download,
  User,
  Twitter,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Navigation Links Data
const links = [
  { id: 1, link: "Home" },
  { id: 2, link: "About" },
  { id: 3, link: "Portfolio" },
  { id: 4, link: "Experience" },
  { id: 5, link: "Contact" },
];

// NavLink Component
const NavLink = ({ link }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li>
      <button
        onClick={() => scrollToSection(link.toLowerCase())}
        className="px-4 py-2 text-gray-400 hover:text-white capitalize transition-colors duration-300"
      >
        {link}
      </button>
    </li>
  );
};

// NavMobile Component
const NavMobile = ({ isOpen, setIsOpen, links }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 top-20 bg-black/95 backdrop-blur-sm md:hidden"
        >
          <ul className="px-4 py-6 space-y-4">
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: id * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="w-full px-4 py-3 text-left text-gray-400 hover:text-white capitalize transition-colors duration-300"
                >
                  {link}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// NavBar Component
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Rishab Jha
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ id, link }) => (
              <NavLink key={id} link={link} />
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <NavMobile isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
    </nav>
  );
};

// Main App Component
function App() {
  const heroImage =
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80";

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
