import Image from "next/image"

export function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/our-team.jpeg" alt="Sanjivani Team" fill className="object-cover" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Our Team</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              The People Behind Our Success
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We are a team of experienced professionals committed to transforming agriculture through technology,
              sustainability, and entrepreneurship.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our engineers, technicians, and support staff bring decades of combined experience in manufacturing,
              agro-technology, and customer service. Every team member shares our vision of creating sustainable
              solutions that empower farmers and entrepreneurs while protecting our environment.
            </p>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-muted-foreground text-sm">Team Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-muted-foreground text-sm">Years Combined Exp.</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-muted-foreground text-sm">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
