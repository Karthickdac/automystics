import React from "react";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Workflow, Cloud, Paintbrush, Settings, Cog, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  { 
    id: "custom-software", 
    title: "Custom Software Development", 
    icon: Code,
    desc: "We engineer bespoke enterprise architecture tailored exactly to your operational needs. Our approach focuses on building highly scalable, secure, and performant applications that drive business efficiency and digital transformation.",
    features: ["Cloud-native architecture", "Microservices design", "Legacy system modernization", "Enterprise integration"]
  },
  { 
    id: "web-dev", 
    title: "Web Application Development", 
    icon: Server,
    desc: "Create powerful, scalable cloud-native web applications using modern technology stacks. We build resilient front-ends and robust back-ends that handle high traffic and complex data workflows with ease.",
    features: ["Single Page Applications (SPA)", "Progressive Web Apps (PWA)", "High-performance backends", "Real-time data processing"]
  },
  { 
    id: "mobile-dev", 
    title: "Mobile App Development", 
    icon: Smartphone,
    desc: "Deliver exceptional mobile experiences with native and cross-platform application development. We craft intuitive mobile solutions that keep your users engaged, whether on iOS or Android devices.",
    features: ["iOS & Android native apps", "React Native & Flutter", "Offline-first capabilities", "Push notification systems"]
  },
  { 
    id: "ai-integration", 
    title: "AI Integration & Automation", 
    icon: Workflow,
    desc: "Transform your business operations with intelligent workflow automation. We integrate cutting-edge AI models to automate repetitive tasks, extract insights from unstructured data, and enhance decision-making processes.",
    features: ["Custom LLM integration", "Predictive analytics", "Process automation", "Computer vision solutions"]
  },
  { 
    id: "cloud-devops", 
    title: "Cloud & DevOps Services", 
    icon: Cloud,
    desc: "Optimize your infrastructure for maximum reliability and scalability. Our DevOps experts design CI/CD pipelines, containerized deployments, and robust cloud architectures that ensure high availability and rapid feature delivery.",
    features: ["AWS, Azure & GCP expertise", "Docker & Kubernetes", "Automated CI/CD pipelines", "Infrastructure as Code (IaC)"]
  },
  { 
    id: "ui-ux", 
    title: "UI/UX Design", 
    icon: Paintbrush,
    desc: "Craft user-centric interfaces that combine aesthetic excellence with intuitive usability. Our design process relies on deep user research to create engaging digital products that delight users and drive conversions.",
    features: ["User research & testing", "Wireframing & prototyping", "Design systems", "Interaction design"]
  },
  { 
    id: "api-integration", 
    title: "API Design & Integration", 
    icon: Settings,
    desc: "Ensure seamless system connectivity with robust API design and integration services. We build secure, well-documented RESTful and GraphQL APIs that connect your disparate software systems into a unified ecosystem.",
    features: ["REST & GraphQL APIs", "Third-party service integration", "API security & rate limiting", "Comprehensive documentation"]
  },
  { 
    id: "maintenance", 
    title: "Software Maintenance & Support", 
    icon: Cog,
    desc: "Protect your software investment with 24/7 support and proactive monitoring. We provide ongoing maintenance, security patches, and performance optimizations to keep your systems running flawlessly around the clock.",
    features: ["24/7 system monitoring", "Security patching & updates", "Performance optimization", "Technical support desk"]
  },
];

export function Services() {
  return (
    <div className="bg-transparent relative">
      <SEO 
        title="Services | Automystics"
        description="Enterprise-grade software engineering, AI integration, and cloud DevOps services."
        canonical="/services"
      />

      <div className="absolute top-0 right-0 w-full max-w-2xl h-[600px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl pt-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-primary text-sm font-bold mb-6 uppercase tracking-wide mx-auto">
              <span className="text-xl leading-none -mt-1">●</span> OUR SERVICES
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight">Engineering <span className="text-primary">Excellence</span></h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We build complex enterprise software faster than anyone else. From custom architecture to AI integration, we deliver robust solutions that scale.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 md:py-32 relative z-10 bg-[#D4DBE8]">
        <div className="absolute inset-0 bg-diagonal-pattern opacity-30" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center scroll-mt-32`}
              >
                <div className="flex-1 w-full">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-foreground text-sm font-bold tracking-wide uppercase mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Service
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 flex items-center gap-4 tracking-tight">
                    <div className="p-3 bg-white shadow-sm border border-card-border rounded-2xl shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    {service.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-card-border shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <Card className="bg-white border-card-border shadow-xl rounded-[2.5rem] aspect-[4/3] flex items-center justify-center overflow-hidden relative group p-4 hover:border-primary/50 transition-colors duration-500">
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors duration-500" />
                    <div className="relative z-10 w-full h-full bg-white/80 backdrop-blur-md rounded-[2rem] border border-card-border shadow-sm flex items-center justify-center">
                      <service.icon className="w-32 h-32 text-primary/40 group-hover:scale-110 group-hover:text-primary transition-all duration-700" />
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}