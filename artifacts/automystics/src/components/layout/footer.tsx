import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github, Mail, MapPin, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 inline-block">
              <div className="bg-white p-1 rounded-sm inline-block">
                <img src="/logo.jpeg" alt="Automystics Logo" className="h-8 w-auto mix-blend-multiply" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Automystics</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              An AI Automation Company building complex software faster than anyone else. We deliver mission-critical solutions at unprecedented speed.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 text-muted-foreground hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 text-muted-foreground hover:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 text-muted-foreground hover:text-white">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wide">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products#chit-fund" className="text-sm text-muted-foreground hover:text-primary transition-colors">Chit Fund Management</Link></li>
              <li><Link href="/products#school-management" className="text-sm text-muted-foreground hover:text-primary transition-colors">School Management</Link></li>
              <li><Link href="/products#kalvicore" className="text-sm text-muted-foreground hover:text-primary transition-colors">KalviCore CMS</Link></li>
              <li><Link href="/products#kural-ai" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kural AI Voice</Link></li>
              <li><Link href="/products#auto-algo" className="text-sm text-muted-foreground hover:text-primary transition-colors">Auto Algo Trading</Link></li>
              <li><Link href="/products#scada" className="text-sm text-muted-foreground hover:text-primary transition-colors">SCADA Monitoring</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-semibold tracking-wide">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Global HQ<br/>123 Innovation Drive<br/>Tech District, CA 94105</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:hello@automystics.com" className="hover:text-white transition-colors">hello@automystics.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+18005550199" className="hover:text-white transition-colors">+1 (800) 555-0199</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Automystics. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Powered by advanced AI Automation</span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}