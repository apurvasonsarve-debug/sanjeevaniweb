import Image from "next/image"

const events = [
  {
    image: "/event-trade-show.jpg",
    title: "Tech Expo at Yashobhoomi, IICC, Dwarka, New Delhi",
    description: "Shri Prahlad Joshi sir, Honorable Minister of Bio Energy, Government of India, visit and take an interest in our sustainable energy solutions.",
  },
  {
    image: "/event-official-inauguration.jpg",
    title: "Inauguration Ceremony",
    description: "Proudly inaugurated by Nitin Gadkari, marking a milestone in our journey of innovation and growth.",
  },
  {
    image: "/event-award-recognition.jpg",
    title: "Annual Global Nagpur Summit 2025 ",
    description: "Sanjivani Agro Machinery has been honored with the prestigious Unsung Hero Award at the Annual Global Nagpur Summit 2025.",
  },
  {
    image: "/event-award-ceremony.jpg",
    title: "Achievers of Maharashtra Award by sakal",
    description: "Recognized for outstanding performance and excellence in the machinery industry, earning a place among the distinguished Achievers of Maharashtra.",
  },
  {
    image: "/event-seminar.jpg",
    title: "Technical Seminar Series",
    description: "Conducting technical seminar on cotton textile industry at national level with government and industry participation.",
  },
  {
    image: "/event-team-celebration.jpg",
    title: "Inauguration Celebration",
    description: "Company team and distinguished guests celebrating milestone achievements and corporate success together.",
  },
  {
    image: "/event-directors-office.jpg",
    title: "Honored Visit by Sandeep Dikshit",
    description: "Sandeep Dikshit, Member of Parliament (Lok Sabha) and son of former Delhi Chief Minister Sheila Dikshit, to our factory.",
  },
  {
    image: "/event-discussion.jpg",
    title: "Biochar Business Discussion",
    description: "Engaging discussions with our clients on demo day, exploring the future of biochar and sustainable solutions.",
  },
  {
    image: "/event-team-machinery.jpg",
    title: "USA client visit",
    description: "Our USA-based client at our company to explore our revolutionary biochar machine!",
  },
  {
    image: "/event-business-meeting.jpg",
    title: "Honor of meeting ",
    description: "Honor of meeting with Hon. Minister Shri Adv. Ashish Jaiswal, Minister of State for Finance, Planning, Agriculture, Relief and Rehabilitation, Law and Justice, and Labour, Government of Maharashtra,and MLA from Ramtek Assembly Constituency.",
  },
  {
    image: "/event-cotton-training-center.jpg",
    title: "Training program at CIRCOT",
    description: "We've successfully completed a transformative training program at the renowned Central Institute for Research on Cotton Technology (CIRCOT) in Nagpur! ",
  },
  {
    image: "/event-office-recognition.jpg",
    title: "International Client Visit from Bhutan",
    description: "An exciting day as we welcomed our valued client from Bhutan to review the progress of their customized biochar machine—together driving innovation and a greener future ",
  },
  {
    image: "/event-facility-tour.jpg",
    title: "Talk on Biochar, Charcoal & Carbon Credits",
    description: "Let’s connect to explore biochar, charcoal, and carbon credits driving a greener future",
  },
  {
    image: "/event-yogesh-presentation.jpg",
    title: "Proud Moment at Agricultural College Baramati",
    description: "Our GM Yogesh Gajralwar shared insights on biochar and sustainable farming at Agricultural College Baramati, inspiring future agri-innovators ",
  },
  {
    image: "/event-biochar-inspection.jpg",
    title: "Proud Installation at Navsari Agricultural University 🌟",
    description: "Successful installation of our biochar machine at Navsari Agricultural University, inaugurated by Dr. Z P Patel and Dr. Timur R. Ahlawat—driving sustainable farming forward ",
  },
  {
    image: "/event-international-visit.jpg",
    title: "USA client visit",
    description: "Our USA-based client at our company to explore our revolutionary biochar machine!",
  },
  {
    image: "/event-team-machinery-showcase.jpg",
    title: "ICAR-CIRCOT Team Visit",
    description: "Glad to host the ICAR-CIRCOT team, exploring our pyrolysis plant and sustainable innovations ",
  },
  {
    image: "/event-large-group-photo.jpg",
    title: "Successful Biochar common Live Demo",
    description: "A successful live demo showcasing how agri-waste turns into valuable biochar—thank you to everyone who joined us! ",
  },
  {
    image: "/event-trade-exhibition.jpg",
    title: "Honored by the Visit of Nitin Gadkari ",
    description: "Grateful for the visit of Nitin Gadkari at our stall at Agro Vision 2024, inspiring our journey towards sustainable and innovative agriculture",
  },
  {
    image: "/event-factory-team-gathering.jpg",
    title: "Empowering Women Entrepreneurs ",
    description: "Glad to host the Mahila Bachat Gat at our factory, exploring new opportunities in sustainable business and innovation. ",
  },
]

export default function EventsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 text-background relative overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
          src="/events-background.jpg"
          alt="Events Background"
          fill
          className="object-cover"
          priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60 -z-10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">
            Events & Highlights
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight text-balance">
            Our Journey & Milestones
          </h1>
          <p className="text-background/80 text-lg md:text-xl leading-relaxed">
          Explore highlights from our exhibitions, factory visits, client interactions,
          and milestone achievements that mark our journey in sustainable manufacturing.
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
