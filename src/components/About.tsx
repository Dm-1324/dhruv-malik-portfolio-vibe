import { Code2, Database, Zap, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const bentoItems = [
  {
    icon: Server,
    title: 'Backend First',
    desc: '75% backend focus — Core Java, Streams API, Spring Boot & MVC.',
    className: 'md:col-span-2',
  },
  {
    icon: Database,
    title: 'Data Layer',
    desc: 'Hibernate/JPA with MySQL, optimized for low-latency queries.',
    className: '',
  },
  {
    icon: Zap,
    title: '25% Latency Drop',
    desc: 'Achieved through DB optimization and disciplined unit testing.',
    className: '',
  },
  {
    icon: Code2,
    title: 'Full-Stack Reach',
    desc: 'Vue.js & React.js for complete end-to-end product delivery.',
    className: 'md:col-span-2',
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">About</p>
          <h2 className="section-heading">
            Detail-oriented engineer focused on <span className="gradient-text">performance & clarity</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            I build robust, high-performance backends with Core Java, Spring Boot, and MySQL —
            and pair them with modern frontends in React and Vue. My work is grounded in clean
            code, rigorous testing, and measurable performance wins.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bentoItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`glass rounded-2xl p-6 hover:border-primary/60 transition-colors ${item.className}`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
