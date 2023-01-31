import React from "react";
import { navItems } from "../data/data";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const activeLink =
    "text-3xl text-secondary transition-all hover:opacity-60 w-fit py-4";
  const normalLink =
    "text-3xl text-head transition-all hover:opacity-60 w-fit py-4 font-thin";

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
