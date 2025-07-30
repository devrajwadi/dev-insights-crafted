import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Users, Lightbulb, Hammer, TestTube, RotateCcw } from "lucide-react";

const Process = () => {
  const processSteps = [
    {
      id: 1,
      title: "Research & Discovery",
      icon: Search,
      description: "Understanding user needs, market research, and competitive analysis to define the problem space.",
      activities: ["User interviews", "Market analysis", "Competitive research", "Problem definition"],
      deliverables: ["User personas", "Problem statements", "Research insights"]
    },
    {
      id: 2,
      title: "Empathy & User Understanding",
      icon: Users,
      description: "Deep dive into user pain points, behaviors, and motivations through data and direct feedback.",
      activities: ["User journey mapping", "Pain point analysis", "Behavioral data review", "Empathy mapping"],
      deliverables: ["User journey maps", "Pain point analysis", "User requirements"]
    },
    {
      id: 3,
      title: "Ideation & Strategy",
      icon: Lightbulb,
      description: "Brainstorming solutions, creating wireframes, and developing the product strategy.",
      activities: ["Brainstorming sessions", "Solution sketching", "Information architecture", "Wireframing"],
      deliverables: ["Wireframes", "User flows", "Feature specifications"]
    },
    {
      id: 4,
      title: "Design & Prototyping",
      icon: Hammer,
      description: "Building interactive prototypes and high-fidelity designs with modern tools and frameworks.",
      activities: ["UI design", "Interactive prototyping", "Design system creation", "Frontend development"],
      deliverables: ["High-fidelity designs", "Interactive prototypes", "Working applications"]
    },
    {
      id: 5,
      title: "Testing & Validation",
      icon: TestTube,
      description: "Validating solutions through user testing, analytics, and feedback collection.",
      activities: ["Usability testing", "A/B testing", "Analytics setup", "Performance monitoring"],
      deliverables: ["Test results", "Analytics insights", "Performance metrics"]
    },
    {
      id: 6,
      title: "Iteration & Improvement",
      icon: RotateCcw,
      description: "Continuous improvement based on data insights and user feedback for optimal user experience.",
      activities: ["Data analysis", "User feedback integration", "Feature optimization", "Continuous deployment"],
      deliverables: ["Improved features", "Enhanced UX", "Updated analytics"]
    }
  ];

  const tools = [
    { category: "Design", items: ["Figma", "Adobe XD", "Sketch", "InVision"] },
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Analytics", items: ["Tableau", "Power BI", "Google Analytics", "Mixpanel"] },
    { category: "Data", items: ["Python", "SQL", "Pandas", "Matplotlib"] },
    { category: "Collaboration", items: ["Git", "GitHub", "Slack", "Notion"] },
    { category: "Testing", items: ["Jest", "Cypress", "Lighthouse", "GTmetrix"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-surface pt-24">
        <div className="container-width">
          <div className="text-center space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              My Design Process
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured, data-informed approach to creating user-centered digital experiences.
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
                key={step.id} 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">Step {step.id}</span>
                      <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Activities:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {step.activities.map((activity) => (
                          <div key={activity} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable) => (
                          <span 
                            key={deliverable}
                            className="px-3 py-1 bg-accent-light text-accent text-sm rounded-full"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="card-elevated">
                    <div className="w-full h-48 bg-gradient-to-br from-primary-light to-accent-light rounded-lg flex items-center justify-center">
                      <step.icon className="h-16 w-16 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data-Informed Design */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Data-Informed Design</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                How I leverage data analytics to make informed design decisions throughout the process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elevated text-center space-y-4">
                <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold">User Analytics</h3>
                <p className="text-muted-foreground">
                  Analyzing user behavior, conversion funnels, and engagement metrics to identify opportunities.
                </p>
              </div>

              <div className="card-elevated text-center space-y-4">
                <div className="w-16 h-16 bg-accent-light rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold">A/B Testing</h3>
                <p className="text-muted-foreground">
                  Testing design variations to validate hypotheses and optimize user experience.
                </p>
              </div>

              <div className="card-elevated text-center space-y-4">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold">Continuous Monitoring</h3>
                <p className="text-muted-foreground">
                  Ongoing performance tracking and user feedback integration for iterative improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Tools & Technologies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The modern toolkit I use to bring ideas to life and measure their impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((toolCategory) => (
                <div key={toolCategory.category} className="card-elevated space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">{toolCategory.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {toolCategory.items.map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a href="/projects">
                <Button className="btn-hero">
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