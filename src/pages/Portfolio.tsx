"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Eye } from "lucide-react";

const portfolioProjects = [
  {
    id: 1,
    title: "Kitchen Dining",
    category: "Misc Furniture",
    location: "Modern Apartment",
    year: "2024",
    description:
      "Elegant kitchen dining setup that seamlessly blends comfort and sophistication for daily meals and gatherings.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "LED Integrated Furniture",
    category: "Misc Furniture",
    location: "Smart Living Room",
    year: "2024",
    description:
      "Contemporary furniture pieces with built-in LED lighting for a futuristic and ambient home experience.",
    image:
      "https://images.unsplash.com/photo-1601933470618-6f7b9f6c5a8f?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Simple Dining",
    category: "Misc Furniture",
    location: "Urban Home",
    year: "2023",
    description:
      "Minimalist dining set designed with clean lines and warm tones, perfect for understated elegance.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Study Table",
    category: "Misc Furniture",
    location: "Workspace Corner",
    year: "2023",
    description:
      "Ergonomically designed study table crafted for focus, productivity, and aesthetic balance.",
    image:
      "https://images.unsplash.com/photo-1598300056393-4fbb0a72e664?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "LED-Infused Furniture",
    category: "Misc Furniture",
    location: "Luxury Home",
    year: "2024",
    description:
      "Sleek LED-infused furniture combining artistry and smart functionality for modern interiors.",
    image:
      "https://images.unsplash.com/photo-1616628188460-2e2c4583a832?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Book Shelf",
    category: "Misc Furniture",
    location: "Reading Nook",
    year: "2023",
    description:
      "Beautifully crafted bookshelf with geometric design, offering both storage and statement style.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Elegant Dining Table",
    category: "Misc Furniture",
    location: "Dining Room",
    year: "2024",
    description:
      "A luxurious dining table that redefines elegance through craftsmanship and timeless design.",
    image:
      "https://images.unsplash.com/photo-1616627458538-2b66da89d2f8?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Office Furniture",
    category: "Office",
    location: "Corporate Space",
    year: "2024",
    description:
      "Stylish and ergonomic office furniture designed for comfort, productivity, and modern aesthetics.",
    image:
      "https://images.unsplash.com/photo-1567016544540-5de74bdb2382?w=800&h=600&fit=crop",
  },
];

const categories = ["All", "Misc Furniture", "Office"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#4A4033] font-[Inter] text-[#F5EBDC]">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section
          className="relative py-40 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601933470618-6f7b9f6c5a8f?w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-[#3B332A]/80 backdrop-blur-[1px]" />
          <div className="relative container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-[Playfair_Display] mb-6"
            >
              Misc Furniture{" "}
              <span className="text-[#D8C7A6]">Designs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg text-[#F5EBDC]/80 leading-relaxed"
            >
              Explore our diverse range of furniture pieces designed to add the
              perfect finishing touch to your space. From accent chairs to
              decorative shelves, our collection blends functionality and
              timeless elegance.
            </motion.p>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-[#D8C7A6] text-[#3B332A] border-[#D8C7A6] shadow-lg shadow-[#D8C7A6]/40"
                      : "bg-transparent text-[#F5EBDC] border-[#F5EBDC]/40 hover:bg-[#D8C7A6]/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-28 bg-[#3B332A]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer rounded-2xl shadow-lg bg-[#4A4033] border border-[#D8C7A6]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D8C7A6]/20 hover:border-[#D8C7A6]/50"
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
                    className={`absolute inset-0 bg-gradient-to-t from-[#3B332A]/95 via-[#3B332A]/70 to-transparent transition-opacity duration-300 ${
                      hoveredId === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-[#F5EBDC]">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest mb-2 opacity-80">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-[Playfair_Display] mb-1 text-[#D8C7A6]">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#F5EBDC]/80 mb-2">
                        {project.location}
                      </p>
                      <p className="text-sm text-[#F5EBDC]/70 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-[#D8C7A6]">
                        <Eye size={18} />
                        <span className="text-sm">View Details</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
