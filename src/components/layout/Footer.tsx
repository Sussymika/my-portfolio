// src/components/layout/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 p-6">
      <div className="max-w-4xl mx-auto text-center space-y-4">

        {/* Navigation Links */}
        <div className="flex justify-center gap-4 text-sm">
          <a href="#home" className="text-gray-600">Home</a>
          <a href="#about" className="text-gray-600">About</a>
          <a href="#projects" className="text-gray-600">Projects</a>
          <a href="#contact" className="text-gray-600">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 text-sm">
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

        {/* Contact Email */}
        <p className="text-sm text-gray-600">
          Email: dylan@gmail.com
        </p>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;