import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const batchMachines = [
  {
    name: "15000 Liter Model",
    capacity: "1500 ltr",
    image: "/biochar-15000ltr.jpg",
    specifications: {
      chamberSize: "2 meter length × 1 meter diameter",
      moc: "Carbon Steel",
      accessories: ["Scrubber", "Temperature Gauge"],
    },
    applications: ["Small-scale biochar production", "Farmer cooperatives", "Research testing", "Quality biochar"],
  },
  {
    name: "5000 Liter Model",
    capacity: "5000 ltr",
    image: "/biochar-5000ltr.png",
    specifications: {
      heatingChamber: "3 mt length × 1.5 mt diameter",
      outerJacket: "5 mm MS material",
      gasPipes: "6 inch/4 inch/3 inch MS pipes for syn gases",
      gasScrubber: "1 gas inlet, 1 outlet, 1 exhaust with valve, 1 oil/water outlet with valve, fittings, fasteners",
      synGasBurners: "4 nos under heating chamber, 2 nos firewood feeding doors",
      temperatureGauge: "Yes",
      blower: "1 HP Blower (220 Volts AC) for firewood burning",
    },
    applications: ["Medium-scale operations", "Biochar entrepreneurs", "Agro-industries", "Carbon credit generation"],
  },
  {
    name: "11000 Liter Model",
    capacity: "11000 ltr",
    image: "/biochar-11000ltr.jpg",
    specifications: {
      chamberSize: "4.5 mt length × 1.5 mt diameter",
      outerJacket: "5 mm MS material, 50mm thickness",
      gasPipes: "9 inch/6 inch/4 inch MS pipes for syn gases (2 sets)",
      gasScrubber: "2 Nos each with 1 gas inlet, 1 outlet, 1 exhaust with valve, 1 oil/water outlet with valve",
      synGasBurners: "8 nos under chamber, 3 nos firewood feeding doors",
      blower: "1 no Blower with 4 outlets (2 HP, 220 Volts AC)",
      temperatureGauge: "Yes",
    },
    applications: ["Large-scale biochar production", "Industrial processing", "Export-quality biochar", "Renewable energy"],
  },
]

const continuousMachines = [
  {
    name: "200 kg/hr Plant",
    capacity: "200 kg/hour",
    image: "/continuous-200kg.png",
    applications: ["Small-scale continuous production", "Testing and demonstrations", "Biochar entrepreneurs", "Quality control"],
  },
  {
    name: "1 Ton/hr Plant",
    capacity: "1 ton/hour",
    image: "/continuous-1ton.png",
    applications: ["Medium-scale industrial operations", "Agro-industries", "Biochar manufacturing", "Carbon credit generation"],
  },
  {
    name: "1 Ton/hr Plant (Advanced)",
    capacity: "1 ton/hour",
    image: "/continuous-1ton-plant.jpg",
    applications: ["Industrial biochar production", "Large agro-industries", "Export-quality biochar", "Renewable energy"],
  },
  {
    name: "3 Ton/hr Plant",
    capacity: "3 tons/hour",
    image: "/continuous-3ton.jpg",
    applications: [
      "Large-scale industrial operations",
      "Biochar manufacturing plants",
      "High-volume processing",
      "Export-oriented units",
    ],
  },
]

