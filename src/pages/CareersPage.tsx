import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users, Award, Heart } from "lucide-react";

const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Senior Textile Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹8-12 LPA",
      description: "Lead the development of innovative industrial fabric solutions and oversee quality assurance processes."
    },
    {
      title: "Production Manager",
      department: "Operations",
      location: "Gujarat, India",
      type: "Full-time",
      experience: "7+ years",
      salary: "₹10-15 LPA",
      description: "Manage production operations, optimize manufacturing processes, and ensure quality standards."
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Delhi, India",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹5-8 LPA",
      description: "Develop new business relationships and expand our market presence in industrial fabric sector."
    },
    {
      title: "Quality Control Specialist",
      department: "Quality",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹4-6 LPA",
      description: "Ensure product quality through rigorous testing and compliance with industry standards."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support"
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Professional Growth",
      description: "Training programs, certifications, and career advancement opportunities"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Team Culture",
      description: "Collaborative work environment, team building activities, and inclusive culture"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      title: "Competitive Compensation",
      description: "Market competitive salaries, performance bonuses, and profit sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Build your career with India's leading industrial fabric manufacturer
            </p>
            <Button size="lg" variant="secondary" className="animate-bounce-in">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Divine Fabtech?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a company that values innovation, quality, and employee growth in the industrial fabric industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Current Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities across various departments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-slide-in-left" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-accent transition-colors">
                        {job.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mb-2">{job.department}</Badge>
                    </div>
                  </div>
                  <CardDescription>{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-accent" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  <Button className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Application Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined hiring process is designed to find the best talent efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply Online", description: "Submit your application and resume through our careers portal" },
              { step: "02", title: "Initial Screening", description: "HR team reviews applications and conducts initial screening" },
              { step: "03", title: "Technical Interview", description: "Meet with our technical team to discuss your expertise" },
              { step: "04", title: "Final Interview", description: "Final discussion with management and offer negotiation" }
            ].map((process, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Join our team and be part of India's most innovative industrial fabric company.
          </p>
          <Button size="lg" variant="secondary" className="animate-glow">
            Send Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;