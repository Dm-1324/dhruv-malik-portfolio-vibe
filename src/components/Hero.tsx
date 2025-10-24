
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-theme-500 mb-2 animate-slide-in-left opacity-0 font-medium" style={{ animationDelay: '0.1s' }}>
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-slide-in-left opacity-0 text-foreground" style={{ animationDelay: '0.3s' }}>
            Dhruv Malik
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-muted-foreground mb-8 animate-slide-in-left opacity-0" style={{ animationDelay: '0.5s' }}>
            Software Developer | Frontend (React, Next.js) & Backend (Java, Spring Boot)
          </h2>
          <h3 className="text-xl md:text-2xl text-theme-500 mb-6 animate-slide-in-left opacity-0 font-semibold" style={{ animationDelay: '0.6s' }}>
            Building Clean & Efficient Web Apps
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 animate-slide-in-left opacity-0 leading-relaxed" style={{ animationDelay: '0.7s' }}>
            A passionate Software Developer focused on building clean, scalable, and user-centric web applications that make an impact. Specializing in frontend development using React.js, Next.js, and TailwindCSS, and expanding expertise into backend technologies like Java, Spring Boot, and RESTful APIs.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-in-left opacity-0" style={{ animationDelay: '0.9s' }}>
            <a href="#contact" className="btn-primary">
              Let's Connect <ArrowRight size={18} />
            </a>
            <a href="#projects" className="px-6 py-3 border-2 border-theme-500 text-theme-500 rounded-md hover:bg-theme-500 hover:text-primary-foreground transition-all duration-300 font-medium">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
