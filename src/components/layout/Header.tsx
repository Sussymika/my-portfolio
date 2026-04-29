"use client";

import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-colors dark:bg-zinc-950 dark:shadow-zinc-900/60">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-black dark:text-white">
          MyPortfolio
        </h1>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DarkModeToggle />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-2xl text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-3 border-t border-zinc-200 p-4 dark:border-zinc-800 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
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
