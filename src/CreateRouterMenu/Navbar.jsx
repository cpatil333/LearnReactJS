import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getActiveClass = ({ isActive }) => (isActive ? "text-red-500" : "");
  return (
    <div className="m-auto w-screen justify-center items-center mt-8">
      <div className="bg-[lightseagreen] flex gap-5 text-2xl p-2">
        <NavLink to="/" end className={getActiveClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getActiveClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={getActiveClass}>
          Contact
        </NavLink>
        <NavLink to="/help" className={getActiveClass}>
          Help
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
