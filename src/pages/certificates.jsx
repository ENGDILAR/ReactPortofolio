import { useMemo, useState } from "react";
import { Award, ArrowLeft, ExternalLink, Search } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { certificates } from "@/data/certificates";

const categories = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "technical",
    label: "Technical",
  },
  {
    id: "management",
    label: "Management",
  },
  {
    id: "academic",
    label: "Academic",
  },
];

export function Certificates() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredCertificates = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return certificates.filter((certificate) => {
      const matchesCategory =
        category === "all" || certificate.category === category;

      const matchesSearch =
        searchValue === "" ||
        certificate.title.toLowerCase().includes(searchValue) ||
        certificate.issuer.toLowerCase().includes(searchValue) ||
        certificate.description.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back to Home */}
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/">
              <ArrowLeft />
              Back to Home
            </Link>
          </Button>

          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Certificates</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Continuous learning and professional development.
            </h1>

            <p className="mt-4 leading-7 text-muted-foreground">
              A collection of technical, management, and academic achievements
              developed throughout my learning journey.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search certificates..."
                className="pl-9"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((item) => (
              <Button
                key={item.id}
                variant={category === item.id ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Result count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredCertificates.length}{" "}
              {filteredCertificates.length === 1
                ? "certificate"
                : "certificates"}
            </p>

            {(search || category !== "all") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}
              >
                Clear filters
              </Button>
            )}
          </div>

          {/* Certificates Grid */}
          {filteredCertificates.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCertificates.map((certificate) => (
                <Card
                  key={certificate.id}
                  className="group flex h-full flex-col border-border/60 bg-card/50 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                >
                  <CardHeader>
                    <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Award className="size-5" />
                    </div>

                    <CardTitle className="text-lg leading-6">
                      {certificate.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-sm font-medium">{certificate.issuer}</p>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {certificate.description}
                    </p>

                    <div className="mt-4">
                      <Badge
                        variant={
                          certificate.category === "technical"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {certificate.category}
                      </Badge>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href={certificate.file}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Certificate
                        <ExternalLink />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="mt-12 rounded-xl border border-dashed border-border p-12 text-center">
              <Award className="mx-auto size-8 text-muted-foreground" />

              <h2 className="mt-4 font-semibold">No certificates found</h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Try another search term or choose a different category.
              </p>

              <Button
                variant="outline"
                className="mt-5"
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
