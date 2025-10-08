import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import EthincIcon from "@/assets/ethinc_icon.png";

const Footer = () => {
  const { t } = useTranslation();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  return (
    <footer className="bg-card text-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          {/* Contact */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t('footer.emailLabel')}</p>
                  <a 
                    href={`mailto:${t('footer.email')}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {t('footer.email')}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t('footer.locationLabel')}</p>
                  <p className="text-muted-foreground">{t('footer.location')}</p>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <p className="text-sm font-medium text-foreground mb-3">{t('footer.followUs')}</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/ethinc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ethinc LinkedIn"
                  className="group"
                >
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                </a>
                <a
                  href="https://github.com/ethinc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ethinc GitHub" 
                  className="group"
                >
                  <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </div>
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