import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { projects } from "@/data/projects";

function Github() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.76.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>

        <p className="mt-3 text-muted-foreground">
          The project you are looking for does not exist.
        </p>

        <Button asChild className="mt-6">
          <Link to="/">
            <ArrowLeft />
            Back to Home
          </Link>
        </Button>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/#projects">
            <ArrowLeft />
            Back to Projects
          </Link>
        </Button>

        {/* Project Image */}
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/20">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="block aspect-video w-full object-cover"
          />
        </div>

        {/* Main Information */}
        <div className="mt-10">
          <Badge variant="secondary">{project.category}</Badge>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            {project.description}
          </p>

          {/* Overview */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Overview</h2>

            <p className="mt-4 max-w-4xl leading-8 text-muted-foreground">
              {project.details.overview}
            </p>
          </div>

          {/* Features */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Key Features</h2>

            <ul className="mt-4 space-y-3">
              {project.details.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />

                  <span className="leading-7">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">
              Architecture & Technical Highlights
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.details.architecture.map((item) => (
                <Badge key={item} variant="secondary" className="font-normal">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Technologies</h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge
                  key={technology}
                  variant="outline"
                  className="font-normal"
                >
                  {technology}
                </Badge>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <a href={project.github} target="_blank" rel="noreferrer">
                <Github />
                View on GitHub
              </a>
            </Button>

            <Button variant="outline" asChild>
              <Link to="/#projects">
                <ArrowLeft />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
