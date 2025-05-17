
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-theme-400 mb-2 animate-slide-in-left opacity-0" style={{ animationDelay: '0.1s' }}>
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-slide-in-left opacity-0" style={{ animationDelay: '0.3s' }}>
            Dhruv Malik
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground/70 mb-8 animate-slide-in-left opacity-0" style={{ animationDelay: '0.5s' }}>
            Software Developer <span className="highlight-text">from Hyderabad</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mb-10 animate-slide-in-left opacity-0" style={{ animationDelay: '0.7s' }}>
            I build exceptional digital experiences with clean, efficient code. 
            Specialized in Python, Java, JavaScript, React.js, and Next.js.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-in-left opacity-0" style={{ animationDelay: '0.9s' }}>
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-6 py-3 border border-theme-500 text-theme-400 rounded-md hover:bg-theme-500/10 transition-all duration-300">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
