import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import mediaWall from "@/assets/media-wall.jpg";
import wardrobe from "@/assets/wardrobe.jpg";

const listings = [
  {
    id: 1,
    title: "Elegant Design",
    category: "PVC Kitchen",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&h=800&fit=crop",
    link: "/portfolio",
  },
  {
    id: 2,
    title: "Beautiful Design",
    category: "Modern Kitchen",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=600&h=800&fit=crop",
    link: "/portfolio",
  },
  {
    id: 3,
    title: "Glass Design",
    category: "Glass Kitchen",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=800&fit=crop",
    link: "/portfolio",
  },
  {
    id: 4,
    title: "Gorgeous",
    category: "Interior Design",
    image: aboutImage,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Luxury",
    category: "Media Wall",
    image: mediaWall,
    link: "/portfolio",
  },
  {
    id: 6,
    title: "Glamorous",
    category: "Wardrobe",
    image: wardrobe,
    link: "/portfolio",
  },
];

import aboutImage from "@/assets/about-image.jpg";

const UniqueListings = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            Find Your Perfect Home
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mt-4 mb-6">
            Unique <span className="text-gradient">Listings</span>
          </h2>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <Link key={listing.id} to={listing.link}>
              <Card className="group hover-lift bg-card border-border overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden hover-zoom">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-primary text-xs font-medium tracking-[0.2em] uppercase">
                    {listing.category}
                  </span>
                  <h3 className="text-2xl font-serif mt-2 group-hover:text-primary transition-colors">
                    {listing.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary transition-colors">
                    View Details →
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

export default UniqueListings;
