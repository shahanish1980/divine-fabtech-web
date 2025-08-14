import { useState } from "react";
import { ArrowLeft, ShoppingCart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Product {
  title: string;
  category: string;
  images: string[];
  description: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
}

interface ProductData {
  tarpaulins: Product;
  poncho: Product;
}

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInquiryForm({
      ...inquiryForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = encodeURIComponent("Product Inquiry - " + productData[productId as keyof typeof productData]?.title);
    const emailBody = encodeURIComponent(`
Product Inquiry Details:

Product: ${productData[productId as keyof typeof productData]?.title}
Name: ${inquiryForm.name}
Email: ${inquiryForm.email}
Phone: ${inquiryForm.phone}
Company: ${inquiryForm.company}
Quantity: ${inquiryForm.quantity}

Message:
${inquiryForm.message}

---
Sent from Divine Fabtech Industries Product Page
    `);

    window.location.href = `mailto:divine.fabtech@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    toast({
      title: "Inquiry Sent Successfully",
      description: "Thank you for your interest. We will contact you soon.",
      duration: 5000,
    });
  };
  const productData: ProductData = {
    tarpaulins: {
      title: "Multilayered Cross Laminated Tarpaulins",
      category: "CUSTOM SIZES FOR BULK ORDERS",
      images: [
        "/Images/Tarpauline/cover.jpeg",
        "/Images/Tarpauline/cover1.jpeg",
        "/Images/Tarpauline/cross-laminated-multilayer-ldpe-ll-tarpaulins.jpeg",
        "/Images/Tarpauline/cross-laminated-tarpaulin.jpg",
        "/Images/Tarpauline/Tarp-water.jpeg",
        "/Images/Tarpauline/Tarp-water1.jpeg",
        "/Images/Tarpauline/Tarp1.jpeg",
        "/Images/Tarpauline/Tarp2.jpeg",
        "/Images/Tarpauline/Tarp3.jpeg"
      ],
      description: "Our premium multilayered cross laminated tarpaulins are engineered for maximum durability and weather resistance. Specialized in bulk manufacturing with custom sizes.",
      features: [
        "100% Waterproof",
        "UV Resistant coating",
        "Cross Laminated for extra strength",
        "Reinforced edges",
        "Custom sizes available",
        "Bulk orders only"
      ],
      specifications: {
        "Material": "Cross Laminated HDPE/LDPE",
        "Type": "Multilayered",
        "Colors": "Blue, Green, Yellow",
        "Sizes": "Custom sizes for bulk orders",
        "Order Type": "Bulk manufacturing only"
      },
      applications: [
        "Industrial equipment covering",
        "Construction site protection",
        "Agricultural storage",
        "Truck covers",
        "Warehouse protection",
        "Marine applications"
      ]
    },
    poncho: {
      title: "Poncho Raincoats",
      category: "BULK ORDERS WITH CUSTOM BRANDING",
      images: [
        "/Images/Poncho/all.jpeg",
        "/Images/Poncho/blue.jpeg",
        "/Images/Poncho/green.jpg",
        "/Images/Poncho/purple.jpeg",
        "/Images/Poncho/transparent.jpeg",
        "/Images/Poncho/yellow.jpg"
      ],
      description: "High-quality waterproof poncho raincoats manufactured for bulk orders. Available in various colors with custom branding options.",
      features: [
        "100% Waterproof material",
        "Multiple color options",
        "Custom branding available",
        "Bulk manufacturing",
        "Quality packaging",
        "Adjustable hood",
        "Multiple pocket options"
      ],
      specifications: {
        "Material": "High-quality waterproof material",
        "Type": "Poncho style raincoat",
        "Colors": "Blue, Green, Yellow, Purple, Transparent",
        "Packaging": "Custom packaging available",
        "Order Type": "Bulk orders only"
      },
      applications: [
        "Industrial use",
        "Construction sites",
        "Emergency services",
        "Outdoor events",
        "Bulk distribution",
        "Corporate branding"
      ]
    }
  };

  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Link to="/products">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
              <Link to="/products">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Products
                </Button>
              </Link>
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                {product.category}
              </Badge>
            </div>

            <div className="mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.title}</h1>
              <p className="text-xl text-muted-foreground">{product.description}</p>
            </div>

            <Tabs defaultValue="gallery" className="space-y-8">
              <TabsList>
                <TabsTrigger value="gallery">Product Gallery</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="inquiry">Get Quote</TabsTrigger>
              </TabsList>

              <TabsContent value="gallery">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.images.map((image, index) => (
                    <Card key={index} className="overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${product.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="specs">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {product.applications.map((app, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Technical Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="space-y-1">
                            <div className="text-sm font-medium text-muted-foreground">{key}</div>
                            <div className="text-foreground">{value}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="inquiry">
                <Card>
                  <CardHeader>
                    <CardTitle>Request a Quote</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">Name</label>
                          <Input
                            id="name"
                            name="name"
                            value={inquiryForm.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={inquiryForm.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                          <Input
                            id="phone"
                            name="phone"
                            value={inquiryForm.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                          <Input
                            id="company"
                            name="company"
                            value={inquiryForm.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="quantity" className="text-sm font-medium">Quantity Required</label>
                          <Input
                            id="quantity"
                            name="quantity"
                            value={inquiryForm.quantity}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Additional Requirements</label>
                        <Textarea
                          id="message"
                          name="message"
                          value={inquiryForm.message}
                          onChange={handleInputChange}
                          rows={4}
                        />
                      </div>
                      <div className="flex gap-4">
                        <Button type="submit" className="flex-1">
                          Send Inquiry
                        </Button>
                        <Button type="button" variant="outline" className="flex-1" onClick={() => window.location.href = "tel:9825148321"}>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetailPage;