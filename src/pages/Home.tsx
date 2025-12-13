import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-tight">
            Elevate Your
            <br />
            Natural Beauty
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the art of precision threading, rejuvenating facials, and expert waxing in a sanctuary of elegance and tranquility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base tracking-wide">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base tracking-wide">
              <Link to="/contact">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Threading",
                description: "Precise eyebrow shaping using ancient techniques for flawless definition",
              },
              {
                title: "Facials",
                description: "Luxurious treatments tailored to rejuvenate and illuminate your complexion",
              },
              {
                title: "Waxing",
                description: "Smooth, lasting results with premium products for all skin types",
              },
              {
                title: "Henna Tattoos",
                description: "Intricate, temporary body art celebrating timeless artistry",
              },
            ].map((service, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Where Precision Meets Luxury
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At ANI's Threading & Skincare, we believe beauty is an art form. Our experienced aestheticians combine time-honored techniques with contemporary expertise to deliver exceptional results in an atmosphere of refined elegance.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">Discover Our Story</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
            Book your appointment today and discover why clients trust ANI's for their beauty needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base tracking-wide">
            <Link to="/contact#contact-hero">Schedule Your Visit</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
