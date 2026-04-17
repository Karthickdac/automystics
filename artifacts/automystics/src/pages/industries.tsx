import React from "react";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Cog, Sun, HeartHandshake, Smartphone, Workflow, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const industries = [
  { 
    id: "finance", 
    title: "Finance & Banking", 
    icon: Building2,
    desc: "We architect secure, scalable fintech platforms that process high-volume transactions with absolute reliability. Our solutions ensure regulatory compliance while delivering seamless digital banking experiences for modern consumers.",
    features: ["Core banking integrations", "High-frequency trading systems", "Regulatory compliance automation", "Fraud detection algorithms"]
  },
  { 
    id: "education", 
    title: "Education", 
    icon: GraduationCap,
    desc: "Transform educational administration with our comprehensive management systems. We build platforms that connect administrators, faculty, students, and parents into a single, cohesive digital ecosystem.",
    features: ["Campus management systems", "E-learning platform development", "Student lifecycle tracking", "Automated assessment tools"]
  },
  { 
    id: "manufacturing", 
    title: "Manufacturing", 
    icon: Cog,
    desc: "Drive Industry 4.0 initiatives with intelligent automation. We develop systems that optimize production lines, track inventory in real-time, and utilize predictive maintenance to minimize costly equipment downtime.",
    features: ["IoT sensor integration", "Predictive maintenance models", "Supply chain visibility", "Production line automation"]
  },
  { 
    id: "energy", 
    title: "Energy & Utilities", 
    icon: Sun,
    desc: "Empower the energy sector with advanced grid and asset monitoring solutions. Our software processes vast amounts of telemetry data to optimize energy distribution and manage renewable power generation facilities effectively.",
    features: ["SCADA system development", "Smart grid analytics", "Renewable asset monitoring", "Demand forecasting"]
  },
  { 
    id: "healthcare", 
    title: "Healthcare", 
    icon: HeartHandshake,
    desc: "Modernize patient care and medical administration with secure healthcare technology. We build HIPAA-compliant applications that manage electronic health records, telemedicine portals, and clinical workflows.",
    features: ["HIPAA-compliant architecture", "Telemedicine platforms", "EHR/EMR integrations", "Medical imaging analytics"]
  },
  { 
    id: "retail", 
    title: "Retail & E-Commerce", 
    icon: Smartphone,
    desc: "Create engaging omnichannel retail experiences. Our solutions handle complex product catalogs, optimize dynamic pricing strategies, and streamline fulfillment operations to drive sales and customer loyalty.",
    features: ["Omnichannel commerce platforms", "Dynamic pricing engines", "Inventory optimization", "Customer personalization AI"]
  },
  { 
    id: "logistics", 
    title: "Logistics & Supply Chain", 
    icon: Workflow,
    desc: "Optimize the movement of goods with intelligent logistics software. We deliver platforms for route optimization, fleet management, and end-to-end supply chain visibility to reduce costs and improve delivery times.",
    features: ["Route optimization algorithms", "Fleet management systems", "Warehouse automation", "Real-time shipment tracking"]
  },
  { 
    id: "real-estate", 
    title: "Real Estate & PropTech", 
    icon: Building2,
    desc: "Innovate property management and real estate transactions. We build PropTech solutions that streamline lease management, automate tenant communications, and provide powerful data analytics for property investments.",
    features: ["Property management portals", "Virtual tour platforms", "Smart building integration", "Investment analytics dashboards"]
  },
];

export function Industries() {
  return (
    <div className="bg-transparent relative">
      <SEO 
        title="Industries | Automystics"
        description="Specialized enterprise software solutions across finance, education, energy, healthcare, and more."
        canonical="/industries"
      />

      <div className="absolute top-0 right-0 w-full max-w-2xl h-[600px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl pt-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-primary text-sm font-bold mb-6 uppercase tracking-wide mx-auto">
              <span className="text-xl leading-none -mt-1">●</span> INDUSTRIES WE SERVE
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight">Sectors We <span className="text-primary">Power</span></h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We deliver domain-specific expertise and specialized automation across key industries, modernizing legacy workflows with precision.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 md:py-32 relative z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#F4F6FB] to-[#EBEFF7]">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {industries.map((industry, index) => (
              <motion.div 
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center scroll-mt-32`}
              >
                <div className="flex-1 w-full">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-foreground text-sm font-bold tracking-wide uppercase mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Industry Focus
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 flex items-center gap-4 tracking-tight">
                    <div className="p-3 bg-white shadow-sm border border-card-border rounded-2xl shrink-0">
                      <industry.icon className="w-8 h-8 text-primary" />
                    </div>
                    {industry.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                    {industry.desc}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    {industry.features.map((feature, i) => (
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
                      <industry.icon className="w-32 h-32 text-primary/40 group-hover:scale-110 group-hover:text-primary transition-all duration-700" />
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