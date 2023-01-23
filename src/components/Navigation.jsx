import React from "react";
import { navItems } from "../data/data";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const activeLink =
    "text-2xl font-bold text-secondary transition-all hover:opacity-60 w-fit";
  const normalLink =
    "text-2xl font-bold text-white transition-all hover:opacity-60 w-fit";

  const navigationItems = () => {
    return navItems.map((item, index) => {
      return (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <span>{item.title}</span>
        </NavLink>
      );
    });
  };

  return <nav className="flex flex-col my-10 w-fit">{navigationItems()}</nav>;
};

export default Navigation;
