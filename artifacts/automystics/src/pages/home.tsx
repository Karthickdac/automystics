import React from "react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Building2, GraduationCap, Mic, LineChart, Sun, Camera, Code,
  Zap, Shield, Clock, ArrowUpRight, CheckCircle2, Factory, Database
} from "lucide-react";

const products = [
  { id: "chit-fund", title: "Chit Fund Management", desc: "Complete transparency for finance companies.", icon: Building2 },
  { id: "kalvicore", title: "KalviCore", desc: "Advanced College Management System.", icon: GraduationCap },
  { id: "kural-ai", title: "Kural AI", desc: "Next-gen intelligent voice automation.", icon: Mic },
  { id: "auto-algo", title: "Auto Algo Trading", desc: "High-frequency precision algorithmic trading.", icon: LineChart },
  { id: "scada", title: "SCADA Monitoring", desc: "Large-scale industrial solar monitoring.", icon: Sun },
  { id: "cctv", title: "CCTV AutoMonitoring", desc: "Real-time AI surveillance and anomaly detection.", icon: Camera },
  { id: "school-management", title: "School Management", desc: "End-to-end modern school administration.", icon: GraduationCap },
  { id: "custom", title: "Custom Software", desc: "Bespoke enterprise applications built fast.", icon: Code }
];

export function Home() {
  return (
    <div className="relative">
      <SEO 
        title="Automystics - Enterprise AI & Automation"
        description="We build complex software faster than anyone else. Enterprise grade, 100% custom built."
        canonical="/"
      />

      <div className="bg-glow-top-right" />
      <div className="bg-glow-bottom-left" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-grid-pattern">
        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Engineering The Future
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.1] mb-8">
              We Build Software, <br/>
              <span className="text-primary relative inline-block">
                Faster Than Anyone.
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Automystics delivers precision-engineered AI applications, financial platforms, and industrial systems with unprecedented speed.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold group">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg border-white/10 hover:bg-white/5 font-semibold group bg-transparent">
                  Explore Products
                  <ArrowUpRight className="w-5 h-5 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Button>
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground border-y border-white/5 py-6 px-4 bg-white/[0.02] rounded-3xl backdrop-blur-sm max-w-4xl mx-auto">
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Fastest Delivery</div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Enterprise Grade</div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Signed with NDA</div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-2"><Code className="w-4 h-4 text-primary" /> 100% Custom Built</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Our Expertise</h2>
            <p className="text-xl text-muted-foreground">From high-frequency algorithmic trading to large-scale SCADA monitoring, our suite of AI-powered solutions drives industry transformation.</p>
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
                <Card className="h-full bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 group cursor-pointer rounded-3xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                      <product.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{product.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">{product.desc}</p>
                    <Link href={`/products#${product.id}`} className="inline-flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors">
                      Learn More <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Industries We Power</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We deliver specialized intelligence and robust automation across key sectors, modernizing legacy workflows.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { name: "Financial Services", desc: "Secure fintech platforms", icon: Building2 },
                  { name: "Education", desc: "Scalable institution mgmt", icon: GraduationCap },
                  { name: "Industrial & Energy", desc: "Real-time SCADA control", icon: Factory },
                  { name: "Enterprise", desc: "Complex workflow automation", icon: Database }
                ].map((ind, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <ind.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{ind.name}</h4>
                      <p className="text-sm text-muted-foreground">{ind.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-square lg:aspect-[4/3] bg-card p-8 flex flex-col items-center justify-center"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              <div className="w-48 h-48 bg-primary/20 rounded-full blur-[80px] absolute" />
              <div className="relative z-10 w-full h-full border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center p-4">
                     <LineChart className="w-10 h-10 text-primary mb-2" />
                     <div className="h-2 w-16 bg-white/20 rounded-full mt-2" />
                  </div>
                  <div className="bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center p-4 mt-8">
                     <Sun className="w-10 h-10 text-primary mb-2" />
                     <div className="h-2 w-16 bg-white/20 rounded-full mt-2" />
                  </div>
                  <div className="bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center p-4 -mt-8">
                     <Mic className="w-10 h-10 text-primary mb-2" />
                     <div className="h-2 w-16 bg-white/20 rounded-full mt-2" />
                  </div>
                  <div className="bg-white/5 rounded-xl border border-white/5 flex flex-col items-center justify-center p-4">
                     <Building2 className="w-10 h-10 text-primary mb-2" />
                     <div className="h-2 w-16 bg-white/20 rounded-full mt-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process / Why Choose Us */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Our Process</h2>
            <p className="text-xl text-muted-foreground">A streamlined approach that guarantees delivery in record time without compromising quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2" />
            
            {[
              { num: "01", title: "Discover", desc: "Deep dive into requirements and architecture planning." },
              { num: "02", title: "Design", desc: "UI/UX wireframing and scalable database schema design." },
              { num: "03", title: "Build", desc: "Rapid iterative development using advanced AI tooling." },
              { num: "04", title: "Deliver", desc: "Rigorous testing, deployment, and ongoing support." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 bg-card border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-colors"
              >
                <div className="text-5xl font-extrabold text-white/5 mb-6">{step.num}</div>
                <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
