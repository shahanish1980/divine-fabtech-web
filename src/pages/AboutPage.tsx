import { ArrowLeft, Award, Users, Zap, Target, Factory, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering products that exceed industry standards and customer expectations through rigorous quality control."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building lasting relationships through exceptional service, reliable solutions, and understanding customer needs."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving our processes and products through technology adoption and innovative manufacturing techniques."
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Dependable delivery and consistent quality you can count on for your business operations and project success."
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Divine Fabtech Industries established with a vision to provide quality industrial fabrics."
    },
    {
      year: "2013",
      title: "Product Expansion",
      description: "Expanded product line to include multilayered crosslaminated tarpaulins and rainwear."
    },
    {
      year: "2016",
      title: "Quality Certification",
      description: "Achieved ISO 9001:2015 certification for quality management systems."
    },
    {
      year: "2018",
      title: "Market Leadership",
      description: "Became one of Gujarat's leading manufacturers of industrial fabrics and tarpaulins."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented modern manufacturing processes and digital quality control systems."
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Continued growth with 500+ satisfied customers and nationwide delivery network."
    }
  ];

  const team = [
    {
      name: "Manufacturing Team",
      role: "Production Excellence",
      description: "Skilled professionals ensuring quality production and timely delivery of all products."
    },
    {
      name: "Quality Control",
      role: "Quality Assurance",
      description: "Dedicated quality experts maintaining the highest standards in every product we manufacture."
    },
    {
      name: "Customer Service",
      role: "Client Relations",
      description: "Committed to providing exceptional customer service and technical support."
    },
    {
      name: "Technical Team",
      role: "Innovation & Development",
      description: "Engineering experts developing custom solutions and improving product performance."
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-accent">Divine Fabtech</span>
              </h1>
              <p className="text-xl mb-8">
                Over a decade of excellence in manufacturing premium industrial fabrics and tarpaulins, 
                serving customers across India with quality products and reliable service.
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

        {/* Company Story */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Divine Fabtech Industries was founded in 2010 with a simple yet powerful vision: 
                    to provide high-quality industrial fabrics and tarpaulins that meet the demanding 
                    requirements of various industries while maintaining competitive pricing and 
                    exceptional customer service.
                  </p>
                  <p>
                    Based in Gujarat, India, we have grown from a small manufacturing unit to become 
                    one of the region's most trusted suppliers of industrial fabrics. Our specialization 
                    in multilayered crosslaminated tarpaulins, raincoat ponchos, and custom industrial 
                    fabric solutions has earned us recognition across multiple industries.
                  </p>
                  <p>
                    Today, with over 500 satisfied customers and a nationwide delivery network, we 
                    continue to innovate and expand our product offerings while maintaining our 
                    core commitment to quality, reliability, and customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg border border-border text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Satisfied Clients</div>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border text-center">
                    <div className="text-3xl font-bold text-primary mb-2">14+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-muted-foreground">Products Delivered</div>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Customer Support</div>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To be the leading manufacturer of premium industrial fabrics in India, 
                    providing innovative solutions that protect, preserve, and enhance our 
                    customers' operations while maintaining the highest standards of quality and service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every product we manufacture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A timeline of growth, innovation, and milestones that have shaped Divine Fabtech Industries.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="bg-card p-6 rounded-lg border border-border flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dedicated professionals committed to delivering excellence in every aspect of our business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Quality */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Quality & Certifications
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Quality is at the heart of everything we do at Divine Fabtech Industries. 
                    We maintain strict quality control measures throughout our manufacturing 
                    process to ensure every product meets or exceeds industry standards.
                  </p>
                  <p>
                    Our quality management system is certified to ISO 9001:2015 standards, 
                    demonstrating our commitment to consistent quality delivery and continuous 
                    improvement in all our processes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <Shield className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">ISO 9001:2015</h4>
                    <p className="text-sm text-muted-foreground">Quality Management System Certified</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <Factory className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Modern Facility</h4>
                    <p className="text-sm text-muted-foreground">State-of-the-art manufacturing equipment</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <Clock className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Timely Delivery</h4>
                    <p className="text-sm text-muted-foreground">On-time delivery guarantee</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <Award className="h-8 w-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Customer Satisfaction</h4>
                    <p className="text-sm text-muted-foreground">98% customer retention rate</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-8 border border-primary/10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Over 14 years of industry experience and expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Comprehensive range of industrial fabric solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Custom manufacturing capabilities for unique requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Competitive pricing with no compromise on quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Nationwide delivery network and after-sales support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Commitment to environmental sustainability</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link to="/contact">
                    <Button size="lg" className="w-full">
                      Get in Touch with Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;