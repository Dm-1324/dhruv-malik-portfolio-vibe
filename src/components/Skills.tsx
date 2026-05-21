import { motion } from 'framer-motion';
import { Code2, Server, Database, Wrench, Users, Layout } from 'lucide-react';

const skillsData = [
  {
    icon: Server,
    name: 'Backend',
    skills: ['Java (Core + Streams)', 'Spring Boot', 'Spring MVC', 'Spring Framework', 'RESTful APIs', 'Node.js'],
  },
  {
    icon: Database,
    name: 'Database',
    skills: ['MySQL', 'Hibernate / JPA', 'SQL', 'Database Optimization'],
  },
  {
    icon: Layout,
    name: 'Frontend',
    skills: ['React.js', 'Vue.js', 'Next.js', 'TailwindCSS', 'TypeScript', 'JavaScript'],
  },
  {
    icon: Wrench,
    name: 'Engineering',
    skills: ['Unit Testing', 'Integration Testing', 'OOP', 'Scripting', 'Python'],
  },
  {
    icon: Code2,
    name: 'Tooling',
    skills: ['Git', 'REST APIs', 'Postman', 'Agile / Scrum'],
  },
  {
    icon: Users,
    name: 'Soft Skills',
    skills: ['Problem Solving', 'Critical Thinking', 'Collaboration', 'Communication'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-aurora">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">Skills</p>
          <h2 className="section-heading">
            Full-stack toolkit, <span className="gradient-text">backend-first</span>.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillsData.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={index}
                variants={itemAnim}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass rounded-2xl p-6 hover:border-primary/60 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-muted text-foreground/85 hover:bg-primary hover:text-primary-foreground transition-colors text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
