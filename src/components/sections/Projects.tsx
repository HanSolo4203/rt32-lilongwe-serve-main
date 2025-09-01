import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building2, Heart, Users, Zap, TreePine } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: GraduationCap,
      title: "Education Support Initiative",
      description: "Providing school supplies, uniforms, and scholarships to underprivileged students in Lilongwe schools.",
      impact: "500+ students supported",
      category: "Education",
      color: "bg-malawi-green/10 border-malawi-green"
    },
    {
      icon: Building2,
      title: "Community Infrastructure",
      description: "Building and renovating community centers, schools, and health posts in rural areas around Lilongwe.",
      impact: "8 buildings completed",
      category: "Development",
      color: "bg-primary/10 border-primary"
    },
    {
      icon: Heart,
      title: "Healthcare Outreach",
      description: "Mobile health clinics, medical equipment donations, and health education programs in underserved communities.",
      impact: "2000+ people reached",
      category: "Health",
      color: "bg-malawi-red/10 border-malawi-red"
    },
    {
      icon: Users,
      title: "Youth Empowerment Programs",
      description: "Skills training, entrepreneurship workshops, and mentorship programs for young people in Malawi.",
      impact: "300+ youth trained",
      category: "Youth",
      color: "bg-accent/20 border-accent-foreground"
    },
    {
      icon: Zap,
      title: "Clean Energy Access",
      description: "Solar panel installations and clean cooking solutions for rural households and schools.",
      impact: "50+ households powered",
      category: "Environment",
      color: "bg-malawi-green/10 border-malawi-green"
    },
    {
      icon: TreePine,
      title: "Environmental Conservation",
      description: "Tree planting initiatives, waste management programs, and environmental education campaigns.",
      impact: "5000+ trees planted",
      category: "Environment",
      color: "bg-secondary/20 border-secondary-foreground"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-malawi-green border-malawi-green">
            Our Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Community <span className="text-malawi-green">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through dedicated service and local partnerships, we're creating lasting positive change 
            across Lilongwe and Central Region, Malawi. Here are some of our key initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`p-6 hover:shadow-warm transition-all duration-300 animate-slide-up border-l-4 ${project.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
              </div>
              
              <h3 className="font-bold text-lg mb-3 text-card-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-malawi-green">{project.impact}</span>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="p-8 bg-hero-gradient text-white inline-block animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Want to Support Our Projects?</h3>
            <p className="mb-6 text-white/90 max-w-md">
              Your contribution helps us expand our reach and create more opportunities 
              for positive change in Malawi communities.
            </p>
            <Button variant="heroSecondary" size="lg">
              Make a Donation
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;