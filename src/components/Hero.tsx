import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Ethinc
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Co-founded by EPFL alumni and industry veterans from the banking and humanitarian AI sector, 
            we transform businesses with cutting-edge artificial intelligence solutions. 
            From GenAI to computer vision and machine learning, we deliver intelligent systems that drive innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#about">
              <Button variant="accent" size="xl" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="glass" size="xl" className="group">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="aspect-video">
                  <video 
                    controls 
                    className="w-full h-full rounded-lg"
                    poster="/assets/video-poster.jpg"
                  >
                    <source src="/assets/demo-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-white/70">AI Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">99%</div>
              <div className="text-white/70">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-white/70">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-white/70">Privacy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;