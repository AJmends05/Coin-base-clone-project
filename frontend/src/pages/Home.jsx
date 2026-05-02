import Nav from "../components/layout/Nav";
import HeroSection from "../components/home/HeroSection"
import PromoCarousel from "../components/home/PromoCarousel";
import ExploreSection from "../components/home/ExploreSection"
import TradeSection from "../components/home/TradeSection"
import CoinbaseOneSection from "../components/home/CoinbaseOneSection"
import LearnSection from "../components/home/LearnSection"
import CTASection from "../components/home/CTASection"
import Footer from "../components/layout/Footer"

function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <PromoCarousel />
      <ExploreSection />
      <CoinbaseOneSection />
      <TradeSection />
      <LearnSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default Home