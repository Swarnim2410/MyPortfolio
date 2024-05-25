import React, { useContext } from "react";

import profile_image from "../img/home/profile_image.jpg";
import "../css/home.css";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          {/*text*/}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start "
          >
            <div className="wrapper lg:-mt-60">
              <div className="static-txt">I'm a </div>
              <ul className="dynamic-txt">
                <li>
                  <span className="">Software DeveloPer</span>
                </li>
                <li>
                  <span className="">MERN DeveloPer </span>
                </li>
                <li>
                  <span className="">CP enthusiast </span>
                </li>
                <li>
                  <span className="">Full Stack DeveloPer </span>
                </li>
              </ul>
            </div>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              IIIT Nagpur
            </p>
            <Link to="/about" className="btn mb-[30px] rounded-lg">
              About my work
            </Link>
            <div className="block mt-8 lg:text-left">
              <p className="text-xl mb-4">
                Hi, I'm Swarnim Gupta, a software developer!
              </p>
              <p className="text-base">
                This website serves as your one-stop shop to learn more about
                me,
                <br /> my skills, and the projects I've built. <br />
                Dive into my work, explore my capabilities, and get in touch
                with me.
              </p>
            </div>
          </motion.div>

          {/* image*/}
          <div className="flex justify-end lg:max-h-max lg:max-w-[px]">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className="relative lg:-right-80 overflow-hidden hidden lg:block" // Add hidden on small devices, block on large
            >
              <motion.img
                src={profile_image}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                transition={transition1}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
