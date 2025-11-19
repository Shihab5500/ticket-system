
import React from "react";
import vector1 from "../../assets/vector1.png";
import vector3 from "../../assets/vector3.png"

function HeroSection({ inProgress, resolved }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 xl:w-[1600px] mx-auto">
      {/* In Progress */}
      <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 h-40 rounded-lg text-white font-bold shadow-lg overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-500">
        {/* Left side vector */}
        <img
          src={vector1} alt=""
          className="absolute left-0 top-0 h-full object-contain opacity-90"
        />
        {/* Right side vector */}
        <img
          src={vector3} alt=""
          className="absolute right-0 top-0 h-full object-contain opacity-90 rotate-360"
        />

        <div className="relative z-10 text-center">
          <p className="text-sm mb-2">In-Progress</p>
          <p id="in-progress" className="text-3xl">{inProgress}</p>
        </div>
      </div>

      {/* Resolved */}
      <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 h-40 rounded-lg text-white font-bold shadow-lg overflow-hidden bg-gradient-to-r from-green-400 to-emerald-600">
        {/* Left side vector */}
        <img
          src={vector1} alt=""
          className="absolute left-0 top-0 h-full object-contain opacity-90"
        />
        {/* Right side vector */}
        <img
          src={vector3} alt=""
          className="absolute right-0 top-0 h-full object-contain opacity-90"
        />

        <div className="relative z-10 text-center">
          <p className="text-sm mb-2">Resolved</p>
          <p id="resolved" className="text-3xl">{resolved}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;


