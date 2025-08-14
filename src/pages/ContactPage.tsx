import { useState } from "react";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = "INQUIRY";
    const emailBody = `
Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Divine Fabtech Industries Contact Form
    `;

    const mailtoLink = `mailto:divine.fabtech@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Sent!",
      description: "Your email client will open with the message details. Please send the email to complete your inquiry.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: "+91 9825148321",
      action: "tel:9825148321",
      description: "Available 24/7 for urgent inquiries"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "divine.fabtech@gmail.com",
      action: "mailto:divine.fabtech@gmail.com",
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Gujarat, India",
      action: null,
      description: "Serving customers nationwide"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sat: 9:00 AM - 6:00 PM",
      action: null,
      description: "Sunday: Emergency calls only"
    }
  ];

  const officeLocations = [
    {
      title: "Head Office",
      address: "Divine Fabtech Industries, Gujarat, India",
      phone: "+91 9825148321",
      email: "divine.fabtech@gmail.com"
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
                Contact <span className="text-accent">Divine Fabtech</span>
              </h1>
              <p className="text-xl mb-8">
                Ready to discuss your industrial fabric requirements? Get in touch with our expert team 
                for personalized solutions and competitive quotes.
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

        {/* Contact Information Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-lg">{info.details}</p>
                      )}
                      <p className="text-muted-foreground text-sm mt-2">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your@email.com"
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+91 9825148321"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Your company name"
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="What can we help you with?"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Please describe your requirements in detail..."
                          className="w-full"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information Sidebar */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <a 
                      href="https://wa.me/919825148321" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors w-full"
                    >
                      <MessageCircle className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">WhatsApp Us</div>
                        <div className="text-sm opacity-90">Instant messaging</div>
                      </div>
                    </a>
                    
                    <a 
                      href="tel:9825148321"
                      className="flex items-center gap-3 bg-primary text-primary-foreground p-4 rounded-lg hover:bg-primary/90 transition-colors w-full"
                    >
                      <Phone className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Call Now</div>
                        <div className="text-sm opacity-90">+91 9825148321</div>
                      </div>
                    </a>

                    <a 
                      href="mailto:divine.fabtech@gmail.com"
                      className="flex items-center gap-3 bg-accent text-accent-foreground p-4 rounded-lg hover:bg-accent/90 transition-colors w-full"
                    >
                      <Mail className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">Email Us</div>
                        <div className="text-sm opacity-90">divine.fabtech@gmail.com</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>

                {/* Office Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">Office Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {officeLocations.map((office, index) => (
                      <div key={index} className="space-y-3">
                        <h4 className="font-semibold text-foreground">{office.title}</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                            <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                              {office.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                            <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                              {office.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Emergency Only</span>
                      </div>
                      <div className="pt-3 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          * WhatsApp and email support available 24/7
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-foreground">Visit Our Location</CardTitle>
                <p className="text-muted-foreground">
                  Located in Gujarat, India - Serving customers across the nation
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-12 text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Divine Fabtech Industries</h3>
                  <p className="text-muted-foreground mb-4">Gujarat, India</p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Detailed address and directions will be provided upon inquiry confirmation for security purposes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline">
                      <Phone className="mr-2 h-4 w-4" />
                      Call for Directions
                    </Button>
                    <Button>
                      <Mail className="mr-2 h-4 w-4" />
                      Request Address
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Quick answers to common questions about our products and services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">What is your minimum order quantity?</h3>
                  <p className="text-muted-foreground">
                    Our MOQ varies by product. For tarpaulins, it's typically 100 sq ft. For raincoats, it's 50 pieces. 
                    We're flexible for custom orders and can accommodate smaller quantities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">How long does delivery take?</h3>
                  <p className="text-muted-foreground">
                    Standard products: 7-14 days within India. Custom products: 2-4 weeks depending on specifications. 
                    We provide tracking information for all shipments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Do you provide samples?</h3>
                  <p className="text-muted-foreground">
                    Yes, we provide samples for quality evaluation. Sample charges are applicable but can be adjusted 
                    against your bulk order. Contact us to request samples.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">What payment methods do you accept?</h3>
                  <p className="text-muted-foreground">
                    We accept bank transfers, cheques, and digital payments. For new customers, we may require 
                    advance payment. Credit terms available for established customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;