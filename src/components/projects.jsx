import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

const categories = ["All", "Backend", "Full Stack", "Desktop"];

export function Projects() {
  const [category, setCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (category === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === category);
  }, [category]);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Projects</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Things I've built
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            A selection of projects that reflect my experience building backend
            systems, APIs, and business applications.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <Button
              key={item}
              size="sm"
              variant={category === item ? "default" : "outline"}
              onClick={() => setCategory(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        {/* Projects */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
