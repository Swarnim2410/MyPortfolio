import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiVercel } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";

import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const iconMotion = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
    exit: { scale: 0 },
  };

  const hoverEffect = {
    whileHover: { scale: 1.2 },
  };

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row lg:space-x-32">
      <motion.div
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="w-full lg:w-1/2 flex flex-col space-y-4"
      >
        <h1 className="text-3xl font-bold">About Me and My Tech Stacks</h1>
        <p className="text-lg leading-loose">
          Hi Everyone, I am Swarnim Gupta, a student at IIIT Nagpur,
          demonstrating a strong passion for technology and software
          development. As a proficient full-stack developer, I possess extensive
          knowledge of the MERN (MongoDB, Express.js, React, Node.js) stack,
          showcasing the ability to create robust and scalable web applications.
          I stand out with my adept coding skills, particularly excelling in
          Data Structures and Algorithms, which I have learned and practiced
          throughout my academic journey. Eager to apply my skills in a
          professional setting, I am actively seeking job opportunities in the
          technology sector, where my expertise and enthusiasm can contribute to
          innovative projects and solutions.
        </p>
        <Link to="/projects" className="btn btn-primary">
          My Projects
        </Link>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 sm:gap-x-6 lg:gap-x-10 xl:gap-x-20">
        <motion.div
          {...iconMotion}
          {...hoverEffect}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center"
        >
          <FaHtml5 className="rounded-lg text-8xl object-cover" />
          <p className="text-center mt-2">HTML</p>
        </motion.div>
        <motion.div
          {...iconMotion}
          {...hoverEffect}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center"
        >
          <FaCss3Alt className="rounded-lg text-8xl object-cover" />
          <p className="text-center mt-2">CSS</p>
        </motion.div>
        <motion.div
          {...iconMotion}
          {...hoverEffect}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center"
        >
          <IoLogoJavascript className="rounded-lg text-8xl object-cover" />
          <p className="text-center mt-2">JavaScript</p>
        </motion.div>
        <motion.div
          {...iconMotion}
          {...hoverEffect}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center"
        >
          <FaReact className="rounded-lg text-8xl object-cover" />
          <p className="text-center mt-2">React</p>
        </motion.div>
        <motion.div
          {...iconMotion}
          {...hoverEffect}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center"
        >
          <FaNodeJs className="rounded-lg text-8xl object-cover" />
          <p className="text-center mt-2">Node.js</p>
        </motion.div>
        <motion.div
          {...iconMotion}
          {...hoverEffect}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center"
        >
          <DiMongodb className="rounded-lg text-8xl object-cover" />
          <p className="text-center mt-2">MongoDB</p>
        </motion.div>
        <motion.div
          {...iconMotion}
          {...hoverEffect}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center"
        >
          <SiVercel className="rounded-lg text-8xl object-cover" />
          <p className="text-center mt-2">Vercel</p>
        </motion.div>
        <motion.div
          {...iconMotion}
          {...hoverEffect}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center"
        >
          <FaGithub className="rounded-lg text-8xl object-cover" />
          <p className="text-center mt-2">GitHub</p>
        </motion.div>
        <motion.div
          {...iconMotion}
          {...hoverEffect}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center"
        >
          <AiOutlineConsoleSql className="rounded-lg text-8xl object-cover" />
          <p className="text-center mt-2">SQL</p>
        </motion.div>
        <motion.div
          {...iconMotion}
          {...hoverEffect}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-center"
        >
          <SiTailwindcss className="rounded-lg text-8xl object-cover" />
          <p className="text-center mt-2">Tailwind CSS</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
