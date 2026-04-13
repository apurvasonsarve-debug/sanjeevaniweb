import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const otherProducts = [
  {
    name: "Animal Feed Machine",
    description:
      "Efficiently produces high-quality, nutritious animal feed (cattle feed, goat feed, sinking fish feed, etc.) with consistent output and minimal operational effort.",
    image: "/animal-feed-machine.jpg",
    applications: ["Cattle feed production", "Goat feed manufacturing", "Fish feed production", "Poultry feed"],
    features: ["Consistent output", "Nutritious formulation", "Minimal operational effort", "High efficiency"],
  },
  {
    name: "Biomass Pellet Machine",
    description:
      "Converts agricultural and biomass waste into high-density fuel pellets for sustainable energy solutions.",
    image: "/biomass-pellet-other.jpg",
    applications: ["Biomass waste conversion", "Renewable energy", "Industrial fuel", "Sustainable heating"],
    features: ["High-density pellets", "Waste utilization", "Energy efficient", "Eco-friendly"],
  },
  {
    name: "Charcoal/Biochar Making Machine",
    description:
      "Transforms organic waste into premium charcoal and biochar for fuel and soil enhancement applications.",
    image: "/charcoal-biochar-machine.png",
    applications: ["Charcoal production", "Biochar manufacturing", "Soil enhancement", "Fuel production"],
    features: ["Premium quality output", "Waste conversion", "Sustainable practice", "Dual application"],
  },
  {
    name: "Continuous Biochar Plant",
    description:
      "Advanced continuous system designed for large-scale biochar production with maximum efficiency and low emissions.",
    image: "/continuous-biochar-plant.png",
    applications: ["Large-scale production", "Industrial biochar", "Carbon sequestration", "Renewable energy"],
    features: ["Continuous operation", "High efficiency", "Low emissions", "Maximum output"],
  },
  {
    name: "Fish Feed Making Machine",
    description:
      "Produces floating fish feed pellets (dog feed, turtle feed, etc.) with precise nutrition and superior water stability.",
    image: "/fish-feed-machine.png",
    applications: ["Fish feed production", "Dog feed manufacturing", "Turtle feed", "Aquatic feed"],
    features: ["Floating pellets", "Precise nutrition", "Water stability", "High quality"],
  },
  {
    name: "Fertilizer Granule Making Machine",
    description:
      "Converts organic and inorganic materials into uniform fertilizer granules for improved soil productivity.",
    image: "/fertilizer-granule-machine.jpg",
    applications: ["Organic fertilizer", "Inorganic fertilizer", "Soil productivity", "Granule production"],
    features: ["Uniform granules", "Material flexibility", "High productivity", "Quality control"],
  },
  {
    name: "Grinder Machine",
    description:
      "High-performance grinding solution for reducing raw materials into fine, uniform particles.",
    image: "/grinder-machine-02.png",
    applications: ["Material grinding", "Feed preparation", "Powder production", "Raw material processing"],
    features: ["Fine particle output", "Uniform size", "High performance", "Durable construction"],
  },
  {
    name: "Mixer Machine",
    description:
      "Ensures homogeneous mixing of various materials for consistent quality and enhanced production efficiency.",
    image: "/mixer-machine.png",
    applications: ["Feed mixing", "Material blending", "Quality assurance", "Production efficiency"],
    features: ["Homogeneous mixing", "Consistent quality", "Efficient operation", "Durable design"],
  },
  {
    name: "Screw and Belt Conveyors",
    description:
      "Reliable material handling systems designed for smooth, continuous, and efficient transportation of bulk materials.",
    image: "/conveyor-inclined.png",
    applications: ["Bulk material handling", "Continuous transport", "Inclined conveying", "Horizontal transfer"],
    features: ["Smooth operation", "Continuous transport", "Reliable performance", "Durable structure"],
  },
]

export default function OtherProductsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-background/70 hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance">
              Other Agro & Bio-energy Products
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed">
              Our machines are designed to deliver reliable, efficient, and high-performance solutions for various industrial and agricultural applications. Built with robust engineering and advanced technology, they ensure smooth operation, low maintenance, and long service life. Each machine is developed to improve productivity, reduce operational effort, and support sustainable practices. With a focus on quality and innovation, our machines help businesses achieve consistent results and long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherProducts.map((product, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">Applications:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app, aIndex) => (
                        <span key={aIndex} className="text-xs px-2 py-1 bg-secondary text-muted-foreground rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Looking for Something Specific?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            We specialize in custom machinery solutions. Tell us your requirements and our engineering team will design
            the perfect solution for you.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Request Custom Solution
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
