import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

/**
 * SAZCA Website - Home Page
 * Design: Warm Elegance
 * - Cream background (#FBF8F3) with deep brown text (#2C2416)
 * - Terracotta accent (#C85A3A) for CTAs and highlights
 * - Cormorant Garamond for headings, Open Sans for body
 * - Soft shadows and rounded corners for elegance
 * - Organic layout with flowing sections
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-primary">SAZCA</h1>
          <nav className="hidden md:flex gap-8">
            <a href="#companies" className="text-sm hover:text-primary transition-colors">
              Companies
            </a>
            <a href="#mission" className="text-sm hover:text-primary transition-colors">
              Our Mission
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "/* ORIGINAL: url('https://d2xsxph8kpxj0f.cloudfront.net/310519663344843940/YSRn8FA93r45Qn3BWJdrbr/sazca-hero-bg-i8CTF8KqGGHgXKYwZyAn') */ url('https://images.unsplash.com/photo-1579875145424-7b097f0bbd50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=19203B.webp')",
          }}
        />
        <div className="relative container py-20 md:py-32 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Turkish Hand Made Cymbals
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              SAZCA specializes in authentic Turkish hand made cymbals, crafted with centuries-old techniques and dedicated to delivering exceptional sound quality for musicians worldwide.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Explore Companies
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="section-divider">
        <div className="container py-16 md:py-24">
          <h3 className="text-4xl font-serif font-bold text-foreground mb-12">
            SazCA Companies
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* CymbalStore Card */}
            <div className="company-card group">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-2xl font-serif font-bold text-foreground">
                  CymbalStore.com
                </h4>
                <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-foreground/70 mb-6">
                Specializing in premium cymbals and percussion instruments for musicians of all levels. Offering the finest quality cymbals at competitive prices.
              </p>
              <a
                href="https://cymbalstore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-link inline-flex items-center gap-2"
              >
                Visit CymbalStore <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* AkustikKapak Card */}
            <div className="company-card group">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-2xl font-serif font-bold text-foreground">
                  AkustikKapak.com
                </h4>
                <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-foreground/70 mb-6">
                Your source for acoustic instrument components and supplies. Premium materials for instrument makers and repair professionals.
              </p>
              <a
                href="https://akustikkapak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-link inline-flex items-center gap-2"
              >
                Visit AkustikKapak <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <h3 className="text-4xl font-serif font-bold text-foreground mb-12">
            Our Mission
          </h3>

          <div className="max-w-3xl space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              At SAZCA, our goals are straightforward and customer-focused:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-serif font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-2">
                    Assisting Instrument Makers
                  </h4>
                  <p className="text-foreground/70">
                    Helping instrument makers procure the best materials for their instruments, seeking the highest quality available at an affordable value.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-serif font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-2">
                    Empowering Musicians
                  </h4>
                  <p className="text-foreground/70">
                    Providing musicians with the best instrument parts for their musical talent to optimize their performance potential.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-serif font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground mb-2">
                    Expert Service
                  </h4>
                  <p className="text-foreground/70">
                    Specializing in providing friendly and expert service to all our clients, building long-term relationships based on trust and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-divider">
        <div className="container py-16 md:py-24">
          <h3 className="text-4xl font-serif font-bold text-foreground mb-8">
            Get in Touch
          </h3>

          <div className="max-w-2xl">
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Have questions about our products or services? We'd love to hear from you. Contact us through one of our subsidiary companies or reach out directly.
            </p>

            <div className="bg-secondary/20 rounded-lg p-8 border border-border">
              <p className="text-foreground/70 mb-4">
                <strong className="text-foreground">Email:</strong> info@sazca.com
              </p>
              <p className="text-foreground/70 mb-6">
                <strong className="text-foreground">Location:</strong> California, USA
              </p>

              <div className="flex gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="mailto:info@sazca.com">Send Email</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#companies">Visit Our Companies</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-serif font-bold text-foreground mb-4">SAZCA</h5>
              <p className="text-sm text-foreground/70">
                California-based Turkish hand made cymbal company serving musicians and percussionists worldwide.
              </p>
            </div>

            <div>
              <h5 className="font-serif font-bold text-foreground mb-4">Companies</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://cymbalstore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    CymbalStore.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://akustikkapak.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    AkustikKapak.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif font-bold text-foreground mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#mission" className="text-primary hover:text-primary/80 transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary hover:text-primary/80 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; {new Date().getFullYear()} SAZCA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
