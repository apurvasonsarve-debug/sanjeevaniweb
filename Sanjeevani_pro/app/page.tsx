import { HeroSection } from "@/components/home/hero-section"
import { AboutSnapshot } from "@/components/home/about-snapshot"
import { InfrastructureSection } from "@/components/home/infrastructure-section"
import { TeamSection } from "@/components/home/team-section"
import { ProductsOverview } from "@/components/home/products-overview"
import { AchievementsSection } from "@/components/home/achievements-section"
import { EventsPreview } from "@/components/home/events-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnapshot />
      <InfrastructureSection />
      <TeamSection />
      <ProductsOverview />
      <AchievementsSection />
      <EventsPreview />
      <CTASection />
    </>
  )
}
