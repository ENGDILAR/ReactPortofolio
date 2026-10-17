import { Code2, Database, Layers3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building full-stack web applications using ASP.NET Core, React, and Laravel, with RESTful APIs and responsive user interfaces.",
  },
  {
    icon: Database,
    title: "Databases & Security",
    description:
      "Designing relational databases with SQL Server and MySQL, implementing EF Core, secure authentication, authorization, and validation.",
  },
  {
    icon: Layers3,
    title: "Software Architecture & DevOps",
    description:
      "Applying SOLID principles, layered architecture, and maintainable design patterns, with Docker and Docker Compose for containerization.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary">About Me</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Building reliable, maintainable web applications.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            I'm a Full Stack Developer and Information Engineering specializing
            in ASP.NET Core and Laravel, with hands-on experience building web
            applications using React, Entity Framework Core, and SQL Server. My
            work focuses on developing secure APIs, responsive interfaces, and
            database-driven systems while applying clean code, SOLID principles,
            and maintainable software architecture.
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
