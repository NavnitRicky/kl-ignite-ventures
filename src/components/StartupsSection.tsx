import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, Calendar } from "lucide-react";

const StartupsSection = () => {
  const startups = [
    {
      name: "Innovience",
      url: "www.innovience.in",
      description: "Revolutionary platform transforming how students learn and innovate through AI-powered educational tools and personalized learning experiences.",
      status: "Revenue Generating",
      founded: "2023",
      team: "8 Members",
      category: "EdTech",
      highlights: [
        "AI-powered learning platform",
        "10,000+ active users",
        "Partnership with 5+ colleges",
        "Featured in TechCrunch"
      ]
    },
    {
      name: "PadhaiXpress",
      url: "padhaixpress.in",
      description: "Fast-track learning platform that delivers comprehensive educational content and exam preparation materials with instant access and interactive features.",
      status: "Revenue Generating",
      founded: "2023",
      team: "6 Members",
      category: "Education",
      highlights: [
        "Instant content delivery",
        "5,000+ students served",
        "99% satisfaction rate",
        "Mobile-first approach"
      ]
    }
  ];

  return (
    <section id="startups" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the innovative startups born from our community. These ventures are not just ideas anymore – 
            they're generating real revenue and making a meaningful impact.
          </p>
        </div>

        {/* Startups Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {startups.map((startup, index) => (
            <Card key={index} className="gradient-card shadow-card border-0 transition-smooth hover:shadow-glow hover:scale-[1.02]">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-card-foreground">{startup.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-success/10 text-success hover:bg-success/20">
                        {startup.status}
                      </Badge>
                      <Badge variant="outline">{startup.category}</Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Founded {startup.founded}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{startup.team}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-success font-medium">Growing</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {startup.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-card-foreground">Key Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {startup.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm font-medium text-primary">{startup.url}</span>
                  <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
                    Visit Website
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Have a Startup Idea?</h3>
            <p className="text-muted-foreground">
              Join our community and turn your vision into the next success story
            </p>
          </div>
          <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 py-6">
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;