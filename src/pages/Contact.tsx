import { useState } from "react";
import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Clock,
  MessageCircle,
  CheckCircle,
  Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "dev.rajwadi@gmail.com",
      action: "mailto:dev.rajwadi@gmail.com"
    },
    {
      icon: <MapPin className="text-accent" size={24} />,
      title: "Location",
      value: "Hyderabad, India",
      action: null
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: "Response Time",
      value: "Within 24 hours",
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/devrajwadi",
      username: "@devrajwadi"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn", 
      url: "https://linkedin.com/in/devrajwadi",
      username: "devrajwadi"
    },
    {
      icon: <Mail size={24} />,
      name: "Email",
      url: "mailto:dev.rajwadi@gmail.com",
      username: "dev.rajwadi@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-surface pt-24">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to create 
              something amazing.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Send me a message</h2>
                <p className="text-muted-foreground">
                  Whether you have a project idea, want to collaborate, or just want to say hello, 
                  I'd love to hear from you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="transition-all focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="transition-all focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-hero w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="mt-1">{info.icon}</div>
                      <div>
                        <h4 className="font-medium mb-1">{info.title}</h4>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-surface rounded-lg border border-border hover:border-primary/30 transition-all group"
                    >
                      <div className="text-muted-foreground group-hover:text-primary transition-colors">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="card-elevated space-y-4">
                <h3 className="text-xl font-semibold">Resume</h3>
                <p className="text-muted-foreground text-sm">
                  Download my latest resume to learn more about my experience and skills.
                </p>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="btn-ghost w-full">
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Quick answers to common questions about working together
              </p>
            </div>

            <div className="space-y-6">
              <div className="card-elevated space-y-3">
                <h3 className="font-semibold flex items-center">
                  <MessageCircle className="mr-2 text-primary" size={20} />
                  What types of projects do you work on?
                </h3>
                <p className="text-muted-foreground text-sm">
                  I specialize in frontend web applications, data visualization dashboards, 
                  and UX design projects. I'm particularly interested in projects that combine 
                  user-centered design with data-driven insights.
                </p>
              </div>

              <div className="card-elevated space-y-3">
                <h3 className="font-semibold flex items-center">
                  <Clock className="mr-2 text-accent" size={20} />
                  How long does a typical project take?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Project timelines vary based on scope and complexity. A simple website might 
                  take 2-4 weeks, while a complex web application could take 8-12 weeks. 
                  I'll provide a detailed timeline during our initial consultation.
                </p>
              </div>

              <div className="card-elevated space-y-3">
                <h3 className="font-semibold flex items-center">
                  <CheckCircle className="mr-2 text-primary" size={20} />
                  Do you work with clients remotely?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Yes! I work with clients worldwide. I'm experienced in remote collaboration 
                  using tools like Slack, Figma, and GitHub to ensure smooth communication 
                  throughout the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;