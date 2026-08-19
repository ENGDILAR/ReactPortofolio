import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";
function GithubIcon() {
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

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.47v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 size-72 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-20">
        {/* Content */}
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5">
            Software Engineer
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-primary">Dilar Almaao</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            I build backend applications, APIs, and business systems with a
            focus on clean architecture, reliability, and maintainable code.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            My main tools are .NET, Laravel, SQL Server, and modern web
            technologies.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#projects">
                View My Projects
                <ArrowDown />
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <a href="/Dilar Almaao CV.pdf" download>
                Download CV
                <Download />
              </a>
            </Button>
          </div>

          {/* Social */}
          <div className="mt-6 flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/ENGDILAR"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/dilar-al-maao-a98279290/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </Button>
          </div>

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["ASP.NET Core", "Laravel", "SQL Server", "REST APIs","React JS","My Sql"].map(
              (technology) => (
                <Badge
                  key={technology}
                  variant="outline"
                  className="font-normal"
                >
                  {technology}
                </Badge>
              ),
            )}
          </div>
        </div>

        {/* Profile */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-primary/10 blur-3xl" />

            <div className="flex size-64 items-center justify-center overflow-hidden rounded-full border border-border bg-card shadow-xl sm:size-72">
              <img
                src={profileImage}
                alt="Dilar Almaao"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
