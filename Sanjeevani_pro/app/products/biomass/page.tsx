import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const biomassMachines = [
  {
    name: "Biomass Pellet Machine - 260 B",
    description:
      "Professional biomass pellet making machines for producing high-quality pellets from agricultural waste and biomass materials.",
    image: "/biomass-pellet-260b.jpg",
    specifications: {
      motor: "20 HP motor (1440 rpm)",
      power: "3 phase connection required",
      output: "120 to 150 kgs per hour",
      dimensions: {
        height: "41 inch",
        width: "15 inch",
        length: "53 inch",
      },
      weight: "350 kg approx.",
    },
    applications: [
      "Fuel pellets production",
      "Animal bedding pellets",
      "Industrial biomass fuel",
      "Export-quality pellets",
    ],
  },
  {
    name: "Biomass Pellet Machine - 300 B",
    description:
      "Professional biomass pellet making machines for producing high-quality pellets from agricultural waste and biomass materials.",
    image: "/biomass-pellet-300b.jpg",
    specifications: {
      motor: "30 HP motor (1440 rpm)",
      power: "3 phase connection required",
      output: "250 to 300 kgs per hour",
      starter: "ASD Submersible STARTER (Havel's)",
    },
    applications: [
      "High-capacity fuel pellets production",
      "Industrial biomass fuel",
      "Commercial-scale operations",
      "Export-quality pellets",
    ],
  },
  {
    name: "Biomass Pellet Machine - 400 B",
    description:
      "Professional biomass pellet making machines for producing high-quality pellets from agricultural waste and biomass materials.",
    image: "/biomass-pellet-400b.jpg",
    specifications: {
      motor: "40 HP Havel's motor (1440 rpm)",
      power: "3 phase connection required",
      output: "400 to 500 kgs per hour",
    },
    applications: [
      "Large-scale fuel pellets production",
      "Industrial biomass fuel",
      "High-capacity operations",
      "Commercial enterprises",
    ],
  },
  {
    name: "Biomass Pellet Machine - 60 HP",
    description:
      "Industrial-scale biomass pellet making machine for high-volume production with power plant applications.",
    image: "/biomass-pellet-60hp.jpg",
    specifications: {
      motor: "60 HP motor with panel board",
      output: "1.5 to 2 TPH (Tons Per Hour)",
      pelletSize: "25 mm",
      power: "60 HP",
      costEffective: "Less power consumption",
    },
    applications: [
      "Power plant coal dust production",
      "Cotton stalk processing",
      "Soybean stalk processing",
      "Sawdust and agricultural waste",
      "Rice straw processing",
      "Bamboo processing",
    ],
  },
  {
    name: "Biomass Pellet Machine - 560 B",
    description:
      "Large-scale industrial biomass pellet machine for high-volume sustainable fuel production with advanced specifications.",
    image: "/biomass-pellet-560b.jpg",
    specifications: {
      motor: "132 KW motor with panel board",
      output: "1 to 1.5 ton/hour",
      pelletSize: "6-10 mm",
      productionCapacity: "Depends on Pellet Size",
    },
    applications: [
      "Industrial-scale pellet production",
      "Cotton stalk processing",
      "Soybean stalk processing",
      "Chaff processing",
      "Rice straw processing",
      "Bamboo processing",
      "Agricultural waste utilization",
    ],
  },
]

export default function BiomassPage() {
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
              Biomass Machines
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed mb-4">
              Our biomass machines are engineered to convert waste into high-density, uniform biomass fuel through an
              efficient and controlled process. The system improves fuel consistency, reduces volume, and enhances energy
              efficiency for reliable performance.
            </p>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed">
              This sustainable solution supports renewable energy generation while minimizing environmental impact.
              Designed for durability and ease of operation, our biomass machines help turn waste into long-term economic
              and energy value.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {biomassMachines.map((machine, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image src={machine.image || "/placeholder.svg"} alt={machine.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{machine.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{machine.description}</p>

                  {machine.specifications && (
                    <div className="mb-4 pb-4 border-b border-border">
                      <p className="text-sm font-semibold text-foreground mb-3">Specifications:</p>
                      <div className="space-y-2">
                        {machine.specifications.motor && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Motor:</span> {machine.specifications.motor}
                          </div>
                        )}
                        {machine.specifications.power && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Power:</span> {machine.specifications.power}
                          </div>
                        )}
                        {machine.specifications.output && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Output:</span> {machine.specifications.output}
                          </div>
                        )}
                        {machine.specifications.starter && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Starter:</span> {machine.specifications.starter}
                          </div>
                        )}
                        {machine.specifications.pelletSize && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Pellet Size:</span> {machine.specifications.pelletSize}
                          </div>
                        )}
                        {machine.specifications.productionCapacity && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Production Capacity:</span> {machine.specifications.productionCapacity}
                          </div>
                        )}
                        {machine.specifications.costEffective && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Note:</span> {machine.specifications.costEffective}
                          </div>
                        )}
                        {machine.specifications.weight && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Weight:</span> {machine.specifications.weight}
                          </div>
                        )}
                        {machine.specifications.dimensions && (
                          <div className="text-xs text-muted-foreground">
                            <span className="font-medium">Dimensions:</span> H: {machine.specifications.dimensions.height}, W:{" "}
                            {machine.specifications.dimensions.width}, L: {machine.specifications.dimensions.length}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Applications:</p>
                    <div className="flex flex-wrap gap-2">
                      {machine.applications.map((app, aIndex) => (
                        <span
                          key={aIndex}
                          className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-secondary text-muted-foreground rounded-full"
                        >
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {app}
                        </span>
                      ))}
                    </div>
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
            Need a Complete Biomass Processing Line?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            We design and install turnkey biomass processing plants with all equipment, installation, and training
            included.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Discuss Your Requirements
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
