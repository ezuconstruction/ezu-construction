"use client";

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
            className="drawer dropdown-content bg-black/80 shadow-lg ring-1 ring-black/5 backdrop-blur-lg z-1 mt-6 p-4 w-80 rounded-2xl"
          >
            <p className="text-accent text-2xl font-bold pb-2">
              EZU-Construction
            </p>
            <li>
              <p className="text-xl font-semibold text-secondary">Services</p>
              <ul className="pb-2 px-3">
                <li>
                  <Link href="services/custom-homes" className="text-lg">
                    Custom Homes
                  </Link>
                </li>
                <li>
                  <Link href="services/home-renovations" className="text-lg">
                    Home Renovations
                  </Link>
                </li>
                <li>
                  <Link href="services/home-additions" className="text-lg">
                    Home Additions
                  </Link>
                </li>
                <li>
                  <Link href="services/kitchen-renovations" className="text-lg">
                    Kitchen Renovations
                  </Link>
                </li>
                <li>
                  <Link
                    href="services/bathroom-renovations"
                    className="text-lg"
                  >
                    Bathroom Renovations
                  </Link>
                </li>
                <li>
                  <Link
                    href="services/home-office-renovations"
                    className="text-lg"
                  >
                    Home Office Renovations
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <p className="text-xl font-semibold text-secondary">
                Construction
              </p>
              <ul className="pb-2 px-3">
                <li>
                  <Link href="construction/drywall" className="text-lg">
                    Drywall Installation and Repair
                  </Link>
                </li>
                <li>
                  <Link href="construction/flooring" className="text-lg">
                    Flooring Installation and Repair
                  </Link>
                </li>
                <li>
                  <Link href="construction/tile" className="text-lg">
                    Tile Installation and Repair
                  </Link>
                </li>
                <li>
                  <Link href="construction/interlocking" className="text-lg">
                    Interlocking Paving
                  </Link>
                </li>
                <li>
                  <Link href="construction/painting" className="text-lg">
                    Painting Services
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-xl font-semibold text-secondary"
              >
                Projects
              </Link>
            </li>
            <li className="pt-2">
              <p className="text-xl font-semibold text-secondary">News</p>
              <ul className="pb-2 px-3">
                <li>
                  <Link href="social-media" className="text-lg">
                    Social Media
                  </Link>
                </li>
                <li>
                  <Link href="publications" className="text-lg">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link href="contact" className="text-lg">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link
          className="btn btn-ghost text-xl p-6 rounded-2xl hover:backdrop-blur-lg hover:bg-black/5 hover:outline-0"
          href="/"
        >
          <span>
            <img
              src="/EZU-Red-White.png"
              alt="Profile Picture"
              className="w-8 mr-1"
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
                  <Link href="construction/drywall">
                    Drywall Installation and Repair
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="construction/flooring">
                    Flooring Installation and Repair
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="construction/tile">
                    Tile Installation and Repair
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="construction/interlocking">
                    Interlocking Paving
                  </Link>
                </li>
                <li className="py-1">
                  <Link href="construction/painting">Painting Services</Link>
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
                  <Link href="social-media">Social Media</Link>
                </li>
                <li className="py-1">
                  <Link href="publications">Publications</Link>
                </li>
                <li className="py-1">
                  <Link href="contact">Contact Us</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-2">
        <Link
          className=" bg-accent/60 text-lg px-3 py-2 font-semibold rounded-lg hover:bg-secondary/50  hover:backdrop-blur-lg transition duration-300"
          href="/contact"
        >
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
