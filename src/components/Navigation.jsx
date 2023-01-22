import React from "react";
import { navItems } from "../data/data";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const navigationItems = () => {
    return navItems.map((item, index) => {
      return (
        <NavLink key={index} className="py-1 ">
          <span className="text-xl transition-all hover:opacity-60">
            {item.title}
          </span>
        </NavLink>
      );
    });
  };
  return <nav className="flex flex-col my-10">{navigationItems()}</nav>;
};

export default Navigation;
