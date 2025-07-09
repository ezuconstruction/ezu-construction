"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed navbar bg-black/30 shadow-lg ring-1 ring-black/5 backdrop-blur-sm z-50 mx-2 mt-2 w-[calc(98vw)] rounded-2xl h-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-6 p-5 shadow"
          >
            <li>
              <Link href="/#about-me" className="text-xl font-semibold">
                about me
              </Link>
            </li>
            <li>
              <Link className="text-xl font-semibold" href="projects">
                my work
              </Link>
              <ul className="p-2">
                <li>
                  <Link href="projects/#portfolio" className="text-lg">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="projects/#tutorly" className="text-lg">
                    Tutorly
                  </Link>
                </li>
                <li>
                  <Link href="projects/#guess-who" className="text-lg">
                    Guess Who?
                  </Link>
                </li>
                <li>
                  <Link href="projects/#MRC-V" className="text-lg">
                    MRC-V
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact" className="text-xl font-semibold">
                contact me
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl p-6 hover:bg-black/50" href="/">
          <span>
            <img
              src="/ezuwhite.png"
              alt="Profile Picture"
              className="w-8 mr-1 invert"
            />
          </span>{" "}
          <span className="invisible sm:visible">EZU Construction</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mx-10 text-[19px]">
          <li className="mx-5">
            <details>
              <summary className="font-semibold">Services</summary>
              <ul className=" w-80 bg-black/60 shadow-lg ring-1 ring-black/5 backdrop-blur-sm rounded-lg">
                <li className="py-1">
                  <Link href="services/custom-homes">Custom Homes</Link>
                </li>
                <li className="py-1">
                  <Link href="services/home-renovations">Home Renovations</Link>
                </li>
                <li className="py-1">
                  <Link href="services/home-additions">Home Additions</Link>
                </li>
                <li className="py-1">
                  <Link href="services/kitchen-renovations">
                    Kitchen Renovations
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="services/bathroom-renovations">
                    Bathroom Renovations
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="services/home-office-renovations">
                    Home Office Renovations
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="mx-5">
            <details>
              <summary className="font-semibold">Construction</summary>
              <ul className=" w-80 bg-black/60 shadow-lg ring-1 ring-black/5 backdrop-blur-sm rounded-lg">
                <li className="py-1">
                  <Link href="services/custom-homes">
                    Drywall Installation and Repair
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="services/home-renovations">
                    Flooring Installation and Repair
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="services/home-additions">Tile Installation and Repair</Link>
                </li>
                <li className="py-1">
                  <Link href="services/interlocking">Interlocking Paving</Link>
                </li>
                <li className="py-1">
                  <Link href="services/kitchen-renovations">
                    Painting Services
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="mx-5">
            <Link href="/projects" className="font-semibold">
              Projects
            </Link>
          </li>
          <li className="mx-5">
            <details>
              <summary className="font-semibold">News</summary>
              <ul className=" w-70 bg-black/60 shadow-lg ring-1 ring-black/5 backdrop-blur-sm rounded-lg">
                <li className="py-1">
                  <Link href="services/custom-homes">Social Media</Link>
                </li>
                <li className="py-1">
                  <Link href="services/home-renovations">Publications</Link>
                </li>
                <li className="py-1">
                  <Link href="services/home-additions">Contact Us</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-2">
        <Link
          className=" bg-accent/60 text-lg px-3 py-2 font-semibold rounded-lg"
          href="/contact"
        >
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
