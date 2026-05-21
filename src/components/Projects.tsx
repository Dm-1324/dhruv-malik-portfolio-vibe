import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  techStack: string[];
  achievement?: string;
};

const projectsData: Project[] = [
  {
    title: 'Spring Boot REST Platform',
    description:
      'Enterprise backend with secure RESTful APIs, Hibernate/JPA data layer, and comprehensive test coverage.',
    techStack: ['Java', 'Spring Boot', 'Spring MVC', 'MySQL', 'JPA'],
    achievement: '25% reduction in average transaction latency',
  },
  {
    title: 'Real-time Chat App',
    description:
      'Responsive web app with secure login flows and live messaging between users over WebSockets.',
    techStack: ['React.js', 'Socket.io', 'Node.js', 'Express'],
    achievement: '25% faster authentication flow',
  },
  {
    title: 'Vehicle Tracking System',
    description:
      'Computer-vision pipeline for vehicle detection and tracking across varying light conditions.',
    techStack: ['Python', 'OpenCV', 'Haar Classifiers'],
    achievement: '90% accuracy across light conditions',
  },
  {
    title: 'Document Text Classifier',
    description:
      'ML pipeline for document analysis and automated question generation built at GlobalLogic.',
    techStack: ['Python', 'Scikit-learn', 'NLP'],
    achievement: '+15% classification accuracy',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">Projects</p>
          <h2 className="section-heading">
            Selected <span className="gradient-text">work</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-7 hover:border-primary/60 transition-all hover:glow-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  size={20}
                />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

              {project.achievement && (
                <p className="text-primary text-sm mb-5 font-medium">
                  ✓ {project.achievement}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-muted rounded-md text-xs font-medium text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
