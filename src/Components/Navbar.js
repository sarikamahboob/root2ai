import React from "react";
import { Link, NavLink } from "react-router-dom";
import home from "../images/home.png";

const Navbar = () => {
  return (
    <div className=" bg-black">
      <div class="navbar p-0 container mx-auto text-white">
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
                <a>Item 1</a>
              </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul class="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
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
        <div class="navbar-start p-0 hidden lg:flex">
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
                Menu1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu2"
                className=" mr-2 border-l border-r flex items-center justify-center border-gray-700"
              >
                Menu2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu3"
                className=" mr-2 border-l border-r flex items-center justify-center border-gray-700"
              >
                Menu3
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu4"
                className=" mr-2 border-l border-r flex items-center justify-center border-gray-700"
              >
                Menu4
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;