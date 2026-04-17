import React from "react";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Users, Workflow, Briefcase, BookOpen, FileText, HeartHandshake, CheckCircle2, Cloud, Shield, Cpu, GraduationCap, Building } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Company() {
  return (
    <div className="bg-transparent relative">
      <SEO 
        title="Company | Automystics"
        description="Learn about Automystics, our process, careers, and the partners that power our AI automation."
        canonical="/company"
      />

      <div className="absolute top-0 right-0 w-full max-w-2xl h-[600px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl pt-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-primary text-sm font-bold mb-6 uppercase tracking-wide mx-auto">
              <span className="text-xl leading-none -mt-1">●</span> THE COMPANY
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight">Who We <span className="text-primary">Are</span></h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We are engineers, designers, and strategists obsessed with building software that runs the world's most demanding operations.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 md:py-32 relative z-10 bg-[#D4DBE8]">
        <div className="absolute inset-0 bg-diagonal-pattern opacity-30" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            
            {/* About */}
            <motion.div id="about" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center scroll-mt-32">
              <div className="flex-1 w-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-foreground text-sm font-bold tracking-wide uppercase mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> About Us
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 flex items-center gap-4 tracking-tight">
                  <div className="p-3 bg-white shadow-sm border border-card-border rounded-2xl shrink-0"><Users className="w-8 h-8 text-primary" /></div>
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Founded in Tamil Nadu, Automystics emerged from a simple premise: enterprise software is too slow to build and too hard to maintain. We assembled a team of elite engineers dedicated to changing that paradigm through AI-assisted development and rigorous architectural standards.
                </p>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  Today, we power core operations for financial institutions, large-scale educational trusts, and industrial facilities, delivering military-grade software at startup speed.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {["Tamil-Nadu based engineering hub", "Elite, hand-picked technical team", "Obsession with code quality", "Focus on measurable ROI"].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-card-border shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <Card className="bg-white border-card-border shadow-xl rounded-[2.5rem] aspect-[4/3] flex items-center justify-center overflow-hidden relative group p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                  <div className="relative z-10 w-full h-full bg-white/80 backdrop-blur-md rounded-[2rem] border border-card-border shadow-sm flex items-center justify-center">
                    <Building className="w-32 h-32 text-primary/40" />
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Process */}
            <motion.div id="process" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center scroll-mt-32">
              <div className="flex-1 w-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-foreground text-sm font-bold tracking-wide uppercase mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Workflow
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 flex items-center gap-4 tracking-tight">
                  <div className="p-3 bg-white shadow-sm border border-card-border rounded-2xl shrink-0"><Workflow className="w-8 h-8 text-primary" /></div>
                  Our Process
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  We don't guess. We execute a rigorous, battle-tested 6-step methodology that ensures every line of code serves a business purpose and scales gracefully.
                </p>
                <div className="space-y-4">
                  {[
                    "1. Discovery & Architecture: Mapping the domain",
                    "2. UI/UX Prototyping: Validating user flows",
                    "3. Core Infrastructure: Setting up secure clouds",
                    "4. Rapid Development: AI-accelerated coding",
                    "5. Penetration & Load Testing: Ensuring resilience",
                    "6. Deployment & Handover: Smooth operational transition"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-card-border shadow-sm">
                      <span className="text-sm font-semibold text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <Card className="bg-white border-card-border shadow-xl rounded-[2.5rem] aspect-[4/3] flex items-center justify-center overflow-hidden relative group p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                  <div className="relative z-10 w-full h-full bg-white/80 backdrop-blur-md rounded-[2rem] border border-card-border shadow-sm flex items-center justify-center">
                    <Workflow className="w-32 h-32 text-primary/40" />
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Careers */}
            <motion.div id="careers" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center scroll-mt-32">
              <div className="flex-1 w-full">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-foreground text-sm font-bold tracking-wide uppercase mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Join Us
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 flex items-center gap-4 tracking-tight">
                  <div className="p-3 bg-white shadow-sm border border-card-border rounded-2xl shrink-0"><Briefcase className="w-8 h-8 text-primary" /></div>
                  Careers
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  We hire missionaries, not mercenaries. We are always looking for deeply technical, highly autonomous individuals who want to build software that matters. We offer remote flexibility, rigorous mentorship, and the opportunity to work on complex, high-stakes challenges.
                </p>
                <div className="grid gap-4">
                  {["Full-stack Engineer (React/Node)", "Machine Learning Engineer", "DevOps & Cloud Architect", "Product Designer (UI/UX)"].map((role, i) => (
                    <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white border border-card-border shadow-sm hover:border-primary transition-colors cursor-pointer group">
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{role}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">View Role</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <Card className="bg-white border-card-border shadow-xl rounded-[2.5rem] aspect-[4/3] flex items-center justify-center overflow-hidden relative group p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
                  <div className="relative z-10 w-full h-full bg-white/80 backdrop-blur-md rounded-[2rem] border border-card-border shadow-sm flex items-center justify-center">
                    <Briefcase className="w-32 h-32 text-primary/40" />
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Case Studies */}
            <motion.div id="case-studies" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="scroll-mt-32">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-foreground text-sm font-bold tracking-wide uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Success Stories
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 flex justify-center items-center gap-4 tracking-tight">
                  <div className="p-3 bg-white shadow-sm border border-card-border rounded-2xl shrink-0"><BookOpen className="w-8 h-8 text-primary" /></div>
                  Case Studies
                </h2>
                <p className="text-xl text-muted-foreground">See how we've transformed operations for our enterprise partners.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Digitizing a $50M Chit Fund", desc: "How we replaced legacy ledgers with a secure, real-time management platform, reducing audit time by 90%." },
                  { title: "SCADA for 500MW Solar Plant", desc: "Implementing real-time IoT monitoring that improved energy yield optimization and predictive maintenance." },
                  { title: "Connecting 50+ School Districts", desc: "Deploying KalviCore to unify administration across a massive educational network, serving 100k+ students." }
                ].map((study, i) => (
                  <Card key={i} className="bg-white border-card-border shadow-md rounded-3xl p-8 hover:-translate-y-2 transition-transform cursor-pointer group">
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{study.title}</h3>
                    <p className="text-muted-foreground">{study.desc}</p>
                    <div className="mt-8 text-sm font-bold uppercase tracking-wider text-primary">Read Study &rarr;</div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Blog */}
            <motion.div id="blog" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="scroll-mt-32">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-foreground text-sm font-bold tracking-wide uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Insights
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 flex justify-center items-center gap-4 tracking-tight">
                  <div className="p-3 bg-white shadow-sm border border-card-border rounded-2xl shrink-0"><FileText className="w-8 h-8 text-primary" /></div>
                  Our Blog
                </h2>
                <p className="text-xl text-muted-foreground">Engineering insights, architectural patterns, and thoughts on the future of AI.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Why Voice AI is Changing Customer Service", date: "Oct 12, 2023" },
                  { title: "Microservices vs Monoliths in 2024", date: "Nov 05, 2023" },
                  { title: "The True Cost of Legacy Code Maintenance", date: "Dec 01, 2023" }
                ].map((post, i) => (
                  <Card key={i} className="bg-white border-card-border shadow-md rounded-3xl p-8 hover:-translate-y-2 transition-transform cursor-pointer group">
                    <div className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-wider">{post.date}</div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                    <div className="mt-6 text-sm font-bold uppercase tracking-wider text-primary">Read Post &rarr;</div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Partners */}
            <motion.div id="partners" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="scroll-mt-32">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-foreground text-sm font-bold tracking-wide uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary"></span> Ecosystem
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 flex justify-center items-center gap-4 tracking-tight">
                  <div className="p-3 bg-white shadow-sm border border-card-border rounded-2xl shrink-0"><HeartHandshake className="w-8 h-8 text-primary" /></div>
                  Our Partners
                </h2>
                <p className="text-xl text-muted-foreground">We collaborate with industry leaders to provide robust, end-to-end solutions.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Cloud Infrastructure", icon: Cloud },
                  { name: "Security Auditing", icon: Shield },
                  { name: "Hardware & IoT", icon: Cpu },
                  { name: "Education Boards", icon: GraduationCap }
                ].map((partner, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-8 bg-white border border-card-border rounded-3xl shadow-sm text-center">
                    <partner.icon className="w-10 h-10 text-muted-foreground mb-4" />
                    <span className="font-semibold text-foreground">{partner.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}