import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Download, MapPin, GraduationCap, Briefcase, Users, Target, Coffee } from "lucide-react";

const About = () => {
  const skills = {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 88 }
    ],
    data: [
      { name: "SQL", level: 85 },
      { name: "Python", level: 80 },
      { name: "Tableau", level: 75 },
      { name: "Power BI", level: 70 },
      { name: "Pandas", level: 78 },
      { name: "Excel", level: 90 }
    ],
    design: [
      { name: "Figma", level: 85 },
      { name: "UX Research", level: 80 },
      { name: "Wireframing", level: 88 },
      { name: "Prototyping", level: 82 },
      { name: "User Testing", level: 75 },
      { name: "Design Systems", level: 85 }
    ]
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
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
            <h1 className="text-4xl md:text-6xl font-bold">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate developer who believes great products are born at the intersection 
              of beautiful design and data-driven insights.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Hi, I'm Dev 👋</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a frontend developer and data analyst based in Hyderabad, India, currently 
                  pursuing Computer Science at Keshav Memorial Engineering College. My journey began 
                  with a curiosity about how users interact with technology and has evolved into a 
                  passion for creating meaningful digital experiences.
                </p>
                <p>
                  What sets me apart is my unique combination of technical development skills and 
                  analytical thinking. I don't just build interfaces—I understand the data behind 
                  user behavior, which allows me to make informed design decisions that truly serve users.
                </p>
                <p>
                  Whether I'm crafting a responsive React component or analyzing user data in Tableau, 
                  I'm always thinking about the human on the other side of the screen. I believe the 
                  best products are those that seamlessly blend intuitive design with powerful insights.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin size={18} />
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <GraduationCap size={18} />
                  <span>Computer Science Student</span>
                </div>
              </div>

              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="btn-hero">
                  <Download size={18} className="mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="card-elevated text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="card-elevated text-center space-y-2">
                  <div className="text-3xl font-bold text-accent">2+</div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="card-elevated text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">∞</div>
                  <p className="text-sm text-muted-foreground">Cups of Coffee</p>
                </div>
                <div className="card-elevated text-center space-y-2">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>

              {/* Core Values */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What Drives Me</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Users className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">User-Centered Thinking</h4>
                      <p className="text-sm text-muted-foreground">Every decision I make starts with understanding user needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="text-accent mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Data-Driven Decisions</h4>
                      <p className="text-sm text-muted-foreground">Insights guide my design and development choices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Coffee className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Continuous Learning</h4>
                      <p className="text-sm text-muted-foreground">Always exploring new technologies and methodologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-surface">
        <div className="container-width">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Skills & Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit spanning frontend development, data analytics, and user experience design
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <div className="card-elevated space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                </div>
                <div className="space-y-4">
                  {skills.frontend.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              {/* Data Skills */}
              <div className="card-elevated space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-light rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold">Data Analytics</h3>
                </div>
                <div className="space-y-4">
                  {skills.data.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              {/* Design Skills */}
              <div className="card-elevated space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold">UX Design</h3>
                </div>
                <div className="space-y-4">
                  {skills.design.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Education & Experience</h2>
              <p className="text-muted-foreground">My journey in technology and design</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <GraduationCap className="mr-2 text-primary" size={24} />
                  Education
                </h3>
                <div className="card-elevated space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Bachelor of Technology in Computer Science</h4>
                    <p className="text-primary font-medium">Keshav Memorial Engineering College</p>
                    <p className="text-sm text-muted-foreground">2022 - 2026 (Expected)</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Focusing on software engineering principles, data structures, algorithms, 
                    and modern web development technologies. Active in coding competitions and tech events.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center">
                  <Briefcase className="mr-2 text-accent" size={24} />
                  Experience
                </h3>
                <div className="space-y-4">
                  <div className="card-elevated space-y-3">
                    <div className="space-y-1">
                      <h4 className="font-semibold">Freelance Developer & Analyst</h4>
                      <p className="text-sm text-muted-foreground">2022 - Present</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Building web applications and creating data visualizations for local businesses. 
                      Specialized in React development and business intelligence dashboards.
                    </p>
                  </div>
                  
                  <div className="card-elevated space-y-3">
                    <div className="space-y-1">
                      <h4 className="font-semibold">Student Projects & Hackathons</h4>
                      <p className="text-sm text-muted-foreground">2021 - Present</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Participated in multiple hackathons and built various projects including 
                      AI-powered applications, e-commerce platforms, and data analysis tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;