import React from "react";
import { Link } from "wouter";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Building2, GraduationCap, Mic, LineChart, Sun, Camera, Code,
  Zap, Shield, Clock, ArrowUpRight, CheckCircle2, Factory, Database,
  Activity, Users
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

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-transparent">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/15 via-primary/5 to-transparent pointer-events-none opacity-80" />
        
        {/* Floating decorative orbs */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-primary/20 text-primary text-sm font-bold mb-8 uppercase tracking-wide shadow-sm">
              <span className="text-xl leading-none -mt-1">●</span>
              Engineering The Future
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-8 relative">
              We Build Software, <br/>
              <span className="text-primary relative inline-block">
                Faster Than Anyone.
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Automystics delivers precision-engineered AI applications, financial platforms, and industrial systems with unprecedented speed.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 group">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg border-card-border hover:bg-white font-semibold group text-foreground bg-white/50 backdrop-blur-sm">
                  Explore Products
                  <ArrowUpRight className="w-5 h-5 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </Button>
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-semibold text-muted-foreground border border-card-border py-6 px-4 bg-white/60 rounded-3xl backdrop-blur-md max-w-4xl mx-auto shadow-sm">
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Fastest Delivery</div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> Enterprise Grade</div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Signed with NDA</div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
              <div className="flex items-center gap-2"><Code className="w-4 h-4 text-primary" /> 100% Custom Built</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Dark Accent Band */}
      <section className="py-16 bg-[#0B1426] border-y border-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            {[
              { label: "Projects Delivered", value: "150+", icon: CheckCircle2 },
              { label: "Lines of Code", value: "2M+", icon: Code },
              { label: "System Uptime", value: "99.9%", icon: Activity },
              { label: "Enterprise Clients", value: "45+", icon: Users }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3 opacity-80" />
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-primary font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Section A: light blue-gray) */}
      <section id="services" className="py-24 md:py-32 relative bg-[#D4DBE8]">
        <div className="absolute inset-0 bg-diagonal-pattern opacity-30" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary border border-card-border text-sm font-bold mb-6 uppercase tracking-wide shadow-sm">
              <span className="text-xl leading-none -mt-1">●</span> OUR EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">Enterprise solutions, <span className="text-primary">engineered to scale.</span></h2>
            <p className="text-xl text-muted-foreground">From high-frequency algorithmic trading to large-scale SCADA monitoring, our suite of AI-powered solutions drives industry transformation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={`/products#${product.id}`} className="block h-full group" data-testid={`product-tile-${product.id}`}>
                  <div className="relative h-full bg-[#334155] rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50">
                    {/* Top gradient accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-400 to-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    
                    {/* Decorative bg blob */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Index number watermark */}
                    <div className="absolute top-6 right-6 text-5xl font-extrabold text-white/5 group-hover:text-primary/30 transition-colors leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="relative p-7 flex flex-col h-full">
                      {/* Icon */}
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <product.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
                        {product.desc}
                      </p>

                      <div className="flex items-center justify-between pt-5 border-t border-white/10">
                        <span className="text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-primary transition-colors">
                          Explore
                        </span>
                        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                          <ArrowUpRight className="w-4 h-4 text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries (Section B: soft gradient panel) */}
      <section id="industries" className="py-24 md:py-32 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#E1E6EF] to-[#D4DBE8]">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border text-primary text-sm font-bold mb-6 uppercase tracking-wide shadow-sm">
                <span className="text-xl leading-none -mt-1">●</span> SECTORS
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">Industries We <span className="text-primary">Power</span></h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
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
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-white border border-card-border shadow-sm flex items-center justify-center">
                      <ind.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-bold mb-1">{ind.name}</h4>
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
              className="relative rounded-[2.5rem] overflow-hidden border border-card-border aspect-square lg:aspect-[4/3] bg-white shadow-xl p-8 flex flex-col items-center justify-center group"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              <div className="w-64 h-64 bg-primary/10 rounded-full blur-[80px] absolute group-hover:bg-primary/20 transition-colors duration-700" />
              <div className="relative z-10 w-full h-full border border-card-border rounded-2xl bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="bg-white rounded-xl border border-card-border shadow-sm flex flex-col items-center justify-center p-4">
                     <LineChart className="w-10 h-10 text-primary mb-2" />
                     <div className="h-2 w-16 bg-muted rounded-full mt-2" />
                  </div>
                  <div className="bg-white rounded-xl border border-card-border shadow-sm flex flex-col items-center justify-center p-4 mt-8">
                     <Sun className="w-10 h-10 text-primary mb-2" />
                     <div className="h-2 w-16 bg-muted rounded-full mt-2" />
                  </div>
                  <div className="bg-white rounded-xl border border-card-border shadow-sm flex flex-col items-center justify-center p-4 -mt-8">
                     <Mic className="w-10 h-10 text-primary mb-2" />
                     <div className="h-2 w-16 bg-muted rounded-full mt-2" />
                  </div>
                  <div className="bg-white rounded-xl border border-card-border shadow-sm flex flex-col items-center justify-center p-4">
                     <Building2 className="w-10 h-10 text-primary mb-2" />
                     <div className="h-2 w-16 bg-muted rounded-full mt-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process / Why Choose Us (Section A: Off-white base) */}
      <section className="py-24 md:py-32 bg-transparent relative">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary border border-card-border text-sm font-bold mb-6 uppercase tracking-wide shadow-sm">
              <span className="text-xl leading-none -mt-1">●</span> WORKFLOW
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">Our <span className="text-primary">Process</span></h2>
            <p className="text-xl text-muted-foreground">A streamlined approach that guarantees delivery in record time without compromising quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-card-border -translate-y-1/2" />
            
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
                className="relative z-10 bg-white border border-card-border shadow-sm rounded-3xl p-8 card-hover-effect"
              >
                <div className="text-5xl font-extrabold text-primary/10 mb-6">{step.num}</div>
                <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
