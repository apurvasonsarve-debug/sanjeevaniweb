import Image from "next/image"
import { Target, Eye, Leaf, Factory, Users, Award, CheckCircle } from "lucide-react"

const industries = [
  "Agriculture & Farming",
  "Renewable Energy",
  "Waste Management",
  "Animal Husbandry",
  "Food Processing",
  "Carbon Credits & Trading",
]

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to environmental conservation through innovative green technology solutions.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Uncompromising standards in design, manufacturing, and delivery of every product.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building lasting relationships through exceptional service and support.",
  },
  {
    icon: Factory,
    title: "Innovation",
    description: "Continuously evolving our technology to meet emerging market demands.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/our-team.jpeg')`,
            }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance">
              Pioneering Sustainable Agriculture Technology
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed">
              Since 2016, Sanjivani Agro Machinery has been at the forefront of designing and manufacturing innovative
              machinery solutions that bridge the gap between agriculture and sustainable energy.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Company Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Sanjivani Agro Machinery is a premier Indian manufacturing company specializing in the design,
                development, and production of advanced agro and bio-energy machinery. Established in 2016, we have
                grown to become a trusted name in sustainable technology solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our expertise lies in creating Special Purpose Machines (SPM) that address critical needs in biochar
                production, biomass processing, renewable energy generation, animal feed manufacturing, and
                waste-to-energy conversion. Each machine we produce reflects our commitment to quality, efficiency, and
                environmental responsibility.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 500 successful installations across 18+ states in India, we have established a robust
                pan-India service network that ensures our customers receive timely support and maintenance services.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/manufracturing-area-2.jpg"
                  alt="Sanjivani Manufacturing Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl">
                <p className="text-4xl font-bold">8+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-card p-8 lg:p-10 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted and innovative manufacturer of sustainable agro-machinery, leading the
                transformation of agricultural practices through technology that benefits farmers, entrepreneurs, and
                the environment. We envision a future where every agricultural community has access to efficient,
                eco-friendly machinery that converts waste into valuable resources.
              </p>
            </div>
            <div className="bg-card p-8 lg:p-10 rounded-2xl">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower farmers and entrepreneurs with innovative, high-quality machinery that transforms
                agricultural waste into valuable products. We are committed to advancing sustainable practices,
                promoting rural entrepreneurship, reducing carbon footprint, and contributing to India's green economy
                through continuous innovation and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Manufacture */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Manufacture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our diverse product portfolio addresses multiple sectors of the agricultural and renewable energy
              industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-secondary p-6 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-3">Biochar Making Machines </h3>
              <p className="text-muted-foreground text-sm">
                Advanced pyrolysis systems converting agricultural waste into high-quality biochar for soil and sustainability.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-3">Biomass Pellet Making Machines</h3>
              <p className="text-muted-foreground text-sm">
                Efficient machines that convert biomass into high-density fuel pellets for energy and industrial use.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-3">Animal Feed Making Machines</h3>
              <p className="text-muted-foreground text-sm">
                Complete solutions for producing nutritious and high-quality feed for livestock and poultry.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-3">Fish Feed Making Machines</h3>
              <p className="text-muted-foreground text-sm">
                Specialized equipment for manufacturing floating and sinking aqua feed with high nutritional value.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-3">Special Purpose Machines</h3>
              <p className="text-muted-foreground text-sm">
                Custom-built machinery designed to meet specific industrial and agricultural processing needs.
              </p>
            </div>
            <div className="bg-secondary p-6 rounded-2xl">
              <h3 className="font-semibold text-foreground mb-3">Complete Automatic Plants</h3>
              <p className="text-muted-foreground text-sm">
                Fully automated turnkey plants offering end-to-end production solutions with maximum efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 lg:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">Industries We Serve</h2>
              <p className="text-background/80 text-lg leading-relaxed mb-8">
                Our machinery solutions cater to diverse industries, all united by the common goal of sustainable
                development and efficient resource utilization.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-background">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/industry-we-sereve.png"
                alt="Industries We Serve"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles that guide every aspect of our business operations and customer relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-secondary rounded-2xl">
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
