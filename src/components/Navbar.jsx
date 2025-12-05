import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg border-b border-gray-700/50 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-extrabold tracking-wide text-blue-400 hover:text-blue-300 transition"
          >
            AMIT
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative font-medium transition ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {/* Underline animation */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-400 transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      } origin-left`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Social Icons */}
            <a
              href="https://github.com/amitku26"
              target="_blank"
              className="text-gray-300 hover:text-white hover:scale-110 transition text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-kumar-ab1132290/"
              target="_blank"
              className="text-gray-300 hover:text-blue-400 hover:scale-110 transition text-xl"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="md:hidden bg-gray-800 border-t border-gray-700 
                       animate-slideDown overflow-hidden"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/40 transition"
              >
                {item.label}
              </NavLink>
            ))}

            <div className="flex items-center gap-6 px-4 py-3">
              <a
                href="https://github.com/amitku26"
                target="_blank"
                className="text-gray-300 hover:text-white text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-kumar-ab1132290/"
                target="_blank"
                className="text-gray-300 hover:text-blue-400 text-xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
