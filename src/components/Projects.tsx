
import { useEffect, useRef } from 'react';

type Project = {
  title: string;
  description: string;
  techStack: string[];
  achievement?: string;
};

const projectsData: Project[] = [
  {
    title: 'Vehicle Tracking System',
    description: 'An advanced vehicle detection and tracking system built using computer vision techniques.',
    techStack: ['OpenCV', 'Python', 'Haar Classifiers'],
    achievement: 'Achieved 90% accuracy in varied light conditions'
  },
  {
    title: 'Real-time Chat App',
    description: 'A responsive web application that enables secure login and real-time messaging between users.',
    techStack: ['React.js', 'Socket.io', 'Node.js', 'Express']
  },
  {
    title: 'UI/UX Improvements',
    description: 'Enhanced user interfaces and experience for e-commerce platforms, improving conversion rates.',
    techStack: ['React.js', 'TailwindCSS', 'JavaScript'],
    achievement: 'Optimized sites like Picklebasket.in and Numaxups.com'
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.project-animate');
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('animate-fade-in');
              }, i * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <h2 className="section-heading project-animate opacity-0 mb-16">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-16 project-animate opacity-0 text-lg leading-relaxed">
          A showcase of my work demonstrating expertise in full-stack development, computer vision, and responsive web applications.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="project-animate opacity-0 animated-card bg-card border-2 border-border hover:border-theme-500/50 rounded-lg overflow-hidden group"
            >
              <div className="h-52 bg-gradient-to-br from-theme-500/10 to-theme-500/5 flex items-center justify-center border-b-2 border-border group-hover:border-theme-500/50 transition-colors">
                <div className="text-6xl text-theme-400 opacity-40 font-bold">
                  {project.title.charAt(0)}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground group-hover:text-theme-400 transition-colors leading-relaxed">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-loose">
                  {project.description}
                </p>
                
                {project.achievement && (
                  <p className="text-theme-400 text-sm mb-6 font-medium bg-theme-500/5 px-4 py-3 rounded leading-relaxed">
                    ✓ {project.achievement}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 bg-muted rounded-md text-xs font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
