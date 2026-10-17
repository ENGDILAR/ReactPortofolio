import { BriefcaseBusiness, GraduationCap, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    icon: GraduationCap,
    period: "2020 — 2025",
    title: "Information Engineering Graduate",
    organization: "Syrian Private University",
    description:
      "Graduated with a degree in Information Engineering, building a foundation in programming, databases, data structures, web development, and software engineering principles.",
    tags: ["Information Engineering", "Programming", "Databases"],
  },
  {
    icon: Code2,
    period: "2026",
    title: "University Management System",
    organization: "Full Stack Personal Project",
    description:
      "Developed a full-stack university management system using ASP.NET Core 8, React, Entity Framework Core, and SQL Server. Implemented role-based workflows for administrators, instructors, and students, covering courses, course offerings, enrollments, and academic assessments. Added JWT authentication with refresh tokens, role-based authorization, FluentValidation, rate limiting, pagination, and transactional operations. Containerized the frontend, API, and database using Docker and Docker Compose.",
    tags: [
      "ASP.NET Core 8",
      "React",
      "EF Core",
      "SQL Server",
      "JWT",
      "Docker",
      "Docker Compose",
    ],
  },
  {
    icon: BriefcaseBusiness,
    period: "2024",
    title: "Hospital Management System",
    organization: "University Graduation Project",
    description:
      "Collaborated on a bilingual hospital management system using Laravel, Livewire, and MySQL. Implemented healthcare workflows covering electronic medical records, outpatient clinics, laboratory and radiology services, billing, insurance, and ambulance management.",
    tags: ["Laravel", "Livewire", "MySQL", "Repository Pattern", "MVC"],
  },
  {
    icon: Code2,
    period: "Personal Project",
    title: "Driving & Vehicle License Department",
    organization: "Independent Project",
    description:
      "Designed and developed a layered desktop application using C# and Windows Forms to manage driving license issuance, renewal, replacement, detention, and driving tests, with a dedicated business layer and ADO.NET data access.",
    tags: [
      "C#",
      ".NET Framework 4.8",
      "Windows Forms",
      "ADO.NET",
      "SQL Server",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Experience</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            My journey so far.
          </h2>

          <p className="mt-4 text-muted-foreground">
            My experience has mainly been built through education, personal
            development, and hands-on software projects.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-5 top-2 bottom-2 hidden w-px bg-border sm:block" />

          <div className="space-y-10">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <article key={experience.title} className="relative sm:pl-16">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-full border border-border bg-background text-primary sm:absolute sm:left-0 sm:top-0">
                    <Icon className="size-5" />
                  </div>

                  <div className="rounded-xl border border-border/60 bg-card/40 p-6 transition-colors hover:bg-accent/30">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-semibold">{experience.title}</h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                          {experience.organization}
                        </p>
                      </div>

                      <Badge variant="outline" className="w-fit font-normal">
                        {experience.period}
                      </Badge>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {experience.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
