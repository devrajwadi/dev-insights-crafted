import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Linkedin, Github, Download, MessageCircle, Clock, User } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on scope, but most frontend projects take 2-4 weeks, while data analytics projects can range from 1-3 weeks depending on complexity."
    },
    {
      question: "Do you work on both design and development?",
      answer: "Yes! I handle the complete process from UX research and design to frontend development and data analysis. This ensures consistency and optimal user experience."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in React.js, Next.js, TypeScript for frontend development, and Python, SQL, Tableau for data analytics. I also use Figma for design work."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Absolutely! I provide post-launch support, performance monitoring, and can help with updates and improvements based on user feedback and analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-surface pt-24">
        <div className="container-width">
          <div className="text-center space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to create something amazing? I'd love to hear about your project and how we can bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground">
                  I'm always excited to discuss new opportunities and interesting projects. 
                  Whether you need frontend development, UI/UX design, or data analytics, I'm here to help bring your ideas to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Location</h3>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <a href="mailto:devrajwadi11@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      devrajwadi11@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Response Time</h3>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-medium text-foreground">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/dev-rajwadi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors hover-glow"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/devrajwadi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-50 text-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors hover-glow"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Resume Download */}
              <div className="card-elevated p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium text-foreground">Resume</h3>
                      <p className="text-sm text-muted-foreground">Download my latest resume</p>
                    </div>
                  </div>
                  <a 
                    href="/DevRajwadi_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="btn-ghost hover-glow">
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-elevated">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-foreground">Send me a message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Project inquiry" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..." 
                    rows={6} 
                    required 
                  />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  <MessageCircle size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about working with me.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="card-elevated text-left space-y-3">
                  <h3 className="font-semibold text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;