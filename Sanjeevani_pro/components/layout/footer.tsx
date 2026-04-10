import Link from "next/link"
import { Youtube, Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Awards & Recognition", href: "/awards" },
    { name: "Our Clients", href: "/clients" },
  ],
  explore: [
    { name: "Gallery", href: "/gallery" },
    { name: "Events & Highlights", href: "/events" },
    { name: "Infrastructure", href: "/about#infrastructure" },
    { name: "Contact Us", href: "/contact" },
  ],
  products: [
    { name: "Biochar Machines", href: "/products/biochar" },
    { name: "Biomass Machines", href: "/products/biomass" },
    { name: "Other Products", href: "/products/other" },
    { name: "All Products", href: "/products" },
  ],
  contact: [
    { icon: Phone, text: "+91 7219030002", href: "tel:+917219030002" },
    { icon: Phone, text: "+91 7219030009", href: "tel:+917219030009" },
    { icon: Mail, text: "sales005.sam@gmail.com", href: "mailto:sales005.sam@gmail.com" },
    { icon: Mail, text: "sales@sanjivanii.com", href: "mailto:sales@sanjivanii.com" },
  ],
}

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@sanjivaniagromachinery", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/sanjivaniagromachinery", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/sanjivaniagromachinery", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sanjivani-agro-machinery", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <div>
                <p className="font-bold text-background text-lg leading-tight">Sanjivani</p>
                <p className="text-xs text-background/70 -mt-0.5">Agro Machinery</p>
              </div>
            </Link>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              Leading manufacturer of sustainable agro and bio-energy machinery since 2016.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-start gap-2 text-background/70 text-sm">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sanjivani Agro Machinery. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
