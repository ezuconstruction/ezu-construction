"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import OptimizedImage from "./OptimizedImage";

const residentialLinks = [
  { href: "/services/custom-homes", label: "Custom Homes" },
  { href: "/services/home-renovations", label: "Home Renovations" },
  { href: "/services/home-additions", label: "Home Additions" },
  { href: "/services/kitchen-renovations", label: "Kitchen Renovations" },
  { href: "/services/bathroom-renovations", label: "Bathroom Renovations" },
  { href: "/services/basement-renovations", label: "Basement Renovations" },
  { href: "/services/laneway-garden-suites", label: "Laneway & Garden Suites" },
  { href: "/services/secondary-suites", label: "Secondary Suites" },
  { href: "/services/garage-conversions", label: "Garage Conversions" },
  { href: "/services/sunroom-outdoor-living", label: "Sunrooms & Outdoor Living" },
  { href: "/services/home-office-renovations", label: "Home Office Renovations" },
];

const constructionLinks = [
  { href: "/construction/drywall", label: "Drywall" },
  { href: "/construction/flooring", label: "Flooring" },
  { href: "/construction/tile", label: "Tile" },
  { href: "/construction/painting", label: "Painting" },
  { href: "/construction/interlocking", label: "Interlocking Paving" },
  { href: "/construction/framing", label: "Framing & Structural" },
  { href: "/construction/electrical", label: "Electrical" },
  { href: "/construction/plumbing", label: "Plumbing" },
  { href: "/construction/insulation", label: "Insulation" },
  { href: "/construction/windows-doors", label: "Windows & Doors" },
  { href: "/construction/exterior-cladding", label: "Exterior Cladding" },
  { href: "/construction/roofing", label: "Roofing" },
];

const newsLinks = [
  { href: "/social-media", label: "Social Media" },
  { href: "/publications", label: "Publications" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact Us" },
];

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
      {/* Mobile menu */}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="drawer dropdown-content bg-black/90 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg z-1 mt-6 p-4 w-80 rounded-2xl max-h-[85vh] overflow-y-auto"
          >
            <li className="pb-1">
              <Link
                href="tel:+16477669999"
                className="flex items-center gap-2 text-red-400 font-bold text-lg py-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (647) 766-9999
              </Link>
            </li>
            <li>
              <p className="text-xl font-semibold text-red-500">Residential</p>
              <ul className="pb-2 px-3">
                {residentialLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-base text-white/90 hover:text-white py-0.5 block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <p className="text-xl font-semibold text-red-500">Construction</p>
              <ul className="pb-2 px-3">
                {constructionLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-base text-white/90 hover:text-white py-0.5 block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/projects" className="text-xl font-semibold text-red-500">
                Projects
              </Link>
            </li>
            <li className="pt-2">
              <p className="text-xl font-semibold text-red-500">News</p>
              <ul className="pb-2 px-3">
                {newsLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-lg text-white/90 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
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

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mx-10 text-[19px]">
          {/* Residential dropdown */}
          <li className="mr-3">
            <div className="dropdown hover:bg-transparent">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-xl hover:text-red-500 hover:bg-transparent hover:border-0 border-0 py-5 text-white/90 group shadow-none hover:shadow-none focus:shadow-none active:shadow-none"
              >
                Residential{" "}
                <svg className="w-8 h-9 mt-1 fill-white group-hover:fill-red-500 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 16l-6-6h12z" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content w-72 bg-black/80 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg rounded-2xl max-h-[80vh] overflow-y-auto"
              >
                {residentialLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-lg py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-1 mx-1 rounded-lg">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* Construction dropdown */}
          <li className="mr-3">
            <div className="dropdown hover:bg-transparent">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-xl hover:text-red-500 hover:bg-transparent hover:border-0 border-0 py-5 text-white/90 group shadow-none hover:shadow-none focus:shadow-none active:shadow-none"
              >
                Construction{" "}
                <svg className="w-8 h-9 mt-1 fill-white group-hover:fill-red-500 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 16l-6-6h12z" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content w-72 bg-black/80 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg rounded-2xl max-h-[80vh] overflow-y-auto"
              >
                {constructionLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-lg py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-1 mx-1 rounded-lg">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* Projects */}
          <li className="mr-3">
            <Link
              role="button"
              className="btn btn-ghost text-xl hover:text-red-500 hover:bg-transparent hover:border-0 border-0 py-5 text-white/90 mt-2"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          {/* News dropdown */}
          <li className="mr-3">
            <div className="dropdown hover:bg-transparent group">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-xl group-hover:text-red-500 group-hover:bg-transparent group-hover:border-0 border-0 py-5 text-white/90 shadow-none hover:shadow-none focus:shadow-none active:shadow-none"
              >
                News{" "}
                <svg className="w-8 h-9 mt-1 fill-white group-hover:fill-red-500 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 16l-6-6h12z" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content w-72 bg-black/80 shadow-2xl ring-1 ring-white/10 backdrop-blur-lg rounded-2xl"
              >
                {newsLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xl py-2 bg-transparent hover:bg-red-500/45 text-white/90 hover:text-white mb-2 mx-1 rounded-lg">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Right-side CTA + phone */}
      <div className="navbar-end pr-2 gap-3 hidden lg:flex items-center">
        <Link
          href="tel:+16477669999"
          className="text-white/80 hover:text-red-400 transition text-base font-medium flex items-center gap-1.5"
          aria-label="Call EZU Construction"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (647) 766-9999
        </Link>
        <Link
          className="bg-white/90 text-black text-lg px-3 py-2 font-semibold rounded-lg hover:bg-red-500/70 hover:text-white transition duration-300"
          href="/contact"
        >
          Free Quote
        </Link>
      </div>
      {/* Mobile right side - just contact button */}
      <div className="navbar-end pr-2 flex lg:hidden">
        <Link
          className="bg-white/90 text-black text-sm px-3 py-2 font-semibold rounded-lg hover:bg-red-500/70 hover:text-white transition duration-300"
          href="/contact"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
