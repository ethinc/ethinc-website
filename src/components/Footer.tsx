import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ethnic</h3>
            <p className="text-white/70 leading-relaxed">
              Transforming businesses with cutting-edge AI solutions. 
              From GenAI to computer vision, we deliver intelligent systems that drive innovation.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-white/70 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-white/70 hover:text-accent cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-white/70 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-white cursor-pointer transition-colors">Generative AI</li>
              <li className="hover:text-white cursor-pointer transition-colors">Computer Vision</li>
              <li className="hover:text-white cursor-pointer transition-colors">Machine Learning</li>
              <li className="hover:text-white cursor-pointer transition-colors">MLOps</li>
              <li className="hover:text-white cursor-pointer transition-colors">Software Engineering</li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-white cursor-pointer transition-colors">VibeMonitor</li>
              <li className="hover:text-white cursor-pointer transition-colors">PRISM</li>
              <li className="hover:text-white cursor-pointer transition-colors">Book Demo</li>
              <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>contact@ethnic.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <Button variant="accent" size="sm" className="mt-4">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-white/70">
          <p>&copy; 2024 Ethnic. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;