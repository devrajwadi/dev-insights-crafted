import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Lightbulb, Layers, TestTube, RefreshCw } from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: "Empathize",
      icon: Search,
      description: "Understand user needs using analytics, feedback, and pain point analysis.",
      details: ["User research", "Data analysis", "Stakeholder interviews", "Pain point mapping"],
      color: "text-blue-500"
    },
    {
      id: 2,
      title: "Define",
      icon: Lightbulb,
      description: "Identify core problems using problem statements and user stories.",
      details: ["Problem definition", "User personas", "Journey mapping", "Requirements gathering"],
      color: "text-purple-500"
    },
    {
      id: 3,
      title: "Ideate",
      icon: Layers,
      description: "Brainstorm wireframes and flow charts using low-fidelity designs.",
      details: ["Wireframing", "User flows", "Information architecture", "Design sketches"],
      color: "text-green-500"
    },
    {
      id: 4,
      title: "Prototype",
      icon: TestTube,
      description: "Build interactive UIs using React, Tableau, and design tools.",
      details: ["High-fidelity mockups", "Interactive prototypes", "Dashboard creation", "Component development"],
      color: "text-orange-500"
    },
    {
      id: 5,
      title: "Test & Iterate",
      icon: RefreshCw,
      description: "Improve based on user feedback, metrics, and usability testing.",
      details: ["User testing", "A/B testing", "Performance optimization", "Continuous improvement"],
      color: "text-pink-500"
    }
  ];

  const tools = [
    { name: "Figma", category: "UI Design, Wireframes, Prototypes", color: "bg-purple-100 text-purple-700" },
    { name: "Tableau/Power BI", category: "Dashboard Design", color: "bg-blue-100 text-blue-700" },
    { name: "VS Code, GitHub", category: "Development & Collaboration", color: "bg-green-100 text-green-700" },
    { name: "Vercel/Render", category: "Deployment", color: "bg-orange-100 text-orange-700" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-surface pt-24">
        <div className="container-width">
          <div className="text-center space-y-6 fade-in slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              My Design Process
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to creating user-centered experiences backed by data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4 slide-up">
              <h2 className="text-3xl font-bold text-foreground">
                From Research to Reality
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every project follows a structured methodology that combines user empathy with technical excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="card-elevated hover-lift slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center ${step.color}`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Step {step.id}</span>
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>

                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 slide-up">
              <h2 className="text-3xl font-bold text-foreground">
                Tools I Use
              </h2>
              <p className="text-muted-foreground">
                A carefully selected toolkit for efficient design and development workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={tool.name} 
                  className="card-elevated hover-lift slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-foreground">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">{tool.category}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${tool.color}`}>
                      Primary
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8 slide-up">
              <a href="/projects">
                <Button className="btn-hero hover-glow">
                  See Process in Action
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

export default Process;