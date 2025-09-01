import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Projects", href: "#projects" },
    { name: "Membership", href: "#get-involved" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" }
  ];

  const projectLinks = [
    { name: "Education Support", href: "#projects" },
    { name: "Healthcare Initiatives", href: "#projects" },
    { name: "Community Development", href: "#projects" },
    { name: "Youth Programs", href: "#projects" },
    { name: "Environmental Projects", href: "#projects" }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: MessageCircle, name: "WhatsApp", href: "#" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">RT32</span>
              </div>
              <div>
                <div className="text-xl font-bold">Round Table Lilongwe 32</div>
                <div className="text-primary-foreground/80 text-sm">Service • Fellowship • Community</div>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-md">
              Round Table Lilongwe 32 is a charitable service organization for men aged 18-45, 
              dedicated to making a positive impact in our community through fellowship, 
              service projects, and local development initiatives.
            </p>
            <div className="flex items-center text-sm text-primary-foreground/80 mb-2">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Capital Hotel, City Centre, Lilongwe, Malawi</span>
            </div>
            <div className="flex items-center text-sm text-primary-foreground/80">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@rt32lilongwe.org</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Focus Areas</h4>
            <ul className="space-y-3">
              {projectLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/80 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground/80 hover:text-white hover:bg-white/10"
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>

            {/* Call to Action */}
            <Button variant="heroSecondary" size="sm">
              <Heart className="mr-2 h-4 w-4" />
              Support Our Mission
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Round Table Lilongwe 32. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              Part of Round Table International
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;