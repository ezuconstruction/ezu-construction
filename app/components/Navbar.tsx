"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import OptimizedImage from "./OptimizedImage";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed navbar bg-black/45 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm z-50 mx-2 mt-2 w-[calc(98vw)] rounded-2xl h-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-[11vh]"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white/90"
            aria-label="Menu Bar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
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
            className="drawer dropdown-content bg-black/90 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg z-1 mt-6 p-4 w-80 rounded-2xl"
          >
            <li>
              <p className="text-xl font-semibold text-red-500">Residential</p>
              <ul className="pb-2 px-3">
                <li>
                  <Link
                    href="/services/custom-homes"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Custom Homes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/home-renovations"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Home Renovations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/home-additions"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Home Additions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/kitchen-renovations"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Kitchen Renovations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bathroom-renovations"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Bathroom Renovations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/home-office-renovations"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Home Office Renovations
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <p className="text-xl font-semibold text-red-500">Construction</p>
              <ul className="pb-2 px-3">
                <li>
                  <Link
                    href="/construction/drywall"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Drywall Installation and Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/construction/flooring"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Flooring Installation and Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/construction/tile"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Tile Installation and Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/construction/interlocking"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Interlocking Paving
                  </Link>
                </li>
                <li>
                  <Link
                    href="/construction/painting"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Painting Services
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-xl font-semibold text-red-500"
              >
                Projects
              </Link>
            </li>
            <li className="pt-2">
              <p className="text-xl font-semibold text-red-500">News</p>
              <ul className="pb-2 px-3">
                <li>
                  <Link
                    href="/social-media"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publications"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-lg text-white/90 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-ghost text-xl p-6 rounded-lg hover:backdrop-blur-lg hover:bg-white/5 text-white/90 hover:text-white"
          href="/"
        >
          <span>
            <OptimizedImage
              src="/EZU-Red-White.png"
              alt="EZU Construction logo"
              width={32}
              height={32}
              sizes="32px"
              className="w-8 h-8 mr-1"
              priority
            />
          </span>
          <span className="invisible sm:visible">EZU Construction</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mx-10 text-[19px]">
          <li className="mr-5">
            <div className="dropdown hover:bg-transparent">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-xl hover:text-red-500 hover:bg-transparent hover:border-0 border-0 py-5 text-white/90 group shadow-none hover:shadow-none focus:shadow-none active:shadow-none"
              >
                Residential{" "}
                <svg
                  className="w-8 h-9 mt-1 fill-white group-hover:fill-red-500 transition-colors"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 16l-6-6h12z" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content w-80 bg-black/80 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg rounded-2xl"
              >
                <li>
                  <Link
                    href="/services/custom-homes"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Custom Homes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/home-renovations"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Home Renovations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/home-additions"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Home Additions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/kitchen-renovations"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Kitchen Renovations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/bathroom-renovations"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Bathroom Renovations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/home-office-renovations"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Home Office Renovations
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="mr-5">
            <div className="dropdown hover:bg-transparent">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-xl hover:text-red-500 hover:bg-transparent hover:border-0 border-0 py-5 text-white/90 group shadow-none hover:shadow-none focus:shadow-none active:shadow-none"
              >
                Construction{" "}
                <svg
                  className="w-8 h-9 mt-1 fill-white group-hover:fill-red-500 transition-colors"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 16l-6-6h12z" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content w-80 bg-black/80 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg rounded-2xl"
              >
                <li>
                  <Link
                    href="/construction/drywall"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Drywall Installation and Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/construction/flooring"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Flooring Installation and Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/construction/tile"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Tile Installation and Repair
                  </Link>
                </li>
                <li>
                  <Link
                    href="/construction/interlocking"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Interlocking Paving
                  </Link>
                </li>
                <li>
                  <Link
                    href="/construction/painting"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Painting Services
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="mr-5">
            <div className="dropdown hover:bg-transparent">
              <Link
                role="button"
                className="btn btn-ghost text-xl hover:text-red-500 hover:bg-transparent hover:border-0 border-0 py-5 text-white/90"
                href="/projects"
              >
                Projects
              </Link>
            </div>
          </li>
          <li className="mr-5">
            <div className="dropdown hover:bg-transparent group">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-xl group-hover:text-red-500 group-hover:bg-transparent group-hover:border-0 border-0 py-5 text-white/90 shadow-none hover:shadow-none focus:shadow-none active:shadow-none"
              >
                News{" "}
                <svg
                  className="w-8 h-9 mt-1 fill-white group-hover:fill-red-500 transition-colors"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 16l-6-6h12z" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content w-80 bg-black/80 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg rounded-2xl"
              >
                <li>
                  <Link
                    href="/social-media"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="/publications"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-2">
        <Link
          className="bg-white/90 text-black text-lg px-3 py-2 font-semibold rounded-lg hover:bg-red-500/70 hover:text-white transition duration-300"
          href="/contact"
        >
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
