import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="m-auto w-screen justify-center items-center mt-8">
      <div className="bg-[lightseagreen] flex gap-5 text-2xl p-2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Help
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
