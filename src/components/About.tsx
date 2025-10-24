
import { User, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center animate-fade-in">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-slide-in-left">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-theme-500/20">
                  <img 
                    src="/lovable-uploads/745f1fdd-286a-4c35-aa23-b42fe28295bf.png" 
                    alt="Dhruv Malik - Software Developer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-theme-500 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="text-white" size={32} />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm a <span className="text-theme-500 font-semibold">passionate Software Developer</span> focused on building clean, scalable, and user-centric web applications that make an impact.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Specializing in <span className="text-theme-500 font-medium">frontend development using React.js, Next.js, and TailwindCSS</span>, and expanding expertise into backend technologies like <span className="text-theme-500 font-medium">Java, Spring Boot, and RESTful APIs</span>.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in <span className="text-theme-500 font-medium">Python, JavaScript, and MySQL</span>, I transform ideas into intuitive, high-performance web experiences. My goal is to write maintainable, production-ready code while continuously learning and growing as a developer.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="animated-card bg-card p-4 rounded-lg border-2 border-border hover:border-theme-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Code className="text-theme-500" size={20} />
                    <h3 className="font-semibold text-foreground">Full Stack</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Frontend with React/Next.js, Backend with Java/Spring Boot</p>
                </div>
                
                <div className="animated-card bg-card p-4 rounded-lg border-2 border-border hover:border-theme-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="text-theme-500" size={20} />
                    <h3 className="font-semibold text-foreground">Problem Solver</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Strong in OOP, Unit Testing, and scalable solutions</p>
                </div>

                <div className="animated-card bg-card p-4 rounded-lg border-2 border-border hover:border-theme-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="text-theme-500" size={20} />
                    <h3 className="font-semibold text-foreground">Clean Code</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Focus on maintainable, production-ready code</p>
                </div>
              </div>

              <div className="pt-4">
                <a href="#contact" className="btn-primary">
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
