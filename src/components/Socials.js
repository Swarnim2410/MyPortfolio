import React, { useContext } from "react";

import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
  ImLinkedin,
} from "react-icons/im";

import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-4">
        <li>
          <a
            href="https://www.linkedin.com/in/swarnim-gupta-848934240/"
            target="_blank"
          >
            <ImLinkedin className="text-2xl"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/Swarnim2410" target="_blank">
            <FaGithub className="text-2xl"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/swarnim_.gupta/" target="_blank">
            <FaInstagram className="text-2xl"/>
          </a>
        </li>
        <li>
          <a href="mailto:swarnimagupta2124@gmail.com" target="_blank">
            <BiLogoGmail className="text-2xl"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
