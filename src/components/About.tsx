import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import CVForm from "./CVForm";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Nizar Ghandri */}
          <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                  <img src="https://media.licdn.com/dms/image/v2/D4E03AQEnBj4NUYDNtg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696854774907?e=1756339200&v=beta&t=52LovIy1__yBFFESDssjN__pBv5EfMRqgHY-eZZeKWc" alt="NG" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{t('about.nizar.name')}</h3>
                  <p className="text-accent font-medium mb-3">{t('about.nizar.role')}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('about.nizar.bio')}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.linkedin.com/in/nizar-ghandri-232b71174/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Selim Fekih */}
          <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                  <img src="https://media.licdn.com/dms/image/v2/C4E03AQFwDY6141Kx3w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1551684075473?e=1756339200&v=beta&t=0C6pHYlAR0yY5wKWDvOJJJLHklSlgQMKPy0qEU4eLf8" alt="NG" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{t('about.selim.name')}</h3>
                  <p className="text-accent font-medium mb-3">{t('about.selim.role')}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('about.selim.bio')}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.linkedin.com/in/selim-fekih-a37521181/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        

          {/* Badis Machraoui */}
          <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm lg:col-span-full lg:mx-auto">
            <CardContent className="p-0">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                  <img src="https://media.licdn.com/dms/image/v2/D4E03AQH2pxGIwDpjcg/profile-displayphoto-crop_800_800/B4EZhWp9K8HEAI-/0/1753800497760?e=1756944000&v=beta&t=T_cbNGBM0U9p4MNzuLS8WqVvOp-LlukFBxq1cO4JtMs" alt="NG" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{t('about.badis.name')}</h3>
                  <p className="text-accent font-medium mb-3">{t('about.badis.role')}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {t('about.badis.bio')}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://www.linkedin.com/in/badis-machraoui-9a44051b7/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>


        {/* <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Together, we combine deep technical expertise with a mission to democratize AI and create meaningful impact.
          </p>
          <CVForm
            trigger={
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Join Our Mission
              </Button>
            }
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;