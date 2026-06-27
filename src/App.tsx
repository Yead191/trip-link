import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyTripLink from './components/WhyTripLink'
import HowItWorks from './components/HowItWorks'
import Trust from './components/Trust'
import SafetyKYC from './components/SafetyKYC'
import Payments from './components/Payments'
import FAQ from './components/FAQ'
import Waitlist from './components/Waitlist'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyTripLink />
        <HowItWorks />
        <Trust />
        <SafetyKYC />
        <Payments />
        <FAQ />
        <Waitlist />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
