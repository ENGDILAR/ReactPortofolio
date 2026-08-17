import { BriefcaseBusiness, GraduationCap, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    icon: GraduationCap,
    period: "2021 — 2025",
    title: "Software Engineering Education",
    organization: "Syrian Private University",
    description:
      "Studied Software Engineering with a focus on software development, databases, web applications, and software architecture.",
    tags: ["Software Engineering", "Databases", "Web Development"],
  },
  {
    icon: Code2,
    period: "Academic & Personal Projects",
    title: "Backend & Software Development",
    organization: "Independent Projects",
    description:
      "Designed and developed backend applications and APIs using .NET, Laravel, SQL Server, and related technologies.",
    tags: ["ASP.NET Core", "Laravel", "REST APIs"],
  },
  {
    icon: BriefcaseBusiness,
    period: "Project Experience",
    title: "Hospital Management System",
    organization: "Graduation Project",
    description:
      "Worked on a bilingual hospital management system covering areas such as electronic medical records, outpatient clinics, laboratories, radiology, billing, insurance, and ambulance management.",
    tags: ["ASP.NET Core", "SQL Server", "Healthcare"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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

        {/* Timeline */}
        <div className="relative mt-12">
          <div className="absolute left-5 top-2 bottom-2 hidden w-px bg-border sm:block" />

          <div className="space-y-10">
            {experiences.map((experience) => {
              const Icon = experience.icon;

              return (
                <article key={experience.title} className="relative sm:pl-16">
                  {/* Timeline icon */}
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
