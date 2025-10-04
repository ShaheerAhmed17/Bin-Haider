import Hero3D from "@/components/Hero3D";
import FeaturedServices from "@/components/FeaturedServices";
import AboutBrand from "@/components/AboutBrand";
import UniqueListings from "@/components/UniqueListings";
import WhatWeOffer from "@/components/WhatWeOffer";
import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Replaced HeroSlider with Hero3D */}
        <Hero3D />
        <FeaturedServices />
        <AboutBrand />
        <UniqueListings />
        <WhatWeOffer />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
