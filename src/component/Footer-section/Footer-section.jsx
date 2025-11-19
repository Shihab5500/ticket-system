import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="xl:w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-white text-lg font-bold mb-3">
            CS — Ticket System
          </h2>
          <p className="text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. It has been the industry’s standard since the 1500s.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Sales</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Products & Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Join Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span>🌐</span> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <span>🐦</span> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <span>📘</span> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <span>📧</span> support@cst.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
