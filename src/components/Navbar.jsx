import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonalLinesFill } from "react-icons/bs";
import Logo from "../assets/Logo.svg";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Iamstanman Logo" style={{ width: "50px" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex text-white ">
        <li>About</li>
        <li>Projects</li>
        <li>Uses</li>
        <li>Store</li>
        <li>Contact</li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Uses</li>
        <li className="py-6 text-4xl">Store</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedinIn size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500">
            <a
              href="#"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={20} />
            </a>
          </li>
          {/* I could add my resume button as well */}
        </ul>
      </div>
    </div> //end of header
  );
};
