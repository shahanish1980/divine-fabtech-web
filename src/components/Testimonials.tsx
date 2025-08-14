import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tata Steel",
      position: "Plant Manager",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Divine Fabtech's filter media has revolutionized our dust collection system. Outstanding quality and exceptional durability in our harsh industrial environment."
    },
    {
      name: "Priya Sharma", 
      company: "Reliance Industries",
      position: "Operations Director",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b213?w=100&h=100&fit=crop&crop=face",
      content: "The conveyor belts supplied by Divine Fabtech have exceeded our expectations. Zero downtime in 18 months of operation. Highly recommended!"
    },
    {
      name: "Amit Patel",
      company: "JSW Group", 
      position: "Maintenance Head",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Professional service, timely delivery, and superior product quality. Divine Fabtech is our go-to partner for all industrial fabric requirements."
    },
    {
      name: "Sneha Desai",
      company: "Adani Group",
      position: "Technical Manager", 
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Their technical expertise and custom solutions helped us solve complex filtration challenges. The team's support is exceptional."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by India's leading industrial companies for over a decade
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden min-h-[300px] group hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-8 md:p-12 transition-all duration-700 ${
                    index === currentTestimonial 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentTestimonial 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-accent/20 group-hover:ring-accent/40 transition-all duration-300"
                      />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <Quote className="h-8 w-8 text-accent mb-4 mx-auto md:mx-0" />
                      <p className="text-lg md:text-xl text-muted-foreground mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                          <p className="text-muted-foreground">{testimonial.position}</p>
                          <Badge variant="secondary" className="mt-1">
                            {testimonial.company}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-1 mt-4 md:mt-0 justify-center md:justify-start">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-accent scale-125' 
                    : 'bg-muted hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;