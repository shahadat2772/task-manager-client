import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init";
import { signOut } from "firebase/auth";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const menuItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeMenuItem" : "")}
          to={"/"}
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
      <li className="loginButton">
        {user ? (
          <button onClick={() => signOut(auth)}>Logout</button>
        ) : (
          <button onClick={() => signInWithGoogle()}>Login</button>
        )}
      </li>
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
