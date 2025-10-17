import type { LucideIcon } from "lucide-react";

export interface ImagePlaceholder {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Commercial" | "Residential" | "Renovation";
  description: string;
  mainImageId: string;
  galleryImageIds: string[];
  client: string;
  location: string;
  date: string;
  challenge: string;
  solution: string;
  outcome: string;
  timeline: { stage: string; description: string }[];
}

export interface BoardMember {
  id: string;
  name: string;
  title: string;
  imageId: string;
  bio: string;
}

export interface Expertise {
  icon: LucideIcon;
  title: string;
  description: string;
}
