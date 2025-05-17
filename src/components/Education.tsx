
import { useEffect, useRef } from 'react';

type Education = {
  degree: string;
  institution: string;
  period: string;
};

const educationData: Education[] = [
  {
    degree: 'B.Tech Computer Science Engineering',
    institution: 'ICFAI Tech University, Hyderabad',
    period: '2021 - 2025'
  },
  {
    degree: 'Physics, Chemistry, Mathematics (PCM)',
    institution: 'Indus Valley Public School',
    period: '2019 - 2021'
  }
];

const Education = () => {
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
    <section className="py-20">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <h2 className="section-heading opacity-0">Education</h2>
        
        <div className="mt-12 max-w-3xl mx-auto opacity-0">
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border-l-4 border-theme-500">
                <h3 className="text-xl font-heading font-semibold mb-1">
                  {item.degree}
                </h3>
                <p className="text-theme-400 mb-2">{item.institution}</p>
                <p className="text-foreground/60 text-sm">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
