import Image from "next/image"
import { Quote, MapPin, Building2, Users, TrendingUp } from "lucide-react"

const clientStats = [
  { number: "500+", label: "Satisfied Clients", icon: Users },
  { number: "18+", label: "States Covered", icon: MapPin },
  { number: "50+", label: "Corporate Clients", icon: Building2 },
  { number: "98%", label: "Client Retention", icon: TrendingUp },
]

const clientCategories = [
  {
    title: "Farmers & Agri-Entrepreneurs",
    description:
      "Individual farmers and agricultural entrepreneurs who use our machinery for on-farm biochar and biomass production.",
    count: "300+",
  },
  {
    title: "Agro-Industries",
    description:
      "Large-scale agricultural processing units and agri-businesses utilizing our machinery for commercial production.",
    count: "100+",
  },
  {
    title: "Government Projects",
    description: "State and central government initiatives for rural development and sustainable agriculture programs.",
    count: "25+",
  },
  {
    title: "Research Institutions",
    description: "Agricultural universities and research centers using our equipment for R&D and training programs.",
    count: "15+",
  },
  {
    title: "Export Clients",
    description: "International clients from Africa, Southeast Asia, and Middle East importing our machinery.",
    count: "30+",
  },
  {
    title: "Renewable Energy Companies",
    description: "Companies focused on biomass power generation and waste-to-energy conversion projects.",
    count: "40+",
  },
]

const testimonials = [
  {
    name: "Rajesh Patil",
    role: "Farmer & Entrepreneur",
    location: "Maharashtra",
    image: "/Notable-clients.png?height=100&width=100",
    quote:
      "Sanjivani's biochar machine transformed my farming business. The quality of machinery and after-sales support is exceptional. I have been using their equipment for 3 years without any major issues.",
  },
  {
    name: "Priya Sharma",
    role: "Director, GreenAgro Industries",
    location: "Gujarat",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "We installed their continuous biochar plant last year and the ROI has been remarkable. The team's technical expertise and commitment to customer satisfaction sets them apart from competitors.",
  },
  {
    name: "Dr. Anil Kumar",
    role: "Professor, Agricultural University",
    location: "Punjab",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "We have been using Sanjivani's machinery for research and training purposes. The build quality is excellent and students get hands-on experience with industry-standard equipment.",
  },
  {
    name: "Mohammed Hassan",
    role: "CEO, BioEnergy Solutions",
    location: "Karnataka",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As a renewable energy company, we needed reliable biomass processing equipment. Sanjivani delivered exactly what we needed - robust machinery backed by excellent technical support.",
  },
  {
    name: "Sunita Devi",
    role: "Self-Help Group Leader",
    location: "Uttar Pradesh",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Our women's self-help group started a biochar business with Sanjivani's affordable machinery. They provided complete training and helped us establish a sustainable income source.",
  },
  {
    name: "Vikram Singh",
    role: "Agri-Business Owner",
    location: "Rajasthan",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "I compared multiple manufacturers before choosing Sanjivani. Their machinery quality, pricing, and service network across India made them the clear choice for my biomass project.",
  },
]

const majorClients = [
  { name: "State Agriculture Department - Maharashtra", type: "Government" },
  { name: "Indian Council of Agricultural Research", type: "Research" },
  { name: "National Bank for Agriculture & Rural Development", type: "Government" },
  { name: "Krishi Vigyan Kendras (Multiple)", type: "Research" },
  { name: "Gujarat Agro Industries Corporation", type: "Corporate" },
  { name: "Tamil Nadu Agricultural University", type: "Research" },
  { name: "Rajasthan State Seeds Corporation", type: "Government" },
  { name: "Multiple FPOs across India", type: "Cooperative" },
]

export default function ClientsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Our Clients</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance">
              Trusted by Industry Leaders Across India
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed">
              From individual farmers to government institutions, we serve a diverse clientele united by their
              commitment to sustainable agriculture and renewable energy.
            </p>
          </div>
        </div>
      </section>

      {/* Client Stats */}
      <section className="py-12 lg:py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {clientStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <stat.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-1">{stat.number}</p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Who We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse clientele reflects the versatility and reliability of our machinery solutions across various
              sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientCategories.map((category, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  <span className="text-2xl font-bold text-primary">{category.count}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real clients who have transformed their businesses with our sustainable machinery
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border border-border">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Clients */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Notable Clients & Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are proud to partner with leading government bodies, research institutions, and corporations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {majorClients.map((client, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <p className="font-medium text-foreground text-sm mb-1">{client.name}</p>
                <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                  {client.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Map Coverage */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Pan-India Presence</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our machinery is operational across 18+ states in India, from the agricultural heartlands of Punjab to
                the coastal regions of Tamil Nadu. Our extensive service network ensures prompt support wherever you
                are.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-2xl font-bold text-primary">North India</p>
                  <p className="text-muted-foreground text-sm">Punjab, Haryana, UP, Rajasthan</p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-2xl font-bold text-primary">West India</p>
                  <p className="text-muted-foreground text-sm">Maharashtra, Gujarat, MP, Goa</p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-2xl font-bold text-primary">South India</p>
                  <p className="text-muted-foreground text-sm">Karnataka, TN, Kerala, AP</p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-2xl font-bold text-primary">East India</p>
                  <p className="text-muted-foreground text-sm">Bihar, Jharkhand, Odisha, WB</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square bg-card rounded-2xl border border-border flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Pan-India Coverage Map"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
