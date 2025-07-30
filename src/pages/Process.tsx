import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Heart, 
  Lightbulb, 
  Palette, 
  TestTube, 
  BarChart3,
  Users,
  Target,
  Figma,
  Database,
  Code,
  ArrowRight 
} from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Research & Empathy",
      description: "Understanding user needs, pain points, and context through research and data analysis.",
      icon: <Search className="text-primary" size={32} />,
      details: [
        "User interviews and surveys",
        "Competitive analysis",
        "Data collection and analysis",
        "Stakeholder workshops"
      ],
      tools: ["Google Analytics", "User Interviews", "Surveys", "Tableau"]
    },
    {
      number: "02", 
      title: "Define & Strategy",
      description: "Synthesizing insights into clear problem statements and strategic design goals.",
      icon: <Target className="text-accent" size={32} />,
      details: [
        "Problem statement definition",
        "User persona creation",
        "Success metrics identification",
        "Technical requirements mapping"
      ],
      tools: ["Miro", "Notion", "User Personas", "Journey Maps"]
    },
    {
      number: "03",
      title: "Ideate & Wireframe",
      description: "Brainstorming solutions and creating low-fidelity wireframes to explore concepts.",
      icon: <Lightbulb className="text-primary" size={32} />,
      details: [
        "Brainstorming sessions",
        "Information architecture",
        "Low-fidelity wireframes",
        "User flow mapping"
      ],
      tools: ["Figma", "Sketch", "Pen & Paper", "Whimsical"]
    },
    {
      number: "04",
      title: "Design & Prototype",
      description: "Creating high-fidelity designs and interactive prototypes for validation.",
      icon: <Palette className="text-accent" size={32} />,
      details: [
        "Visual design system",
        "High-fidelity mockups",
        "Interactive prototypes",
        "Accessibility considerations"
      ],
      tools: ["Figma", "Principle", "Adobe XD", "Framer"]
    },
    {
      number: "05",
      title: "Develop & Build",
      description: "Implementing designs with clean, maintainable code and modern development practices.",
      icon: <Code className="text-primary" size={32} />,
      details: [
        "Component-based development",
        "Responsive implementation",
        "Performance optimization",
        "Cross-browser testing"
      ],
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      number: "06",
      title: "Test & Iterate",
      description: "Validating solutions through testing and using data to drive continuous improvement.",
      icon: <TestTube className="text-accent" size={32} />,
      details: [
        "Usability testing",
        "A/B testing",
        "Performance monitoring",
        "User feedback analysis"
      ],
      tools: ["Hotjar", "Google Analytics", "Lighthouse", "User Testing"]
    }
  ];

  const designPrinciples = [
    {
      icon: <Users className="text-primary" size={24} />,
      title: "User-Centered",
      description: "Every decision starts with understanding user needs and behaviors"
    },
    {
      icon: <BarChart3 className="text-accent" size={24} />,
      title: "Data-Informed",
      description: "Using analytics and research to validate design decisions"
    },
    {
      icon: <Heart className="text-primary" size={24} />,
      title: "Empathetic",
      description: "Designing with compassion and understanding for diverse users"
    },
    {
      icon: <Target className="text-accent" size={24} />,
      title: "Goal-Oriented",
      description: "Focusing on measurable outcomes and business objectives"
    }
  ];

  const tools = [
    {
      category: "Design & Prototyping",
      items: ["Figma", "Adobe XD", "Sketch", "Principle", "Framer"]
    },
    {
      category: "Development",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"]
    },
    {
      category: "Data & Analytics",
      items: ["Tableau", "Power BI", "Google Analytics", "Python", "SQL"]
    },
    {
      category: "Collaboration",
      items: ["GitHub", "Notion", "Miro", "Slack", "Linear"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-surface pt-24">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center space-y-6 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold">Design Process</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to creating meaningful digital experiences, 
              combining design thinking with data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-width">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-6xl font-bold text-primary/20">{step.number}</span>
                      {step.icon}
                    </div>
                    <h2 className="text-3xl font-bold">{step.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Key Activities</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Tools & Methods</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="card-elevated w-full max-w-md h-80 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      {step.icon}
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <div className="text-8xl font-bold text-primary/10">{step.number}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Design Principles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Core values that guide every design decision and development choice
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designPrinciples.map((principle) => (
                <div key={principle.title} className="card-elevated text-center space-y-4 group">
                  <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Tools & Technologies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit for modern design and development workflows
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((category) => (
                <div key={category.category} className="space-y-4">
                  <h3 className="text-lg font-semibold text-center">{category.category}</h3>
                  <div className="space-y-2">
                    {category.items.map((tool) => (
                      <div 
                        key={tool}
                        className="bg-surface border border-border rounded-lg p-3 text-center hover:border-primary/30 transition-colors"
                      >
                        <span className="text-sm font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Integration */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Data-Informed Design</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                How I integrate analytics and user data into the design process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated space-y-4 text-center">
                <Database className="text-primary mx-auto" size={40} />
                <h3 className="text-xl font-semibold">Data Collection</h3>
                <p className="text-muted-foreground text-sm">
                  Gathering quantitative and qualitative data to understand user behavior and preferences
                </p>
              </div>

              <div className="card-elevated space-y-4 text-center">
                <BarChart3 className="text-accent mx-auto" size={40} />
                <h3 className="text-xl font-semibold">Analysis & Insights</h3>
                <p className="text-muted-foreground text-sm">
                  Converting raw data into actionable insights that inform design decisions
                </p>
              </div>

              <div className="card-elevated space-y-4 text-center">
                <TestTube className="text-primary mx-auto" size={40} />
                <h3 className="text-xl font-semibold">Validation & Testing</h3>
                <p className="text-muted-foreground text-sm">
                  Using A/B testing and analytics to validate design choices and measure impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Start a Project?</h2>
            <p className="text-muted-foreground">
              Let's discuss your project and explore how my process can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button className="btn-hero">
                  Get In Touch
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
              <a href="/projects">
                <Button className="btn-ghost">
                  View My Work
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

export default Process;