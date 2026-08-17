import { Code2, Database, Layers3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Backend Development",
    description:
      "Building APIs and backend applications with .NET and Laravel.",
  },
  {
    icon: Database,
    title: "Data & Databases",
    description: "Working with relational databases, data modeling, and SQL.",
  },
  {
    icon: Layers3,
    title: "Clean Architecture",
    description:
      "Focused on maintainable code, clear structure, and solid engineering practices.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">About Me</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            A little about how I build software.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            I'm a Software Engineer interested in backend development and
            building practical applications that solve real problems. I enjoy
            turning requirements into structured, maintainable systems and
            continuously improving my technical skills.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="border-border/60 bg-card/50 shadow-none transition-colors hover:bg-accent/40"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
