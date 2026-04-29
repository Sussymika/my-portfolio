import React from "react";
import Card, { Project } from "../ui/Card";

const sampleProjects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind.",
    image: "https://via.placeholder.com/400x200",
    technologies: ["React", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Todo App",
    description: "Simple task manager with local storage.",
    image: "https://via.placeholder.com/400x200",
    technologies: ["React", "JS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-commerce Store",
    description: "Demo online store with shopping cart.",
    image: "https://via.placeholder.com/400x200",
    technologies: ["Next.js", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sampleProjects.map((project) => (
        <Card key={project.title} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;