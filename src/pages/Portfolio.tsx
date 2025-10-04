import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye } from "lucide-react";
import mediaWall from "@/assets/media-wall.jpg";
import wardrobe from "@/assets/wardrobe.jpg";
import aboutImage from "@/assets/about-image.jpg";

const portfolioProjects = [
  {
    id: 1,
    title: "Modern PVC Kitchen",
    category: "Kitchen",
    location: "Luxury Apartment",
    year: "2024",
    description: "Contemporary PVC kitchen with sleek cabinets and modern appliances.",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Glass Kitchen Design",
    category: "Kitchen",
    location: "Modern Villa",
    year: "2024",
    description: "Elegant glass work kitchen featuring transparent cabinets and premium finishes.",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Contemporary Interior",
    category: "Interior",
    location: "City Residence",
    year: "2023",
    description: "Complete interior makeover with modern furnishings and warm color palette.",
    image: aboutImage,
  },
  {
    id: 4,
    title: "Luxury Media Wall",
    category: "Media Wall",
    location: "Entertainment Room",
    year: "2024",
    description: "Stunning entertainment center with LED backlighting and custom storage.",
    image: mediaWall,
  },
  {
    id: 5,
    title: "Walk-in Wardrobe",
    category: "Wardrobe",
    location: "Master Bedroom",
    year: "2023",
    description: "Spacious walk-in closet with organized shelving and LED lighting.",
    image: wardrobe,
  },
  {
    id: 6,
    title: "Elegant Kitchen",
    category: "Kitchen",
    location: "Family Home",
    year: "2023",
    description: "Classic kitchen design with timeless appeal and modern conveniences.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Luxury Bedroom",
    category: "Interior",
    location: "Penthouse",
    year: "2024",
    description: "Sophisticated bedroom design with custom furniture and ambient lighting.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Modern Living Room",
    category: "Interior",
    location: "Downtown Apartment",
    year: "2023",
    description: "Contemporary living space with minimalist design and premium materials.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
  },
  {
    id: 9,
    title: "Custom Wardrobe",
    category: "Wardrobe",
    location: "Bedroom Suite",
    year: "2024",
    description: "Bespoke wardrobe system with sliding doors and integrated lighting.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
];

const categories = ["All", "Kitchen", "Interior", "Media Wall", "Wardrobe"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif mb-6">
                Our <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-xl text-foreground/70 mb-12">
                Explore our collection of meticulously crafted kitchens,
                interiors, and custom designs that showcase our commitment to
                excellence.
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground/70 hover:bg-card/80 border border-border"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-background"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-300 ${
                      hoveredId === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 text-primary text-xs font-medium tracking-[0.2em] uppercase mb-2">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-serif text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-foreground/70 mb-3">
                        {project.location}
                      </p>
                      <p className="text-sm text-foreground/60 mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary">
                        <Eye size={18} />
                        <span className="text-sm">View Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
