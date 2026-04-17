import React, { useEffect } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { useLocation } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">{children}</main>
      <Footer />
      
      {/* Global decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] translate-y-1/3 mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 blur-[100px] mix-blend-multiply" />
      </div>
    </div>
  );
}