import React from "react";
import { SEO } from "@/components/seo";
import { motion } from "framer-motion";
import { Workflow, Mic, LineChart, Camera, Sun, GraduationCap, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const solutions = [
  { 
    id: "enterprise-automation", 
    title: "Enterprise Automation", 
    icon: Workflow,
    desc: "Streamline complex business processes across departments with our enterprise automation solutions. We map out manual workflows and replace them with intelligent, automated systems that reduce errors, save thousands of human hours, and enforce standardized operational protocols.",
    features: ["End-to-end workflow mapping", "Robotic Process Automation (RPA)", "ERP/CRM deep integration", "Custom approval routing"]
  },
  { 
    id: "ai-voice", 
    title: "AI Voice Agents", 
    icon: Mic,
    desc: "Deploy sophisticated conversational interfaces that handle customer support, outbound dialing, and internal inquiries. Our voice AI utilizes state-of-the-art natural language processing to understand intent, manage complex dialog flows, and trigger backend actions seamlessly.",
    features: ["Natural language understanding", "Multi-turn dialog management", "Human handoff protocols", "Voice synthesis & cloning"]
  },
  { 
    id: "algo-trading", 
    title: "Algorithmic Trading", 
    icon: LineChart,
    desc: "Execute quantitative financial strategies with absolute precision. Our algorithmic trading platforms are engineered for high frequency and low latency, capable of ingesting massive market data streams, running complex mathematical models, and routing orders in sub-milliseconds.",
    features: ["Sub-millisecond execution", "Real-time market data ingestion", "Strategy backtesting engine", "Automated risk management"]
  },
  { 
    id: "surveillance", 
    title: "Surveillance Intelligence", 
    icon: Camera,
    desc: "Transform passive video feeds into active monitoring systems. We implement advanced computer vision models that analyze CCTV streams in real-time to detect unauthorized access, ensure safety compliance, and automatically flag operational anomalies across large facilities.",
    features: ["Real-time anomaly detection", "Facial & object recognition", "Safety gear compliance checks", "Automated incident reporting"]
  },
  { 
    id: "solar-monitoring", 
    title: "Solar Plant Monitoring", 
    icon: Sun,
    desc: "Maximize renewable energy yield with comprehensive IoT data collection. Our solar monitoring solutions aggregate data from thousands of panels and inverters to provide granular performance tracking, predictive maintenance alerts, and automated degradation analysis.",
    features: ["Inverter telemetry aggregation", "Predictive maintenance AI", "Weather pattern correlation", "Energy yield optimization"]
  },
  { 
    id: "academic", 
    title: "Academic Management", 
    icon: GraduationCap,
    desc: "Manage the entire student lifecycle with integrated academic platforms. From admission processing and course enrollment to examination grading and alumni relations, we build centralized hubs that eliminate administrative silos in modern educational institutions.",
    features: ["Automated enrollment flows", "Curriculum & syllabus management", "Digital examination portals", "Parent-teacher communication"]
  }
];

export function Solutions() {
  return (
    <div className="bg-transparent relative">
      <SEO 
        title="Solutions | Automystics"
        description="Targeted technology solutions solving complex challenges with automation and AI."
        canonical="/solutions"
      />

      <div className="absolute top-0 right-0 w-full max-w-2xl h-[600px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="pt-40 pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl pt-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-primary text-sm font-bold mb-6 uppercase tracking-wide mx-auto">
              <span className="text-xl leading-none -mt-1">●</span> OUR SOLUTIONS
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight">Purpose-Built <span className="text-primary">Systems</span></h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Targeted technology frameworks designed to solve specific, complex challenges across your operational landscape.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 md:py-32 relative z-10 bg-[#EBEFF7]">
        <div className="absolute inset-0 bg-diagonal-pattern opacity-30" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <motion.div 
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center scroll-mt-32`}
              >
                <div className="flex-1 w-full">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-foreground text-sm font-bold tracking-wide uppercase mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Solution Focus
                  </div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 flex items-center gap-4 tracking-tight">
                    <div className="p-3 bg-white shadow-sm border border-card-border rounded-2xl shrink-0">
                      <solution.icon className="w-8 h-8 text-primary" />
                    </div>
                    {solution.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                    {solution.desc}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    {solution.features.map((feature, i) => (
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
                      <solution.icon className="w-32 h-32 text-primary/40 group-hover:scale-110 group-hover:text-primary transition-all duration-700" />
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