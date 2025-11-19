import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 i">
      <div className="xl:w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <h2 className="font-bold text-lg">CS — Ticket System</h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-500">FAQ</a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Changelog</a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Blog</a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Download</a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Contact</a>
            <button className="bg-gradient-to-br from-violet-700 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
              New Ticket
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none"
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
          <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-sm text-gray-700 hover:text-blue-500">FAQ</a>
          <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Changelog</a>
          <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Blog</a>
          <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Download</a>
          <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Contact</a>
          <button className="bg-gradient-to-br from-violet-700 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
            New Ticket
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
