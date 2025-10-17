import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Home as HomeIcon, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projectsData, expertiseData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ProjectCard from "./projects/ProjectCard";

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-1");
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-50"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="relative z-10 max-w-4xl p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Building Tomorrow's Landmarks, Today.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            ApexBuild delivers unparalleled excellence in construction, turning
            ambitious visions into tangible realities with precision and
            passion.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/projects">Our Work</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90"
            >
              <Link href="/submit-project">Submit a Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold">
              Our Expertise
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We specialize in a wide range of construction services, ensuring
              quality and durability from the ground up.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseData.map((item) => (
              <Card
                key={item.title}
                className="text-center flex flex-col items-center"
              >
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-2xl">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold">
                Featured Projects
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A glimpse into our commitment to quality, innovation, and client
                satisfaction.
              </p>
            </div>
            <Button asChild variant="link" className="mt-4 md:mt-0">
              <Link href="/projects" className="text-lg text-primary">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold">
            Have a Project in Mind?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Let's build the future together. Submit your project details and our
            AI-powered tool will provide a preliminary feasibility assessment.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/submit-project">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}