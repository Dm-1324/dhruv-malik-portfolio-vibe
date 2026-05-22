import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Drawer } from 'vaul';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

type Category = 'Backend' | 'Frontend' | 'AI/ML';

type Project = {
  title: string;
  description: string;
  techStack: string[];
  achievement?: string;
  categories: Category[];
  details: string;
};

const projectsData: Project[] = [
  {
    title: 'Spring Boot REST Platform',
    description: 'Enterprise backend with secure RESTful APIs, Hibernate/JPA data layer, and comprehensive test coverage.',
    techStack: ['Java', 'Spring Boot', 'Spring MVC', 'MySQL', 'JPA'],
    achievement: '25% reduction in average transaction latency',
    categories: ['Backend'],
    details:
      'Designed a layered Spring Boot service with versioned REST endpoints, role-based access, and Hibernate-backed persistence. Tuned query plans, introduced caching, and added rigorous unit and integration tests that drove a 25% drop in average transaction latency.',
  },
  {
    title: 'Real-time Chat App',
    description: 'Responsive web app with secure login flows and live messaging between users over WebSockets.',
    techStack: ['React.js', 'Socket.io', 'Node.js', 'Express'],
    achievement: '25% faster authentication flow',
    categories: ['Backend', 'Frontend'],
    details:
      'Full-stack chat platform with JWT-based auth, presence indicators, and a Socket.io transport layer. Streamlined the login pipeline by consolidating round-trips, improving perceived sign-in speed by 25%.',
  },
  {
    title: 'Vehicle Tracking System',
    description: 'Computer-vision pipeline for vehicle detection and tracking across varying light conditions.',
    techStack: ['Python', 'OpenCV', 'Haar Classifiers'],
    achievement: '90% accuracy across light conditions',
    categories: ['AI/ML'],
    details:
      'OpenCV pipeline combining Haar cascade detection with a lightweight tracker. Calibrated thresholds for day/night footage to sustain ~90% detection accuracy across mixed lighting.',
  },
  {
    title: 'Document Text Classifier',
    description: 'ML pipeline for document analysis and automated question generation built at GlobalLogic.',
    techStack: ['Python', 'Scikit-learn', 'NLP'],
    achievement: '+15% classification accuracy',
    categories: ['AI/ML', 'Backend'],
    details:
      'NLP pipeline with feature engineering, scikit-learn classifiers, and an automated question-generation module. Iterative tuning and richer features lifted classification accuracy by 15%.',
  },
];

const FILTERS: ('All' | Category)[] = ['All', 'Backend', 'Frontend', 'AI/ML'];

const Projects = () => {
  const [filter, setFilter] = useState<'All' | Category>('All');
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === 'All' ? projectsData : projectsData.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">Projects</p>
          <h2 className="section-heading">
            Selected <span className="gradient-text">work</span>.
          </h2>
        </motion.div>

        <div className="mb-10">
          <ToggleGroup
            type="single"
            value={filter}
            onValueChange={(v) => v && setFilter(v as 'All' | Category)}
            className="inline-flex glass rounded-xl p-1"
          >
            {FILTERS.map((f) => (
              <ToggleGroupItem
                key={f}
                value={f}
                className="px-4 py-2 text-sm rounded-lg data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                {f}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.button
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setActive(project)}
                className="group glass rounded-2xl p-7 text-left hover:border-primary/60 transition-all hover:glow-shadow"
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
                  <p className="text-primary text-sm mb-5 font-medium">✓ {project.achievement}</p>
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
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Drawer.Root open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 z-[65] bg-black/50 backdrop-blur-sm" />
          <Drawer.Content className="fixed inset-x-0 bottom-0 z-[70] mt-24 flex h-auto max-h-[85vh] flex-col rounded-t-2xl border border-border bg-card text-card-foreground outline-none">
            <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-muted" />
            <div className="overflow-y-auto p-8 max-w-3xl mx-auto w-full">
              {active && (
                <>
                  <Drawer.Title className="text-3xl font-heading font-bold">{active.title}</Drawer.Title>
                  <Drawer.Description className="text-muted-foreground mt-2 mb-4 text-base leading-relaxed">
                    {active.description}
                  </Drawer.Description>
                  {active.achievement && (
                    <p className="text-primary font-medium mb-5">✓ {active.achievement}</p>
                  )}
                  <p className="text-foreground/85 leading-relaxed mb-6">{active.details}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {active.techStack.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-muted rounded-lg text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </section>
  );
};

export default Projects;
