import { Routes, Route } from "react-router-dom";

import { Navbar } from "@/components/layout/navbar";

import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Skills } from "@/sections/skills";
import { Experience } from "@/sections/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/sections/contact";
import { Education } from "@/sections/education";
import { Certificates } from "@/pages/certificates";
import { ProjectDetails } from "@/pages/project-details";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
