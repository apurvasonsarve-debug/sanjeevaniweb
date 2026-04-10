import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const productCategories = [
  {
    title: "Biochar Machines",
    description:
      "Advanced pyrolysis systems for sustainable biochar production. Available in batch and continuous configurations for various production capacities.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/products/biochar",
    products: ["Batch Type Biochar Machines", "Continuous Type Biochar Machines", "Portable Biochar Units"],
  },
  {
    title: "Biomass Machines",
    description:
      "Complete range of biomass processing equipment for converting agricultural waste into valuable fuel products.",
    image: "/biochar-11000ltr.jpg?height=400&width=600",
    href: "/products/biomass",
    products: ["Briquetting Machines", "Pellet Mills", "Biomass Shredders", "Rotary Dryers"],
  },
  {
    title: "Other Agro & Bio-energy Products",
    description:
      "Specialized machinery for animal feed production, waste processing, and custom agro-industrial applications.",
    image: "/placeholder.svg?height=400&width=600",
    href: "/products/other",
    products: ["Animal Feed Machines", "Waste-to-Energy Systems", "Special Purpose Machines"],
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Our Products</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance">
              Sustainable Machinery Solutions
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed">
              Discover our comprehensive range of agro and bio-energy machinery designed to transform agricultural waste
              into valuable resources while promoting sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                     src={
                      index === 0
                      ? "/biochar-11000ltr.jpg"
                      : index === 1
                      ? "/biomass-pellet-560b.jpg"
                      : "/grinder-machine.jpg"
                    }
                    alt={category.title}
                    fill
                    className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{category.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{category.description}</p>
                  <div className="mb-6">
                    <p className="font-semibold text-foreground mb-3">Products in this category:</p>
                    <ul className="space-y-2">
                      {category.products.map((product, pIndex) => (
                        <li key={pIndex} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={category.href}>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      View {category.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We specialize in designing and manufacturing custom machinery tailored to your specific requirements.
            Contact us to discuss your project.
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
