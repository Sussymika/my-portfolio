import React from "react";
import Button from "./Button";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded text-blue-500">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Button variant="outline">GitHub</Button>
          </a>
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <Button>Live</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;