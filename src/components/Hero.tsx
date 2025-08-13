import { ArrowRight, Shield, Award, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium <span className="text-accent">Industrial Fabrics</span> & Tarpaulins
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Manufacturing high-quality multilayered crosslaminated tarpaulins, raincoat ponchos, and custom industrial fabric solutions for over a decade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-primary-foreground/80">Support</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                  <p className="text-primary-foreground/80">Multi-layered crosslaminated tarpaulins with superior durability and weather resistance.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-primary-foreground/80">Tailored industrial fabric solutions designed to meet your specific requirements.</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-primary-foreground/80">Quick turnaround times with reliable delivery across India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;