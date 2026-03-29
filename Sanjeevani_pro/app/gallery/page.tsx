"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "factory", name: "Factory & Infrastructure" },
  { id: "machines", name: "Machines" },
  { id: "exhibitions", name: "Exhibitions" },
  { id: "visits", name: "Client Visits" },
  { id: "team", name: "Team" },
]

const galleryImages = [
  {
    id: 1,
    src: "/delhi-2025-hero.jpeg",
    category: "factory",
    title: "Factory Exterior View",
    description: "Our state-of-the-art manufacturing facility in Maharashtra",
  },
  {
    id: 2,
    src: "/office-photo.jpg",
    category: "factory",
    title: "Manufacturing Floor",
    description: "Advanced CNC machining center for precision manufacturing",
  },
  {
    id: 3,
    src: "/biochar-production-machine-industrial-equipment-gr.jpg",
    category: "machines",
    title: "Continuous Biochar Plant",
    description: "Our flagship continuous biochar production system",
  },
  {
    id: 4,
    src: "/biomass-briquetting-machine-industrial.jpg",
    category: "machines",
    title: "Biomass Briquetting Machine",
    description: "High-capacity briquetting press for biomass conversion",
  },
  {
    id: 5,
    src: "/agricultural-trade-exhibition-booth-with-machinery.jpg",
    category: "exhibitions",
    title: "Agri Tech Expo 2024",
    description: "Showcasing our products at India's largest agri-tech exhibition",
  },
  {
    id: 6,
    src: "/industrial-exhibition-booth-green-energy-machinery.jpg",
    category: "exhibitions",
    title: "Renewable Energy Summit",
    description: "Participating in the national renewable energy summit",
  },
  {
    id: 7,
    src: "/business-meeting-factory-visit-industrial-clients.jpg",
    category: "visits",
    title: "Client Factory Visit",
    description: "Hosting clients from Gujarat for machinery demonstration",
  },
  {
    id: 8,
    src: "/government-officials-factory-tour-industrial.jpg",
    category: "visits",
    title: "Government Delegation",
    description: "Visit by agricultural department officials",
  },
  {
    id: 9,
    src: "/professional-engineering-team-group-photo-industri.jpg",
    category: "team",
    title: "Engineering Team",
    description: "Our dedicated team of engineers and technicians",
  },
  {
    id: 10,
    src: "/manufracturing-area-2.jpg",
    category: "factory",
    title: "Assembly Line",
    description: "Quality-controlled assembly process",
  },
  {
    id: 11,
    src: "/pellet-mill-machine-industrial-biomass.jpg",
    category: "machines",
    title: "Pellet Mill System",
    description: "Industrial-grade pellet manufacturing machine",
  },
  {
    id: 12,
    src: "/trade-fair-agricultural-machinery-exhibition-crowd.jpg",
    category: "exhibitions",
    title: "Krishi Mela 2024",
    description: "Large gathering at our exhibition stall during Krishi Mela",
  },
  {
    id: 13,
    src: "/international-business-delegation-factory-meeting.jpg",
    category: "visits",
    title: "International Partners",
    description: "Meeting with international partners from Africa",
  },
  {
    id: 14,
    src: "/corporate-team-celebration-office-professional.jpg",
    category: "team",
    title: "Team Celebration",
    description: "Celebrating our 8th anniversary with the entire team",
  },
  {
    id: 15,
    src: "/quality-control-testing-laboratory-industrial.jpg",
    category: "factory",
    title: "Quality Testing Lab",
    description: "In-house quality testing and R&D laboratory",
  },
  {
    id: 16,
    src: "/event-award-ceremony.jpg",
    category: "exhibitions",
    title: "Excellence Award Ceremony",
    description: "Industry recognition for outstanding contributions to sustainable manufacturing",
  },
  {
    id: 17,
    src: "/event-official-inauguration.jpg",
    category: "visits",
    title: "Official Factory Inauguration",
    description: "Government officials and dignitaries at our manufacturing facility opening",
  },
  {
    id: 18,
    src: "/event-award-recognition.jpg",
    category: "exhibitions",
    title: "National Award Ceremony",
    description: "Recognition for contributions to textile industry development",
  },
  {
    id: 19,
    src: "/event-trade-show.jpg",
    category: "exhibitions",
    title: "Government Officials at Trade Show",
    description: "Demonstrating our machinery at a national agriculture and industry trade exhibition",
  },
  {
    id: 20,
    src: "/event-directors-office.jpg",
    category: "team",
    title: "Directors Anil Chouk and Sanjay Kshirsagar",
    description: "Our founding directors in the corporate office",
  },
  {
    id: 21,
    src: "/event-team-celebration.jpg",
    category: "team",
    title: "Team Milestone Celebration",
    description: "Company team celebrating achievements with corporate leadership",
  },
  {
    id: 22,
    src: "/event-seminar.jpg",
    category: "exhibitions",
    title: "Technical Seminar",
    description: "Government and industry experts at our technical seminar series",
  },
  {
    id: 23,
    src: "/event-discussion.jpg",
    category: "team",
    title: "Business Strategy Discussion",
    description: "Internal team meeting on manufacturing excellence and business growth",
  },
  {
    id: 24,
    src: "/event-team-machinery.jpg",
    category: "machines",
    title: "Team with Biochar Equipment",
    description: "Technical team posing with state-of-the-art biochar production machinery",
  },
  {
    id: 25,
    src: "/event-business-meeting.jpg",
    category: "visits",
    title: "Strategic Partnership Meeting",
    description: "Executives exchanging gifts and discussing partnership opportunities for mutual business growth",
  },
  {
    id: 26,
    src: "/event-cotton-training-center.jpg",
    category: "visits",
    title: "Cotton Technology Training Center Visit",
    description: "Team visit to ICAR-CIRCOT (Central Institute for Research on Cotton Technology) in Nagpur",
  },
  {
    id: 27,
    src: "/event-office-recognition.jpg",
    category: "team",
    title: "Office Recognition Ceremony",
    description: "Workplace appreciation event recognizing employee contributions and achievements",
  },
  {
    id: 28,
    src: "/event-facility-tour.jpg",
    category: "visits",
    title: "Facility Tour & Installation Demo",
    description: "Clients and partners touring the manufacturing facility and experiencing machinery installation",
  },
  {
    id: 29,
    src: "/event-yogesh-presentation.jpg",
    category: "exhibitions",
    title: "Industry Conference Presentation",
    description: "Mr. Yogesh Gajaralwar presenting Sanjivani Agro Machinery at a national industry conference",
  },
  {
    id: 30,
    src: "/event-biochar-inspection.jpg",
    category: "visits",
    title: "Biochar Equipment Inspection",
    description: "Technical experts inspecting specifications of our advanced biochar production kiln",
  },
  {
    id: 31,
    src: "/event-international-visit.jpg",
    category: "visits",
    title: "International Delegation at Equipment",
    description: "International visitor examining our large-scale biochar production system with technical team",
  },
  {
    id: 32,
    src: "/event-team-machinery-showcase.jpg",
    category: "machines",
    title: "Engineering Team Showcase",
    description: "Technical team with advanced industrial biochar and biomass processing equipment",
  },
  {
    id: 33,
    src: "/event-large-group-photo.jpg",
    category: "team",
    title: "Open House & Facility Gathering",
    description: "Large group of visitors and stakeholders at manufacturing facility event",
  },
  {
    id: 34,
    src: "/event-trade-exhibition.jpg",
    category: "exhibitions",
    title: "Trade Exhibition Booth Demo",
    description: "Live demonstration of grinding machine and cyclone technology at trade show",
  },
  {
    id: 35,
    src: "/event-factory-team-gathering.jpg",
    category: "team",
    title: "Company Family Event",
    description: "Entire company team gathered at Sanjivani Agro Machinery facility for celebration",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const displayedImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? displayedImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === displayedImages.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/event-factory-team-gathering.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Gallery</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance">
              A Visual Journey Through Excellence
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed">
              Explore our manufacturing facility, machinery range, exhibitions, and the people who make it all possible.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary border-b border-border sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:bg-primary/10 hover:text-primary"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {displayedImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-background font-semibold text-sm">{image.title}</h3>
                  <p className="text-background/70 text-xs mt-1">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:text-primary transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-background hover:text-primary transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <div className="max-w-5xl w-full mx-4">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={displayedImages[currentImageIndex].src || "/placeholder.svg"}
                alt={displayedImages[currentImageIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-background font-semibold text-lg">{displayedImages[currentImageIndex].title}</h3>
              <p className="text-background/70 text-sm mt-1">{displayedImages[currentImageIndex].description}</p>
              <p className="text-background/50 text-xs mt-2">
                {currentImageIndex + 1} / {displayedImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
