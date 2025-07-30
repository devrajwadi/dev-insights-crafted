import Navigation from "@/components/Layout/Navigation";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="section-padding pt-24">
        <div className="container-width">
          <div className="text-center space-y-8 fade-in max-w-2xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-gradient">404</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Page Not Found
              </h2>
              <p className="text-muted-foreground">
                Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/">
                <Button className="btn-hero">
                  <Home size={18} className="mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                onClick={() => window.history.back()} 
                className="btn-ghost"
              >
                <ArrowLeft size={18} className="mr-2" />
                Go Back
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="pt-12">
              <div className="card-elevated">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Looking for something specific?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link 
                    to="/about" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    About Me
                  </Link>
                  <Link 
                    to="/projects" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    My Projects
                  </Link>
                  <Link 
                    to="/process" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Design Process
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Contact Me
                  </Link>
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

export default NotFound;