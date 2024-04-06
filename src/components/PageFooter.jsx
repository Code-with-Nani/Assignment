import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { motion } from "framer-motion";

const PageFooter = () => {
  const arr = [
    { icon: <FaFacebookSquare />, link: "https://github.com/Code-with-Nani" },
    { icon: <FaTwitterSquare />, link: "https://github.com/Code-with-Nani" },
    { icon: <FaInstagramSquare />, link: "https://github.com/Code-with-Nani" },
    { icon: <FaGithubSquare />, link: "https://github.com/Code-with-Nani" },
    { icon: <FaLinkedin />, link: "https://github.com/Code-with-Nani" },
  ];

  return (
    <div className="footer min-h-[20vh] w-[98.9vw] overflow-hidden ">
      <div className="flex justify-center items-center text-4xl pt-10  w-fit mx-auto ">
        {arr.map((val) => (
          <a href={val.link}>
            <span className="cursor-pointer">{val.icon}</span>
          </a>
        ))}
      </div>

      <div className="text-center medium pt-3 pb-5 text-[17px]">
        © Copyright {new Date().getFullYear()} - <a href="/">Muhammad Hanan</a>
      </div>

      <motion.span
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5.2,
          repeatDelay: 2,
        }}
        className=" flex justify-center items-center   pb-2 "
      >
        <a href="#">
          <span className="border-2 rotate-[-90deg] border-black hover:border-[#FE330A] delay-100 duration-300 h-8 w-8 rounded-full flex justify-center items-center">
            {" "}
            <svg
              viewBox="0 0 8 16"
              className="icon fill-black hover:fill-[#FE330A]"
              width="6"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.268 9.547L0 16l4-8-4-8 7.268 6.453C7.715 6.82 8 7.377 8 8c0 .623-.285 1.18-.732 1.547z"></path>
            </svg>
          </span>
        </a>
      </motion.span>
    </div>
  );
};

export default PageFooter;
