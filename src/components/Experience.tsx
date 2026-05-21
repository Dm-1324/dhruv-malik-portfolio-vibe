import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string[];
};

const experienceData: ExperienceItem[] = [
  {
    company: 'Agyom',
    position: 'Associate Analyst — A2',
    period: 'May 2026 - Present',
    location: 'Noida, Uttar Pradesh, India',
    description: [
      'Promoted to Associate Analyst A2 after 10 months as Associate Trainee.',
      'Driving backend engineering on enterprise-grade Java applications.',
      'Owning code quality through reviews, unit testing, and architectural decisions.',
    ],
  },
  {
    company: 'Agyom (Trainee)',
    position: 'Associate Trainee',
    period: 'August 2025 - May 2026 (10 months)',
    location: 'Noida, Uttar Pradesh, India',
    description: [
      'Engineered high-performance backend services with Java (Core & Streams API).',
      'Designed Spring Boot and Spring MVC RESTful APIs with secure auth flows.',
      'Optimized Hibernate/JPA + MySQL data layers — 25% reduction in average transaction latency.',
      'Enforced quality with comprehensive unit and integration test coverage.',
    ],
  },
  {
    company: 'Yrall Media',
    position: 'Frontend Developer',
    period: 'January 2025 - June 2025 (6 months)',
    location: 'Hyderabad, Telangana, India',
    description: [
      'Built high-performance interfaces in React.js, Next.js, and Vue.js.',
      'Implemented UI/UX upgrades and optimized load time and accessibility.',
      'Contributed to improved SEO rankings and user retention.',
    ],
  },
  {
    company: 'GlobalLogic',
    position: 'Intern',
    period: 'June 2024 - July 2024 (2 months)',
    location: 'Noida, Uttar Pradesh, India',
    description: [
      'Improved document text classification accuracy by 15% using Scikit-learn.',
      'Automated question generation, cutting manual input efforts by 10%.',
    ],
  },
  {
    company: 'Arawinz Soft',
    position: 'Web Developer',
    period: 'June 2023 - July 2023 (2 months)',
    location: 'Hyderabad, Telangana, India',
    description: [
      'Prototyped a responsive real-time chat app using React/Vue + Socket.io.',
      'Built secure login flows, reducing authentication time by 25%.',
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const item = experienceData[activeTab];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">Experience</p>
          <h2 className="section-heading">
            Where I've <span className="gradient-text">shipped</span>.
          </h2>
        </motion.div>

        <div className="max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible md:w-64 md:border-l border-border">
              {experienceData.map((it, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left whitespace-nowrap text-sm font-medium transition-all md:border-l-2 md:-ml-px ${
                    activeTab === index
                      ? 'text-primary border-primary bg-primary/5'
                      : 'text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  {it.company}
                </button>
              ))}
            </div>

            <div className="flex-1 min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-heading font-bold">
                    {item.position} <span className="text-primary">@ {item.company}</span>
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {item.period}{item.location ? ` · ${item.location}` : ''}
                  </p>
                  <ul className="space-y-3 mt-6">
                    {item.description.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-primary mt-1.5">▹</span>
                        <span className="text-foreground/85 leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
