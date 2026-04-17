import React from "react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Building2, 
  GraduationCap, 
  Mic, 
  LineChart, 
  Sun, 
  Camera, 
  Code,
  Zap,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react";
import heroBg from "../assets/hero-bg.png";
import techBg from "../assets/tech-bg.png";
import aiBrain from "../assets/ai-brain.png";

const products = [
  {
    id: "chit-fund",
    title: "Chit Fund Management",
    description: "Comprehensive digital platform for finance companies to manage chit funds with total transparency.",
    icon: Building2
  },
  {
    id: "school-management",
    title: "School Management System",
    description: "End-to-end administration, academic tracking, and communication hub for modern schools.",
    icon: GraduationCap
  },
  {
    id: "kalvicore",
    title: "KalviCore",
    description: "Advanced College Management System designed for complex higher education workflows.",
    icon: GraduationCap
  },
  {
    id: "kural-ai",
    title: "Kural AI",
    description: "Intelligent voice automation powering next-generation customer interactions.",
    icon: Mic
  },
  {
    id: "auto-algo",
    title: "Auto Algo Trading",
    description: "High-frequency, precision-engineered algorithmic trading platform for financial markets.",
    icon: LineChart
  },
  {
    id: "scada",
    title: "SCADA Monitoring",
    description: "Large-scale industrial monitoring system optimized for solar power plants.",
    icon: Sun
  },
  {
    id: "cctv",
    title: "CCTV AutoMonitoring AI",
    description: "Intelligent anomaly detection and real-time alerts for industrial surveillance.",
    icon: Camera
  },
  {
    id: "custom",
    title: "Custom Software Development",
    description: "Bespoke enterprise applications delivered with unprecedented speed.",
    icon: Code
  }
];

const industries = [
  { name: "Financial Services", desc: "Secure, compliant fintech platforms" },
  { name: "Education", desc: "Scalable institution management" },
  { name: "Industrial & Energy", desc: "Real-time monitoring and control" },
  { name: "Enterprise", desc: "Complex workflow automation" }
];

export function Home() {
  return (
    <>
      <SEO 
        title="Home"
        description="Automystics - An AI Automation Company building complex software faster than anyone else."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="AI Neural Network" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>An AI Automation Company</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
              We Build The Future, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Faster Than Anyone.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              We fulfill ANY complex software requirement with minimum development time. Automystics delivers precision-engineered applications that power enterprises, financial institutions, and industrial plants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 font-semibold border-white/10 hover:bg-white/5">
                  Explore Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Engineered for Excellence</h2>
            <p className="text-lg text-muted-foreground">From high-frequency algorithmic trading to large-scale SCADA monitoring, our suite of AI-powered solutions drives industry transformation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{product.description}</p>
                    <Link href={`/products#${product.id}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={techBg} 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Automystics Advantage</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just build software; we engineer competitive advantages. Our unique methodology allows us to deliver mission-critical applications at a fraction of the traditional development time.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Unprecedented Speed", desc: "Deploy complex applications in weeks, not months.", icon: Zap },
                  { title: "Enterprise Reliability", desc: "Bank-grade security and uncompromising uptime.", icon: Shield },
                  { title: "Future-Proof Architecture", desc: "Built on scalable, AI-ready technical foundations.", icon: Clock }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square lg:aspect-auto lg:h-[600px]"
            >
              <img 
                src={aiBrain} 
                alt="AI Intelligence" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">Delivering specialized intelligence across key sectors.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-white/5 text-center group hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-sm text-muted-foreground">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <Link href="/contact">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-primary-foreground p-4 rounded-full shadow-2xl shadow-primary/20 flex items-center justify-center group cursor-pointer border border-white/10"
            data-testid="sticky-cta"
          >
            <div className="flex items-center gap-3 px-2">
              <span className="font-semibold">Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </Link>
      </div>
    </>
  );
}