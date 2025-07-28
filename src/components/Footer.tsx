import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ethinc</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses with cutting-edge AI solutions. 
              From GenAI to computer vision, we deliver intelligent systems that drive innovation.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">Generative AI</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Computer Vision</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Machine Learning</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">MLOps</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Software Engineering</li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">VibeMonitor</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">PRISM</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Book Demo</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Case Studies</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>contact@ethinc.ch</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Lausanne, CH</span>
              </div>
            </div>
            <Button variant="accent" size="sm" className="mt-4">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; 2025 Ethinc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;