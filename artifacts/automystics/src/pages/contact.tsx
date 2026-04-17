import React, { useState } from "react";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message received",
        description: "Our team will get back to you within 24 hours.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-transparent relative pt-40 pb-24">
      <SEO 
        title="Contact Us | Automystics"
        description="Get in touch with Automystics to discuss your custom software and AI automation needs."
        canonical="/contact"
      />

      <div className="absolute top-0 right-0 w-full max-w-2xl h-[600px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-card-border shadow-sm text-primary text-sm font-bold mb-6 uppercase tracking-wide mx-auto">
            <span className="text-xl leading-none -mt-1">●</span> GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight">Let's Build The <span className="text-primary">Future.</span></h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to automate your workflows and scale your business? Our engineering team is standing by.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Contact Form Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-card-border rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-black/5 relative overflow-hidden card-hover-effect">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              
              {isSuccess ? (
                <div className="text-center py-20 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/20">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Request Received</h3>
                  <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
                    Thank you for reaching out. A technical specialist will contact you shortly to discuss your project.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-full h-12 px-8 border-card-border text-foreground font-semibold bg-white hover:bg-muted">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">Send us a message</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-foreground font-semibold ml-1">First Name</Label>
                      <Input id="firstName" required className="bg-white border-card-border focus-visible:ring-primary h-14 rounded-2xl px-4 text-lg shadow-sm" placeholder="John" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-foreground font-semibold ml-1">Last Name</Label>
                      <Input id="lastName" required className="bg-white border-card-border focus-visible:ring-primary h-14 rounded-2xl px-4 text-lg shadow-sm" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-foreground font-semibold ml-1">Work Email</Label>
                    <Input id="email" type="email" required className="bg-white border-card-border focus-visible:ring-primary h-14 rounded-2xl px-4 text-lg shadow-sm" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-foreground font-semibold ml-1">Company</Label>
                    <Input id="company" className="bg-white border-card-border focus-visible:ring-primary h-14 rounded-2xl px-4 text-lg shadow-sm" placeholder="Acme Corp" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-foreground font-semibold ml-1">Project Details</Label>
                    <Textarea 
                      id="message" 
                      required 
                      className="min-h-[160px] bg-white border-card-border focus-visible:ring-primary resize-none rounded-2xl p-4 text-lg shadow-sm" 
                      placeholder="Tell us about the software you need..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg h-16 group shadow-lg shadow-primary/20"
                    data-testid="contact-submit"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        Send Message
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-white border border-card-border shadow-xl shadow-black/5 rounded-[2.5rem] p-10 text-center relative overflow-hidden card-hover-effect">
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Need it faster?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Call us directly to speak with an engineering lead right now.
                </p>
                <Button size="lg" variant="outline" className="w-full rounded-full h-14 bg-white border-primary text-primary font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Phone className="w-5 h-5 mr-2" /> +1 (800) 555-0199
                </Button>
              </div>
            </div>

            <div className="bg-white border border-card-border shadow-lg rounded-[2.5rem] p-10 card-hover-effect">
              <h3 className="text-xl font-bold text-foreground mb-8 tracking-tight">Global Headquarters</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Office Location</h4>
                    <p className="text-muted-foreground leading-relaxed">123 Innovation Drive<br/>Tech District, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-2">Email Us</h4>
                    <p className="text-muted-foreground leading-relaxed flex flex-col gap-1">
                      <a href="mailto:hello@automystics.com" className="hover:text-primary transition-colors">hello@automystics.com</a>
                      <a href="mailto:support@automystics.com" className="hover:text-primary transition-colors">support@automystics.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
