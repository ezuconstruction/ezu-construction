"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const MobileCTABar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-black/90 backdrop-blur-sm border-t border-white/10 px-4 py-3 flex gap-3">
        <Link
          href="tel:+16477669999"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white text-base font-semibold py-3 rounded-xl border border-white/20 hover:bg-white/20 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Us
        </Link>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white text-base font-semibold py-3 rounded-xl hover:bg-red-600 transition shadow-lg shadow-red-500/30"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
};

export default MobileCTABar;
