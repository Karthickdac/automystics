import React from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, ArrowUpRight, Building2, GraduationCap, Mic, LineChart, Sun, Camera, Code } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const products = [
  {
    id: "chit-fund",
    title: "Chit Fund Management",
    description: "Comprehensive digital platform for finance companies",
    icon: Building2
  },
  {
    id: "school-management",
    title: "School Management",
    description: "End-to-end administration for modern schools",
    icon: GraduationCap
  },
  {
    id: "kalvicore",
    title: "KalviCore",
    description: "Advanced College Management System",
    icon: GraduationCap
  },
  {
    id: "kural-ai",
    title: "Kural AI",
    description: "Intelligent voice automation",
    icon: Mic
  },
  {
    id: "auto-algo",
    title: "Auto Algo Trading",
    description: "High-frequency quantitative trading platform",
    icon: LineChart
  },
  {
    id: "scada",
    title: "SCADA Monitoring",
    description: "Industrial monitoring for solar power",
    icon: Sun
  },
  {
    id: "cctv",
    title: "CCTV AutoMonitoring",
    description: "Intelligent anomaly detection",
    icon: Camera
  },
  {
    id: "custom",
    title: "Custom Software",
    description: "Bespoke enterprise applications",
    icon: Code
  }
];

export function Navbar() {
  const [location] = useLocation();

  const isHome = location === "/";
  const isProducts = location === "/products";
  const isContact = location === "/contact";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 relative z-10">
            <div className="bg-white p-1 rounded-full w-10 h-10 flex items-center justify-center overflow-hidden">
              <img src="/logo.jpeg" alt="Automystics Logo" className="w-8 h-8 object-contain mix-blend-multiply" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">Automystics</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={`group inline-flex h-10 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/5 data-[state=open]:bg-white/5 ${isHome ? "text-white" : "text-muted-foreground"}`}>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`h-10 rounded-full px-4 py-2 text-sm font-medium bg-transparent hover:bg-white/5 focus:bg-white/5 data-[state=open]:bg-white/5 ${isProducts ? "text-white" : "text-muted-foreground hover:text-white"}`}>
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6 grid grid-cols-2 gap-4 bg-card border border-white/10 rounded-2xl shadow-2xl">
                      {products.map((product) => (
                        <Link key={product.id} href={`/products#${product.id}`} className="group p-3 rounded-xl hover:bg-white/5 transition-colors flex gap-4 items-start outline-none">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <product.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                              {product.title}
                            </div>
                            <div className="text-sm text-muted-foreground line-clamp-1">
                              {product.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className={`group inline-flex h-10 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/5 hover:text-white focus:bg-white/5 focus:text-white outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/5 data-[state=open]:bg-white/5 ${isContact ? "text-white" : "text-muted-foreground"}`}>
                      Contact Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center justify-end relative z-10">
            <Link href="/contact">
              <Button className="rounded-full h-11 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 transition-all hover:pr-4 group" data-testid="nav-cta">
                Start a Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden relative z-10">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-white/10 p-6 w-[320px] overflow-y-auto">
                <div className="flex flex-col gap-6 mt-10">
                  <Link href="/" className={`text-lg font-medium transition-colors ${isHome ? "text-white" : "text-muted-foreground"}`}>
                    Home
                  </Link>
                  
                  <div className="space-y-4">
                    <div className="text-lg font-medium text-white">Products</div>
                    <div className="pl-4 border-l border-white/10 flex flex-col gap-4">
                      {products.map(p => (
                        <Link key={p.id} href={`/products#${p.id}`} className="text-muted-foreground hover:text-white text-sm">
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className={`text-lg font-medium transition-colors ${isContact ? "text-white" : "text-muted-foreground"}`}>
                    Contact
                  </Link>
                  
                  <div className="h-px bg-white/10 w-full my-2"></div>
                  <Link href="/contact">
                    <Button variant="default" className="w-full rounded-full bg-primary text-primary-foreground font-semibold gap-2 h-12">
                      Start a Project <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
