import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, ExternalLink } from "lucide-react";
import CVForm from "./CVForm";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A team of tech experts with extensive experience in consulting and product development, delivering innovative solutions across diverse industries.
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
                  <h3 className="text-2xl font-bold mb-2">Nizar Ghandri</h3>
                  <p className="text-accent font-medium mb-3">Co-Founder & Development Lead</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Former GenAI Tech Lead at UBS with extensive experience in AI for banking, 
                    telecommunications, and enterprise solutions. Expert in building scalable AI 
                    systems that drive real business value.
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
                  <h3 className="text-2xl font-bold mb-2">Selim Fekih</h3>
                  <p className="text-accent font-medium mb-3">Co-Founder & Operations Lead</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    AI consultant specializing in the humanitarian sector, with hands-on experience developing NLP solutions and innovative products to address humanitarian challenges.
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
          <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white overflow-hidden">
                  <img src="src/assets/badis.jpg" alt="NG" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Badis Machraoui</h3>
                  <p className="text-accent font-medium mb-3">Co-founder & Developer</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Focuses on the development of our platforms, including AI development, prompt engineering, and software backend. Dedicated to building robust, scalable systems that power our AI solutions.
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