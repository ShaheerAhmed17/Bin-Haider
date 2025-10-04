import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-3 text-primary">
            <Phone size={32} />
            <span className="text-2xl font-medium">+92 321 2141000</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Let's Find You Together
            <br />
            <span className="text-gradient">The Place You Deserve</span>
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Embark on a journey with Lovaable as we guide you towards
            discovering the space you truly deserve. Our expert team is
            dedicated to curating environments that resonate with your
            individuality, ensuring every corner reflects your aspirations and
            lifestyle. Let's embark on this collaborative adventure to transform
            your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
