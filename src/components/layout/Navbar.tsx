"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Lorem Ipsum", hasDropdown: true },
    { label: "Lorem Ipsum", hasDropdown: true },
    { label: "Lorem Ipsum", hasDropdown: true },
  ];

  return (
    <nav className="w-full bg-white py-4 px-4 md:px-8 lg:px-16 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="bg-[#1E293B] text-white px-6 py-2 rounded-md font-bold text-lg">
          LOGO
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              className="flex items-center gap-1 text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown size={16} />}
            </button>
          ))}
        </div>

        {/* Sign In Button */}
        <button className="hidden md:block border border-[#1E293B] text-[#1E293B] px-6 py-2 rounded-md font-medium hover:bg-[#1E293B] hover:text-white transition-all">
          Sign In
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1E293B]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                className="flex items-center justify-between text-[#2563EB] py-2 border-b border-gray-100"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={16} />}
              </button>
            ))}
            <button className="border border-[#1E293B] text-[#1E293B] px-6 py-2 rounded-md font-medium mt-2">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;