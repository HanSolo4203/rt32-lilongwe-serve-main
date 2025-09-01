import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserPlus, HandHeart, CreditCard, Calendar, Mail, Users } from "lucide-react";

const GetInvolved = () => {
  const opportunities = [
    {
      icon: UserPlus,
      title: "Become a Member",
      description: "Join our brotherhood of service-minded men aged 18-45 who are passionate about making a difference in Malawi.",
      requirements: ["Age: 18-45 years", "Commitment to service", "Professional background preferred"],
      action: "Apply for Membership",
      color: "bg-primary/5 border-primary"
    },
    {
      icon: HandHeart,
      title: "Volunteer with Us",
      description: "Support our projects through your time, skills, and expertise. Every contribution makes a meaningful impact.",
      requirements: ["Flexible schedule", "Passion for community service", "Diverse skills welcome"],
      action: "Join as Volunteer",
      color: "bg-malawi-green/5 border-malawi-green"
    },
    {
      icon: CreditCard,
      title: "Make a Donation",
      description: "Financial contributions help us expand our reach and support more families and communities across Central Region.",
      requirements: ["Any amount welcome", "Secure online payments", "Tax-deductible receipts"],
      action: "Donate Now",
      color: "bg-malawi-red/5 border-malawi-red"
    }
  ];

  const membershipBenefits = [
    "Networking with professionals across Lilongwe",
    "Leadership development opportunities",
    "International Round Table connections",
    "Personal growth through service",
    "Access to exclusive events and activities",
    "Community recognition for contributions"
  ];

  return (
    <section className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Join Our Mission
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get <span className="text-malawi-green">Involved</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            There are many ways to support Round Table Lilongwe 32's mission. Whether through 
            membership, volunteering, or donations, your involvement makes a real difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={opportunity.title}
              className={`p-8 text-center hover:shadow-glow transition-all duration-300 animate-slide-up border-l-4 ${opportunity.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <opportunity.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{opportunity.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{opportunity.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-card-foreground">Requirements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {opportunity.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-malawi-green rounded-full mr-2"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className="w-full" variant="default">
                {opportunity.action}
              </Button>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6 text-foreground">Membership Benefits</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Round Table membership offers personal and professional growth opportunities while 
              making a meaningful impact in your community. Connect with like-minded individuals 
              and develop leadership skills through service.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3">
              {membershipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-malawi-green rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-hero-gradient text-white animate-slide-up">
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-white/80" />
              <h4 className="text-2xl font-bold mb-4">Ready to Join RT32?</h4>
              <p className="mb-6 text-white/90 leading-relaxed">
                Take the first step towards making a lasting impact in Malawi. 
                Contact us to learn more about membership opportunities.
              </p>
              
              <div className="space-y-3 mb-6">
                <Button variant="heroSecondary" size="lg" className="w-full">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Membership Committee
                </Button>
                <Button variant="ghost" size="lg" className="w-full text-white border-white/30 hover:bg-white/10">
                  <Calendar className="mr-2 h-5 w-5" />
                  Attend Our Next Meeting
                </Button>
              </div>
              
              <p className="text-sm text-white/70">
                Next meeting: Every 2nd Thursday, 6:30 PM<br />
                Capital Hotel, Lilongwe
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;