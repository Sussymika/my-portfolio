import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-100 p-6 transition-colors dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl space-y-4 text-center">
        <div className="flex justify-center gap-4 text-sm">
          <a href="#home" className="text-gray-600 dark:text-zinc-300">
            Home
          </a>
          <a href="#about" className="text-gray-600 dark:text-zinc-300">
            About
          </a>
          <a href="#projects" className="text-gray-600 dark:text-zinc-300">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 dark:text-zinc-300">
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-4 text-sm text-zinc-700 dark:text-zinc-300">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>

        <p className="text-sm text-gray-600 dark:text-zinc-300">
          Email: dylan@gmail.com
        </p>

        <p className="text-xs text-gray-500 dark:text-zinc-400">
          Copyright 2026 MyPortfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
