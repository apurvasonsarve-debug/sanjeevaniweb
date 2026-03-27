import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "State-of-the-art manufacturing facility",
  "In-house design and R&D capabilities",
  "Quality control at every stage",
  "Modern CNC and fabrication equipment",
  "Dedicated assembly and testing area",
  "Trained technical workforce",
]

export function InfrastructureSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Our Infrastructure</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Factory & Manufacturing Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our world-class manufacturing facility in Nagpur is equipped with modern machinery and skilled professionals to
            deliver quality products.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Images Grid with YOUR REAL FILENAMES */}
          <div className="grid grid-cols-1 gap-4 animate-in fade-in slide-in-from-left duration-700">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md group">
              <Image 
                src="/biochar-machine.jpg" 
                alt="Sanjivani Manufacturing Area" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
                <Image 
                  src="/biochar-1500ltr.jpg" 
                  alt="Biochar 1500Ltr Machine" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md group">
                <Image 
                  src="/company-photo-1.png" 
                  alt="Sanjivani Company Facility" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-in fade-in slide-in-from-right duration-700">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-snug">
              Complete In-House Manufacturing Capabilities
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Our integrated manufacturing facility houses everything from design and prototyping to final assembly and
              quality testing. This allows us to maintain strict quality control and deliver machinery that meets the
              highest industry standards.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/50 shadow-sm hover:border-primary/30 transition-colors"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}