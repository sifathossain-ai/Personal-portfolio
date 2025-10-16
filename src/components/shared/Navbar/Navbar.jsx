import React from "react";
import { HashLink } from "react-router-hash-link";
import { TbMenu } from "react-icons/tb";
import {
  HiOutlineBriefcase,
  HiOutlineBadgeCheck,
  HiOutlineCode,
  HiOutlinePuzzle,
} from "react-icons/hi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { PiGraduationCap } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import nameImg1 from "../../../assets/11rbg.png";

const Navbar = () => {
  const navLinks = [
    { name: "Experience", link: "/#experience", icon: <HiOutlineBriefcase /> },
    {
      name: "Achievements",
      link: "/#achievements",
      icon: <HiOutlineBadgeCheck />,
    },
    { name: "Skills", link: "/#skills", icon: <HiOutlineCode /> },
    {
      name: "Problem Solving",
      link: "/#problem-solving",
      icon: <HiOutlinePuzzle />,
    },
    {
      name: "Projects",
      link: "/#projects",
      icon: <LiaLaptopCodeSolid />,
    },
    {
      name: "Educations",
      link: "/#education",
      icon: <PiGraduationCap />,
    },
    {
      name: "Contact Me",
      link: "/#contact",
      icon: <MdOutlineMail />,
    },
  ];

  return (
    <div className="navbar fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/70 transition-all duration-300">
      <div className="container mx-auto lg:px-24 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <HashLink
            smooth
            to="/#hero"
            className="text-xl font-signature font-semibold tracking-wide"
          >
            <img src={nameImg1} className="h-10 w-23 md:w-28 object-cover" />
          </HashLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          {navLinks.map((item) => (
            <HashLink
              smooth
              key={item.name}
              to={item.link}
              className="text-[14px] hover:bg-gray-100 px-2 py-1"
            >
              <span className="flex items-center gap-2">
                {item.icon} {item.name}
              </span>
            </HashLink>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <TbMenu className="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm rounded-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52 right-0"
          >
            {navLinks.map((item) => (
              <li key={item.name}>
                <HashLink
                  smooth
                  to={item.link}
                  className="text-[14px] hover:bg-gray-100 rounded-sm py-1"
                >
                  <span className="flex items-center gap-2">
                    {item.icon} {item.name}
                  </span>
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
