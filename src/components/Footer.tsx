import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SS</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Startup Society</h3>
                <p className="text-xs text-muted-foreground">KL University</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering the next generation of entrepreneurs at KL University. 
              From innovative ideas to profitable ventures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </a>
              <a href="#startups" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Our Startups
              </a>
              <a href="#achievements" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Achievements
              </a>
              <a href="#join" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Join Us
              </a>
            </div>
          </div>

          {/* Our Startups */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Our Startups</h4>
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h5 className="text-sm font-medium text-foreground">Innovience</h5>
                  <ExternalLink className="w-3 h-3 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">AI-powered learning platform</p>
                <p className="text-xs text-primary">www.innovience.in</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h5 className="text-sm font-medium text-foreground">PadhaiXpress</h5>
                  <ExternalLink className="w-3 h-3 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Fast-track learning platform</p>
                <p className="text-xs text-primary">padhaixpress.in</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">startup.society@kluniversity.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    KL University<br />
                    Vaddeswaram, Guntur<br />
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
              Get in Touch
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Startup Society, KL University. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Startup Society</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;