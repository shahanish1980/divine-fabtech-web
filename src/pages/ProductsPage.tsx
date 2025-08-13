import { ArrowLeft, ShoppingCart, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const products = [
    {
      id: "tarpaulins",
      title: "Multilayered Crosslaminated Tarpaulins",
      category: "Heavy Duty Protection",
      price: "Starting from ₹150/sq ft",
      image: "/placeholder.svg",
      description: "Premium quality multilayered crosslaminated tarpaulins designed for maximum durability and weather resistance.",
      features: [
        "100% Waterproof",
        "UV Resistant coating",
        "Tear resistant material",
        "Temperature resistant (-40°C to +70°C)",
        "Reinforced edges",
        "Custom sizes available"
      ],
      applications: [
        "Industrial equipment covering",
        "Construction site protection",
        "Agricultural storage",
        "Truck covers",
        "Warehouse protection",
        "Marine applications"
      ],
      specifications: {
        "Material": "HDPE/LDPE Laminated",
        "Thickness": "150-300 GSM",
        "Colors": "Blue, Green, Silver, White",
        "Sizes": "Custom as per requirement",
        "Warranty": "2 Years"
      }
    },
    {
      id: "raincoats",
      title: "Raincoat Ponchos",
      category: "Personal Protection",
      price: "Starting from ₹250/piece",
      image: "/placeholder.svg",
      description: "High-quality waterproof raincoats and ponchos for personal and industrial use.",
      features: [
        "100% Waterproof PVC material",
        "Lightweight and comfortable",
        "Welded seams for extra protection",
        "Adjustable hood",
        "Multiple pocket options",
        "Various colors available"
      ],
      applications: [
        "Industrial workers",
        "Security personnel",
        "Construction workers",
        "Agricultural workers",
        "Emergency services",
        "General public use"
      ],
      specifications: {
        "Material": "PVC/Polyester",
        "Thickness": "0.35mm - 0.5mm",
        "Sizes": "S, M, L, XL, XXL",
        "Colors": "Yellow, Blue, Green, Red",
        "Standards": "IS 11871"
      }
    },
    {
      id: "fabrics",
      title: "Industrial Fabrics",
      category: "Specialized Materials",
      price: "Starting from ₹80/sq meter",
      image: "/placeholder.svg",
      description: "Specialized fabric solutions for various industrial applications with superior performance characteristics.",
      features: [
        "Chemical resistant",
        "Fire retardant options",
        "High tensile strength",
        "Abrasion resistant",
        "Custom weaving patterns",
        "Technical specifications"
      ],
      applications: [
        "Filtration systems",
        "Conveyor belts",
        "Safety equipment",
        "Geotextiles",
        "Automotive interiors",
        "Marine upholstery"
      ],
      specifications: {
        "Material": "Polyester/Cotton/Blend",
        "Weight": "200-800 GSM",
        "Width": "1.5m - 3m",
        "Treatments": "Waterproof, Fire-retardant",
        "Certifications": "ISO 9001:2015"
      }
    },
    {
      id: "custom",
      title: "Custom Solutions",
      category: "Bespoke Manufacturing",
      price: "Quote on Requirement",
      image: "/placeholder.svg",
      description: "Tailored fabric solutions designed to meet your specific industrial requirements and applications.",
      features: [
        "Custom design and engineering",
        "Technical consultation",
        "Prototype development",
        "Quality testing",
        "Volume production",
        "After-sales support"
      ],
      applications: [
        "Specialized industrial needs",
        "OEM requirements",
        "Government projects",
        "Export orders",
        "R&D collaborations",
        "Innovative applications"
      ],
      specifications: {
        "Process": "Design to Delivery",
        "Timeline": "2-4 weeks",
        "MOQ": "As per requirement",
        "Support": "Technical & Commercial",
        "Quality": "100% Tested"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-accent">Products</span>
              </h1>
              <p className="text-xl mb-8">
                Premium industrial fabrics and tarpaulins engineered for durability, 
                performance, and reliability in demanding applications.
              </p>
              <Link to="/">
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {product.title}
                      </CardTitle>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-primary">{product.price}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.slice(0, 4).map((app, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                        {product.applications.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.applications.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Link to={`/products/${product.id}`} className="flex-1">
                        <Button className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Button variant="outline" className="flex-1">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Quick Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Need Custom Solutions?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our team of experts can help you design and manufacture custom fabric solutions 
                tailored to your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 9825148321
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Inquiry
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;