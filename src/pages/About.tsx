import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">About ANI's</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Where ancient beauty traditions meet contemporary excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-1 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              Welcome to ANI's Threading & Skincare, where we've been transforming beauty routines into luxurious rituals since our founding. Nestled in the heart of Woodcliff Lake, our salon represents more than just a beauty destination—it's a sanctuary where precision meets artistry.
            </p>

            <p className="text-muted-foreground">
              Our journey began with a simple vision: to bring the time-honored techniques of threading and skincare to our community while maintaining the highest standards of service and expertise. What sets us apart is our unwavering commitment to personalized care and our deep respect for the traditional methods that have beautified generations.
            </p>

            <p className="text-muted-foreground">
              Every member of our team is not just trained—they're passionate artisans dedicated to their craft. We invest in continuous education, staying current with the latest techniques while honoring the ancient practices that form the foundation of our services.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-16">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Excellence",
                description:
                  "We refuse to compromise on quality. From the products we use to the techniques we employ, everything is chosen with your results in mind.",
              },
              {
                title: "Personalization",
                description:
                  "Your skin, your beauty goals, your experience—everything is tailored specifically to you. No two treatments are exactly alike.",
              },
              {
                title: "Integrity",
                description:
                  "Honest recommendations, transparent pricing, and authentic care. We treat every client as we would want to be treated.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">
            Why Choose ANI's?
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Expert Aestheticians",
                description:
                  "Our team brings years of specialized training and experience to every appointment.",
              },
              {
                title: "Premium Products",
                description:
                  "We use only the finest, professionally-grade products that deliver visible results.",
              },
              {
                title: "Relaxing Environment",
                description:
                  "From the moment you enter, you'll experience an atmosphere designed for tranquility and rejuvenation.",
              },
              {
                title: "Personalized Consultations",
                description:
                  "We take time to understand your needs, concerns, and goals before every treatment.",
              },
              {
                title: "Hygiene Excellence",
                description:
                  "Impeccable cleanliness and sanitation standards ensure your safety and peace of mind.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-2 h-2 w-2 rounded-full bg-foreground flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Experience the ANI's Difference
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
            Visit us in Woodcliff Lake and discover why our clients consider us their trusted beauty destination.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Book Your Appointment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
