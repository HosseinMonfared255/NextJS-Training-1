import { projectsData } from "@/lib/data";
import ProjectList from "./ProjectList";

export const metadata = {
  title: "Our Projects - ApexBuild",
  description: "Explore our portfolio of completed construction projects, showcasing our expertise in commercial, residential, and renovation work.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Our Portfolio
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover the breadth and depth of our work. Each project is a
          testament to our commitment to quality, innovation, and client
          satisfaction.
        </p>
      </div>

      <div className="mt-12">
        <ProjectList projects={projectsData} />
      </div>
    </div>
  );
}
