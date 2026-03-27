"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown, Youtube, Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "All Products", href: "/products" },
      { name: "Biochar Machines", href: "/products/biochar" },
      { name: "Biomass Machines", href: "/products/biomass" },
      { name: "Other Products", href: "/products/other" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Awards", href: "/awards" },
  { name: "Clients", href: "/clients" },
  { name: "Events", href: "/events" },
]

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@sanjivaniagromachinery", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/sanjivaniagromachinery", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/sanjivaniagromachinery", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sanjivani-agro-machinery", label: "LinkedIn" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/sanjivani-logo.png"
              alt="Sanjivani Agro Machinery Logo"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-foreground hover:text-primary text-base font-medium">
                      {item.name}
                      <ChevronDown className="ml-1 h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium text-base"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* Social Links & CTA Button */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <Link href="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="space-y-1">
                    <p className="px-4 py-2 font-medium text-foreground">{item.name}</p>
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <div className="px-4 pt-4 space-y-4">
                <div className="flex items-center justify-start gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
