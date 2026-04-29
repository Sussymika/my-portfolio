// src/components/layout/Header.tsx
"use client";

import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="font-bold text-xl text-black">MyPortfolio</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700">
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden flex flex-col p-4 gap-3 border-t">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;