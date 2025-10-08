import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const CTA = () => {
  const { t } = useTranslation();
  const { elementRef, isIntersecting } = useIntersectionObserver({ rootMargin: '0px 0px -50px 0px' });
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div 
            ref={elementRef}
            className={`bg-gradient-hero rounded-2xl p-8 text-white max-w-4xl mx-auto transition-all duration-1000 ${
              isIntersecting 
                ? 'opacity-100 transform scale-100' 
                : 'opacity-0 transform scale-95'
            }`}
          >
            <h3 className="text-3xl font-bold mb-4">
              {t('cta.title')}
            </h3>
            <p className="text-xl mb-6 text-white/90">
              {t('cta.subtitle')}
            </p>
            <ContactForm
              trigger={
                <Button variant="glass" size="xl" className="group">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('cta.button')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;