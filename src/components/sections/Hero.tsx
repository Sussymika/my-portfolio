import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-20 items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      <div className="text-center px-4">

        {/* Name & Title */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Dylan
        </h1>
        <h2 className="text-xl md:text-2xl mt-2">
          Frontend Developer
        </h2>

        {/* Tagline */}
        <p className="mt-4 text-sm md:text-base text-white/90">
          I build clean and responsive web applications.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a href="#projects">
            <Button variant="outline">View Projects</Button>
          </a>
          <a href="#contact">
            <Button>Contact Me</Button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