export default function BiocharPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative py-20 lg:py-28 text-background overflow-hidden">

  {/* Background Image */}
  <Image
    src="/biochar-hero.jpg"   // <-- put your image here
    alt="Biochar Background"
    fill
    priority
    className="object-cover"
  />

  {/* Dark Overlay (important for text visibility) */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 lg:px-8">
    <Link
      href="/products"
      className="inline-flex items-center gap-2 text-background/70 hover:text-primary mb-6 transition-colors"
    >
      <ArrowLeft className="h-4 w-4" />
      Back to Products
    </Link>

    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance">
        Biochar Machines
      </h1>

      <p className="text-background/80 text-lg md:text-xl leading-relaxed">
        Advanced pyrolysis systems for sustainable biochar production. 
        Our machines convert agricultural waste into high-quality biochar, 
        contributing to carbon sequestration and soil health improvement.
      </p>
    </div>

  </div>
</section>

      {/* Raw Materials Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">From Waste to Value</h2>
            <p className="text-muted-foreground text-lg max-w-4xl mb-8">
              We specialize in converting a wide range of agricultural and biomass waste into high-quality biochar using
              efficient and sustainable technology. Materials such as bamboo, coconut shells, crop residues, wood waste,
              briquettes, and pellets are processed through a controlled, low-oxygen system to produce carbon-rich biochar.
              This eco-friendly solution helps manage waste, improve soil health, enhance water retention, and reduce carbon
              emissions. Our approach supports sustainable farming while turning agricultural waste into long-term
              environmental and economic value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/cotton-stalk.jpg"
                  alt="Cotton Stalk"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-card p-4">
                <h3 className="font-semibold text-foreground">Cotton Stalk</h3>
                <p className="text-sm text-muted-foreground">Agricultural residue from cotton harvest</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/agriculture-wastes.jpg"
                  alt="Agriculture Wastes"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-card p-4">
                <h3 className="font-semibold text-foreground">Agriculture Wastes</h3>
                <p className="text-sm text-muted-foreground">Crop residues and field waste materials</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/briquettes.jpg"
                  alt="Briquettes"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-card p-4">
                <h3 className="font-semibold text-foreground">Briquettes</h3>
                <p className="text-sm text-muted-foreground">Compacted biomass fuel products</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/tender-coconut.jpg"
                  alt="Coconut"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-card p-4">
                <h3 className="font-semibold text-foreground">Tender Coconut</h3>
                <p className="text-sm text-muted-foreground">Tender Coconut and fiber waste</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/Pulse-crop-residue.jpeg"
                  alt="Pulse Crop Residue"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-card p-4">
                <h3 className="font-semibold text-foreground">Pulse Crop Residue</h3>
                <p className="text-sm text-muted-foreground">Tur stalk and legume waste</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/bamboo.jpg"
                  alt="Bamboo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-card p-4">
                <h3 className="font-semibold text-foreground">Bamboo</h3>
                <p className="text-sm text-muted-foreground">Sustainable bamboo processing waste</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/wood-waste.jpg"
                  alt="Wood Waste"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-card p-4">
                <h3 className="font-semibold text-foreground">Wood Waste</h3>
                <p className="text-sm text-muted-foreground">Timber and wood processing residues</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/biomass-pellets.jpg"
                  alt="Biomass Pellets"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-card p-4">
                <h3 className="font-semibold text-foreground">Biomass Pellets</h3>
                <p className="text-sm text-muted-foreground">Compressed biomass fuel pellets</p>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden group">
              <div className="relative aspect-[4/3]">
              <Image
              src="/coconut-shell.jpg"
              alt="Coconut Shell"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-card p-4">
              <h3 className="font-semibold text-foreground">Coconut Shells</h3>
              <p className="text-sm text-muted-foreground">Coconut shells and fiber waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Type Machines */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Batch Type Biochar Machines</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Our batch-type systems offer flexibility for small to medium-scale operations, ideal for farmers,
              entrepreneurs, and research institutions exploring biochar production.
            </p>
          </div>

          <div className="space-y-12">
            {batchMachines.map((machine, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start bg-secondary rounded-2xl p-6 lg:p-8"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src={machine.image || "/placeholder.svg"} alt={machine.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-foreground">{machine.name}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {machine.capacity}
                    </span>
                  </div>

                  {machine.specifications && (
                    <div className="mb-6 pb-6 border-b border-border">
                      <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
                      <div className="space-y-2">
                        {machine.specifications.chamberSize && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Chamber Size:</span> {machine.specifications.chamberSize}
                          </div>
                        )}
                        {machine.specifications.moc && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">MOC:</span> {machine.specifications.moc}
                          </div>
                        )}
                        {machine.specifications.heatingChamber && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Heating Chamber:</span> {machine.specifications.heatingChamber}
                          </div>
                        )}
                        {machine.specifications.outerJacket && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Outer Jacket:</span> {machine.specifications.outerJacket}
                          </div>
                        )}
                        {machine.specifications.gasPipes && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Gas Pipes:</span> {machine.specifications.gasPipes}
                          </div>
                        )}
                        {machine.specifications.gasScrubber && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Gas Scrubber:</span> {machine.specifications.gasScrubber}
                          </div>
                        )}
                        {machine.specifications.synGasBurners && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Syn Gas Burners:</span> {machine.specifications.synGasBurners}
                          </div>
                        )}
                        {machine.specifications.blower && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Blower:</span> {machine.specifications.blower}
                          </div>
                        )}
                        {machine.specifications.accessories && (
                          <div className="text-sm text-muted-foreground">
                            <span className="font-medium">Accessories:</span> {machine.specifications.accessories.join(", ")}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {machine.applications.map((app, aIndex) => (
                        <span
                          key={aIndex}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-card text-muted-foreground text-sm rounded-full"
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

      {/* Continuous Type Machines */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Continuous Type Biochar Machines</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mb-6">
              Designed for large-scale industrial operations, our continuous systems offer uninterrupted production with
              maximum efficiency and output.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-background rounded-xl p-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Input Capacity</h3>
                <p className="text-muted-foreground">200kg/hr to 3 ton/hr of agro-waste</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Output</h3>
                <p className="text-muted-foreground">30–35% biochar (depending on raw material)</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Raw Material</h3>
                <p className="text-muted-foreground">Any type of agricultural waste in powder form</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {continuousMachines.map((machine, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start bg-card rounded-2xl p-6 lg:p-8"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src={machine.image || "/placeholder.svg"} alt={machine.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-foreground">{machine.name}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {machine.capacity}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {machine.applications.map((app, aIndex) => (
                        <span
                          key={aIndex}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-muted-foreground text-sm rounded-full"
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
            Interested in Our Biochar Machines?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Contact us for detailed specifications, pricing, and customization options.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
