import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DR</span>
              </div>
              <span className="font-semibold text-foreground">Dev Rajwadi</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Frontend Developer & Data Analyst creating user-focused digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/process" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Process
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Skills</h3>
            <div className="space-y-2">
              <span className="block text-sm text-muted-foreground">React.js</span>
              <span className="block text-sm text-muted-foreground">Next.js</span>
              <span className="block text-sm text-muted-foreground">Python</span>
              <span className="block text-sm text-muted-foreground">Tableau</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/devrajwadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dev-rajwadi-9a9385280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:devrajwadi11@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover-glow"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Dev Rajwadi. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;