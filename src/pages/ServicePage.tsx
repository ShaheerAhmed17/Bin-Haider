import { useParams, Link } from "react-router-dom";

const services = [
  {
    title: "Kitchen Designs",
    slug: "kitchen-designs",
    description: "From PVC to modern glass designs, we create kitchens that blend style with functionality.",
    features: ["PVC Kitchen Cabinets", "Modern Kitchen Layouts", "Glass Work Designs", "Custom Storage Solutions"],
  },
  {
    title: "Interior Designs",
    slug: "interior-designs",
    description: "Complete interior solutions that transform houses into homes with personality.",
    features: ["Living Room Design", "Bedroom Interiors", "Dining Area Styling", "Color & Material Selection"],
  },
  {
    title: "Media Walls",
    slug: "media-walls",
    description: "Stunning entertainment centers with integrated storage and ambient lighting.",
    features: ["TV Cabinet Design", "Integrated Storage", "LED Lighting Systems", "Cable Management"],
  },
  {
    title: "Wardrobes",
    slug: "wardrobes",
    description: "Custom wardrobe solutions from walk-in closets to space-saving built-ins.",
    features: ["Walk-in Closets", "Built-in Wardrobes", "Sliding Door Systems", "Custom Shelving"],
  },
];

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Service Not Found
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <Link to="/services" className="mb-8 text-primary underline">
        ← Back to Services
      </Link>
      <h1 className="text-5xl font-bold mb-6">{service.title}</h1>
      <p className="text-xl mb-4">{service.description}</p>
      <ul className="list-disc list-inside space-y-2">
        {service.features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
