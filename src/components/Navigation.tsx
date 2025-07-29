import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-white/80 transition-colors">
            Ethinc
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/90 hover:text-white transition-colors">
              {t('navigation.services')}
            </a>
            <a href="#products" className="text-white/90 hover:text-white transition-colors">
              {t('navigation.products')}
            </a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors">
              {t('navigation.about')}
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">
              {t('navigation.contact')}
            </a>
            <LanguageSwitcher />
            <ContactForm
              trigger={
                <Button variant="hero" size="sm">
                  {t('navigation.contactUs')}
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-white/90 hover:text-white transition-colors py-2">
                {t('navigation.services')}
              </a>
              <a href="#products" className="text-white/90 hover:text-white transition-colors py-2">
                {t('navigation.products')}
              </a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors py-2">
                {t('navigation.about')}
              </a>
              <a href="#contact" className="text-white/90 hover:text-white transition-colors py-2">
                {t('navigation.contact')}
              </a>
              <LanguageSwitcher />
              <ContactForm
                trigger={
                  <Button variant="hero" size="sm" className="w-fit">
                    {t('navigation.contactUs')}
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;