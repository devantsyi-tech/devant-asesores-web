import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSlider } from "@/components/hero-slider"
import { ValueSection } from "@/components/value-section"
import { ServicesPreview } from "@/components/services-preview"
import { ReviewsSection } from "@/components/reviews-section"
import { CTASection } from "@/components/cta-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ValueSection />
      <ServicesPreview />
      <ReviewsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
