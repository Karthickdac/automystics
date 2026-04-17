import React from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();

  const isHome = location === "/";
  const isProducts = location === "/products";
  const isContact = location === "/contact";

  const navLinks = [
    { href: "/", label: "Home", active: isHome },
    { href: "/products", label: "Products", active: isProducts },
    { href: "/contact", label: "Contact", active: isContact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-sm">
              <img src="/logo.jpeg" alt="Automystics Logo" className="h-8 w-auto mix-blend-multiply" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">Automystics</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${isHome ? "text-primary" : "text-muted-foreground hover:text-white"}`}>Home</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors ${isProducts ? "text-primary" : "text-muted-foreground hover:text-white"} outline-none`}>
                Products <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-white/10 text-white min-w-[240px]">
                <Link href="/products#chit-fund"><DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">Chit Fund Management</DropdownMenuItem></Link>
                <Link href="/products#school-management"><DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">School Management System</DropdownMenuItem></Link>
                <Link href="/products#kalvicore"><DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">KalviCore (College CMS)</DropdownMenuItem></Link>
                <Link href="/products#kural-ai"><DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">Kural AI (Voice Automation)</DropdownMenuItem></Link>
                <Link href="/products#auto-algo"><DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">Auto Algo Trading</DropdownMenuItem></Link>
                <Link href="/products#scada"><DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">SCADA Monitoring</DropdownMenuItem></Link>
                <Link href="/products#cctv"><DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">CCTV AutoMonitoring AI</DropdownMenuItem></Link>
                <Link href="/products#custom"><DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">Custom Software Development</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className={`text-sm font-medium transition-colors ${isContact ? "text-primary" : "text-muted-foreground hover:text-white"}`}>Contact</Link>
            
            <Link href="/contact">
              <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" data-testid="nav-get-started">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-l border-white/10 p-6 w-[300px]">
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={`text-lg font-medium transition-colors ${link.active ? "text-primary" : "text-muted-foreground"}`}>
                      {link.label}
                    </Link>
                  ))}
                  <div className="h-px bg-white/10 w-full my-2"></div>
                  <Link href="/contact">
                    <Button variant="default" className="w-full bg-primary text-primary-foreground font-semibold">
                      Get Started
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