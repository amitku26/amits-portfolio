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
    <nav className="sticky top-0 bg-gray z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-2xl font-bold">
            AMIT
          </NavLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                className={({ isActive }) =>
                  isActive ? "text-white font-semibold" : "link"
                }
              >
                {i.label}
              </NavLink>
            ))}
            <a
              href="https://github.com/amitku26"
              target="_blank"
              className="link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-kumar-ab1132290/"
              target="_blank"
              className="link"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-gray pb-4">
            {navItems.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 ${
                    isActive ? "text-white font-semibold" : "link"
                  }`
                }
              >
                {i.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
