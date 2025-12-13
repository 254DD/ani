import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const menuCategories = [
  {
    title: "Threading",
    items: [
      { name: "Lip/Chin/Forehead", price: 5 },
      { name: "Eyebrow", price: 10 },
      { name: "Sideburns/Cheeks", price: 10 },
      { name: "Full Face", price: 35 },
    ],
  },
  {
    title: "Waxing",
    items: [
      { name: "Ear/Nose", price: 10 },
      { name: "Under Arm", price: 15 },
      { name: "Stomach", price: 20 },
      { name: "Back", price: 20 },
      { name: "Bikini", price: 20 },
      { name: "Half Arm", price: 20 },
      { name: "Half Leg", price: 25 },
      { name: "Full Arm", price: 30 },
      { name: "Full Leg", price: 45 },
      { name: "Brazilian", price: 40 },
      { name: "Full Body", price: 150 },
    ],
  },
  {
    title: "Facials",
    items: [
      { name: "Teen Clean Facial", priceText: "From $40" },
      { name: "Express Facial", priceText: "From $40" },
      { name: "To Be Mom Herbal Facial", priceText: "From $80" },
      { name: "24-Karat Gold Facial", priceText: "From $80" },
      { name: "Microdermabrasion Facial", priceText: "From $80" },
      { name: "Deep Cleansing Facial", priceText: "From $100" },
      { name: "Dermaplaning Facial", priceText: "From $100" },
      { name: "Circadia Oxygen Rx Facial", priceText: "From $100" },
      { name: "Circadia C2O2 Acne Facial", priceText: "From $100" },
      { name: "Ani's Signature Facial", priceText: "From $110" },
      { name: "Vitamin C Peptide Infusion Facial", priceText: "From $120" },
      { name: "Glass-Glowing Lactic Acid Peel", priceText: "From $120" },
      { name: "Customizable Facial with Gel Peels", priceText: "From $120" },
      { name: "Menopause Balance + Restore Facial", priceText: "From $120" },
      { name: "Customizable Facial with Enzyme Treatment", priceText: "From $120" },
      { name: "Circadia Luxe Lift Firming Peptide Facial", priceText: "From $125" },
      { name: "Hydra Facial", priceText: "From $125" },
    ],
  },
  {
    title: "Facial Add-Ons",
    items: [
      { name: "Radio Frequency Treatment", price: 50 },
      { name: "High Frequency Treatment", price: 50 },
      { name: "Dermaplane Treatment", price: 40 },
      { name: "LED Light Therapy", price: 20 },
      { name: "Oxygen Spray Therapy", price: 20 },
      { name: "Face Bleach Treatment", price: 20 },
      { name: "Enzyme Treatment", price: 20 },
    ],
  },
  {
    title: "Henna Tattoos",
    items: [
      { name: "Simple Henna Designs", priceText: "From $15" },
      { name: "Kids Henna Designs", priceText: "From $15" },
    ],
  },
  {
    title: "Other Services",
    items: [
      { name: "Eyelash Lift and Tint", price: 75 },
      { name: "Eyebrow Lamination and Tint", price: 75 },
      { name: "Eyelashes Tint", price: 20 },
      { name: "Eyebrow Tint", price: 15 },
      { name: "Scalp Oil Massage", priceText: "From $20" },
    ],
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Menu</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Explore our complete service menu with transparent pricing. Each treatment is performed with premium products and expert care.
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories.map((category, index) => (
              <Card
                key={index}
                className="p-8 border-border hover:shadow-lg transition-shadow"
              >
                <h2 className="font-serif text-3xl mb-6 text-center uppercase tracking-wider">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-start border-b border-border/30 pb-3"
                    >
                      <span className="text-foreground font-medium flex-1 pr-4">
                        {item.name}
                      </span>
                      <span className="text-foreground font-serif text-lg whitespace-nowrap">
                        {item.priceText || `$${item.price.toFixed(2)}`}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Ready to Experience Premium Beauty Care?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
            Book your appointment today and let our expert aestheticians pamper you with personalized treatments.
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

export default Menu;
