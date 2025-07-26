import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Shield, Calendar, ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Monitor,
      title: "VibeMonitor",
      subtitle: "Social Media Intelligence",
      description: "Advanced report generation from social media platforms including Reddit, Twitter, and LinkedIn. Our AI understands and analyzes videos, audio, text, and images to provide comprehensive insights into public sentiment and trends.",
      features: [
        "Multi-platform social media monitoring",
        "Multimedia content analysis (video, audio, text, images)",
        "Real-time sentiment tracking",
        "Comprehensive reporting dashboard",
        "Trend identification and prediction"
      ],
      gradient: "bg-gradient-primary"
    },
    {
      icon: Shield,
      title: "PRISM",
      subtitle: "Privacy-Respecting RAG Pipeline",
      description: "Privacy-Respecting Retrieval & Information Synthesis Machine - a specialized RAG pipeline with personal retrieval algorithm that's fully local, private, and scalable for enterprise needs.",
      features: [
        "100% local and private processing",
        "Specialized RAG architecture",
        "Personal retrieval algorithm",
        "Enterprise-grade scalability",
        "Zero data leakage guarantee"
      ],
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge AI products designed to transform how businesses understand 
            and interact with data while maintaining the highest standards of privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <CardHeader className="relative">
                <div className={`w-16 h-16 ${product.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  {product.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="hero" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Demo
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Schedule a personalized demo of our products and see how Ethnic's AI solutions 
              can revolutionize your operations.
            </p>
            <Button variant="glass" size="xl" className="group">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;