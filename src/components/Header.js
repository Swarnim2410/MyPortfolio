import React, { useContext } from "react";

import Socials from "./Socials";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

import { HiAcademicCap } from "react-icons/hi";

import { transition1 } from "../transitions";

import { Link } from "react-router-dom";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className="overflow-hidden  w-full px-[30px] lg:px-[30px] z-30 h-[60px] lg:h-[100px] flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className="flex flex-col lg:flex-row lg:items-center w-full justify-between"
      >
        {/* Logo */}
        <Link
          to={"/"}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex items-center gap-2"
        >
          <HiAcademicCap size={40} className="text-black" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-black">Swarnim Gupta</span>
            <span className="text-sm text-gray-600">Full Stack Developer</span>
          </div>
        </Link>
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:flex gap-x-12 font-semibold"
        >
          <Link
            to={"/"}
            className="text-black font-extrabold hover:text-blue-600 transition text-xl"
          >
            Home
          </Link>

          <Link
            to={"/about"}
            className="text-black font-extrabold hover:text-blue-600 transition text-xl"
          >
            About
          </Link>

          <Link
            to={"/projects"}
            className="text-black font-extrabold hover:text-blue-600 transition text-xl"
          >
            Projects
          </Link>

          <Link
            to={"/contact"}
            className="text-black font-extrabold hover:text-blue-600 transition text-xl"
          >
            Contact
          </Link>
        </nav>
      </motion.div>

      {/* Social links */}
      <Socials />

      {/* Mobile nav bar */}
      <MobileNav />
    </header>
  );
};

export default Header;
