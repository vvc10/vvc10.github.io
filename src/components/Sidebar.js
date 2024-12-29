import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './css/styles.css';
// Importing required icons from react-icons library
import { FaHome, FaPaintBrush, FaCloud } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaBehance } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { MdOutgoingMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation(); // Hook to get the current location
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-white' : 'text-gray-500';
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block bg-black-900 h-full z-[5000]">
        <nav
          className="w-fit fixed left-[20px] top-[30px] rounded-full p-3 border-[1px] border-[rgb(255,255,255,10%)]"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
        >
          <div id="nav-menu">
            <ul className="flex flex-col gap-[25px] mx-auto">
              <li className="nav__item">
                <Link to="/home" className={` ${isActive('/home')}`}>
                  <FaHome />
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/projects" className={` ${isActive('/projects')}`}>
                  <FaCode />
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/designprojects" className={` ${isActive('/designprojects')}`}>
                  <MdDesignServices />
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/contact" className={` ${isActive('/contact')}`}>
                  <MdOutgoingMail />
                </Link>
              </li>
              <li
                className="nav__item_hr"
                style={{ backgroundColor: 'gray', height: '0.5px', width: '100%', color: 'white', fontSize: '20px' }}
              ></li>
              <li className="nav__item">
                <a href="https://github.com/vvc10" className=" text-gray-500">
                  <FaGithub />
                </a>
              </li>
              <li className="">
                <a href="https://www.linkedin.com/in/pankaj-yadav-23b688250/" className="text-gray-500">
                  <FaLinkedin />
                </a>
              </li>
              <li className="nav__item">
                <a href="https://www.behance.net/pankajy" className=" text-gray-500">
                  <FaBehance />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className="block absolute md:hidden w-100% h-full z-50">
        <nav
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 rounded-full bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-lg shadow-lg border border-[#e5e7eb17] p-[20px]"
        >

          <div id="nav-menu">
            <ul className="flex flex-row items-center gap-4 justify-center" style={{paddingLeft: '0'}}>
              <li className="">
                <Link to="/home" className={` ${isActive('/home')} text-white text-[17px] transition-all hover:text-blue-500`}>
                  <FaHome />
                </Link>
              </li>
              <li className="">
                <Link to="/projects" className={` ${isActive('/projects')} text-white text-[17px] transition-all hover:text-blue-500`}>
                  <FaCode />
                </Link>
              </li>
              <li className="">
                <Link to="/designprojects" className={` ${isActive('/designprojects')} text-white text-[17px] transition-all hover:text-blue-500`}>
                  <MdDesignServices />
                </Link>
              </li>
              <li className="">
                <Link to="/contact" className={` ${isActive('/contact')} text-white text-[17px] transition-all hover:text-blue-500`}>
                  <MdOutgoingMail />
                </Link>
              </li>
              <li className="">
                <a href="https://github.com/vvc10" className="text-gray-300 text-[17px] transition-all hover:text-white">
                  <FaGithub />
                </a>
              </li>
              <li className="">
                <a href="https://github.com/vvc10" className="text-gray-300 text-[17px] transition-all hover:text-white">
                  <FaLinkedin />
                </a>
              </li>
              <li className="">
                <a href="https://www.behance.net/pankajy" className="text-gray-300 text-[17px] transition-all hover:text-white">
                  <FaBehance />
                </a>
              </li>


            </ul>
          </div>
        </nav>
      </div>

    </>
  );
};

export default Sidebar;
