import Image from "next/image"

const events = [
  {
    image: "/event-trade-show.jpg",
    title: "Industry Exhibition & Showcase",
    description: "Government officials visiting our booth at a major agricultural and industrial trade show, discussing our cutting-edge machinery solutions.",
  },
  {
    image: "/event-official-inauguration.jpg",
    title: "Factory Inauguration & Official Event",
    description: "Distinguished dignitaries and government officials inaugurating our advanced manufacturing facility with proper ceremony.",
  },
  {
    image: "/event-award-recognition.jpg",
    title: "National Award Ceremony",
    description: "Receiving recognition at an official government event for our contributions to cotton textile industry development.",
  },
  {
    image: "/event-award-ceremony.jpg",
    title: "Excellence Award 2024",
    description: "Recognized for outstanding contribution to sustainable manufacturing and innovation in the agro-machinery sector.",
  },
  {
    image: "/event-seminar.jpg",
    title: "Technical Seminar Series",
    description: "Conducting technical seminar on cotton textile industry at national level with government and industry participation.",
  },
  {
    image: "/event-team-celebration.jpg",
    title: "Anniversary Celebration Event",
    description: "Company team and distinguished guests celebrating milestone achievements and corporate success together.",
  },
  {
    image: "/event-directors-office.jpg",
    title: "Directors & Leadership Team",
    description: "Our founding directors Anil Chouk and Sanjay Kshirsagar with team members in the corporate office.",
  },
  {
    image: "/event-discussion.jpg",
    title: "Business Discussion Session",
    description: "Internal team meeting discussing business strategies and manufacturing excellence with department heads.",
  },
  {
    image: "/event-team-machinery.jpg",
    title: "Team at Industrial Equipment",
    description: "Technical team posing with our state-of-the-art biochar production machinery in the manufacturing facility.",
  },
  {
    image: "/event-business-meeting.jpg",
    title: "Strategic Partnership & Business Meeting",
    description: "Executives exchanging gifts and discussing partnership opportunities for mutual business growth and collaboration.",
  },
  {
    image: "/event-cotton-training-center.jpg",
    title: "Cotton Technology Training Center Visit",
    description: "Team visit to ICAR-CIRCOT (Central Institute for Research on Cotton Technology) in Nagpur for technical knowledge exchange.",
  },
  {
    image: "/event-office-recognition.jpg",
    title: "Office Appreciation & Recognition Event",
    description: "Workplace recognition ceremony with team members receiving appreciation for their contributions and achievements.",
  },
  {
    image: "/event-facility-tour.jpg",
    title: "Machinery Installation & Facility Tour",
    description: "Clients and partners touring our manufacturing facility and experiencing the biochar machine installation process.",
  },
  {
    image: "/event-yogesh-presentation.jpg",
    title: "Industry Conference Presentation",
    description: "Mr. Yogesh Gajaralwar presenting Sanjivani Agro Machinery at a national conference with industry professionals.",
  },
  {
    image: "/event-biochar-inspection.jpg",
    title: "Biochar Equipment Inspection & Analysis",
    description: "Technical officials and experts inspecting and discussing the specifications of our advanced biochar production kiln.",
  },
  {
    image: "/event-international-visit.jpg",
    title: "International Delegation Visit",
    description: "International visitor and team members examining our large-scale biochar production equipment with technical explanations.",
  },
  {
    image: "/event-team-machinery-showcase.jpg",
    title: "Team with Advanced Equipment",
    description: "Engineering team posing with our large industrial biochar and biomass processing machinery in the manufacturing facility.",
  },
  {
    image: "/event-large-group-photo.jpg",
    title: "Facility Open House & Group Gathering",
    description: "Large gathering of visitors, partners, and stakeholders at our manufacturing facility in front of biochar production equipment.",
  },
  {
    image: "/event-trade-exhibition.jpg",
    title: "Trade Exhibition Booth Demonstration",
    description: "Our product showcase at a trade exhibition with live demonstration of grinding machine and cyclone technology to visitors.",
  },
  {
    image: "/event-factory-team-gathering.jpg",
    title: "Factory Team & Company Family Event",
    description: "Entire company team and employees gathered in front of Sanjivani Agro Machinery facility for a team celebration and group photo.",
  },
]

export default function EventsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/event-large-group-photo.jpg"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Events & Highlights</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance">
              Our Journey & Milestones
            </h1>
            <p className="text-background/80 text-lg md:text-xl leading-relaxed">
              Explore highlights from our exhibitions, factory visits, client interactions, and milestone achievements
              that mark our journey in sustainable manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-1">50+</p>
              <p className="text-muted-foreground text-sm">Exhibitions Attended</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">100+</p>
              <p className="text-muted-foreground text-sm">Factory Visits Hosted</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">25+</p>
              <p className="text-muted-foreground text-sm">Training Workshops</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-1">10+</p>
              <p className="text-muted-foreground text-sm">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
