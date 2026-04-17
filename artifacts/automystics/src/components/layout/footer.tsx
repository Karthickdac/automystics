import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#111A2E] to-[#0B1426] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 dark-grid-pattern opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner in Footer */}
        <div className="bg-primary/95 backdrop-blur-sm border border-primary-foreground/20 rounded-[2.5rem] p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your business?</h3>
            <p className="text-white/80 text-lg">Let's build something extraordinary together.</p>
          </div>
          <Link href="/contact" className="relative z-10">
            <Button size="lg" className="rounded-full h-14 px-8 bg-white hover:bg-white/90 text-primary font-bold gap-2 text-lg whitespace-nowrap group shadow-lg">
              Start Your Project <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 inline-block">
              <div className="bg-white p-1 rounded-full w-10 h-10 flex items-center justify-center overflow-hidden inline-flex">
                <img src="/logo.jpeg" alt="Automystics Logo" className="w-8 h-8 object-contain mix-blend-multiply" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold tracking-tight text-white">Automystics Technologies</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mt-1">Private Limited</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              We engineer competitive advantages. Mission-critical enterprise applications delivered with unprecedented speed and precision.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full border-white/10 text-white/70 hover:bg-white/10 hover:text-white bg-transparent transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/10 text-white/70 hover:bg-white/10 hover:text-white bg-transparent transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-white/10 text-white/70 hover:bg-white/10 hover:text-white bg-transparent transition-colors">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white font-bold tracking-wide">Products</h3>
            <ul className="space-y-4">
              <li><Link href="/products#chit-fund" className="text-sm text-white/60 hover:text-primary transition-colors">Chit Fund Mgmt</Link></li>
              <li><Link href="/products#kalvicore" className="text-sm text-white/60 hover:text-primary transition-colors">KalviCore CMS</Link></li>
              <li><Link href="/products#kural-ai" className="text-sm text-white/60 hover:text-primary transition-colors">Kural AI Voice</Link></li>
              <li><Link href="/products#auto-algo" className="text-sm text-white/60 hover:text-primary transition-colors">Auto Algo Trading</Link></li>
              <li><Link href="/products#scada" className="text-sm text-white/60 hover:text-primary transition-colors">SCADA Monitoring</Link></li>
              <li><Link href="/products#fitro360" className="text-sm text-white/60 hover:text-primary transition-colors">Fitro360 Gym Mgmt</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white font-bold tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-white/60 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-sm text-white/60 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-white/60 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/contact" className="text-sm text-white/60 hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-white font-bold tracking-wide">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-white/60">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="pt-2">Global HQ<br/>123 Innovation Drive<br/>Tech District, CA 94105</div>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:hello@automystics.com" className="hover:text-primary transition-colors pt-1">hello@automystics.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Automystics Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-white/40 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-white/40 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
