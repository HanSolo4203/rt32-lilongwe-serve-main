import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Meeting Location",
      details: ["Capital Hotel", "City Centre, Lilongwe", "Central Region, Malawi"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Contact Number",
      details: ["+265 (0) 1 123 4567", "WhatsApp Available"],
      color: "text-malawi-green"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@rt32lilongwe.org", "membership@rt32lilongwe.org"],
      color: "text-malawi-red"
    },
    {
      icon: Clock,
      title: "Meeting Times",
      details: ["Every 2nd Thursday", "6:30 PM - 8:30 PM", "Visitors Welcome"],
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      handle: "@RT32Lilongwe",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@rt32_lilongwe",
      color: "hover:text-pink-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "Round Table Lilongwe 32",
      color: "hover:text-blue-700"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "+265 (0) 1 123 4567",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact <span className="text-malawi-green">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to join our mission or learn more about Round Table Lilongwe 32? 
            We'd love to hear from you and welcome you to our community of service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card 
              key={info.title}
              className="p-6 text-center hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center`}>
                <info.icon className={`h-6 w-6 ${info.color}`} />
              </div>
              <h4 className="font-semibold mb-3 text-card-foreground">{info.title}</h4>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 animate-slide-up">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Send Us a Message</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-card-foreground">Interest</label>
                  <select className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background">
                    <option>Membership Inquiry</option>
                    <option>Volunteer Opportunities</option>
                    <option>Partnership</option>
                    <option>Donation</option>
                    <option>General Information</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2 text-card-foreground">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background"
                  placeholder="Tell us how you'd like to get involved or any questions you have..."
                ></textarea>
              </div>
              <Button className="w-full mt-6" size="lg">
                Send Message
              </Button>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-hero-gradient text-white animate-slide-up">
              <h4 className="text-xl font-bold mb-4">Follow Our Journey</h4>
              <p className="text-white/90 mb-6 text-sm leading-relaxed">
                Stay connected with RT32 Lilongwe on social media for updates on our projects, 
                events, and impact in the community.
              </p>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <div key={social.name} className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                    <social.icon className="h-5 w-5" />
                    <div>
                      <div className="font-medium text-sm">{social.name}</div>
                      <div className="text-xs text-white/60">{social.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 animate-slide-up">
              <h4 className="text-lg font-bold mb-4 text-card-foreground">Quick Links</h4>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-left">
                  Membership Application
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  Volunteer Registration
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  Donation Portal
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left">
                  Event Calendar
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;