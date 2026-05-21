import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Technology — Computer Science',
    institution: 'ICFAI Foundation for Higher Education (ICFAI Tech), Hyderabad',
    period: 'August 2021 — 2025',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate — PCM',
    institution: 'Indus Valley Public School',
    period: 'April 2019 — April 2021',
    icon: GraduationCap,
  },
  {
    degree: 'Web Development Certification',
    institution: 'Internshala Trainings',
    period: 'October 2023',
    icon: Award,
  },
];

const certs = [
  'Introduction to Frontend Development',
  'Microsoft Excel with AI',
  'Cybersecurity Analysis and Design',
  'Acquiring Data',
];

const Education = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">Education</p>
          <h2 className="section-heading">
            Academic & <span className="gradient-text">credentials</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          <div className="space-y-4">
            {educationData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="glass rounded-2xl p-6 flex gap-4"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg leading-snug">{item.degree}</h3>
                    <p className="text-primary text-sm mt-1">{item.institution}</p>
                    <p className="text-muted-foreground text-xs mt-1">{item.period}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
              <Award size={18} className="text-primary" /> Certifications
            </h3>
            <ul className="space-y-3">
              {certs.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-foreground/85 text-sm flex items-start gap-2"
                >
                  <span className="text-primary mt-0.5">▹</span> {c}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
