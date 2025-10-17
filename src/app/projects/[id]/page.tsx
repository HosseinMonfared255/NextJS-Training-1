import { notFound } from "next/navigation";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle2, Building, MapPin, Calendar, Users } from "lucide-react";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);
  if (!project) {
    return {
      title: "Project Not Found"
    }
  }
  return {
    title: `${project.title} - Case Study`,
    description: project.description,
  };
}


export default function ProjectCaseStudyPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  const galleryImages = project.galleryImageIds
    .map((id) => PlaceHolderImages.find((img) => img.id === id))
    .filter(Boolean);

  return (
    <article className="container mx-auto px-4 py-12 md:py-16">
      {/* Header */}
      <header className="text-center max-w-4xl mx-auto">
        <Badge variant="secondary">{project.category}</Badge>
        <h1 className="font-headline text-4xl md:text-6xl font-bold mt-4">
          {project.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground">
          {project.description}
        </p>
      </header>

      {/* Gallery */}
      <section className="mt-12 md:mt-16">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0 aspect-video relative">
                    {image && (
                       <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>
      </section>

      {/* Project Details */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {/* Report */}
          <section>
            <h2 className="font-headline text-3xl md:text-4xl font-semibold border-b pb-4">
              Project Report
            </h2>
             <Accordion type="single" collapsible defaultValue="item-1" className="w-full mt-6">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-headline">The Challenge</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{project.challenge}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-headline">Our Solution</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{project.solution}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-headline">Final Outcome</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{project.outcome}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

           {/* Timeline */}
          <section className="mt-12">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold border-b pb-4">
              Project Timeline
            </h2>
            <div className="mt-6 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border/70">
              {project.timeline.map((item, index) => (
                 <div key={index} className="relative flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background shrink-0">
                       <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-6">
                        <h4 className="font-headline text-xl font-medium">{item.stage}</h4>
                        <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </div>
                 </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar with Key Facts */}
        <aside className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
           <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Project Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center">
                    <Users className="h-5 w-5 mr-3 text-primary"/>
                    <div>
                        <p className="text-sm font-semibold">Client</p>
                        <p className="text-muted-foreground text-sm">{project.client}</p>
                    </div>
                </div>
                 <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-primary"/>
                    <div>
                        <p className="text-sm font-semibold">Location</p>
                        <p className="text-muted-foreground text-sm">{project.location}</p>
                    </div>
                </div>
                 <div className="flex items-center">
                    <Building className="h-5 w-5 mr-3 text-primary"/>
                    <div>
                        <p className="text-sm font-semibold">Category</p>
                        <p className="text-muted-foreground text-sm">{project.category}</p>
                    </div>
                </div>
                 <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 text-primary"/>
                    <div>
                        <p className="text-sm font-semibold">Status</p>
                        <p className="text-muted-foreground text-sm">{project.date}</p>
                    </div>
                </div>
            </CardContent>
           </Card>
        </aside>
      </div>

    </article>
  );
}
