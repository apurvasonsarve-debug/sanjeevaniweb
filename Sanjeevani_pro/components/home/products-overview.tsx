import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const productCategories = [
  {
    title: "Biochar Machines",
    description:
      "Advanced batch and continuous type biochar production systems for sustainable agriculture and carbon sequestration.",
    image: "/biochar-11000ltr.jpg",
    href: "/products/biochar",
  },
  {
    title: "Biomass Machines",
    description:
      "Complete range of biomass processing equipment including briquetting, pelletizing, and shredding machines.",
    image: "/biomass-pellet-560b.jpg",
    href: "/products/biomass",
  },
  {
    title: "Other Agro & Bio-energy Machines",
    description: "Specialized equipment for animal feed, waste-to-energy, and custom agro-processing applications.",
    image: "/grinder-machine.jpg",
    href: "/products/other",
  },
]

export function ProductsOverview() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Our Products</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Sustainable Machinery Solutions
            </h2>
          </div>
          <Link href="/products">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productCategories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-background">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-2">{category.description}</p>
                <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
