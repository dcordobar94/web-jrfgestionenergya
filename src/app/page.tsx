import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowWeWorkSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
