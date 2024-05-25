import React, { useState, useContext } from "react";
import cricket_comet from "../img/portfolio/cricket_comet.png";
import chatify from "../img/portfolio/chatify.png";
import ytclone from "../img/portfolio/yt_clone.png";
import college_system from "../img/portfolio/college_system.jpeg";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiVercel } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaPhp } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";
import { FaGithub, FaLink } from "react-icons/fa";

import login from "../img/portfolio/login.png";
import add_product from "../img/portfolio/add_product.png";
import contact from "../img/portfolio/contact.png";
import cart from "../img/portfolio/cart.png";
import signup from "../img/portfolio/signup.png";
import signin from "../img/portfolio/signin.png";
import main_video from "../img/portfolio/main_video.png";
import search_video from "../img/portfolio/search_video.png";

const Portfolio = () => {
  const [expanded, setExpanded] = useState([false, false, false, false]);
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const toggleExpand = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = prevExpanded.map((item, i) =>
        i === index ? !item : false
      );
      return newExpanded;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <motion.main
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-50%" }}
        transition={transition1}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto p-6"
      >
        <section id="projects" className="my-12">
          <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div
              className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${
                expanded[0] ? "max-h-full" : "max-h-100"
              } overflow-hidden`}
            >
              <img
                className="w-full object-cover rounded-lg"
                src={cricket_comet}
                alt="Project 1"
              />
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mt-4">Cricket Comet</h2>
                <div className="flex gap-2">
                  <a href="https://github.com/Swarnim2410/Cricket-Comet">
                    <FaGithub />
                  </a>
                  <a href="https://cricket-comet.vercel.app/">
                    <FaLink />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mt-2">
                An online cricket store with Google Auth, product filters,
                Stripe payments, and an admin panel for product management.
              </p>
              {expanded[0] && (
                <div>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <FaHtml5 className="w-12 h-12" />
                    <FaCss3Alt className="w-12 h-12" />
                    <IoLogoJavascript className="w-12 h-12" />
                    <FaReact className="w-12 h-12" />
                    <FaNodeJs className="w-12 h-12" />
                    <DiMongodb className="w-12 h-12" />
                    <SiTailwindcss className="w-12 h-12" />
                    <SiVercel className="w-12 h-12" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-3">
                    <img
                      src={login}
                      alt="Detail 1"
                      className="w-full h-[360px] rounded-lg"
                    />
                    <img
                      src={add_product}
                      alt="Detail 2"
                      className="w-[] h-[360px] rounded-lg"
                    />
                    <img
                      src={contact}
                      alt="Detail 3"
                      className="w-[276px] h-[360px] rounded-lg"
                    />
                    <img
                      src={cart}
                      alt="Detail 4"
                      className="w-full h-[360px] rounded-lg"
                    />
                  </div>
                  <div className="pt-2">
                    <ul>
                      <li>
                        • Utilizes HTML, Tailwind CSS (30% faster development),
                        React, JavaScript, NodeJS, Express, and MongoDB.
                      </li>
                      <li>
                        • Integrates Google Auth, reducing login/signup time by
                        40%.
                      </li>
                      <li>
                        • Features product filtering, shopping cart, and secure
                        purchases via Stripe.
                      </li>
                      <li>
                        • Includes an admin panel for adding and editing
                        products.
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 mt-2 flex items-center justify-center">
                    <a
                      href="https://cricket-comet.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              )}
              <button
                onClick={() => toggleExpand(0)}
                className="text-indigo-500 hover:text-indigo-600 mt-4 inline-block"
              >
                {expanded[0] ? "Show Less" : "Show More"}
              </button>
            </div>

            {/* Project 2 */}
            <div
              className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${
                expanded[1] ? "max-h-full" : "max-h-100"
              } overflow-hidden`}
            >
              <img
                className="w-full object-cover rounded-lg"
                src={chatify}
                alt="Project 2"
              />
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mt-4">Chatify</h2>
                <div className="flex gap-2">
                  <a href="https://github.com/Swarnim2410/Chatify">
                    <FaGithub />
                  </a>
                  <a href="https://chatify-x1xy.onrender.com/">
                    <FaLink />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mt-2">
                A real-time chat app using the MERN stack and Socket.io,
                featuring intuitive search for contacts and instant
                conversations.
              </p>
              {expanded[1] && (
                <div>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <FaHtml5 className="w-12 h-12" />
                    <FaCss3Alt className="w-12 h-12" />
                    <IoLogoJavascript className="w-12 h-12" />
                    <FaReact className="w-12 h-12" />
                    <FaNodeJs className="w-12 h-12" />
                    <DiMongodb className="w-12 h-12" />
                    <SiTailwindcss className="w-12 h-12" />
                    <SiVercel className="w-12 h-12" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-3">
                    <img
                      src={signin}
                      alt="Detail 1"
                      className="w-full h-[360px] rounded-lg"
                    />
                    <img
                      src={signup}
                      alt="Detail 2"
                      className="w-[] h-[360px] rounded-lg"
                    />
                  </div>
                  <div className="pt-2">
                    <ul>
                      <li>
                        • Built with the MERN stack (MongoDB, Express, React,
                        Node.js).
                      </li>
                      <li>
                        • Utilizes Socket.io for real-time and instant
                        conversations.
                      </li>
                      <li>
                        • Includes intuitive search functionality for searching
                        contacts, along with features for login, signup, fully
                        responsive design, real-time chatting, and sending
                        messages.
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 mt-2 flex items-center justify-center">
                    <a
                      href="https://chatify-x1xy.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Live Link
                    </a>
                  </div>
                </div>
              )}
              <button
                onClick={() => toggleExpand(1)}
                className="text-indigo-500 hover:text-indigo-600 mt-4 inline-block"
              >
                {expanded[1] ? "Show Less" : "Show More"}
              </button>
            </div>

            {/* Project 3 */}
            <div
              className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${
                expanded[2] ? "max-h-full" : "max-h-100"
              } overflow-hidden`}
            >
              <img
                className="w-full object-cover rounded-lg"
                src={ytclone}
                alt="Project 3"
              />
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mt-4">Streamify</h2>
                <div className="flex gap-2">
                  <a href="https://github.com/Swarnim2410/Streamify">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mt-2">
                Developed a responsive YouTube clone with React, integrating
                YouTube Data API to display video titles, thumbnails, views, and
                upload dates.
              </p>
              {expanded[2] && (
                <div className="flex flex-wrap gap-4 mt-4">
                  <FaHtml5 className="w-12 h-12" />
                  <FaCss3Alt className="w-12 h-12" />
                  <IoLogoJavascript className="w-12 h-12" />
                  <FaReact className="w-12 h-12" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-3">
                    <img
                      src={main_video}
                      alt="Detail 1"
                      className="w-full h-[360px] rounded-lg"
                    />
                    <img
                      src={search_video}
                      alt="Detail 2"
                      className="w-[] h-[360px] rounded-lg"
                    />
                  </div>
                  <div className="pt-2">
                    <ul>
                      <li>
                        <strong>YouTube Clone:</strong> Developed using React,
                        fully responsive.
                      </li>
                      <li>
                        <strong>YouTube Data API Integration:</strong> Retrieves
                        video data like titles, thumbnails, view counts, and
                        upload dates..
                      </li>
                      <li>
                        <strong>Search Functionality:</strong> Allows users to
                        search videos, view view counts, and subscribe.
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 mt-2 flex items-center justify-center">
                    <a
                      href="https://github.com/Swarnim2410/Streamify"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
              )}
              <button
                onClick={() => toggleExpand(2)}
                className="text-indigo-500 hover:text-indigo-600 mt-4 inline-block"
              >
                {expanded[2] ? "Show Less" : "Show More"}
              </button>
            </div>

            {/* Project 4 */}
            <div
              className={`bg-white p-6 rounded-lg shadow-lg transition-all duration-300 ${
                expanded[3] ? "max-h-full" : "max-h-100"
              } overflow-hidden`}
            >
              <img
                className="w-full object-cover rounded-lg"
                src={college_system}
                alt="Project 4"
              />
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mt-4">EduSphere</h2>
                <div className="flex gap-2">
                  <a href="https://github.com/Swarnim2410/College-Administration-system">
                    <FaGithub />
                  </a>
                </div>
              </div>
              <p className="text-gray-600 mt-2">
                Developed a college admin system using CSS, PHP, JS, and SQL for
                efficient management of admin, faculty, and student functions.
              </p>
              {expanded[3] && (
                <div className="flex flex-wrap gap-4 mt-4">
                  <FaHtml5 className="w-12 h-12" />
                  <FaCss3Alt className="w-12 h-12" />
                  <IoLogoJavascript className="w-12 h-12" />
                  <AiOutlineConsoleSql className="w-12 h-12" />
                  <FaPhp className="w-12 h-12" />
                  <FaGithub className="w-12 h-12" />
                  <div className="pt-2">
                    <ul>
                      <li>
                        <strong>Admin:</strong> Add/edit students, faculties,
                        courses, issue notices.
                      </li>
                      <li>
                        <strong>Faculty:</strong> Manage courses, student
                        records, marks, attendance.
                      </li>
                      <li>
                        <strong>Student:</strong> Access courses, view marks,
                        attendance.
                      </li>
                      <li>
                        <strong>Relational DB:</strong> Organized schema for
                        efficient data management.
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 mt-2 flex items-center justify-center">
                    <a
                      href="https://github.com/Swarnim2410/College-Administration-system"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      Github Link
                    </a>
                  </div>
                </div>
              )}
              <button
                onClick={() => toggleExpand(3)}
                className="text-indigo-500 hover:text-indigo-600 mt-4 inline-block"
              >
                {expanded[3] ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </section>
      </motion.main>
    </div>
  );
};

export default Portfolio;
