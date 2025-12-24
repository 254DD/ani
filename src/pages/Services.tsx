import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceCategories = [
  {
    id: "threading",
    title: "Threading",
    tagline: "The Art of Precision Shaping",
    overview:
      "Threading is an ancient hair removal technique originating from South Asia and the Middle East, where a twisted cotton thread is skillfully manipulated to remove unwanted facial hair with surgical precision. This time-honored method creates clean, defined lines and perfectly sculpted brows that frame your face beautifully.",
    services: [
      {
        name: "Lip Threading",
        price: 5,
        description:
          "Precisely removes upper lip hair using the threading technique for smooth, hair-free skin. Gentle on sensitive facial skin and creates clean lines without irritation.",
      },
      {
        name: "Chin Threading",
        price: 5,
        description:
          "Expertly removes chin hair for a smooth, defined jawline. Perfect for targeting stubborn hair growth and maintaining a clean appearance.",
      },
      {
        name: "Forehead Threading",
        price: 5,
        description:
          "Cleanly shapes the hairline and removes forehead hair for a polished look. Ideal for defining your face shape and removing unwanted baby hairs.",
      },
      {
        name: "Eyebrow Threading",
        price: 10,
        description:
          "Creates perfectly sculpted, symmetrical eyebrows that enhance your natural features. Our expert technique ensures precise arch definition and removes even the finest hairs for flawless brows.",
      },
      {
        name: "Sideburns Threading",
        price: 10,
        description:
          "Defines and shapes sideburns for a clean, polished appearance. Perfect for maintaining facial symmetry and grooming.",
      },
      {
        name: "Cheeks Threading",
        price: 10,
        description:
          "Removes unwanted facial hair from cheeks for smooth, hair-free skin. Enhances your complexion and creates a refined look.",
      },
      {
        name: "Full Face Threading",
        price: 35,
        description:
          "Comprehensive threading service covering all facial areas including eyebrows, upper lip, chin, sideburns, cheeks, and forehead. The ultimate solution for complete facial hair removal with smooth, long-lasting results.",
      },
    ],
  },
  {
    id: "waxing",
    title: "Waxing",
    tagline: "Smooth, Lasting Results",
    overview:
      "Our expert waxing services utilize premium, salon-grade formulas specifically chosen for their gentle yet effective properties. We offer comprehensive full-body waxing solutions using refined techniques that minimize discomfort while maximizing smoothness.",
    services: [
      {
        name: "Ear Waxing",
        price: 10,
        description:
          "Safely removes unwanted ear hair for a clean, groomed appearance. Our gentle technique ensures comfort and precision.",
      },
      {
        name: "Nose Waxing",
        price: 10,
        description:
          "Carefully removes visible nose hair using specialized waxing techniques. Quick and effective for a polished look.",
      },
      {
        name: "Under Arm Waxing",
        price: 15,
        description:
          "Provides smooth, hair-free underarms lasting 3-4 weeks. Perfect for daily confidence and eliminates the need for constant shaving.",
      },
      {
        name: "Stomach Waxing",
        price: 20,
        description:
          "Removes unwanted stomach hair for smooth, beach-ready skin. Ideal for those seeking confidence in swimwear or fitted clothing.",
      },
      {
        name: "Back Waxing",
        price: 20,
        description:
          "Comprehensive back hair removal of smooth skin. Popular with women seeking a clean, groomed appearance.",
      },
      {
        name: "Bikini Waxing",
        price: 20,
        description:
          "Removes hair along the bikini line for a neat, swim-ready appearance. Professional and discreet service in a comfortable environment.",
      },
      {
        name: "Half Arm Waxing",
        price: 20,
        description:
          "Waxes from wrist to elbow for smooth, hair-free arms. Perfect for those who prefer partial arm hair removal.",
      },
      {
        name: "Half Leg Waxing",
        price: 25,
        description:
          "Smooth legs from ankle to knee. Ideal for quick touch-ups or maintaining lower leg smoothness.",
      },
      {
        name: "Full Arm Waxing",
        price: 30,
        description:
          "Complete arm hair removal from wrist to shoulder. Delivers silky-smooth arms that last for weeks.",
      },
      {
        name: "Full Leg Waxing",
        price: 45,
        description:
          "Comprehensive leg waxing from ankle to upper thigh. The ultimate solution for smooth, hair-free legs that boost confidence.",
      },
      {
        name: "Brazilian Waxing",
        price: 40,
        description:
          "Complete intimate area hair removal for maximum smoothness. Professional service performed with care and discretion in a comfortable, private setting.",
      },
      {
        name: "Full Body Waxing",
        price: 150,
        description:
          "Complete head-to-toe waxing package covering all major body areas. The most comprehensive option for those seeking total body smoothness.",
      },
    ],
  },
  {
    id: "facials",
    title: "Facials",
    tagline: "Rejuvenate & Illuminate Your Skin",
    overview:
      "Our facial treatments combine advanced skincare technology with luxurious, therapeutic techniques to address your unique skin concerns. Each facial is customized to your skin type and goals, delivering visible results and lasting radiance.",
    services: [
      {
        name: "Teen Clean Facial",
        priceText: "From $40",
        description:
          "A gentle, purifying facial designed specifically for young skin. Deeply cleanses pores, balances oil production, and addresses breakouts while educating teens on proper skincare habits.",
      },
      {
        name: "Express Facial",
        priceText: "From $40",
        description:
          "Quick yet effective 30-minute treatment perfect for busy schedules. Includes cleansing, exfoliation, and moisturizing to refresh and revitalize your complexion in minimal time.",
      },
      {
        name: "To Be Mom Herbal Facial",
        priceText: "From $80",
        description:
          "Specially formulated for expecting mothers using gentle, pregnancy-safe herbal ingredients. Addresses hormonal skin changes, reduces inflammation, and provides soothing nourishment for sensitive skin.",
      },
      {
        name: "24-Karat Gold Facial",
        priceText: "From $80",
        description:
          "Luxurious anti-aging treatment infused with real 24-karat gold particles. Stimulates cellular regeneration, improves elasticity, and imparts a radiant, golden glow to your complexion.",
      },
      {
        name: "Microdermabrasion Facial",
        priceText: "From $80",
        description:
          "Advanced exfoliation technique that removes dead skin cells and stimulates collagen production. Reduces fine lines, sun damage, and improves overall skin texture for a smoother, more youthful appearance.",
      },
      {
        name: "Deep Cleansing Facial",
        priceText: "From $100",
        description:
          "Intensive purifying treatment that deeply cleanses congested pores, removes impurities, and extracts blackheads. Includes steam therapy and targeted treatments to clarify and refine your complexion.",
      },
      {
        name: "Dermaplaning Facial",
        priceText: "From $100",
        description:
          "Exfoliating treatment using a surgical blade to gently remove dead skin cells and fine vellus hair (peach fuzz). Reveals smoother, brighter skin and allows for better product absorption and makeup application.",
      },
      {
        name: "Circadia Oxygen Rx Facial",
        priceText: "From $100",
        description:
          "Revolutionary oxygenating facial that infuses skin with pure oxygen and nutrients. Detoxifies, brightens, and revitalizes dull, tired complexions while reducing inflammation and promoting cellular renewal.",
      },
      {
        name: "Circadia C2O2 Acne Facial",
        priceText: "From $100",
        description:
          "Targeted acne treatment using advanced Circadia technology. Combines carbon dioxide therapy with antibacterial ingredients to reduce breakouts, calm inflammation, and prevent future blemishes.",
      },
      {
        name: "Ani's Signature Facial",
        priceText: "From $110",
        description:
          "Our exclusive customized facial experience combining the best techniques and premium products. Tailored to your specific skin needs, this indulgent treatment delivers transformative results and ultimate relaxation.",
      },
      {
        name: "Vitamin C Peptide Infusion Facial",
        priceText: "From $120",
        description:
          "Brightening and firming treatment featuring powerful vitamin C and peptides. Reduces hyperpigmentation, stimulates collagen production, and protects against environmental damage for luminous, youthful skin.",
      },
      {
        name: "Glass-Glowing Lactic Acid Peel",
        priceText: "From $120",
        description:
          "This treatment is designed to gently and effectively exfoliate while simultaneously hydrating and brightening the skin. This complex treatment uses an advanced AHA complex that is gentle enough for your most sensitive skin types, resulting in fresh, hydrated, luminous skin.",
      },
      {
        name: "Customizable Facial with Gel Peels",
        priceText: "From $120",
        description:
          "Personalized facial featuring professional-grade gel peels selected for your skin type. Addresses fine lines, sun damage, acne scars, and uneven texture with minimal downtime.",
      },
      {
        name: "Menopause Balance + Restore Facial",
        priceText: "From $120",
        description:
          "Specialized treatment for mature skin experiencing hormonal changes. Targets dryness, thinning skin, and age spots while restoring balance, moisture, and radiance to menopausal complexions.",
      },
      {
        name: "Customizable Facial with Enzyme Treatment",
        priceText: "From $120",
        description:
          "Tailored facial featuring natural fruit enzyme treatments. Gently dissolves dead skin cells, reduces inflammation, and reveals fresh, glowing skin without harsh chemicals or irritation.",
      },
      {
        name: "Circadia Luxe Lift Firming Peptide Facial",
        priceText: "From $125",
        description:
          "Premium anti-aging treatment with advanced peptides and lifting techniques. Firms sagging skin, reduces deep wrinkles, and contours facial structure for a visibly lifted, sculpted appearance.",
      },
      {
        name: "Hydra Facial",
        priceText: "From $125",
        description:
          "Medical-grade facial using patented vortex technology to cleanse, extract, and hydrate. Combines exfoliation, deep extraction, and intense moisturization for instantly visible results on all skin types.",
      },
    ],
  },
  {
    id: "facial-addons",
    title: "Facial Add-Ons",
    tagline: "Enhance Your Facial Experience",
    overview:
      "Elevate your facial treatment with our specialized add-on services. These advanced treatments can be combined with any facial for enhanced results and customized care.",
    services: [
      {
        name: "Radio Frequency Treatment",
        price: 50,
        description:
          "Advanced skin tightening technology that stimulates collagen production. Firms and lifts sagging skin while reducing fine lines and wrinkles for a more youthful appearance.",
      },
      {
        name: "High Frequency Treatment",
        price: 50,
        description:
          "Antibacterial treatment using gentle electrical current. Kills acne-causing bacteria, reduces inflammation, and promotes healing for clearer, healthier skin.",
      },
      {
        name: "Dermaplane Treatment",
        price: 40,
        description:
          "Gentle exfoliation using a surgical blade to remove dead skin cells and peach fuzz. Reveals smoother, brighter skin and enhances product absorption.",
      },
      {
        name: "LED Light Therapy",
        price: 20,
        description:
          "Non-invasive light treatment targeting specific skin concerns. Reduces inflammation, stimulates collagen, and promotes cellular renewal for healthier skin.",
      },
      {
        name: "Oxygen Spray Therapy",
        price: 20,
        description:
          "Revitalizing treatment that infuses skin with pure oxygen and nutrients. Instantly hydrates, brightens, and refreshes tired, dull complexions.",
      },
      {
        name: "Face Bleach Treatment",
        price: 20,
        description:
          "Lightening treatment for facial hair and skin tone evening. Gently reduces the appearance of unwanted facial hair and pigmentation.",
      },
      {
        name: "Enzyme Treatment",
        price: 20,
        description:
          "Natural fruit enzyme exfoliation that gently dissolves dead skin cells. Brightens and smooths skin without irritation or harsh chemicals.",
      },
    ],
  },
  {
    id: "other-services",
    title: "Other Services",
    tagline: "Complete Your Beauty Experience",
    overview:
      "Enhance your natural beauty with our specialized treatments. From eye-enhancing services to relaxing scalp therapy, these services complement your skincare routine.",
    services: [
      {
        name: "Eyelash Lift and Tint",
        price: 75,
        description:
          "Semi-permanent treatment that lifts and curls natural lashes while adding rich color. Creates the appearance of longer, fuller lashes without extensions, lasting 6-8 weeks.",
      },
      {
        name: "Eyebrow Lamination and Tint",
        price: 75,
        description:
          "Revolutionary brow treatment that straightens, lifts, and sets brow hairs in place. Combined with tinting for fuller, perfectly shaped brows that last 6-8 weeks.",
      },
      {
        name: "Eyelashes Tint",
        price: 20,
        description:
          "Professional lash tinting that darkens and defines natural lashes. Eliminates the need for daily mascara and creates a naturally enhanced look lasting 3-4 weeks.",
      },
      {
        name: "Eyebrow Tint",
        price: 15,
        description:
          "Semi-permanent brow coloring that fills sparse areas and defines shape. Creates fuller, more defined brows that frame your face beautifully for weeks.",
      },
      {
        name: "Scalp Oil Massage",
        price: 20,
        description:
          "Relaxing therapeutic massage using nourishing oils. Stimulates circulation, promotes hair growth, relieves tension, and provides deep hydration for healthier scalp and hair. Pricing starts at $20.",
      },
    ],
  },
  {
    id: "henna",
    title: "Henna Tattoos",
    tagline: "Timeless Art on Skin - From $15",
    overview:
      "Henna body art (mehndi) is an ancient decorative tradition with roots in India, Pakistan, the Middle East, and North Africa. Using 100% natural henna paste, we create stunning temporary designs ranging from traditional bridal mehndi to contemporary geometric patterns.",
    services: [
      {
        name: "Simple Henna Designs",
        description:
          "Quick, elegant patterns ideal for festivals, parties, or first-time henna experience. Beautiful yet understated designs that make a statement.",
      },
      {
        name: "Kids Henna Designs",
        description:
          "Fun, simple patterns perfect for children. Safe, natural, and temporary body art for parties and celebrations.",
      },
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Discover our comprehensive range of premium beauty treatments, each designed to enhance your natural radiance with expert precision and care.
          </p>
        </div>
      </section>

      {/* Services with Accordion */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <Accordion type="single" collapsible className="space-y-8">
            {serviceCategories.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline hover:bg-secondary/50 transition-colors">
                  <div className="text-left">
                    <h2 className="font-serif text-3xl md:text-4xl mb-1">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground italic text-lg">
                      {category.tagline}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 py-6 bg-secondary/20">
                  <p className="text-foreground leading-relaxed mb-8">
                    {category.overview}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.services.map((service, idx) => (
                      <Card
                        key={idx}
                        className="p-6 border-border hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-1">
                          <h3 className="font-medium text-lg">
                            {service.name}
                          </h3>
                          {(service.priceText || service.price) && (
                            <span className="font-serif text-xl text-primary">
                              {service.priceText || `$${service.price}`}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <Button asChild size="sm" className="w-full">
                          <Link to="/contact">Book Now</Link>
                        </Button>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
            Our expert aestheticians are here to help you choose the perfect treatments for your needs and goals.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
