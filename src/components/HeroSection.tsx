import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Innovate.
                </span>{" "}
                <span className="text-foreground">Create.</span>{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Succeed.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join KL University's premier Startup Society where entrepreneurial dreams become reality. 
                We're building the next generation of successful startups together.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2+</p>
                  <p className="text-sm text-muted-foreground">Active Startups</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Revenue</p>
                  <p className="text-sm text-muted-foreground">Generating</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary shadow-hero text-lg px-8 py-6">
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5">
                Explore Startups
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Already have a startup idea? <a href="#join" className="text-primary hover:underline">Let's discuss it →</a>
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Startup Society - Innovation and Collaboration"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-card shadow-card rounded-xl p-4 border">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <p className="text-sm font-medium">2 Active Startups</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card shadow-card rounded-xl p-4 border">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">₹10L+</p>
                <p className="text-sm text-muted-foreground">Revenue Generated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;