"use client";

import React, { useState } from "react";
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
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-950">
      <div className="relative h-40">
        {!loaded && !error && <div className="absolute inset-0 animate-pulse bg-zinc-200 dark:bg-zinc-800" />}
        {error ? (
          <div className="flex h-40 items-center justify-center bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-800 dark:text-zinc-300">
            Image unavailable
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={`h-40 w-full object-cover ${loaded ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mb-2 text-sm text-gray-600 dark:text-zinc-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded bg-gray-200 px-2 py-1 text-xs text-blue-500 dark:bg-zinc-800 dark:text-blue-300"
            >
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
