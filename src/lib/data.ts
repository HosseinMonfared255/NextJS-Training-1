import type { Project, BoardMember, Expertise } from "@/types";
import {
  Building2,
  Home as HomeIcon,
  Wrench,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const projectsData: Project[] = [
  {
    id: "skyline-tower",
    title: "Skyline Tower",
    category: "Commercial",
    description:
      "A state-of-the-art commercial skyscraper in the heart of the city, featuring sustainable design and cutting-edge amenities.",
    mainImageId: "project-1",
    galleryImageIds: ["project-1-gallery-1", "project-1-gallery-2", "project-1-gallery-3"],
    client: "Metropolis Holdings",
    location: "Downtown, Metro City",
    date: "Completed: June 2023",
    challenge:
      "The primary challenge was the tight urban footprint, requiring innovative vertical construction techniques and just-in-time logistics to minimize disruption to the surrounding bustling city life.",
    solution:
      "We employed a top-down construction method and utilized prefabricated modules for facade elements, which significantly accelerated the construction timeline and improved on-site safety.",
    outcome:
      "Skyline Tower was completed three months ahead of schedule and has since become a LEED Platinum certified architectural icon, setting a new standard for commercial buildings in the region.",
    timeline: [
      { stage: "Phase 1: Foundation", description: "Deep piling and foundational work." },
      { stage: "Phase 2: Superstructure", description: "Erection of the steel frame." },
      { stage: "Phase 3: Facade & Glazing", description: "Installation of the exterior curtain wall." },
      { stage: "Phase 4: Interior Fit-out", description: "Completing internal spaces and systems." },
    ],
  },
  {
    id: "willow-creek-residences",
    title: "Willow Creek Residences",
    category: "Residential",
    description:
      "An exclusive gated community of luxury villas, blending modern architecture with natural landscapes.",
    mainImageId: "project-2",
    galleryImageIds: ["project-2-gallery-1", "project-2-gallery-2", "project-2-gallery-3"],
    client: "Serene Living Developments",
    location: "Willow Creek, Suburbia",
    date: "Completed: March 2024",
    challenge:
      "Integrating modern smart-home technology seamlessly into homes designed with a natural, rustic aesthetic, while preserving the surrounding ecosystem.",
    solution:
      "Our team worked closely with architects and tech integrators to conceal wiring and hardware within natural materials. We also implemented a comprehensive environmental management plan.",
    outcome:
      "A highly sought-after residential community that offers the best of both worlds: modern convenience and tranquil nature. The project won the 'Best Residential Development' award.",
    timeline: [
        { stage: "Phase 1: Landscaping & Infrastructure", description: "Preparing the site and utilities." },
        { stage: "Phase 2: Villa Construction", description: "Building structures for all 50 villas." },
        { stage: "Phase 3: Interior & Finishing", description: "Custom interiors and high-end finishes." },
        { stage: "Phase 4: Community Amenities", description: "Clubhouse, pool, and park construction." },
    ],
  },
  {
    id: "heritage-museum-renovation",
    title: "Heritage Museum Renovation",
    category: "Renovation",
    description:
      "A meticulous restoration and modernization of a century-old historical landmark to serve as a public museum.",
    mainImageId: "project-3",
    galleryImageIds: ["project-3-gallery-1", "project-3-gallery-2", "project-3-gallery-3"],
    client: "City Historical Society",
    location: "Old Town District",
    date: "Completed: January 2023",
    challenge:
      "The main difficulty was to reinforce the building's structural integrity and upgrade its facilities to modern standards without compromising its historical character and protected architectural elements.",
    solution:
      "We used advanced techniques like carbon fiber reinforcement and micro-piling. Historical artisans were commissioned to restore ornate details, while modern HVAC and lighting were discreetly integrated.",
    outcome:
      "The museum reopened to public acclaim, preserving a key piece of city heritage for future generations while offering a comfortable and safe visitor experience. It received a preservation excellence award.",
    timeline: [
        { stage: "Phase 1: Structural Assessment & Reinforcement", description: "Securing the building's core." },
        { stage: "Phase 2: Historical Restoration", description: "Painstaking work on original features." },
        { stage: "Phase 3: Modern Systems Integration", description: "Upgrading electrical, plumbing, and HVAC." },
        { stage: "Phase 4: Exhibit Installation & Curation", description: "Preparing for the grand reopening." },
    ],
  },
    {
    id: "corporate-campus-expansion",
    title: "Innovatech Corporate Campus",
    category: "Commercial",
    description:
      "A sprawling campus for a tech giant, designed to foster collaboration and innovation.",
    mainImageId: "project-4",
    galleryImageIds: ["project-4-gallery-1", "project-4-gallery-2", "project-4-gallery-3"],
    client: "Innovatech Inc.",
    location: "Silicon Valley",
    date: "Completed: September 2023",
    challenge: "Constructing a large-scale, technologically advanced campus under a fast-tracked schedule while meeting stringent environmental standards.",
    solution: "Leveraged Building Information Modeling (BIM) for precise planning and off-site prefabrication of major components to speed up on-site assembly.",
    outcome: "A stunning, sustainable campus that reflects the client's forward-thinking brand and provides a world-class environment for its employees.",
     timeline: [
      { stage: "Phase 1: Groundwork", description: "Site preparation and foundation." },
      { stage: "Phase 2: Building Shells", description: "Erecting the main structures." },
      { stage: "Phase 3: Interior Fit-out", description: "Creating collaborative workspaces." },
      { stage: "Phase 4: Landscaping", description: "Developing green spaces and outdoor amenities." },
    ],
  },
];

export const boardMembersData: BoardMember[] = [
  {
    id: "bm-1",
    name: "John Carter",
    title: "Chief Executive Officer",
    imageId: "member-1",
    bio: "With over 30 years in the construction industry, John's vision and leadership are the driving forces behind ApexBuild's success.",
  },
  {
    id: "bm-2",
    name: "Sarah Chen",
    title: "Chief Operations Officer",
    imageId: "member-2",
    bio: "Sarah is an expert in large-scale project management, ensuring every project is delivered on time, on budget, and to the highest standards.",
  },
  {
    id: "bm-3",
    name: "Michael Rodriguez",
    title: "Head of Engineering",
    imageId: "member-3",
    bio: "Michael leads our team of engineers, pushing the boundaries of innovation and structural excellence in every build.",
  },
];

export const expertiseData: Expertise[] = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "From skyscrapers to corporate campuses, we build ambitious commercial spaces that are both functional and iconic."
  },
  {
    icon: HomeIcon,
    title: "Residential Development",
    description: "Crafting luxury homes and communities with a focus on quality, comfort, and timeless design."
  },
  {
    icon: Wrench,
    title: "Renovation & Restoration",
    description: "Breathing new life into existing structures, preserving history while integrating modern functionality."
  }
];

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com",
  },
   {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
  },
];

export const contactDetails = [
  {
    name: "Phone",
    icon: Phone,
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    name: "Email",
    icon: Mail,
    value: "contact@apexbuild.com",
    href: "mailto:contact@apexbuild.com"
  },
  {
    name: "Address",
    icon: MapPin,
    value: "123 Construction Ave, Metropolis, 10101",
  }
]
