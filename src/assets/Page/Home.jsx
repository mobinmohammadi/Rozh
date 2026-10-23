import FAQSection from "../Components/Home/FaqSection"
import PortfolioSection from "../Components/Home/Portfolio"
import PricingSection from "../Components/Home/PricingSection"
import ProcessSection from "../Components/Home/ProcessSection"
import TestimonialsSection from "../Components/Home/TestimonialsSection"
import WhyUsSection from "../Components/Home/WhyUsSection"
import Footer from "../Layout/Footer"
import MainLayout from "../Layout/MainLayout"
import HiroSection from "../Layout/MainLayout"

const Home = () => {
  return (
    <div >
        <HiroSection/>
        <ProcessSection/>
        <PortfolioSection/>
        <PricingSection/>
        <FAQSection/>
        <TestimonialsSection/>
        <WhyUsSection/>

        <Footer/>
    </div>
  )
}

export default Home