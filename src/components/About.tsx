
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
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a <span className="highlight-text font-semibold">detail-oriented software developer</span> with a strong foundation in modern web technologies and programming languages.
                </p>
                
                <p className="text-foreground/70 leading-relaxed">
                  With expertise in <span className="highlight-text">Python, Java, JavaScript, React.js, and Next.js</span>, I'm passionate about solving real-world problems with clean, efficient code. I have hands-on experience in building responsive frontend applications and working with various frameworks and databases.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="animated-card bg-card/50 p-4 rounded-lg border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="text-theme-500" size={20} />
                    <h3 className="font-semibold">Frontend Expert</h3>
                  </div>
                  <p className="text-sm text-foreground/70">Skilled in responsive design using React.js, Next.js, and TailwindCSS</p>
                </div>
                
                <div className="animated-card bg-card/50 p-4 rounded-lg border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="text-theme-500" size={20} />
                    <h3 className="font-semibold">Problem Solver</h3>
                  </div>
                  <p className="text-sm text-foreground/70">Strong in OOP, algorithms, and building scalable solutions</p>
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
