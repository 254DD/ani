import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    if (window.location.hash === "#contact-hero") {
      const element = document.getElementById("contact-hero");
      if (element) {
        // Small delay to ensure page is fully rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="contact-hero" className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Schedule your appointment or reach out with any questions. We're here to help you look and feel your best.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 flex-shrink-0" size={24} aria-hidden="true" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Phone</h3>
                      <a href="tel:+12016906677" className="text-muted-foreground hover:text-foreground transition-colors">
                        (201) 690-6677
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Call for immediate assistance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 flex-shrink-0" size={24} aria-hidden="true" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Email</h3>
                      <a href="mailto:ardthreading@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors break-all">
                        ardthreading@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 flex-shrink-0" size={24} aria-hidden="true" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Location</h3>
                      <address className="text-muted-foreground not-italic">
                        21 Broadway, Suite B<br />
                        Woodcliff Lake, NJ 07677
                      </address>
                      <a
                        href="https://maps.google.com/?q=21+Broadway+Suite+B+Woodcliff+Lake+NJ+07677"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 flex-shrink-0" size={24} aria-hidden="true" />
                    <div>
                      <h3 className="font-medium text-lg mb-2">Hours</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Monday - Friday: 9:30 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Card */}
            <div className="bg-secondary p-8 md:p-10">
              <h2 className="font-serif text-3xl mb-6">Book Your Appointment</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Ready to experience premium beauty services? Call us directly to schedule your appointment and discuss which services are perfect for your needs.
                </p>

                <div className="space-y-4">
                  <Button asChild size="lg" className="w-full text-base">
                    <a href="tel:+12016906677">Call to Book Now</a>
                  </Button>

                  <Button asChild variant="outline" size="lg" className="w-full text-base">
                    <a href="mailto:ardthreading@gmail.com">Email Us</a>
                  </Button>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="font-medium mb-3">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-foreground flex-shrink-0" aria-hidden="true" />
                      <span>Free consultation to discuss your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-foreground flex-shrink-0" aria-hidden="true" />
                      <span>Personalized service recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-foreground flex-shrink-0" aria-hidden="true" />
                      <span>Flexible appointment times</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-foreground flex-shrink-0" aria-hidden="true" />
                      <span>Walk-ins welcome (subject to availability)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl mb-8 text-center">Visit Our Salon</h2>
          <div className="aspect-video bg-background border border-border rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.2!2d-74.05!3d41.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAxJzQ4LjAiTiA3NMKwMDMnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ANI'S Threading & Skincare Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
