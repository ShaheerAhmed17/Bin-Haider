import { ChefHat, Home, Warehouse } from "lucide-react";

const offerings = [
  {
    icon: ChefHat,
    title: "Kitchen Design",
    description:
      "Kitchen design is more than just layout and functionality; it's about creating a space that embodies style, efficiency, and comfort. From sleek modern kitchens to cozy rustic designs, we specialize in crafting personalized culinary havens tailored to your lifestyle. With careful attention to detail and innovative solutions, we transform ordinary kitchens into extraordinary living spaces. Let us bring your kitchen vision to life, where every element harmonizes seamlessly for a truly exceptional cooking and dining experience.",
  },
  {
    icon: Home,
    title: "Interior Design",
    description:
      "Interior design is the art of transforming spaces into reflections of personality and purpose. It encompasses the harmonious integration of aesthetics, functionality, and atmosphere to create environments that inspire and delight. With a keen eye for detail and a passion for innovation, we curate interiors that evoke emotion and elevate everyday living. Let us craft a space that not only meets your needs but also exceeds your expectations, turning your house into a home.",
  },
  {
    icon: Warehouse,
    title: "Wardrobe Design",
    description:
      "Wardrobe design is the epitome of style meeting functionality, where organization meets aesthetics. Our expertise lies in crafting bespoke wardrobes tailored to your space and storage needs. From luxurious walk-in closets to space-saving built-in units, we combine innovative design with superior craftsmanship to elevate your storage solutions. Experience the perfect blend of form and function with our custom wardrobe designs.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            We're Here To Help You
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
            What Are You
            <br />
            <span className="text-gradient">Looking For?</span>
          </h2>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {offerings.map((offering, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="inline-flex w-20 h-20 bg-primary/10 items-center justify-center hover:bg-primary/20 transition-colors">
                <offering.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-serif">{offering.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
