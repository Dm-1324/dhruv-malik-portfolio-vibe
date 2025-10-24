
import { useEffect, useRef } from 'react';

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillsData: SkillCategory[] = [
  {
    name: 'Core Technologies',
    skills: ['React.js', 'Next.js', 'TailwindCSS', 'Java', 'Spring Boot', 'RESTful APIs', 'Python', 'JavaScript', 'MySQL']
  },
  {
    name: 'Top Skills',
    skills: ['Unit Testing', 'Object-Oriented Programming (OOP)', 'Scripting']
  },
  {
    name: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'UI/UX Implementation']
  },
  {
    name: 'Backend & Database',
    skills: ['MySQL', 'Database Design', 'API Development']
  },
  {
    name: 'Soft Skills',
    skills: ['Problem Solving', 'Critical Thinking', 'Team Collaboration', 'Communication']
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.skill-animate');
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('animate-fade-in');
              }, i * 100);
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
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <h2 className="section-heading skill-animate opacity-0">Skills & Expertise</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div 
              key={index}
              className="skill-animate opacity-0 bg-card p-6 rounded-lg border-2 border-border hover:border-theme-500/50 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-heading font-semibold mb-4 text-theme-500">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-muted hover:bg-theme-500 hover:text-primary-foreground transition-all duration-300 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
