import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="nav-main hidden h-[65px] w-[100vw] bg-[#EFEAE3] lg:flex justify-between items-center px-36 overflow-hidden fixed inset-0 z-[999] ">
        <div className="left medium select-none">
          <a href="/">
            <h1 className="text-4xl medium font-bold text-[#FE330A]">
              Portfolio
            </h1>
          </a>
        </div>

        <div className="right roman list-none flex justify-center items-center gap-6 text-[17px] select-none">
          <Link to="/">
            {" "}
            <li className="relative after:content-[''] after:absolute after:h-[1px] after:w-[0%] after:bg-black after:left-0 after:bottom-0 hover:after:w-[100%] after:transition-all after:ease-out after:duration-[0.3s] cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="/about">
            {" "}
            <li className="relative after:content-[''] after:absolute after:h-[1px] after:w-[0%] after:bg-black after:left-0 after:bottom-0 hover:after:w-[100%] after:transition-all after:ease-out after:duration-[0.3s] cursor-pointer">
              About
            </li>
          </Link>

          <Link to="/services">
            <li className="relative after:content-[''] after:absolute after:h-[1px] after:w-[0%] after:bg-black after:left-0 after:bottom-0 hover:after:w-[100%] after:transition-all after:ease-out after:duration-[0.3s] cursor-pointer">
              Services
            </li>
          </Link>

          <Link to="/projects">
            <li className="relative after:content-[''] after:absolute after:h-[1px] after:w-[0%] after:bg-black after:left-0 after:bottom-0 hover:after:w-[100%] after:transition-all after:ease-out after:duration-[0.3s] cursor-pointer">
              Projects
            </li>
          </Link>

          <Link to="/contact">
            <li className="relative after:content-[''] after:absolute after:h-[1px] after:w-[0%] after:bg-black after:left-0 after:bottom-0 hover:after:w-[100%]  after:transition-all after:ease-out after:duration-[0.3s] cursor-pointer ">
              Contact
            </li>
          </Link>
        </div>
      </div>

      <div className="nav-sm h-[90px] w-[100vw] bg-[#EFEAE3] flex justify-between items-center overflow-hidden px-5 lg:hidden fixed inset-0 z-[999] ">
        <div className="left medium select-none">
          <a href="/">
            <h1 className="text-4xl medium font-bold">Portfolio</h1>
          </a>
        </div>

        <div className="right select-none">
          <span
            onClick={openMenu}
            className={`text-3xl   ${isOpen ? "hidden" : "block"}`}
          >
            <RiMenu3Fill />
          </span>
          <span
            onClick={openMenu}
            className={`text-3xl   ${isOpen ? "block" : "hidden"}`}
          >
            <IoClose />
          </span>
        </div>
      </div>

      {isOpen && (
        <div className="right h-[calc(100vh-90px)] px-5 select-none w-[100vw] bg-[#EFEAE3] roman list-none flex flex-col gap-1 pt-14 text-[17px] overflow-hidden fixed top-[90px] left-0 right-0 z-[999] lg:hidden ">
          <Link to="/">
            <li
              onClick={closeMenu}
              className="relative w-fit after:content-[''] after:absolute after:h-[1px] after:w-[0%] after:bg-black after:left-0 after:bottom-0 hover:after:w-[100%] after:transition-all after:ease-out after:duration-[0.3s] cursor-pointer select-none"
            >
              Home
            </li>
          </Link>

          <Link to="/about">
            <li
              onClick={closeMenu}
              className="relative w-fit after:content-[''] after:absolute after:h-[1px] after:w-[0%] after:bg-black after:left-0 after:bottom-0 hover:after:w-[100%] after:transition-all after:ease-out after:duration-[0.3s] cursor-pointer"
            >
              About
            </li>
          </Link>

          <Link to="/services">
            <li
              onClick={closeMenu}
              className="relative w-fit after:content-[''] after:absolute after:h-[1px] after:w-[0%] after:bg-black after:left-0 after:bottom-0 hover:after:w-[100%] after:transition-all after:ease-out after:duration-[0.3s] cursor-pointer"
            >
              Services
            </li>
          </Link>

          <Link to="/projects">
            <li
              onClick={closeMenu}
              className="relative w-fit after:content-[''] after:absolute after:h-[1px] after:w-[0%] after:bg-black after:left-0 after:bottom-0 hover:after:w-[100%] after:transition-all after:ease-out after:duration-[0.3s] cursor-pointer"
            >
              Projects
            </li>
          </Link>

          <Link to="/contact">
            <li
              onClick={closeMenu}
              className="relative w-fit after:content-[''] after:absolute after:h-[1px] after:w-[0%] after:bg-black after:left-0 after:bottom-0 hover:after:w-[100%]  after:transition-all after:ease-out after:duration-[0.3s] cursor-pointer "
            >
              Contact
            </li>
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
