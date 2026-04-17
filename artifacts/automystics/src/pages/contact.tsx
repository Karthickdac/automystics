import React, { useState } from "react";
import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import serverBg from "../assets/server-bg.png";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
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
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Automystics to discuss your custom software and AI automation needs."
        canonical="/contact"
      />

      <div className="relative min-h-[50vh] pt-32 pb-16 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={serverBg} 
            alt="Data Center" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-center mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's Build The Future.</h1>
            <p className="text-xl text-muted-foreground">
              Ready to automate your workflows and scale your business? Our engineering team is standing by.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Global Headquarters</h2>
                <p className="text-muted-foreground">
                  Our core engineering team operates out of our main facility, serving clients worldwide with uncompromising quality and speed.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Office Location</h4>
                    <p className="text-muted-foreground">123 Innovation Drive<br/>Tech District, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:hello@automystics.com" className="hover:text-white transition-colors">hello@automystics.com</a><br/>
                      <a href="mailto:support@automystics.com" className="hover:text-white transition-colors">support@automystics.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+18005550199" className="hover:text-white transition-colors">+1 (800) 555-0199</a><br/>
                      Mon-Fri, 9am to 6pm PST
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  {isSuccess ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Request Received</h3>
                      <p className="text-muted-foreground mb-8">
                        Thank you for reaching out. A technical specialist will contact you shortly to discuss your project.
                      </p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline" className="border-white/10">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" required className="bg-background/50 border-white/10 focus-visible:ring-primary" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" required className="bg-background/50 border-white/10 focus-visible:ring-primary" placeholder="Doe" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input id="email" type="email" required className="bg-background/50 border-white/10 focus-visible:ring-primary" placeholder="john@company.com" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" className="bg-background/50 border-white/10 focus-visible:ring-primary" placeholder="Acme Corp" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea 
                          id="message" 
                          required 
                          className="min-h-[120px] bg-background/50 border-white/10 focus-visible:ring-primary resize-none" 
                          placeholder="Tell us about the software you need..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full bg-primary text-primary-foreground font-semibold h-12"
                        data-testid="contact-submit"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            Send Message
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}