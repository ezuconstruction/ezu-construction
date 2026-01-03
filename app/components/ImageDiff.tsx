"use client";

import { useState } from "react";

const ImageDiff = () => {
  const [position1, setPosition1] = useState(50);
  const [position2, setPosition2] = useState(50);
  const [position3, setPosition3] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, setPosition: React.Dispatch<React.SetStateAction<number>>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>, setPosition: React.Dispatch<React.SetStateAction<number>>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <section className="relative py-16 px-4 bg-cover bg-center" style={{ backgroundImage: "url(/images/backgrounds/bg-3.jpg)" }}>
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight mb-4">
            See the{" "}
            <span className="text-white underline underline-offset-8 decoration-white/25 hover:decoration-red-500 transition-all duration-300">
              Transformation
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Drag the sliders to reveal the remarkable difference our construction services make
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* First Before/After - Kitchen */}
          <div className="bg-white/5 rounded-2xl shadow-xl ring-1 ring-white/10 backdrop-blur-sm overflow-hidden">
            <div className="p-4 bg-red-500/90 text-white">
              <h3 className="text-xl font-semibold">Wood Grain to Modern Kitchen</h3>
            </div>
            <div 
              className="relative h-64 cursor-col-resize select-none overflow-hidden"
              onMouseMove={(e) => handleMouseMove(e, setPosition1)}
              onTouchMove={(e) => handleTouchMove(e, setPosition1)}
            >
              <img
                src="/images/after.png"
                alt="Modern kitchen with dark cabinets after renovation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - position1}% 0 0)` }}
              >
                <img
                  src="/images/before.png"
                  alt="Traditional wood grain kitchen before renovation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${position1}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-red-500/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
                After
              </div>
            </div>
            <div className="p-4 text-white/80">
              <p className="text-sm">
                Complete kitchen transformation from traditional wood grain to sleek modern design with dark cabinets and contemporary finishes.
              </p>
            </div>
          </div>

          {/* Second Before/After - Games Room */}
          <div className="bg-white/5 rounded-2xl shadow-xl ring-1 ring-white/10 backdrop-blur-sm overflow-hidden">
            <div className="p-4 bg-red-500/90 text-white">
              <h3 className="text-xl font-semibold">Entertainment Games Room</h3>
            </div>
            <div 
              className="relative h-64 cursor-col-resize select-none overflow-hidden"
              onMouseMove={(e) => handleMouseMove(e, setPosition2)}
              onTouchMove={(e) => handleTouchMove(e, setPosition2)}
            >
              <img
                src="/images/after2.jpg"
                alt="Completed entertainment games room with modern furniture"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - position2}% 0 0)` }}
              >
                <img
                  src="/images/before2.png"
                  alt="Unfinished space before games room conversion"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${position2}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-red-500/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
                After
              </div>
            </div>
            <div className="p-4 text-white/80">
              <p className="text-sm">
                Complete transformation of unused space into a fully equipped entertainment and games room with custom features.
              </p>
            </div>
          </div>

          {/* Third Before/After - Living Room */}
          <div className="bg-white/5 rounded-2xl shadow-xl ring-1 ring-white/10 backdrop-blur-sm overflow-hidden">
            <div className="p-4 bg-red-500/90 text-white">
              <h3 className="text-xl font-semibold">Closed to Open Concept Living</h3>
            </div>
            <div 
              className="relative h-64 cursor-col-resize select-none overflow-hidden"
              onMouseMove={(e) => handleMouseMove(e, setPosition3)}
              onTouchMove={(e) => handleTouchMove(e, setPosition3)}
            >
              <img
                src="/images/after3.png"
                alt="Modern open concept living room with updated furniture and lighting"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - position3}% 0 0)` }}
              >
                <img
                  src="/images/before3.png"
                  alt="Traditional closed living room layout"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${position3}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-medium">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-red-500/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
                After
              </div>
            </div>
            <div className="p-4 text-white/80">
              <p className="text-sm">
                Walls removed to create a spacious open concept living area perfect for modern family life and entertaining.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/70 mb-6">
            Experience the quality and craftsmanship that sets EZU Construction apart
          </p>
          <a
            href="/projects"
            className="btn bg-white/90 text-black border-0 hover:bg-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageDiff;
