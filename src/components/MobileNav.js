import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// menu variants -->
const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-3xl xl:hidden">
      {/*nav open button*/}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>

      {/*menu*/}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : "hidden"}
        className={`bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 ${
          openMenu ? "block" : "hidden"
        }`}
      >
        {/*icon*/}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary"
        >
          <IoMdClose className="cursor-pointer" />
        </div>

        {/*menu list*/}
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl">
          <li>
            <Link to="/" onClick={() => setOpenMenu(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpenMenu(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpenMenu(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpenMenu(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
