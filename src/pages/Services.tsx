import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChefHat, Home, Warehouse, Tv, Palette, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const servicesDetailed = [
  {
    icon: ChefHat,
    title: "Kitchen Design",
    category: "PVC, Modern & Glass",
    description:
      "From sleek PVC kitchens to stunning glass designs, we create culinary spaces that blend beauty with functionality. Our custom kitchen solutions are tailored to your cooking style and space requirements.",
    features: [
      "PVC Kitchen Cabinets",
      "Modern Kitchen Layouts",
      "Glass Work Designs",
      "Custom Storage Solutions",
    ],
  },
  {
    icon: Home,
    title: "Interior Design",
    category: "Complete Solutions",
    description:
      "Transform your entire space with our comprehensive interior design services. We create harmonious environments that reflect personality and enhance everyday living.",
    features: [
      "Living Room Design",
      "Bedroom Interiors",
      "Dining Area Styling",
      "Color & Material Selection",
    ],
  },
  {
    icon: Tv,
    title: "Media Wall Design",
    category: "Entertainment Centers",
    description:
      "Create stunning entertainment centers with integrated storage, ambient lighting, and sleek finishes that make your media wall the focal point of your room.",
    features: [
      "TV Cabinet Design",
      "Integrated Storage",
      "LED Lighting Systems",
      "Cable Management",
    ],
  },
  {
    icon: Warehouse,
    title: "Wardrobe Design",
    category: "Storage Solutions",
    description:
      "From luxurious walk-in closets to space-saving built-in units, our bespoke wardrobe designs combine style with practical storage solutions.",
    features: [
      "Walk-in Closets",
      "Built-in Wardrobes",
      "Sliding Door Systems",
      "Custom Shelving",
    ],
  },
  {
    icon: Palette,
    title: "Renovation",
    category: "Transform Existing Spaces",
    description:
      "Breathe new life into your existing spaces with our expert renovation services. We modernize while preserving what you love.",
    features: [
      "Kitchen Renovations",
      "Bathroom Updates",
      "Room Makeovers",
      "Complete Home Refresh",
    ],
  },
  {
    icon: Wrench,
    title: "Project Management",
    category: "End-to-End Solutions",
    description:
      "Complete project oversight from concept to completion. We handle every detail to ensure your vision becomes reality on time and within budget.",
    features: [
      "Timeline Management",
      "Quality Control",
      "Vendor Coordination",
      "Budget Planning",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-foreground/70">
                Comprehensive design solutions from kitchens to complete
                interiors, crafted to transform your vision into reality.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {servicesDetailed.map((service, index) => (
                <Card
                  key={index}
                  className="group hover-lift bg-background border-border"
                >
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
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground/70 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">
                  Our <span className="text-gradient">Process</span>
                </h2>
                <p className="text-xl text-foreground/70">
                  From concept to completion in four simple steps
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {["Consultation", "Design", "Production", "Installation"].map(
                  (step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-primary/10 mx-auto flex items-center justify-center mb-4 text-2xl font-serif text-primary">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-serif">{step}</h3>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
