import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-image.jpg";

const AboutBrand = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
              Who We Are
            </span>
            
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              About <span className="text-gradient">Lovaable</span>
            </h2>

            <h3 className="text-xl text-foreground/80 font-medium">
              Where Vision Meets Reality in Kitchen and Interior Design
            </h3>

            <p className="text-foreground/70 text-lg leading-relaxed">
              At Lovaable, we specialize in turning dreams into reality through
              our artistic and custom designs. With meticulous attention to
              detail and a passion for creativity, we craft spaces that reflect
              your unique style and personality.
            </p>

            <p className="text-foreground/70 text-lg leading-relaxed">
              From concept to completion, we collaborate closely with our
              clients to ensure every aspect of their vision is brought to life
              with precision and excellence. Our expertise spans kitchen
              designs, complete interiors, custom wardrobes, and stunning media
              walls.
            </p>

            <Button size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square overflow-hidden">
              <img
                src={aboutImage}
                alt="Lovaable workspace"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
