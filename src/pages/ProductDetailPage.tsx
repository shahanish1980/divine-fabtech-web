import { useState } from "react";
import { ArrowLeft, ShoppingCart, Phone, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    message: ""
  });

  // Product data - in a real app, this would come from an API
  const productData: { [key: string]: any } = {
    tarpaulins: {
      title: "Multilayered Crosslaminated Tarpaulins",
      category: "Heavy Duty Protection",
      price: "₹150-400/sq ft",
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      description: "Our premium multilayered crosslaminated tarpaulins are engineered for maximum durability and weather resistance. These heavy-duty protective covers are perfect for industrial applications requiring long-lasting protection against harsh environmental conditions.",
      features: [
        "100% Waterproof with welded seams",
        "UV resistant coating for sun protection",
        "Tear resistant reinforced material",
        "Temperature resistant (-40°C to +70°C)",
        "Reinforced edges with grommets",
        "Custom sizes and colors available",
        "Anti-fungal and anti-bacterial treatment",
        "Flame retardant options available"
      ],
      specifications: {
        "Material": "HDPE/LDPE Crosslaminated",
        "Thickness": "150-300 GSM",
        "Tensile Strength": "200-400 N/5cm",
        "Water Resistance": "100% waterproof",
        "UV Resistance": "99% UV protection",
        "Temperature Range": "-40°C to +70°C",
        "Colors Available": "Blue, Green, Silver, White, Black",
        "Standard Sizes": "6x8ft, 10x12ft, 15x20ft, Custom",
        "Warranty": "24 months"
      },
      applications: [
        "Industrial equipment covering",
        "Construction site protection",
        "Agricultural storage covers",
        "Truck and vehicle covers",
        "Warehouse protection",
        "Marine applications",
        "Temporary shelter construction",
        "Pool covers",
        "Sports field covers"
      ],
      benefits: [
        "Long-lasting durability reduces replacement costs",
        "Superior weather protection preserves assets",
        "Lightweight yet strong for easy handling",
        "Chemical resistance for industrial environments",
        "Cost-effective solution for large coverage areas",
        "Easy installation with reinforced grommets"
      ]
    },
    raincoats: {
      title: "Raincoat Ponchos",
      category: "Personal Protection",
      price: "₹250-800/piece",
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      description: "High-quality waterproof raincoats and ponchos designed for personal and industrial use. Our rainwear provides complete protection from rain while ensuring comfort and mobility for the wearer.",
      features: [
        "100% Waterproof PVC material",
        "Lightweight and comfortable design",
        "Welded seams for complete protection",
        "Adjustable hood with drawstring",
        "Multiple pocket options",
        "Reflective strips for safety",
        "Various colors and sizes",
        "Easy to clean and maintain"
      ],
      specifications: {
        "Material": "PVC/Polyester laminated",
        "Thickness": "0.35mm - 0.5mm",
        "Sizes Available": "S, M, L, XL, XXL, XXXL",
        "Colors": "Yellow, Blue, Green, Red, Orange",
        "Weight": "500-800 grams",
        "Water Resistance": "100% waterproof",
        "Standards": "IS 11871, CE marked",
        "Packaging": "Individual poly bags",
        "MOQ": "100 pieces"
      },
      applications: [
        "Industrial workers protection",
        "Security personnel uniforms",
        "Construction site workers",
        "Agricultural field workers",
        "Emergency services",
        "Traffic police and wardens",
        "General public use",
        "School and college uniforms",
        "Event management staff"
      ],
      benefits: [
        "Complete protection from rain and wind",
        "Comfortable to wear for extended periods",
        "Durable construction for regular use",
        "Affordable pricing for bulk orders",
        "Safety features for high-visibility applications",
        "Easy storage and portability"
      ]
    },
    fabrics: {
      title: "Industrial Fabrics",
      category: "Specialized Materials",
      price: "₹80-300/sq meter",
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      description: "Specialized fabric solutions engineered for various industrial applications. Our technical fabrics are designed to meet specific performance requirements with superior strength and durability.",
      features: [
        "Chemical resistant properties",
        "Fire retardant treatments available",
        "High tensile strength",
        "Abrasion and tear resistance",
        "Custom weaving patterns",
        "Technical specifications compliance",
        "Anti-static treatments",
        "Oil and grease resistance"
      ],
      specifications: {
        "Material Options": "Polyester, Cotton, Blends, PTFE",
        "Weight Range": "200-800 GSM",
        "Width Available": "1.5m - 3.0m",
        "Tensile Strength": "Up to 2000 N/5cm",
        "Treatments": "Waterproof, Fire-retardant, Anti-static",
        "Temperature Resistance": "-20°C to +200°C",
        "Chemical Resistance": "Acids, Alkalis, Solvents",
        "Certifications": "ISO 9001:2015, OEKO-TEX",
        "Custom Options": "Colors, patterns, treatments"
      },
      applications: [
        "Filtration systems and bags",
        "Conveyor belt manufacturing",
        "Safety equipment production",
        "Geotextile applications",
        "Automotive interior components",
        "Marine upholstery and covers",
        "Awning and canopy manufacturing",
        "Protective clothing production",
        "Flexible ducting systems"
      ],
      benefits: [
        "Enhanced performance in harsh environments",
        "Reduced maintenance and replacement costs",
        "Compliance with industry standards",
        "Custom solutions for unique requirements",
        "Consistent quality and reliability",
        "Technical support and consultation"
      ]
    },
    custom: {
      title: "Custom Solutions",
      category: "Bespoke Manufacturing",
      price: "Quote on Requirement",
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      description: "Tailored fabric solutions designed and manufactured to meet your specific industrial requirements. Our engineering team works closely with clients to develop innovative solutions for unique applications.",
      features: [
        "Custom design and engineering",
        "Technical consultation services",
        "Prototype development and testing",
        "Quality assurance protocols",
        "Volume production capabilities",
        "Comprehensive after-sales support",
        "Rapid prototyping facilities",
        "Performance testing and validation"
      ],
      specifications: {
        "Design Process": "Consultation to delivery",
        "Timeline": "2-4 weeks prototype, 4-8 weeks production",
        "MOQ": "Varies by application",
        "Materials": "All technical fabrics available",
        "Testing": "In-house and third-party",
        "Support": "Technical and commercial",
        "Quality Standards": "100% inspection",
        "Documentation": "Complete technical files",
        "Warranty": "As per product specifications"
      },
      applications: [
        "Specialized industrial applications",
        "OEM component requirements",
        "Government and defense projects",
        "Export order manufacturing",
        "R&D collaboration projects",
        "Innovative product development",
        "Technical textile solutions",
        "Performance fabric requirements",
        "Niche market applications"
      ],
      benefits: [
        "Tailored solutions for specific needs",
        "Expert technical consultation",
        "Competitive pricing for custom work",
        "Quality assurance and testing",
        "Ongoing technical support",
        "Intellectual property protection"
      ]
    }
  };

  const product = productData[productId as string];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = `INQUIRY - ${product.title}`;
    const emailBody = `
Product Inquiry Details:
Product: ${product.title}
Category: ${product.category}

Customer Information:
Name: ${inquiryForm.name}
Email: ${inquiryForm.email}
Phone: ${inquiryForm.phone}
Company: ${inquiryForm.company}
Quantity Required: ${inquiryForm.quantity}

Message:
${inquiryForm.message}
    `;

    const mailtoLink = `mailto:divine.fabtech@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Inquiry Sent!",
      description: "Your email client will open. Please send the email to complete your inquiry.",
    });

    setInquiryForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      quantity: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInquiryForm({
      ...inquiryForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <section className="py-4 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-primary">Products</Link>
              <span>/</span>
              <span className="text-foreground">{product.title}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {product.category}
                  </Badge>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.images.slice(1).map((image: string, index: number) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${product.title} ${index + 2}`}
                      className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {product.title}
                  </h1>
                  <div className="text-2xl font-semibold text-primary mb-4">
                    {product.price}
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Request Quote
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.slice(0, 6).map((feature: string, index: number) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-3">Need Help?</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>Call: +91 9825148321</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>Email: divine.fabtech@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information Tabs */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="specifications" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="inquiry">Inquiry</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-border">
                          <span className="font-medium text-foreground">{key}:</span>
                          <span className="text-muted-foreground">{value as string}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Applications & Use Cases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {product.applications.map((application: string, index: number) => (
                        <div key={index} className="bg-background p-4 rounded-lg border border-border">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm font-medium">{application}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="benefits" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {product.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="inquiry" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Product Inquiry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleInquirySubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name *</label>
                          <Input
                            name="name"
                            value={inquiryForm.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input
                            name="email"
                            type="email"
                            value={inquiryForm.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone *</label>
                          <Input
                            name="phone"
                            type="tel"
                            value={inquiryForm.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+91 9825148321"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Company</label>
                          <Input
                            name="company"
                            value={inquiryForm.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Quantity Required</label>
                        <Input
                          name="quantity"
                          value={inquiryForm.quantity}
                          onChange={handleInputChange}
                          placeholder="e.g., 100 sq ft, 50 pieces"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <Textarea
                          name="message"
                          value={inquiryForm.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          placeholder="Please describe your requirements in detail..."
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;