
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
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <h2 className="section-heading project-animate opacity-0">Projects</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="project-animate opacity-0 animated-card bg-gradient-to-br from-card to-secondary/40 border border-border rounded-lg overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-theme-600/20 to-theme-400/5 flex items-center justify-center">
                <div className="text-4xl text-theme-400 opacity-30">
                  {/* Placeholder for project image */}
                  {project.title.charAt(0)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4">
                  {project.description}
                </p>
                
                {project.achievement && (
                  <p className="text-theme-400 text-sm mb-4">
                    {project.achievement}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-secondary/50 rounded text-xs"
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
