import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Factory, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/delhi-2025-hero.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-medium">Committed to Sustainability</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 text-balance">
              Your Gateway to <span className="text-primary">Green Business</span> Opportunities..!
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-background/80 leading-relaxed mb-8 max-w-xl">
              Pioneering sustainable agro-machinery and bio-energy solutions since 2016. Transforming agricultural waste
              into valuable resources for a greener tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 w-full sm:w-auto bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-background/20">
              <div>
                <p className="text-3xl font-bold text-primary">8+</p>
                <p className="text-sm text-background/70">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-background/70">Installations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">18+</p>
                <p className="text-sm text-background/70">States Covered</p>
              </div>
            </div>
          </div>

          {/* Hero Features */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20">
                  <Factory className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-background font-semibold mb-2">In-House Manufacturing</h3>
                  <p className="text-background/70 text-sm">Complete design to delivery under one roof</p>
                </div>
                <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20">
                  <Leaf className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-background font-semibold mb-2">Eco-Friendly Solutions</h3>
                  <p className="text-background/70 text-sm">Converting waste to sustainable energy</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20">
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-background font-semibold mb-2">Bio-Energy Expertise</h3>
                  <p className="text-background/70 text-sm">Specialized in biochar & biomass systems</p>
                </div>
                <div className="bg-primary rounded-2xl p-6">
                  <p className="text-primary-foreground font-bold text-2xl mb-2">Since 2016</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Empowering farmers and entrepreneurs across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
