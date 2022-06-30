import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeMenuItem" : "")}
          to={"/todo"}
        >
          Todo
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeMenuItem" : "")}
          to={"/completed"}
        >
          Completed
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeMenuItem" : "")}
          to={"/calendar"}
        >
          Calendar
        </NavLink>
      </li>
      <li className="loginButton">Login</li>
      {/* <li className="flex items-center">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </li> */}
    </>
  );

  return (
    <div className="navbarContainer fixed top-0">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menuItems menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a href="/" className="normal-case navHeader text-2xl">
            <span className="text-[blueviolet]">Task</span>Manager
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menuItems menu-horizontal items-center p-0">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
