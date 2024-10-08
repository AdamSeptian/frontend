import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/purple-black-logo.png";

const Navbar = () => {
  return (
    <div>
      <div
        className='fixed navbar bg-white z-50'
      >
        <div className="navbar-start">
          <a href="/">
            <img src={Logo} className="w-28"></img>
          </a>
        </div>
        <div className="lg:hidden navbar-end">
          <div className="dropdown dropdown-end mr-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-purple lg:hidden"
            >
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/daftar">Daftar</Link>
              </li>
              <li>
                <Link to="/masuk" className="btn-purple">
                  Masuk
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end w-2/3 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/daftar">Daftar</Link>
            </li>
            <li>
              <Link to="/masuk" className="btn-purple">
                Masuk
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
