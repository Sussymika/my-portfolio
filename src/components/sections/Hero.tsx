import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        {/* Left side: Text */}
        <div className="md:w-1/2 md:pr-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Hi! Im Dylan Libo-on</h1>
          <h2 className="text-xl md:text-2xl mt-2">An Aspiring Frontend Developer</h2>
          <p className="mt-4 text-white/90">I build clean and responsive web applications.</p>
          <div className="mt-6 flex justify-center md:justify-Center gap-4">
            <a href="#projects">
              <Button variant="outline">View Projects</Button>
            </a>
            <a href="#contact">
              <Button>Contact Me</Button>
            </a>
          </div>
        </div>

        {/* Right side: GIF animation */}
        <div className="md:w-1/2 md:pl-8 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="https://media1.tenor.com/m/5sHx7RayWCIAAAAd/mika-blue-archive.gif"
            alt="Animated illustration"
            className="w-64 md:w-80 object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;