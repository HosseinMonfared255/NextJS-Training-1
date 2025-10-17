import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const mainImage = PlaceHolderImages.find(
    (img) => img.id === project.mainImageId
  );

  return (
    <Card className="flex flex-col overflow-hidden h-full transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl">
      <CardHeader className="p-0">
        <Link href={`/projects/${project.id}`} className="block">
          <div className="relative h-60 w-full">
            {mainImage ? (
              <Image
                src={mainImage.imageUrl}
                alt={mainImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={mainImage.imageHint}
              />
            ) : (
              <div className="bg-secondary h-full w-full"></div>
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <Badge variant="secondary" className="mb-2">
          {project.category}
        </Badge>
        <CardTitle className="font-headline text-2xl">
          <Link href={`/projects/${project.id}`}>{project.title}</Link>
        </CardTitle>
        <CardDescription className="mt-2 line-clamp-3">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 text-primary">
          <Link href={`/projects/${project.id}`}>
            View Case Study <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
