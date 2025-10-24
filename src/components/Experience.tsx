
import { useState, useEffect, useRef } from 'react';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string[];
};

const experienceData: ExperienceItem[] = [
  {
    company: 'Agyom',
    position: 'Associate Trainee',
    period: 'August 2025 - Present (3 months)',
    description: [
      'Working on enterprise-level applications with focus on clean code practices.',
      'Collaborating with cross-functional teams to deliver high-quality solutions.',
      'Learning and implementing best practices in software development.'
    ]
  },
  {
    company: 'Yrall Media Solutions',
    position: 'Frontend Developer',
    period: 'January 2025 - June 2025 (6 months)',
    description: [
      'Led frontend development initiatives using React.js and Next.js.',
      'Collaborated with design and backend teams to implement responsive user interfaces.',
      'Optimized applications for maximum speed and scalability.'
    ]
  },
  {
    company: 'GlobalLogic',
    position: 'Intern',
    period: 'June 2024 - July 2024 (2 months)',
    description: [
      'Collaborated on the TextGuru project, focusing on Document Analysis and Question Generation.',
      'Improved ML-based text classification accuracy by 15% through feature engineering.',
      'Automated question generation process, reducing manual effort by 50%.'
    ]
  },
  {
    company: 'Arawinz Soft Solutions',
    position: 'Web Developer',
    period: 'June 2023 - July 2023 (2 months)',
    description: [
      'Built a real-time chat application using React.js and Socket.io.',
      'Designed and implemented secure login flows and user authentication.',
      'Collaborated with senior developers to optimize website performance.'
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.experience-animate');
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
    <section id="experience" className="py-28 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <h2 className="section-heading experience-animate opacity-0 mb-16">Experience</h2>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Tab Buttons */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible mb-8 md:mb-0 md:w-64 md:border-l-2 md:border-border experience-animate opacity-0">
              {experienceData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-4 text-left transition-all whitespace-nowrap font-medium ${
                    activeTab === index 
                      ? 'text-theme-400 bg-muted/30 md:border-l-2 md:border-theme-500 md:-ml-[2px]' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/20'
                  }`}
                >
                  {item.company}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="flex-1 pl-0 md:pl-8 experience-animate opacity-0">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    activeTab === index ? 'opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2 leading-relaxed">
                    {item.position}{' '}
                    <span className="text-theme-400">@ {item.company}</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">{item.period}</p>
                  
                  <ul className="space-y-4">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-theme-400 mr-3 mt-1 text-lg">▹</span>
                        <span className="text-foreground/90 leading-loose">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
