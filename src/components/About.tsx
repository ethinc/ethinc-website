import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Ethnic
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by industry veterans with deep expertise in AI across finance, telecommunications, and humanitarian sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Nizar Ghandri */}
          <Card className="p-8 bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  NG
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Nizar Ghandri</h3>
                  <p className="text-accent font-medium mb-3">Co-Founder & CTO</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Former GenAI Tech Lead at UBS with extensive experience in AI for banking, 
                    telecommunications, and enterprise solutions. Expert in building scalable AI 
                    systems that drive real business value.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://linkedin.com/in/nizar-ghandri" 
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
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  SF
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Selim Fekih</h3>
                  <p className="text-accent font-medium mb-3">Co-Founder & CEO</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Prominent figure in AI applications for the humanitarian sector. 
                    Passionate about leveraging artificial intelligence to solve complex 
                    social challenges and create positive global impact.
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-sm">Humanitarian AI Expert</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Together, we combine deep technical expertise with a mission to democratize AI and create meaningful impact.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            Join Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;