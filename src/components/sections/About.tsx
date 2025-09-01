import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Target, Globe, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Handshake,
      title: "Fellowship",
      description: "Building lifelong friendships through service and shared purpose"
    },
    {
      icon: Target,
      title: "Service",
      description: "Dedicated to improving lives in the Lilongwe community"
    },
    {
      icon: Globe,
      title: "International",
      description: "Part of the global Round Table movement spanning 60+ countries"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to making meaningful, lasting impact through our initiatives"
    }
  ];

  return (
    <section id="about" className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About RT32 Lilongwe
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Serving <span className="text-malawi-green">Malawi</span> with Purpose
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Round Table Lilongwe 32 is a chartered service organization for men aged 18-45, 
            dedicated to fostering fellowship and making a positive impact in our community 
            through charitable initiatives and development projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Our Mission in Lilongwe</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded as part of the international Round Table movement, RT32 Lilongwe brings together 
              young professionals and entrepreneurs who are passionate about creating positive change 
              in Central Region, Malawi. We believe in the power of fellowship to drive meaningful 
              community service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through our diverse membership of business leaders, professionals, and community advocates, 
              we address local challenges in education, healthcare, youth development, and economic empowerment. 
              Our work directly benefits families and communities throughout Lilongwe and surrounding areas.
            </p>
          </div>

          <Card className="p-8 shadow-warm animate-slide-up bg-card/50 backdrop-blur-sm">
            <h4 className="text-xl font-semibold mb-4 text-card-foreground">Quick Facts</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Founded:</span>
                <span className="font-medium text-card-foreground">2018</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Members:</span>
                <span className="font-medium text-card-foreground">25+ Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Age Range:</span>
                <span className="font-medium text-card-foreground">18-45 years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium text-card-foreground">Lilongwe, Malawi</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Projects Completed:</span>
                <span className="font-medium text-malawi-green">50+</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="p-6 text-center hover:shadow-glow transition-all duration-300 animate-fade-in border-l-4 border-l-malawi-green"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-3 text-card-foreground">{value.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;