import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroKitchen1 from "@/assets/hero-kitchen-1.jpg";
import heroKitchen2 from "@/assets/hero-kitchen-2.jpg";

const slides = [
  {
    image: heroKitchen1,
    title: "Luxury Kitchen Design",
    subtitle: "Where Culinary Dreams Come True",
  },
  {
    image: heroKitchen2,
    title: "Modern Interior Design",
    subtitle: "Crafting Spaces That Inspire",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gradient mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 mb-12 animate-slide-up">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                <Button size="lg" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 hover:bg-background/40 backdrop-blur-sm border border-primary/20 flex items-center justify-center transition-all hover:scale-110 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-primary" size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/20 hover:bg-background/40 backdrop-blur-sm border border-primary/20 flex items-center justify-center transition-all hover:scale-110 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="text-primary" size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-10"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
