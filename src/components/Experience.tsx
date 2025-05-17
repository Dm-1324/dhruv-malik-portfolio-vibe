
import { useState, useEffect, useRef } from 'react';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string[];
};

const experienceData: ExperienceItem[] = [
  {
    company: 'Yrall Media Solutions',
    position: 'Frontend Developer',
    period: 'Jan 2025 - Jun 2025',
    description: [
      'Led frontend development initiatives using modern technologies.',
      'Collaborated with design and backend teams to implement responsive user interfaces.',
      'Optimized applications for maximum speed and scalability.'
    ]
  },
  {
    company: 'GlobalLogic',
    position: 'Software Developer Intern',
    period: 'Jun 2024 - Jul 2024',
    description: [
      'Improved ML-based text classification accuracy by 15% through feature engineering and model optimization.',
      'Automated question generation process for educational platform, reducing manual effort by 50%.',
      'Streamlined workflows by developing efficient data processing pipelines.'
    ]
  },
  {
    company: 'Arawinz Soft Solutions',
    position: 'Frontend Developer Intern',
    period: 'Jun 2023 - Jul 2023',
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
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <h2 className="section-heading experience-animate opacity-0">Work Experience</h2>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Tab Buttons */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible mb-6 md:mb-0 md:w-48 md:border-l md:border-foreground/20 experience-animate opacity-0">
              {experienceData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left transition-all whitespace-nowrap ${
                    activeTab === index 
                      ? 'text-theme-500 md:border-l-2 md:border-theme-500 md:-ml-[2px]' 
                      : 'text-foreground/60 hover:text-foreground/90 hover:bg-secondary/30'
                  }`}
                >
                  {item.company}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="flex-1 pl-0 md:pl-6 experience-animate opacity-0">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    activeTab === index ? 'opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <h3 className="text-xl font-heading font-semibold">
                    {item.position}{' '}
                    <span className="text-theme-500">@ {item.company}</span>
                  </h3>
                  <p className="text-foreground/60 mb-4">{item.period}</p>
                  
                  <ul className="space-y-3">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-theme-500 mr-2 mt-1">▹</span>
                        <span>{point}</span>
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
