"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "factory", name: "Factory & Infrastructure" },
  { id: "exhibitions", name: "Exhibitions" },
  { id: "visits", name: "Client Visits" },
  { id: "team", name: "Team" },
]

const galleryImages = [
  {
    id: 1,
    src: "/delhi-2025-hero.jpeg",
    category: "factory",
  },
  {
    id: 2,
    src: "/office-photo.jpg",
    category: "factory",
  },
  {
    id: 5,
    src: "/event-directors-office.jpg",
    category: "visits",
  },
  {
    id: 7,
    src: "/our-team.jpeg",
    category: "team",
  },
  {
    id: 8,
    src: "/manufracturing-area-2.jpg",
    category: "factory",
  },
  {
    id: 12,
    src: "/quality-control-testing-laboratory-industrial.jpg",
    category: "factory",
  },
  {
    id: 16,
    src: "/event-award-ceremony.jpg",
    category: "exhibitions",
  },
  {
    id: 17,
    src: "/event-official-inauguration.jpg",
    category: "visits",
  },
  {
    id: 18,
    src: "/event-award-recognition.jpg",
    category: "exhibitions",
  },
  {
    id: 19,
    src: "/event-trade-show.jpg",
    category: "exhibitions",
  },
  {
    id: 20,
    src: "/event-directors-office.jpg",
    category: "team",
  },
  {
    id: 21,
    src: "/event-team-celebration.jpg",
    category: "team",
  },
  {
    id: 22,
    src: "/event-seminar.jpg",
    category: "exhibitions",
  },
  {
    id: 23,
    src: "/event-discussion.jpg",
    category: "team",
  },
  {
    id: 25,
    src: "/event-business-meeting.jpg",
    category: "visits",
  },
  {
    id: 26,
    src: "/event-cotton-training-center.jpg",
    category: "visits",
  },
  {
    id: 27,
    src: "/event-office-recognition.jpg",
    category: "team",
  },
  {
    id: 28,
    src: "/event-facility-tour.jpg",
    category: "visits",
  },
  {
    id: 29,
    src: "/event-yogesh-presentation.jpg",
    category: "exhibitions",
  },
  {
    id: 30,
    src: "/event-biochar-inspection.jpg",
    category: "visits",
  },
  {
    id: 31,
    src: "/event-international-visit.jpg",
    category: "visits",
  },
  {
    id: 33,
    src: "/event-large-group-photo.jpg",
    category: "team",
  },
  {
    id: 34,
    src: "/event-trade-exhibition.jpg",
    category: "exhibitions",
  },
  {
    id: 35,
    src: "/event-factory-team-gathering.jpg",
    category: "team",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const displayedImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = (): void => {
    setLightboxOpen(false)
  }

  const goToPrevious = (): void => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? displayedImages.length - 1 : prevIndex - 1))
  }

  const goToNext = (): void => {
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
                  alt="Gallery Image"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                alt="Gallery Image"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-background/50 text-xs mt-2">{currentImageIndex + 1} / {displayedImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
