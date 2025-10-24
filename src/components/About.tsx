
import { User, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center animate-fade-in mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-slide-in-left">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-theme-500/30">
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
            <div className="space-y-8 animate-slide-in-right">
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-loose">
                  I'm a <span className="text-theme-400 font-semibold">passionate Software Developer</span> focused on building clean, scalable, and user-centric web applications that make an impact.
                </p>
                
                <p className="text-muted-foreground leading-loose">
                  Specializing in <span className="text-theme-400 font-medium">frontend development using React.js, Next.js, and TailwindCSS</span>, and expanding expertise into backend technologies like <span className="text-theme-400 font-medium">Java, Spring Boot, and RESTful APIs</span>.
                </p>

                <p className="text-muted-foreground leading-loose">
                  With a strong foundation in <span className="text-theme-400 font-medium">Python, JavaScript, and MySQL</span>, I transform ideas into intuitive, high-performance web experiences. My goal is to write maintainable, production-ready code while continuously learning and growing as a developer.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                <div className="animated-card bg-card p-6 rounded-lg border-2 border-border hover:border-theme-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="text-theme-400" size={22} />
                    <h3 className="font-semibold text-foreground text-base">Full Stack</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Frontend with React/Next.js, Backend with Java/Spring Boot</p>
                </div>
                
                <div className="animated-card bg-card p-6 rounded-lg border-2 border-border hover:border-theme-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="text-theme-400" size={22} />
                    <h3 className="font-semibold text-foreground text-base">Problem Solver</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Strong in OOP, Unit Testing, and scalable solutions</p>
                </div>

                <div className="animated-card bg-card p-6 rounded-lg border-2 border-border hover:border-theme-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <User className="text-theme-400" size={22} />
                    <h3 className="font-semibold text-foreground text-base">Clean Code</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Focus on maintainable, production-ready code</p>
                </div>
              </div>

              <div className="pt-6">
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
