import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Award, Users } from "lucide-react"

export function AboutSnapshot() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">About Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Pioneering Sustainable Agriculture Since 2016
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sanjivani Agro Machinery is a leading Indian manufacturer specializing in agro and bio-energy machinery.
              With over 8 years of dedicated experience, we design and manufacture Special Purpose Machines (SPM) for
              biochar production, biomass processing, renewable energy, animal feed, and waste-to-energy solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is to empower farmers and entrepreneurs with innovative, sustainable machinery that transforms
              agricultural waste into valuable resources, contributing to rural development and environmental
              conservation.
            </p>
            <Link href="/about">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Know More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-secondary rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground text-sm">
                To be India's leading manufacturer in sustainable agro-machinery innovation
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Quality First</h3>
              <p className="text-muted-foreground text-sm">
                Rigorous quality standards ensuring reliable, long-lasting machinery
              </p>
            </div>

            <div className="bg-secondary rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
              <p className="text-muted-foreground text-sm">
                Experienced professionals committed to innovation and excellence
              </p>
            </div>

            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <p className="text-4xl font-bold mb-2">2016</p>
              <p className="text-primary-foreground/80 text-sm">
                Established with a vision for sustainable agriculture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
