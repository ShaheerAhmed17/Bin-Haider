import Hero3D from "@/components/Hero3D";
import FeaturedServices from "@/components/FeaturedServices";
import AboutBrand from "@/components/AboutBrand";
import UniqueListings from "@/components/UniqueListings";
import WhatWeOffer from "@/components/WhatWeOffer";
import CallToAction from "@/components/CallToAction";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero3D />
        <FeaturedServices />
        <AboutBrand />
        <UniqueListings />
        <WhatWeOffer />
        <CallToAction />
      </main>
    </div>
  );
};

export default Index;
