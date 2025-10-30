import React from "react";
import { Link } from "react-scroll";
import { NAV_LINKS, NAV_BUTTON_TEXT, NAV_THEME } from "../Constants";
import { FaDownload } from "react-icons/fa"; // download icon import

const Navbar = () => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 lg:px-20 py-4 bg-gradient-to-r ${NAV_THEME.bgGradient} ${NAV_THEME.textColor} shadow-lg`}
    >
      {/* Left Logo Section */}
      <div className="flex items-center space-x-3">
        <div className="bg-blue-500 p-2 rounded-md">
          <span className="text-white font-bold text-xl">L</span>
        </div>
        <h1 className="text-2xl font-extrabold tracking-wide">LAIBA</h1>
      </div>

      {/* Center Menu */}
      <ul className="hidden md:flex space-x-10 font-semibold text-sm">
        {NAV_LINKS.map((item) => (
          <li key={item.to} className="relative cursor-pointer">
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
              className={`transition-colors ${NAV_THEME.hoverTextColor}`}
            >
              {item.name}
            </Link>
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white opacity-0 transition-opacity duration-300"></span>
          </li>
        ))}
      </ul>

      {/* Right Button */}
      <a
  href="public/CV.pdf"   // CV ka path
  download        // ye attribute browser ko file download karne ke liye batata hai
  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-full transition-all duration-300"
>
  <FaDownload /> Download CV
</a>


      {/* Active underline style */}
      <style>
        {`
          .active {
            font-weight: bold;
          }
          .active + span {
            opacity: 1;
            background-color: ${NAV_THEME.underlineColor};
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
