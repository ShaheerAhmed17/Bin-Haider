import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-serif mb-6">
                About <span className="text-gradient">Lovaable</span>
              </h1>
              <p className="text-xl text-foreground/70">
                Where vision meets reality in kitchen and interior design
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <img
                  src={aboutImage}
                  alt="Lovaable Team"
                  className="shadow-luxury hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-serif">
                  Crafting Dreams Since 2008
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  At Lovaable, we specialize in turning dreams into reality
                  through our artistic and custom designs. With meticulous
                  attention to detail and a passion for creativity, we craft
                  spaces that reflect your unique style and personality.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  From concept to completion, we collaborate closely with our
                  clients to ensure every aspect of their vision is brought to
                  life with precision and excellence. Our team of skilled
                  designers and craftsmen bring decades of combined experience in
                  kitchen design, complete interiors, custom wardrobes, and media
                  walls.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  We believe great design should enhance daily living while
                  making a lasting impression. Every project is a testament to
                  our commitment to quality, innovation, and timeless beauty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Our <span className="text-gradient">Values</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-4 text-primary">
                  Creativity
                </h3>
                <p className="text-foreground/70">
                  We transform ordinary spaces into extraordinary environments
                  through innovative and artistic design solutions.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-4 text-primary">
                  Precision
                </h3>
                <p className="text-foreground/70">
                  Meticulous attention to detail in every aspect, from concept to
                  final installation, ensuring flawless execution.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-4 text-primary">
                  Collaboration
                </h3>
                <p className="text-foreground/70">
                  Working closely with clients throughout the journey, turning
                  their vision into stunning reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-serif text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Design Awards</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
