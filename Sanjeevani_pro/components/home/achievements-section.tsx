import { Factory, MapPin, Award, Users } from "lucide-react"

const achievements = [
  {
    icon: Factory,
    value: "500+",
    label: "Installations",
    description: "Successful machine installations across India",
  },
  {
    icon: MapPin,
    value: "18+",
    label: "States",
    description: "Pan-India presence and service network",
  },
  {
    icon: Award,
    value: "8+",
    label: "Years",
    description: "Of excellence in manufacturing",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Clients",
    description: "Farmers and entrepreneurs served",
  },
]

export function AchievementsSection() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-semibold mb-4 uppercase tracking-wide text-sm">Our Achievements</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 text-balance">
            Trusted by Businesses Across India
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto text-lg">
            Our commitment to quality and customer satisfaction has helped us build a strong presence across the
            country.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center p-6 lg:p-8 rounded-2xl bg-background/5 hover:bg-background/10 transition-colors"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <achievement.icon className="h-8 w-8 text-primary" />
              </div>
              <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">{achievement.value}</p>
              <p className="text-xl font-semibold text-background mb-1">{achievement.label}</p>
              <p className="text-background/60 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
