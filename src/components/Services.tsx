import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Eye, Cpu, Cog, Code, BarChart3, Database, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Services = () => {
  const { t } = useTranslation();
  const { elementRef: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { elementRef: gridRef, isIntersecting: gridVisible } = useIntersectionObserver({ rootMargin: '0px 0px -50px 0px' });
  
  const services = [
    {
      icon: Brain,
      title: t('services.generativeAI.title'),
      description: t('services.generativeAI.description'),
    },
    {
      icon: Brain,
      title: t('services.nlp.title'),
      description: t('services.nlp.description'),
    },
    {
      icon: Eye,
      title: t('services.computerVision.title'),
      description: t('services.computerVision.description'),
    },
    {
      icon: Cog,
      title: t('services.mlops.title'),
      description: t('services.mlops.description'),
    },
    {
      icon: Code,
      title: t('services.softwareEngineering.title'),
      description: t('services.softwareEngineering.description'),
    },
    {
      icon: Database,
      title: t('services.dataEngineering.title'),
      description: t('services.dataEngineering.description'),
    },
    {
      icon: BarChart3,
      title: t('services.aiStrategy.title'),
      description: t('services.aiStrategy.description'),
    },
    {
      icon: BarChart3,
      title: t('services.enterpriseAI.title'),
      description: t('services.enterpriseAI.description'),
    },
    {
      icon: ShieldCheck,
      title: t('services.aiGovernance.title'),
      description: t('services.aiGovernance.description'),
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border ${
                gridVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-8'
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;