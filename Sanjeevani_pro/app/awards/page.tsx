import Image from "next/image"
import { Award, Trophy, Medal, Star, CheckCircle } from "lucide-react"

const awards = [
  {
    year: "2024",
    title: "Best Sustainable Manufacturing Company",
    organization: "Green India Awards",
    description:
      "Recognized for outstanding contribution to sustainable manufacturing practices and eco-friendly machinery production.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: "2024",
    title: "Innovation Excellence Award",
    organization: "Agri-Tech India Summit",
    description:
      "Awarded for innovative biochar production technology that revolutionizes carbon sequestration in agriculture.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: "2023",
    title: "Top SME Manufacturer of the Year",
    organization: "MSME Development Forum",
    description:
      "Honored as the leading SME manufacturer in the agricultural machinery sector for consistent quality and growth.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: "2023",
    title: "Export Excellence Award",
    organization: "Federation of Indian Export Organizations",
    description:
      "Recognized for significant contribution to machinery exports and promoting Indian manufacturing globally.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: "2022",
    title: "Best Renewable Energy Equipment Manufacturer",
    organization: "National Renewable Energy Congress",
    description: "Awarded for manufacturing high-quality biomass and waste-to-energy conversion machinery.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: "2022",
    title: "Quality Excellence Certificate",
    organization: "Bureau of Indian Standards",
    description: "Certified for maintaining highest quality standards in manufacturing processes and product output.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: "2021",
    title: "Rural Entrepreneurship Champion",
    organization: "Ministry of Rural Development",
    description:
      "Recognized for empowering rural entrepreneurs through affordable and efficient agricultural machinery solutions.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    year: "2020",
    title: "Emerging Company of the Year",
    organization: "Indian Agribusiness Awards",
    description: "Honored as the fastest-growing agricultural machinery company with innovative product portfolio.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    icon: CheckCircle,
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management",
    icon: CheckCircle,
  },
  {
    name: "CE Marking",
    description: "European Conformity",
    icon: CheckCircle,
  },
  {
    name: "BIS Certified",
    description: "Bureau of Indian Standards",
    icon: CheckCircle,
  },
]

const achievements = [
  { number: "15+", label: "Industry Awards", icon: Trophy },
  { number: "4", label: "International Certifications", icon: Medal },
  { number: "8+", label: "Years of Excellence", icon: Star },
  { number: "500+", label: "Happy Clients", icon: Award },
]

export default function AwardsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Awards & Recognition</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance">
              Celebrating Excellence in Sustainable Manufacturing
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed">
              Our commitment to quality, innovation, and sustainability has been recognized by leading industry bodies
              and government organizations across India.
            </p>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-12 lg:py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">{item.number}</p>
                <p className="text-primary-foreground/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards List */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Awards & Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A testament to our dedication to excellence, innovation, and sustainable practices in the agro-machinery
              industry.
            </p>
          </div>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative aspect-video lg:aspect-auto">
                    <Image src={award.image || "/placeholder.svg"} alt={award.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {award.year}
                    </div>
                  </div>
                  <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">{award.title}</h3>
                        <p className="text-primary font-medium text-sm mb-3">{award.organization}</p>
                        <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Certifications & Compliance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We adhere to international quality standards and maintain all necessary certifications for our
              manufacturing processes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <cert.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{cert.name}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
