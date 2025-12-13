import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-6">ANI'S</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Premium threading, waxing, facials, and henna tattoo services in
              the heart of Woodcliff Lake.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6 tracking-wide">CONTACT</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+12016906677" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  (201) 690-6677
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:ardthreading@gmail.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  ardthreading@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <address className="text-primary-foreground/80 not-italic">
                  21 Broadway, Suite B<br />
                  Woodcliff Lake, NJ 07677
                </address>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6 tracking-wide">HOURS</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Monday - Friday: 9:30 AM - 7:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} ANI'S Threading & Skincare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
