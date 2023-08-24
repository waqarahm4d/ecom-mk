import Link from "next/link";
import React from "react";
import { Navlinks } from "./Navlinks";
import Image from "next/image";
import logo from "public/Logo.webp";
import Carticon from "./Carticon";
function Navbar() {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="navbar bg-mywhite px-4 lg:pr-[30px]">
        <div className="navbar-start logo"> 
          <div className="dropdown hamburger-menu">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             <li>
              <Link href='/products/all'>All Products</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Catalog</summary>
                <ul className="p-2">
                  <li>
                    <Link href='/category/male'>Male</Link>
                  </li>
                  <li>
                    <Link href='/category/female'>Female</Link>
                  </li>
                  <li>
                    <Link href='/category/kids'>Kids</Link>
                  </li>
                  <li>
                    <Link href='/category/sports'>Sports</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href='/'>About</Link>
            </li>
            <li>
              <Link href='/'>Contact</Link>
            </li>
            </ul>
          </div>
          <Link href='/' className="normal-case text-xl px-0">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <Navlinks />
        </div>
        <div className="navbar-end cart-icon-wrapper">
          <Carticon />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
