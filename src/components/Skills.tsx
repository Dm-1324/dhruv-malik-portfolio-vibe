
import { useEffect, useRef } from 'react';

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'JavaScript']
  },
  {
    name: 'Frameworks',
    skills: ['React.js', 'Next.js', 'TailwindCSS']
  },
  {
    name: 'Web',
    skills: ['HTML5', 'CSS3', 'REST APIs', 'Responsive Design']
  },
  {
    name: 'Database',
    skills: ['MySQL']
  },
  {
    name: 'Soft Skills',
    skills: ['Problem Solving', 'Critical Thinking', 'Communication']
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
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <h2 className="section-heading skill-animate opacity-0">Skills</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={index}
              className="skill-animate opacity-0 bg-card p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-heading font-semibold mb-4 text-theme-400">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary rounded-full text-sm"
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
