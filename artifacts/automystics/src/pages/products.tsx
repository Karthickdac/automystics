import React from "react";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Mic, LineChart, Sun, Camera, Code, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const allProducts = [
  {
    id: "chit-fund",
    title: "Chit Fund Management",
    category: "Financial Technology",
    description: "A secure, transparent, and fully compliant digital platform designed specifically for finance companies to manage chit funds effortlessly.",
    icon: Building2,
    features: ["Automated dividend calculation", "Member KYC & tracking", "Integrated payment gateways", "Regulatory compliance reporting"]
  },
  {
    id: "school-management",
    title: "School Management System",
    category: "EdTech",
    description: "An end-to-end administration and academic management hub that connects educators, students, and parents in one seamless ecosystem.",
    icon: GraduationCap,
    features: ["Attendance & timetable management", "Fee collection & invoicing", "Examination & grading modules", "Parent-teacher communication portal"]
  },
  {
    id: "kalvicore",
    title: "KalviCore",
    category: "EdTech",
    description: "Our flagship College Management System built for the complex workflows of modern higher education institutions.",
    icon: GraduationCap,
    features: ["University affiliation compliance", "Placement & alumni tracking", "Course & faculty management", "Hostel & transport administration"]
  },
  {
    id: "kural-ai",
    title: "Kural AI",
    category: "Artificial Intelligence",
    description: "Next-generation AI voice automation that transforms how businesses handle customer interactions, support, and internal operations.",
    icon: Mic,
    features: ["Natural language understanding", "Multi-language voice synthesis", "Workflow trigger integration", "Sentiment analysis"]
  },
  {
    id: "auto-algo",
    title: "Auto Algo Trading",
    category: "Financial Technology",
    description: "A high-frequency algorithmic trading platform that executes complex quantitative strategies with sub-millisecond latency.",
    icon: LineChart,
    features: ["Custom strategy builder", "Real-time market data ingestion", "Risk management controls", "Backtesting environment"]
  },
  {
    id: "scada",
    title: "SCADA Monitoring",
    category: "Industrial IoT",
    description: "Enterprise-grade SCADA systems optimized for large-scale solar power plants, providing complete operational visibility and control.",
    icon: Sun,
    features: ["Real-time telemetry", "Predictive maintenance alerts", "Inverter performance tracking", "Historical data analytics"]
  },
  {
    id: "cctv",
    title: "CCTV AutoMonitoring AI",
    category: "Computer Vision",
    description: "Intelligent video analytics that transform passive surveillance cameras into active security and operational monitoring systems.",
    icon: Camera,
    features: ["Intrusion detection", "Safety gear compliance", "Object tracking", "Automated incident alerts"]
  },
  {
    id: "custom",
    title: "Custom Software Development",
    category: "Enterprise Solutions",
    description: "Bespoke software architecture and development for complex business requirements, delivered with our signature high-speed methodology.",
    icon: Code,
    features: ["Cloud-native architecture", "Legacy system modernization", "API design & integration", "Scalable microservices"]
  }
];

export function Products() {
  return (
    <div className="bg-background relative">
      <SEO 
        title="Products & Services | Automystics"
        description="Explore Automystics' suite of enterprise AI and automation solutions."
        canonical="/products"
      />

      <div className="bg-glow-top-right" />

      <div className="pt-32 pb-20 border-b border-white/5 bg-grid-pattern relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Our Solutions</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Powerful, scalable, and intelligent platforms designed to automate complex workflows across industries.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32 md:space-y-48">
            {allProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center scroll-mt-32`}
              >
                <div className="flex-1 w-full">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm font-bold tracking-wide uppercase mb-8">
                    {product.category}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center gap-4 tracking-tight">
                    <div className="p-3 bg-primary/10 rounded-2xl">
                      <product.icon className="w-8 h-8 text-primary" />
                    </div>
                    {product.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="rounded-full h-14 px-8 text-lg font-bold bg-white text-background hover:bg-white/90 group">
                      Request Demo <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                
                <div className="flex-1 w-full">
                  <Card className="bg-card border-white/5 rounded-[2.5rem] aspect-[4/3] flex items-center justify-center overflow-hidden relative group p-4">
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                    <div className="relative z-10 w-full h-full bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/10 flex items-center justify-center">
                      <product.icon className="w-32 h-32 text-primary/50 group-hover:scale-110 group-hover:text-primary transition-all duration-700" />
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
