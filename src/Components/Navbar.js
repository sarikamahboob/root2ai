import React from "react";
import { Link, NavLink } from "react-router-dom";
import home from "../images/home.png";

const Navbar = () => {
  return (
    <div className=" bg-black">
      <div class="navbar p-0 container mx-auto ">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Menu</a>
              </li>
              <li>
                <a>Menu 1</a>
              </li>
              <li>
                <a>Menu 2</a>
              </li>
              <li>
                <a>Menu 3</a>
              </li>
              <li>
                <a>Menu 4</a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="border-l border-r flex items-center justify-center border-gray-700"
          >
            <img className="w-[50%]" src={home} alt="" />
          </Link>
        </div>
        <div class="navbar-start p-0 hidden lg:flex text-white">
          <ul class="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/menu"
                className="mr-2 border-l border-r flex items-center justify-center border-gray-700"
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu1"
                className="mr-2 border-l border-r flex items-center justify-center border-gray-700"
              >
                Menu 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu2"
                className=" mr-2 border-l border-r flex items-center justify-center border-gray-700"
              >
                Menu 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu3"
                className=" mr-2 border-l border-r flex items-center justify-center border-gray-700"
              >
                Menu 3
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu4"
                className=" mr-2 border-l border-r flex items-center justify-center border-gray-700"
              >
                Menu 4
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
