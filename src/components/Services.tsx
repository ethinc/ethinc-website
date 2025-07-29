import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Eye, Cpu, Cog, Code, BarChart3, Database, ShieldCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Natural Language Processing (NLP)",
      description: "Expertise in text classification, named entity recognition (NER), sentiment analysis, information extraction, and language understanding for multilingual and domain-specific applications.",
    },
    {
      icon: Brain,
      title: "Generative AI",
      description: "Advanced LLMs, content generation, prompt engineering, model adaptation and deployment, finetuning for your data, and privacy-focused solutions including on-premise and secure deployments.",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Object detection, image recognition, visual analysis, and custom model finetuning for your specific industrial or commercial use cases.",
    },
    {
      icon: Cog,
      title: "MLOps & Privacy",
      description: "End-to-end ML pipeline management, privacy-preserving model deployment, monitoring, and scalable infrastructure for secure and reliable AI operations.",
    },
    {
      icon: Code,
      title: "Software Engineering",
      description: "Full-stack development, system architecture, and technical consulting for robust, scalable, and maintainable software solutions.",
    },
    {
      icon: Database,
      title: "Data Engineering & Architecture",
      description: "Design and implementation of scalable data pipelines, real-time processing, data lakes/warehouses, and architecture optimized for ML and analytics workflows.",
    },
    {
      icon: BarChart3,
      title: "AI Strategy & Roadmapping",
      description: "AI opportunity assessment, technology selection, responsible AI governance, and actionable roadmaps for digital transformation and business impact.",
    },
    {
      icon: BarChart3,
      title: "Enterprise AI Integration & Enablement",
      description: "Seamless integration of AI systems into enterprise workflows, AI-powered analysis generation, user training, and ongoing support to maximize adoption and value.",
    },
    {
      icon: ShieldCheck,
      title: "AI Governance & Compliance",
      description: "Establishing frameworks for responsible AI use, regulatory alignment (e.g., GDPR, AI Act), risk assessment, auditability, and internal policy development for enterprise-scale deployments.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI, GenAI, and computer vision solutions for your business, delivered by EPFL alumni and industry experts. From research to production, we help you unlock value and drive innovation with advanced, privacy-focused technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border">
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