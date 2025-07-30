import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Download, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container-width section-padding text-center">
          <div className="max-w-4xl mx-auto space-y-8 fade-in">
            {/* Greeting */}
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">
                👋 Hi, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Dev Rajwadi
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gradient">
                Frontend Developer & Data Analyst
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about designing user-focused digital experiences powered by data. 
              I craft intuitive interfaces while applying analytical insights to create meaningful solutions.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <MapPin size={18} />
              <span>Based in Hyderabad, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a href="/projects">
                <Button className="btn-hero group">
                  View Projects
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="btn-ghost group">
                  <Download size={18} className="mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">What I Bring to the Table</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Combining technical expertise with design thinking to create impactful digital solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend Development */}
              <div className="card-elevated space-y-4 text-center group">
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <div className="text-2xl">⚡</div>
                </div>
                <h4 className="text-xl font-semibold">Frontend Development</h4>
                <p className="text-muted-foreground">
                  React.js, Next.js, TypeScript, and modern CSS frameworks to build responsive, 
                  performant user interfaces.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full">TypeScript</span>
                </div>
              </div>

              {/* Data Analytics */}
              <div className="card-elevated space-y-4 text-center group">
                <div className="w-16 h-16 bg-accent-light rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <div className="text-2xl">📊</div>
                </div>
                <h4 className="text-xl font-semibold">Data Analytics</h4>
                <p className="text-muted-foreground">
                  SQL, Python, Tableau, and Power BI to extract insights that inform 
                  design decisions and improve user experiences.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">Python</span>
                  <span className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">SQL</span>
                  <span className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full">Tableau</span>
                </div>
              </div>

              {/* UX Design */}
              <div className="card-elevated space-y-4 text-center group">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <div className="text-2xl">🎨</div>
                </div>
                <h4 className="text-xl font-semibold">UX Design</h4>
                <p className="text-muted-foreground">
                  User research, wireframing, and prototyping with Figma to create 
                  intuitive, accessible digital experiences.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">Figma</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">UX Research</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">Prototyping</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a href="/about">
                <Button className="btn-ghost">
                  Learn More About Me
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

export default Index;
