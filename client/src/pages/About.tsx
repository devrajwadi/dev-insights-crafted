import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Download, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-surface pt-24">
        <div className="container-width">
          <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal direction="up">
              <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  About Me
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  A passionate frontend developer and data analyst who creates user-centered digital experiences.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Bio Content */}
              <div className="space-y-6 slide-in-left">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">
                    Hi, I'm Dev Rajwadi 👋
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a frontend developer, UI/UX designer, and data analyst based in Hyderabad, India, currently pursuing Computer Science at Keshav Memorial Engineering College. I specialize in creating seamless digital experiences that blend beautiful design, solid code, and data-driven insights.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My approach combines design thinking with technical expertise—from user research and wireframing to React development and analytics dashboards. I believe great products are born when empathy meets data, and intuitive design meets robust functionality.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Core Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">User-Centered Design</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Data-Driven Decisions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Clean Code</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Continuous Learning</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href="/DevRajwadi_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-hero hover-glow">
                      <Download size={18} className="mr-2" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </div>

              {/* Skills & Stats */}
              <div className="space-y-8 slide-in-right">
                <div className="card-elevated">
                  <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Frontend Development</span>
                        <span className="text-sm text-muted-foreground">90%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Data Analytics</span>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">UI/UX Design</span>
                        <span className="text-sm text-muted-foreground">80%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="card-elevated text-center">
                    <div className="text-2xl font-bold text-primary">4+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="card-elevated text-center">
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="card-elevated">
                  <h3 className="text-xl font-semibold mb-6">Certifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-foreground">Deloitte Data Analytics Job Simulation</h4>
                        <p className="text-sm text-muted-foreground">Forage</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-foreground">AI for Beginners</h4>
                        <p className="text-sm text-muted-foreground">HP Life</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-foreground">Python Programming (SIDH)</h4>
                        <p className="text-sm text-muted-foreground">Microsoft</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <a href="/projects">
                <Button className="btn-ghost">
                  View My Projects
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;