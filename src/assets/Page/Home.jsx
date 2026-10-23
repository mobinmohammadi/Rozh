import FAQSection from "../Components/Home/FaqSection"
import PortfolioSection from "../Components/Home/Portfolio"
import PricingSection from "../Components/Home/PricingSection"
import ProcessSection from "../Components/Home/ProcessSection"
import WhyUsSection from "../Components/Home/WhyUsSection"
import Footer from "../Layout/Footer"
import HiroSection from "../Layout/HiroSection"

const Home = () => {
  return (
    <div>
        <HiroSection/>
        <ProcessSection/>
        <PortfolioSection/>
        <PricingSection/>
        <FAQSection/>
        <WhyUsSection/>
        <Footer/>
    </div>
  )
}

export default Home