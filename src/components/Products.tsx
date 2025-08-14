import { ArrowRight, Shield, Droplets, Factory, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      id: "tarpaulins",
      title: "Multilayered Cross Laminated Tarpaulins",
      description: "Premium quality multilayered cross laminated tarpaulins with superior strength and durability. CUSTOM SIZES AVAILABLE FOR BULK ORDERS.",
      icon: Shield,
      features: ["100% Waterproof", "UV Resistant", "Cross Laminated", "Bulk Manufacturing", "Custom Sizes"],
      image: "/Images/Tarpauline/cover.jpeg"
    },
    {
      id: "poncho",
      title: "Poncho Raincoats",
      description: "High-quality waterproof poncho raincoats available in various colors. Bulk orders with custom branding available.",
      icon: Droplets,
      features: ["100% Waterproof", "Multiple Colors", "Custom Branding", "Bulk Orders"],
      image: "/Images/Poncho/all.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of premium industrial fabrics and tarpaulins, 
            engineered for durability and performance in demanding applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a href={`/products/${product.id}`}>
                      <Button 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        variant="outline"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                    <a href="/contact">
                      <Button 
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        size="sm"
                      >
                        Quick Inquiry
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Something Specific?
            </h3>
            <p className="text-muted-foreground mb-6">
              We specialize in custom fabric solutions. Contact us to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Us
                </Button>
              </a>
              <Button size="lg" variant="outline">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;