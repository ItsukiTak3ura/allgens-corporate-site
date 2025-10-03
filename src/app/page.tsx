import { HeroSection } from '@/components/sections/HeroSection'
import { ChallengeSection } from '@/components/sections/ChallengeSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { ServiceSection } from '@/components/sections/ServiceSection'
import { AchievementSection } from '@/components/sections/AchievementSection'
import { CTASection } from '@/components/sections/CTASection'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Preloader } from '@/components/ui/Preloader'
import { ParticleBackground } from '@/components/ui/ParticleBackground'

export default function HomePage() {
  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white dark:bg-dark-950 transition-colors duration-300">
        <ParticleBackground />
        <Header />
        <main>
          <HeroSection />
          <ChallengeSection />
          <SolutionSection />
          <ServiceSection />
          <AchievementSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
