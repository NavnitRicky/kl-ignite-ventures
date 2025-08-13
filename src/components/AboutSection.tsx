import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Zap, Users2 } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We foster creative thinking and encourage bold ideas that can transform industries."
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Every startup journey has clear milestones and actionable steps toward success."
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "From idea to MVP, we help startups move quickly and efficiently in the market."
    },
    {
      icon: Users2,
      title: "Community Support",
      description: "A strong network of mentors, peers, and industry experts backing every venture."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={aboutBg}
          alt="Innovation workspace"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Startup Society</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Startup Society at KL University serves as a dynamic platform for passionate students 
                to transform innovative ideas into successful businesses. We provide the ecosystem, 
                mentorship, and resources needed to turn entrepreneurial dreams into reality.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower students with knowledge, skills, and resources to create meaningful 
                  change through entrepreneurship and build sustainable businesses that solve real-world problems.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the premier startup incubator in the region, fostering a culture of 
                  innovation and producing successful entrepreneurs who contribute to economic growth.
                </p>
              </div>
            </div>

            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
              Learn More About Us
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="gradient-card shadow-card border-0 transition-smooth hover:shadow-glow hover:scale-105">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-card-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;