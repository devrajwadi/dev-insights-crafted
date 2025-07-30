import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import movieImage from "@/assets/movie-app.jpg";
import dashboardImage from "@/assets/dashboard.jpg";
import mentalHealthImage from "@/assets/mental-health-app.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Movie Watchlist (MERN Stack)",
      description: "Developed a full-stack movie tracking app using React, Express, and MongoDB. Integrated OMDb API for real-time data, implemented secure RESTful routing, and designed a responsive UI deployed on Vercel and Render.",
      image: movieImage,
      technologies: ["React.js", "Express", "MongoDB", "OMDb API", "Vercel", "Render"],
      features: ["Real-time Movie Data", "Secure Authentication", "RESTful API", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full-Stack Development"
    },
    {
      id: 2,
      title: "E-Commerce Sales Performance Dashboard",
      description: "Analyzed sales data to uncover revenue trends and customer behavior. Created an interactive Tableau dashboard to monitor KPIs, improve marketing strategies, and reduce churn.",
      image: dashboardImage,
      technologies: ["Python", "SQL", "Tableau", "Data Visualization"],
      features: ["Revenue Trend Analysis", "Customer Behavior Insights", "KPI Monitoring", "Marketing Strategy Optimization"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Analytics"
    },
    {
      id: 3,
      title: "Unwire – Mental Health LLM Screening Tool",
      description: "Built an AI-powered screening platform using NLP and BERT for text classification. Delivered personalized recommendations, ensured secure data handling, and improved accessibility to mental health resources.",
      image: mentalHealthImage,
      technologies: ["Python", "BERT", "NLP", "Text Classification", "Web UI"],
      features: ["AI Text Classification", "Personalized Recommendations", "Secure Data Handling", "Mental Health Screening"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML"
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description: "Designed and built a fast, responsive personal portfolio using modern web technologies with smooth navigation, optimized SEO, and seamless deployment to showcase projects and skills.",
      image: "/placeholder.svg",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Replit"],
      features: ["Dark Theme", "Smooth Animations", "SEO Optimized", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend Development"
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
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects showcasing my skills in frontend development, data analytics, and user experience design.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="card-project group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 text-primary text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3 pt-4">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="btn-hero text-xs">
                        <ExternalLink size={14} className="mr-1" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="btn-ghost text-xs">
                        <Github size={14} className="mr-1" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study CTA */}
          <div className="text-center pt-16">
            <div className="card-elevated max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Want to see detailed case studies?
              </h3>
              <p className="text-muted-foreground mb-6">
                Each project follows a structured methodology from problem identification to solution implementation.
              </p>
              <a href="/process">
                <Button className="btn-ghost">
                  View My Process
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

export default Projects;