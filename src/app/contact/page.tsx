import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { boardMembersData, contactDetails, socialLinks } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

export const metadata = {
  title: "Contact Us - ApexBuild",
  description: "Get in touch with the ApexBuild team. Find our contact details, meet our leadership, and find our office location.",
};


export default function ContactPage() {
    const mapImage = PlaceHolderImages.find((img) => img.id === "contact-map");

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="container mx-auto px-4 py-12 md:py-16 text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          We're here to answer your questions, discuss your next project, or
          provide you with more information about our services.
        </p>
      </div>

      {/* Contact Details & Socials */}
      <div className="container mx-auto px-4 pb-16">
        <Card className="shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 p-8">
              <h2 className="font-headline text-2xl font-semibold">
                Contact Information
              </h2>
              <ul className="mt-6 space-y-4">
                {contactDetails.map((detail) => (
                  <li
                    key={detail.name}
                    className="flex items-start gap-4"
                  >
                    <detail.icon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">{detail.name}</h3>
                      {detail.href ? (
                        <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {detail.value}
                        </a>
                      ) : (
                         <p className="text-muted-foreground">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-1 bg-secondary/50 p-8 border-l">
                <h2 className="font-headline text-2xl font-semibold">
                Follow Us
              </h2>
               <p className="mt-2 text-muted-foreground text-sm">
                Stay connected on social media.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                 {socialLinks.map((social) => (
                    <Button key={social.name} variant="outline" size="icon" asChild>
                        <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                            <social.icon className="h-5 w-5" />
                        </a>
                    </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Board Members */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold">
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The driving force behind our success is our team of dedicated and
              experienced professionals.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembersData.map((member) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === member.imageId
              );
              return (
                <Card key={member.id} className="text-center overflow-hidden">
                  {image && (
                    <div className="relative h-56 w-full">
                       <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                           data-ai-hint={image.imageHint}
                        />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {member.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

        {/* Map Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
             <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-semibold">
                Our Location
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                Visit our headquarters. We're located in the heart of the business district.
                </p>
             </div>
             <div className="mt-12 rounded-lg overflow-hidden shadow-xl border">
                {mapImage && (
                    <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={mapImage.imageUrl}
                            alt={mapImage.description}
                            width={1200}
                            height={500}
                            className="w-full object-cover"
                            data-ai-hint={mapImage.imageHint}
                        />
                    </Link>
                )}
             </div>
        </section>

    </div>
  );
}
