import { ArrowLeft, Monitor, CheckCircle, BarChart3, Users, Globe, Shield, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const VibeMonitor = () => {
  const features = [
    {
      icon: Users,
      title: "Sentiment Analysis",
      description: "Gain deep insight into the most influential posts shaping any topic, and track the evolution of the trends they drive. Discover how different audience clusters contribute to the conversation — what narratives they promote, how they shift over time — all delivered with clear, AI-powered summaries of each key development."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Gain deep insights into social media trends with advanced analytics. Our AI-powered platform provides real-time data visualization and trend analysis to help you make informed decisions."
    },
    {
      icon: Globe,
      title: "Multi-Platform Monitoring",
      description: "Comprehensively monitor public sentiment across Reddit, Twitter, LinkedIn, and more — in any language. Our multilingual AI analyzes text, audio, video, and images to uncover the most influential posts, track trend evolution, and identify the clusters of people shaping each narrative. Get concise, AI-powered summaries of every key development for any topic you care about."
    },
    {
      icon: Shield,
      title: "Real-time Insights",
      description: "Lightining fast insights into public sentiment and trends. Our AI processes vast amounts of data in real-time, ensuring you never miss a critical development."
    },
    {
      icon: EyeOff,
      title: "Privacy-First Approach",
      description: "We prioritize your privacy. VibeMonitor operates with a privacy-first approach, ensuring that your data is secure and confidential while providing you with the insights you need."
    }
  ];

  const benefits = [
    "State-of-the-art comprehensive social media monitoring",
    "Real-time sentiment tracking",
    "Multilingual and multimodal analysis (text, audio, video, images)",
    "Privacy and security at the core",
    "Competitive pricing with no hidden fees",
    "Dedicated support and continuous updates",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Social Media Intelligence
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              VibeMonitor
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Advanced report generation from social media platforms including Reddit, Twitter, and LinkedIn. Our GenAI tool understands and analyzes videos, audio, text, and images to provide comprehensive insights into public sentiment and trends.
            </p>
            
            <div className="flex gap-4">
              <ContactForm
                trigger={
                  <Button variant="glass" size="xl">
                    Get Started
                  </Button>
                }
              />
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Powerful <span className="bg-gradient-accent bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              VibeMonitor offers a suite of powerful features designed to give you deep insights into social media trends and public sentiment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Why Choose VibeMonitor?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  VibeMonitor delivers unmatched insights into social media trends and public sentiment. Harness advanced AI for real-time, actionable data—supported by robust privacy, security, competitive pricing, and a dedication to quality.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-hero rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ContactForm
                  trigger={
                    <Button variant="glass" className="w-full">
                      Request Demo
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VibeMonitor;