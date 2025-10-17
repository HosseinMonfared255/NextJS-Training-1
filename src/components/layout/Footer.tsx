import Link from "next/link";
import Logo from "@/components/Logo";
import { contactDetails, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/submit-project", label: "Submit Project" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Building Tomorrow's Landmarks, Today.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              {contactDetails.map((detail) => (
                <li key={detail.name} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <detail.icon className="h-4 w-4 mt-1 shrink-0 text-primary" />
                  <span>{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
           <div className="md:col-span-1">
            <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
            <p className="mt-4 text-sm text-muted-foreground">
                Stay updated with our latest projects and news.
            </p>
            <div className="mt-4 flex space-x-2">
              {socialLinks.map((social) => (
                 <Button key={social.name} variant="outline" size="icon" asChild>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        <social.icon className="h-4 w-4" />
                    </a>
                 </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ApexBuild. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
