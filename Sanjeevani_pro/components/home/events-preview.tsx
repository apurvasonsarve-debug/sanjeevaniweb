import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    image: "/event-award-ceremony.jpg",
    caption: "Agri Tech Exhibition 2024",
  },
  {
    image: "/event-award-recognition.jpg",
    caption: "Factory Visit by Industry Leaders",
  },
  {
    image: "/event-biochar-inspection.jpg",
    caption: "Product Demonstration Event",
  },
  {
    image: "/event-business-meeting.jpg",
    caption: "Excellence Award Ceremony",
  },
  {
    image: "/event-international-visit.jpg",
    caption: "Client Partnership Meet",
  },
  {
    image: "/event-official-inauguration.jpg",
    caption: "Renewable Energy Expo 2024",
  },
]

export function EventsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Events & Highlights</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Our Journey & Milestones
            </h2>
          </div>
          <Link href="/events">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {events.map((event, index) => (
            <div key={index} className="group relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-background text-sm font-medium">{event.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
