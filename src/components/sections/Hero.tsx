import { Button } from "@/components/ui/button";
import { ArrowDown, Heart, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(31, 71, 136, 0.8), rgba(33, 135, 61, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="animate-fade-in">
          {/* Logo Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30 animate-float">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-2xl">RT32</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            RT<br />
            <span className="text-malawi-green">Lilongwe 32</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Serving our community with fellowship, charity, and hope
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Men aged 18-45 making a difference in Lilongwe, Central Region, Malawi
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              <Heart className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Get Involved
            </Button>
            <Button variant="heroSecondary" size="lg">
              <Users className="mr-2 h-5 w-5" />
              Our Projects
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-white/20 rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-4 border-malawi-green/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;