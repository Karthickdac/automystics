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
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-[#0B1426] text-white rounded-full shadow-2xl shadow-primary/10 border border-white/10 flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-3 relative z-10 outline-none">
            <div className="bg-white p-1 rounded-full w-9 h-9 flex items-center justify-center overflow-hidden shrink-0">
              <img src="/logo.jpeg" alt="Automystics Logo" className="w-7 h-7 object-contain mix-blend-multiply" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white hidden sm:block">Automystics</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={`group inline-flex h-10 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white outline-none ${isHome ? "text-white bg-white/5" : "text-white/70"}`}>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`h-10 rounded-full px-4 py-2 text-sm font-medium bg-transparent hover:bg-white/10 hover:text-white focus:bg-white/10 data-[state=open]:bg-white/10 ${isProducts ? "text-white bg-white/5" : "text-white/70"}`}>
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6 grid grid-cols-2 gap-4 bg-[#0B1426] border border-white/10 rounded-2xl shadow-2xl">
                      {products.map((product) => (
                        <Link key={product.id} href={`/products#${product.id}`} className="group p-3 rounded-xl hover:bg-white/5 transition-colors flex gap-4 items-start outline-none">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <product.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                              {product.title}
                            </div>
                            <div className="text-sm text-white/60 line-clamp-1">
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
                    <Link href="/contact" className={`group inline-flex h-10 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white outline-none ${isContact ? "text-white bg-white/5" : "text-white/70"}`}>
                      Contact Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center justify-end relative z-10 shrink-0">
            <Link href="/contact">
              <Button className="rounded-full h-10 px-5 bg-primary hover:bg-primary/90 text-white font-semibold gap-2 transition-all group" data-testid="nav-cta">
                Start a Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="lg:hidden relative z-10">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white rounded-full">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0B1426] border-l border-white/10 p-6 w-[320px] overflow-y-auto">
                <div className="flex flex-col gap-6 mt-10">
                  <Link href="/" className={`text-lg font-medium transition-colors ${isHome ? "text-white" : "text-white/70"}`}>
                    Home
                  </Link>
                  
                  <div className="space-y-4">
                    <div className="text-lg font-medium text-white">Products</div>
                    <div className="pl-4 border-l border-white/10 flex flex-col gap-4">
                      {products.map(p => (
                        <Link key={p.id} href={`/products#${p.id}`} className="text-white/70 hover:text-white text-sm">
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className={`text-lg font-medium transition-colors ${isContact ? "text-white" : "text-white/70"}`}>
                    Contact
                  </Link>
                  
                  <div className="h-px bg-white/10 w-full my-2"></div>
                  <Link href="/contact">
                    <Button variant="default" className="w-full rounded-full bg-primary text-white font-semibold gap-2 h-12 hover:bg-primary/90">
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