import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getActiveClass = ({ isActive }) => (isActive ? "text-[tomato]" : "");
  return (
    <div className="bg-[lightseagreen] py-1 items-center flex gap-16 text-xl">
      <img
        src="https://png.pngtree.com/png-clipart/20221001/original/pngtree-shopping-logo-design-for-online-store-website-png-image_8647300.png"
        alt=""
        className="w-25 h-12"
      />
      <Menu to={"/"} title={"Home"} getActiveClass={getActiveClass} />
      <Menu
        to={"/products"}
        title={"Products"}
        getActiveClass={getActiveClass}
      />
    </div>
  );
  s;
};

const Menu = ({ to, title, getActiveClass }) => {
  return (
    <NavLink to={to} className={getActiveClass}>
      {title}
    </NavLink>
  );
};
export default Navbar;
