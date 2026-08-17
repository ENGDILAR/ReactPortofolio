import { GraduationCap, Languages, BookOpen } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = {
  degree: "B.Sc. in Information Engineering",
  university: "Syrian Private University",
  period: "2020 – 2025",
};

const courses = [
  "SQL",
  "C#",
  ".NET Framework",
  "Data Structures",
  "WinForms",
  "T-SQL",
  "REST APIs",
  "Problem Solving",
];

const languages = [
  {
    name: "Arabic",
    level: "Native",
  },
  {
    name: "English",
    level: "Very Good",
  },
  {
    name: "German",
    level: "B1 – ÖSD",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">
            Education & Learning
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Education and continuous learning.
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            My academic background and continuous technical development through
            structured courses and practical learning.
          </p>
        </div>

        {/* Education */}
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card className="border-border/60 bg-card/50 shadow-none">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="size-5" />
                </div>

                <CardTitle className="text-lg">Education</CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <h3 className="font-semibold">{education.degree}</h3>

              <p className="mt-2 text-muted-foreground">
                {education.university}
              </p>

              <Badge variant="secondary" className="mt-4 font-normal">
                {education.period}
              </Badge>
            </CardContent>
          </Card>

          {/* Courses */}
          <Card className="border-border/60 bg-card/50 shadow-none">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="size-5" />
                </div>

                <CardTitle className="text-lg">
                  Programming Advices Roadmap
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">
                24 courses covering programming, databases, .NET development,
                APIs, data structures, and problem solving.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {courses.map((course) => (
                  <Badge key={course} variant="outline" className="font-normal">
                    {course}
                  </Badge>
                ))}
              </div>

              <p className="mt-4 text-sm text-muted-foreground">2023 – 2025</p>
            </CardContent>
          </Card>
        </div>

        {/* Languages */}
        <Card className="mt-4 border-border/60 bg-card/50 shadow-none">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Languages className="size-5" />
              </div>

              <CardTitle className="text-lg">Languages</CardTitle>
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-3">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center gap-2 rounded-lg border border-border/60 px-4 py-2"
                >
                  <span className="font-medium">{language.name}</span>

                  <span className="text-sm text-muted-foreground">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
