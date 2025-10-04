import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChefHat, Home, Tv, Warehouse } from "lucide-react";

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Designs",
    category: "Kitchen",
    description: "From PVC to modern glass designs, we create kitchens that blend style with functionality.",
    link: "/services",
  },
  {
    icon: Home,
    title: "Interior Designs",
    category: "Interior",
    description: "Complete interior solutions that transform houses into homes with personality.",
    link: "/services",
  },
  {
    icon: Tv,
    title: "Media Walls",
    category: "Media Wall",
    description: "Stunning entertainment centers with integrated storage and ambient lighting.",
    link: "/services",
  },
  {
    icon: Warehouse,
    title: "Wardrobes",
    category: "Wardrobes",
    description: "Custom wardrobe solutions from walk-in closets to space-saving built-ins.",
    link: "/services",
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            Featured Services
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
            Find Your Perfect
            <br />
            <span className="text-gradient">Home & Kitchen</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.link}>
              <Card className="group hover-lift bg-card border-border h-full overflow-hidden">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
