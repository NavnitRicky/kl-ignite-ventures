import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, Users, Lightbulb, Target } from "lucide-react";

const JoinSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Mentorship",
      description: "Get guidance from successful entrepreneurs and industry experts"
    },
    {
      icon: Lightbulb,
      title: "Resources",
      description: "Access to funding, tools, and infrastructure needed for your startup"
    },
    {
      icon: Target,
      title: "Network",
      description: "Connect with like-minded entrepreneurs and potential co-founders"
    }
  ];

  const requirements = [
    "Currently enrolled at KL University",
    "Passionate about entrepreneurship",
    "Committed to collaborative growth",
    "Open to learning and sharing knowledge"
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Join <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to turn your startup dreams into reality? Become part of a community that's 
            already generating revenue and making an impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Get Started Today</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Email</label>
                  <Input type="email" placeholder="your.email@kluniversity.in" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Phone Number</label>
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">Year of Study</label>
                  <Input placeholder="e.g., 2nd Year B.Tech CSE" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground">
                    Tell us about your startup idea or interests
                  </label>
                  <Textarea 
                    placeholder="Describe your startup idea, entrepreneurial interests, or what you hope to learn..."
                    rows={4}
                  />
                </div>

                <Button className="w-full gradient-primary shadow-glow text-lg py-6">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Benefits */}
            <Card className="gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">What You'll Get</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">startup.society@kluniversity.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">KL University, Vaddeswaram, Guntur</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    Usually responds within 24 hours
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;