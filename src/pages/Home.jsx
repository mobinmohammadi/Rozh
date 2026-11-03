import { useEffect, useState } from "react";
import FAQSection from "../Components/Home/FaqSection";
import PortfolioSection from "../Components/Home/Portfolio";
import PricingSection from "../Components/Home/PricingSection";
import ProcessSection from "../Components/Home/ProcessSection";
import TestimonialsSection from "../Components/Home/TestimonialsSection";
import WhyUsSection from "../Components/Home/WhyUsSection";
import Footer from "../Layout/Footer";
import MainLayout from "../Layout/MainLayout";
import HiroSection from "../Layout/MainLayout";
import Loader from "../utils/Loader";
import TeamSection from "../shairedcomponent/TeamSection";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) return <Loader />;

  return (
    <div className="font-Dana">
      <HiroSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <TeamSection/>
      <FAQSection />

      <TestimonialsSection />
      <WhyUsSection />

      <Footer />
    </div>
  );
};

export default Home;
