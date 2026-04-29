import React from "react";
import Card, { Project } from "../ui/Card";
import ScrollReveal from "../ui/ScrollReveal";

const sampleProjects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind.",
    image: "https://static-blog.onlyoffice.com/wp-content/uploads/2025/09/30124756/portfolio.png",
    technologies: ["React", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Todo App",
    description: "Simple task manager with local storage.",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ToDo_960x615_2x_1_RE3HTxG?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fmt=png-alpha&fit=constrain",
    technologies: ["React", "JS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-commerce Store",
    description: "Demo online store with shopping cart.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFZyMXAyM1DKIaRiQBNKGQA4lXKnkv4AzCg&s",
    technologies: ["Next.js", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sampleProjects.map((project, index) => (
        <ScrollReveal key={project.title} delay={index * 120}>
          <Card project={project} />
        </ScrollReveal>
      ))}
    </div>
  </section>
);

export default Projects;
