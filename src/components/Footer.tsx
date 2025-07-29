import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer transition-colors">Natural Language Processing (NLP)</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Generative AI</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Computer Vision & ML Applications</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Engineering, MLOps & Infrastructure</li>
              {/* <li className="hover:text-foreground cursor-pointer transition-colors">Enterprise AI Strategy, Integration & Governance</li> */}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <Link to="/vibemonitor" className="block hover:text-foreground transition-colors">
                <li className="cursor-pointer">VibeMonitor</li>
              </Link>
              <Link to="/prism" className="block hover:text-foreground transition-colors">
                <li className="cursor-pointer">PRISM</li>
              </Link>
              {/* <li className="hover:text-foreground cursor-pointer transition-colors">Case Studies</li> */}
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
              {/* <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Lausanne, Vaud CH</span>
              </div>
              <div className="flex space-x-4">
                {/* <Twitter className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" /> */}
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                <a
                  href="https://github.com/ethinc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ethinc GitHub"
                >
                  <Github className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                </a>
              </div>
    
            </div>
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