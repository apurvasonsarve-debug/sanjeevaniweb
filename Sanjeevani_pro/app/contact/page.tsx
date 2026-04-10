"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 7219030002", "+91 7219030009"],
    action: "tel:+917219030002",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["sales005.sam@gmail.com"],
    action: "mailto:sales005.sam@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Sanjivani Agro Machinery", "Maharashtra, India"],
    action: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Sat: 9:00 AM - 6:30 PM", "Sunday: Closed"],
    action: "#",
  },
]

const inquiryTypes = [
  "Product Inquiry",
  "Request a Quote",
  "Technical Support",
  "Partnership Opportunity",
  "Dealer/Distributor Inquiry",
  "Career Inquiry",
  "General Inquiry",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your inquiry. We will get back to you within 24 hours!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Contact Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance">
              Let's Start Your Green Business Journey
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed">
              Get in touch with our experts to discuss your requirements and discover how our sustainable machinery
              solutions can transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 lg:py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                {item.details.map((detail, dIndex) => (
                  <p key={dIndex} className="text-muted-foreground text-sm">
                    {item.action !== "#" ? (
                      <a href={item.action} className="hover:text-primary transition-colors">
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card p-6 lg:p-8 rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Send us a Message</h2>
                    <p className="text-muted-foreground text-sm">We typically respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your requirements, questions, or how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Map Placeholder */}
              <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-border">
                <Image src="/placeholder.svg?height=500&width=500" alt="Our Location" fill className="object-cover" />
                <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
                  <div className="text-center text-background">
                    <MapPin className="h-10 w-10 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                <h3 className="font-bold text-foreground mb-2">Quick Response via WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For faster response, reach out to us directly on WhatsApp. Our team is available during business
                  hours.
                </p>
                <a
                  href="https://wa.me/917219030002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#128C7E] transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Visit CTA */}
              <div className="bg-secondary p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-foreground mb-2">Schedule a Factory Visit</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Want to see our machinery in action? Schedule a visit to our manufacturing facility and experience our
                  quality firsthand.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Request Factory Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common inquiries</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-5 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">Do you provide installation support?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, we provide complete installation support including setup, commissioning, and operator training at
                your location.
              </p>
            </div>
            <div className="bg-card p-5 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">What is your warranty policy?</h3>
              <p className="text-muted-foreground text-sm">
                All our machines come with a standard 1-year warranty covering manufacturing defects. Extended warranty
                options are available.
              </p>
            </div>
            <div className="bg-card p-5 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">Do you offer financing options?</h3>
              <p className="text-muted-foreground text-sm">
                We partner with leading banks and NBFCs to offer easy financing options. Many of our machines also
                qualify for government subsidies.
              </p>
            </div>
            <div className="bg-card p-5 rounded-xl border border-border">
              <h3 className="font-semibold text-foreground mb-2">How can I become a dealer?</h3>
              <p className="text-muted-foreground text-sm">
                We are always looking for committed partners. Please fill out the contact form with your details and
                select "Dealer/Distributor Inquiry".
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
