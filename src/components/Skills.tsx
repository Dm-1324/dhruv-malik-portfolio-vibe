import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, Server, Database, Wrench, Users, Layout } from 'lucide-react';
import { useRef, type ReactNode, type MouseEvent } from 'react';

type Cell = {
  icon: typeof Server;
  name: string;
  skills: string[];
  className: string;
  accent?: 'primary' | 'accent';
};

const cells: Cell[] = [
  {
    icon: Server,
    name: 'Backend',
    skills: ['Java (Core + Streams)', 'Spring Boot', 'Spring MVC', 'Node.js', 'REST APIs', 'SQL'],
    className: 'md:col-span-2 md:row-span-2',
    accent: 'primary',
  },
  {
    icon: Layout,
    name: 'Frontend',
    skills: ['React.js', 'Vue.js', 'Next.js', 'TailwindCSS', 'TypeScript'],
    className: 'md:col-span-2',
    accent: 'accent',
  },
  {
    icon: Database,
    name: 'Data',
    skills: ['MySQL', 'Hibernate / JPA', 'Query Tuning'],
    className: '',
  },
  {
    icon: Wrench,
    name: 'Engineering',
    skills: ['Unit + Integration Testing', 'OOP', 'Python'],
    className: '',
  },
  {
    icon: Code2,
    name: 'Tooling',
    skills: ['Git', 'Postman', 'Agile / Scrum'],
    className: '',
  },
  {
    icon: Users,
    name: 'Soft Skills',
    skills: ['Problem Solving', 'Collaboration', 'Communication'],
    className: '',
  },
];

const TiltCard = ({ children, className }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 18 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 18 });

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
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
          className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[minmax(160px,auto)] gap-4"
        >
          {cells.map((cell, i) => {
            const Icon = cell.icon;
            const accentClass = cell.accent === 'accent' ? 'text-accent bg-accent/10' : 'text-primary bg-primary/10';
            return (
              <motion.div key={i} variants={itemAnim} className={cell.className}>
                <TiltCard className="h-full">
                  <div className="h-full glass rounded-2xl p-6 hover:border-primary/60 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${accentClass}`}>
                        <Icon size={18} />
                      </div>
                      <h3 className="font-heading font-semibold text-lg">{cell.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cell.skills.map((skill, j) => (
                        <span
                          key={j}
                          className="px-3 py-1.5 rounded-lg bg-muted text-foreground/85 hover:bg-primary hover:text-primary-foreground transition-colors text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
