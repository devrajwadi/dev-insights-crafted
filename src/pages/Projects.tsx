import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Layers, Database, Brain, Globe } from "lucide-react";
import movieAppImage from "@/assets/movie-app.jpg";
import dashboardImage from "@/assets/dashboard.jpg";
import mentalHealthImage from "@/assets/mental-health-app.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Movie Watchlist App",
      category: "Frontend Development",
      description: "A modern, responsive web application for discovering and tracking movies with a sleek user interface.",
      image: movieAppImage,
      tech: ["React.js", "MERN Stack", "OMDb API", "Vercel"],
      features: [
        "Movie search and discovery",
        "Personal watchlist management", 
        "Responsive design across devices",
        "Real-time API integration"
      ],
      problem: "Users wanted a clean, intuitive way to track and explore movies online without cluttered interfaces.",
      solution: "Designed a minimalist UI focusing on visual movie discovery with seamless watchlist functionality.",
      outcome: "Enhanced user experience for organizing movie preferences with 40% increased engagement.",
      liveLink: "https://movieapp-demo.vercel.app",
      codeLink: "https://github.com/devrajwadi/movie-watchlist",
      icon: <Layers className="text-primary" size={24} />
    },
    {
      id: 2,
      title: "E-Commerce Sales Dashboard",
      category: "Data Analytics",
      description: "Interactive business intelligence dashboard providing actionable insights into sales performance and customer behavior.",
      image: dashboardImage,
      tech: ["SQL", "Python", "Tableau", "Power BI"],
      features: [
        "Real-time sales analytics",
        "Customer segmentation analysis",
        "Interactive data visualizations",
        "Automated reporting system"
      ],
      problem: "Businesses lacked visibility into sales trends, customer churn, and performance metrics.",
      solution: "Created comprehensive dashboards with intuitive visualizations to enable data-driven decision making.",
      outcome: "Enabled 25% improvement in marketing ROI through better customer targeting and retention strategies.",
      liveLink: "https://public.tableau.com/app/profile/devrajwadi",
      codeLink: "https://github.com/devrajwadi/ecommerce-dashboard",
      icon: <Database className="text-accent" size={24} />
    },
    {
      id: 3,
      title: "Unwire - Mental Health LLM",
      category: "AI/ML & UX Design",
      description: "AI-powered mental health screening tool focused on accessibility, privacy, and empathetic user experience.",
      image: mentalHealthImage,
      tech: ["NLP", "Python", "BERT", "Web UI", "Privacy-First Design"],
      features: [
        "AI-powered mental health assessment",
        "Privacy-focused design",
        "Personalized resource recommendations",
        "Accessible interface design"
      ],
      problem: "Limited access to quick, private mental health screening and support resources.",
      solution: "Built an empathetic AI tool using BERT model for response classification with privacy-first UX design.",
      outcome: "Made early mental health support more accessible with 90% user satisfaction in usability testing.",
      liveLink: "https://unwire-mentalhealth.vercel.app",
      codeLink: "https://github.com/devrajwadi/unwire-llm",
      icon: <Brain className="text-primary" size={24} />
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      category: "Full-Stack Development",
      description: "Fast, SEO-optimized portfolio showcasing work with clean animations and smooth user experience.",
      image: "/api/placeholder/800/600",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      features: [
        "Server-side rendering",
        "SEO optimization",
        "Smooth animations",
        "Responsive design system"
      ],
      problem: "Needed a platform to effectively showcase work and attract potential collaborators.",
      solution: "Designed and developed a fast, accessible portfolio with focus on performance and user experience.",
      outcome: "Reduced bounce rate by 60% and increased recruiter engagement through improved UX.",
      liveLink: "https://devrajwadi.vercel.app",
      codeLink: "https://github.com/devrajwadi/portfolio",
      icon: <Globe className="text-accent" size={24} />
    }
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="card-project group">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="sm" className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </Button>
            </a>
            <a 
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="sm" variant="outline" className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                <Github size={16} className="mr-2" />
                Code
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground font-medium">{project.category}</span>
            {project.icon}
          </div>
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-primary-light text-primary text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        <Button 
          variant="ghost" 
          className="w-full group-hover:bg-primary-light group-hover:text-primary transition-colors"
          onClick={() => {
            // In a real app, this would navigate to detailed case study
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          View Case Study
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-surface pt-24">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold">Featured Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of projects that blend thoughtful design with technical excellence, 
              each telling a story of problem-solving and user-centered thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Methodology */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Case Study Approach</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each project follows a structured methodology to ensure meaningful outcomes 
                and measurable impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-elevated text-center space-y-4">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Overview</h3>
                  <p className="text-sm text-muted-foreground">Project goals, context, and stakeholder needs</p>
                </div>
              </div>

              <div className="card-elevated text-center space-y-4">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto">
                  <span className="text-accent font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Problem</h3>
                  <p className="text-sm text-muted-foreground">User pain points and technical challenges</p>
                </div>
              </div>

              <div className="card-elevated text-center space-y-4">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Solution</h3>
                  <p className="text-sm text-muted-foreground">Design process, development approach, and tools</p>
                </div>
              </div>

              <div className="card-elevated text-center space-y-4">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto">
                  <span className="text-accent font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Outcome</h3>
                  <p className="text-sm text-muted-foreground">Results, metrics, and lessons learned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Interested in Working Together?</h2>
            <p className="text-muted-foreground">
              I'm always excited to collaborate on projects that make a meaningful impact. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button className="btn-hero">
                  Start a Project
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
              <a href="/process">
                <Button className="btn-ghost">
                  Learn About My Process
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

export default Projects;