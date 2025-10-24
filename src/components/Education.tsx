
import { useEffect, useRef } from 'react';

type Education = {
  degree: string;
  institution: string;
  period: string;
};

const educationData: Education[] = [
  {
    degree: 'Bachelor of Technology - BTech, Computer Science',
    institution: 'ICFAI Foundation for Higher Education (ICFAI Tech), Hyderabad',
    period: 'August 2021 - 2025'
  },
  {
    degree: 'Intermediate - Physics, Chemistry, Mathematics (PCM)',
    institution: 'Indus Valley Public School',
    period: 'April 2019 - April 2021'
  },
  {
    degree: 'Web Development Certification',
    institution: 'Internshala Trainings',
    period: 'October 2023'
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.edu-animate');
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
    <section className="py-28 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <h2 className="section-heading edu-animate opacity-0 mb-16">Education & Certifications</h2>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className="edu-animate opacity-0 bg-card p-8 rounded-lg border-l-4 border-theme-500 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground leading-relaxed">
                  {item.degree}
                </h3>
                <p className="text-theme-400 mb-3 font-medium">{item.institution}</p>
                <p className="text-muted-foreground text-sm">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
