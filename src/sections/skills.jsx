import { Code2, Database, Layers3, Server, Wrench } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    icon: Code2,
    title: "Backend Development",
    skills: [
      "C#",
      "ASP.NET Core",
      "Web API",
      "Laravel",
      "PHP",
      "LINQ",
      "RESTful APIs",
      "JWT",
      "Refresh Tokens",
      "Role-Based Authorization",
      "Entity Framework Core",
      "ADO.NET",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "SQL Server",
      "MySQL",
      "T-SQL",
      "SQL",
      "Database Design",
      
    ],
  },
  {
    icon: Layers3,
    title: "Architecture & Practices",
    skills: [
      "OOP",
      "SOLID",
      "Dependency Injection",
      "Layered Architecture",
      "MVC",
      "Repository Pattern",
      "Clean Code",
      "FluentValidation",
      "Rate Limiting",
      "Logging & Auditing",
    ],
  },
  {
    icon: Server,
    title: "Frontend",
    skills: ["Reactjs","Schadcn/ui","WinForms","HTML", "CSS", "JavaScript", "TailwindCSS", "Laravel Blade"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Swagger",
      "Postman",
      "Visual Studio",
      "Visual Studio Code",
      
      
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Skills</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 text-muted-foreground">
            A selection of the technologies, tools, and engineering practices I
            have worked with across my projects.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <Card
                key={group.title}
                className="border-border/60 bg-card/50 shadow-none transition-colors hover:bg-accent/40"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>

                    <CardTitle className="text-base">{group.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
