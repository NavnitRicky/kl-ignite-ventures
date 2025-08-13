import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">SS</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">Startup Society</h1>
              <p className="text-xs text-muted-foreground">KL University</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
            <a href="#startups" className="text-foreground hover:text-primary transition-smooth">
              Startups
            </a>
            <a href="#achievements" className="text-foreground hover:text-primary transition-smooth">
              Achievements
            </a>
            <a href="#join" className="text-foreground hover:text-primary transition-smooth">
              Join Us
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="gradient-primary shadow-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-smooth">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-smooth">
                About
              </a>
              <a href="#startups" className="text-foreground hover:text-primary transition-smooth">
                Startups
              </a>
              <a href="#achievements" className="text-foreground hover:text-primary transition-smooth">
                Achievements
              </a>
              <a href="#join" className="text-foreground hover:text-primary transition-smooth">
                Join Us
              </a>
              <Button variant="default" className="gradient-primary shadow-glow w-full mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;