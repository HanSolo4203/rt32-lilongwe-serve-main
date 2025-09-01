import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import GetInvolved from "@/components/sections/GetInvolved";
import Events from "@/components/sections/Events";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <div id="projects">
        <Projects />
      </div>
      <div id="get-involved">
        <GetInvolved />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
