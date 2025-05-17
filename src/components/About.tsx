
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => observer.observe(el));
    
    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <h2 className="section-heading animate-on-scroll opacity-0">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-10 mt-12">
          <div className="md:col-span-3">
            <p className="text-lg mb-6 animate-on-scroll opacity-0">
              I am a <span className="highlight-text">detail-oriented software developer</span> with 
              a passion for building clean, efficient applications that solve real-world problems.
            </p>
            
            <ul className="space-y-4 text-foreground/80 animate-on-scroll opacity-0">
              <li className="flex items-start">
                <span className="text-theme-500 mr-2">▹</span>
                <span>Strong foundation in Object-Oriented Programming, Python, Java, and MySQL.</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-500 mr-2">▹</span>
                <span>Skilled in responsive frontend development using React.js, Next.js, and TailwindCSS.</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-500 mr-2">▹</span>
                <span>Passionate about solving real-world problems with clean, efficient code.</span>
              </li>
              <li className="flex items-start">
                <span className="text-theme-500 mr-2">▹</span>
                <span>Experienced in building robust applications with modern technologies.</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2 animate-on-scroll opacity-0">
            <div className="relative w-full aspect-square max-w-xs mx-auto md:ml-auto">
              <div className="absolute inset-0 border-2 border-theme-500 rounded-md transform translate-x-4 translate-y-4 z-0"></div>
              <div className="absolute inset-0 bg-theme-500/20 rounded-md z-10"></div>
              <div className="relative z-20 w-full h-full rounded-md overflow-hidden bg-gray-700">
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center text-center p-4 text-foreground/50">
                  <p>Profile Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
