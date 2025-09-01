import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, ExternalLink, Users, Ticket } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      date: "2025-01-15",
      time: "6:30 PM",
      title: "Monthly Business Meeting",
      location: "Capital Hotel, Lilongwe",
      description: "Regular member meeting to discuss ongoing projects and plan new initiatives.",
      type: "Meeting",
      recurring: true,
      color: "bg-primary/10 border-primary"
    },
    {
      date: "2025-01-25",
      time: "9:00 AM",
      title: "Community School Renovation",
      location: "Kawale Primary School",
      description: "Hands-on project to renovate classrooms and provide new desks for local students.",
      type: "Service Project",
      recurring: false,
      color: "bg-malawi-green/10 border-malawi-green"
    },
    {
      date: "2025-02-08",
      time: "6:00 PM",
      title: "Charity Gala Dinner",
      location: "Bingu International Convention Centre",
      description: "Annual fundraising event supporting education and healthcare initiatives across Central Region.",
      type: "Fundraiser",
      recurring: false,
      color: "bg-malawi-red/10 border-malawi-red"
    },
    {
      date: "2025-02-19",
      time: "6:30 PM",
      title: "Monthly Business Meeting",
      location: "Capital Hotel, Lilongwe",
      description: "Regular member meeting to discuss ongoing projects and plan new initiatives.",
      type: "Meeting",
      recurring: true,
      color: "bg-primary/10 border-primary"
    },
    {
      date: "2025-03-05",
      time: "8:00 AM",
      title: "Tree Planting Initiative",
      location: "Lilongwe Nature Sanctuary",
      description: "Environmental project planting indigenous trees to support local ecosystem restoration.",
      type: "Service Project",
      recurring: false,
      color: "bg-malawi-green/10 border-malawi-green"
    },
    {
      date: "2025-03-22",
      time: "10:00 AM",
      title: "Youth Skills Workshop",
      location: "Lilongwe Youth Centre",
      description: "Entrepreneurship and leadership training for young people in partnership with local organizations.",
      type: "Workshop",
      recurring: false,
      color: "bg-accent/20 border-accent-foreground"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Meeting': return Users;
      case 'Service Project': return Users;
      case 'Fundraiser': return Ticket;
      case 'Workshop': return Users;
      default: return Calendar;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-malawi-green border-malawi-green">
            What's Coming Up
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Upcoming <span className="text-malawi-green">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for meetings, service projects, fundraising events, and community activities. 
            Everyone is welcome to participate in making a difference together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {upcomingEvents.map((event, index) => {
            const TypeIcon = getTypeIcon(event.type);
            return (
              <Card 
                key={`${event.date}-${event.title}`}
                className={`p-6 hover:shadow-warm transition-all duration-300 animate-slide-up border-l-4 ${event.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <TypeIcon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {event.type}
                    </Badge>
                  </div>
                  {event.recurring && (
                    <Badge variant="outline" className="text-xs">
                      Recurring
                    </Badge>
                  )}
                </div>

                <h3 className="font-bold text-xl mb-3 text-card-foreground">{event.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{event.description}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="default" size="sm" className="flex-1">
                    Register Interest
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Add to Calendar
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-secondary/20 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Regular Meetings</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We meet every 2nd Thursday of the month at 6:30 PM. These meetings are open 
              to members and prospective members. Join us to learn about our projects and 
              how you can get involved.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span className="text-card-foreground">Capital Hotel, City Centre, Lilongwe</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-primary" />
                <span className="text-card-foreground">6:30 PM - 8:30 PM</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-hero-gradient text-white animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-6 text-white/90 leading-relaxed">
              Subscribe to our newsletter to receive updates about upcoming events, 
              project opportunities, and ways to get involved in our community work.
            </p>
            <Button variant="heroSecondary" size="lg" className="w-full">
              Subscribe to Updates
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;