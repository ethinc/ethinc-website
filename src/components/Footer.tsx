import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer id="contact" className="bg-card text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.services')}</h4>
            <ul className="space-y-2 text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer transition-colors">{t('services.nlp.title')}</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">{t('services.generativeAI.title')}</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">{t('services.computerVision.title')}</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">{t('services.mlops.title')}</li>
              {/* <li className="hover:text-foreground cursor-pointer transition-colors">Enterprise AI Strategy, Integration & Governance</li> */}
            </ul>
          </div>

          {/* Products */}
          {/* <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.products')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <Link to="/vibemonitor" className="block hover:text-foreground transition-colors">
                <li className="cursor-pointer">{t('products.vibeMonitor.title')}</li>
              </Link>
              <Link to="/prism" className="block hover:text-foreground transition-colors">
                <li className="cursor-pointer">{t('products.prism.title')}</li>
              </Link>
            </ul>
          </div> */}

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.contact')}</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>{t('footer.email')}</span>
              </div>
              {/* <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>{t('footer.location')}</span>
              </div>
              <div className="flex space-x-4">
                {/* <Twitter className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" /> */}
                <a
                  href="https://www.linkedin.com/company/ethinc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ethinc LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                </a>
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
          <p>{t('footer.copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t('footer.terms')}</a>
            <a href="#" className="hover:text-foreground transition-colors">{t('footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;