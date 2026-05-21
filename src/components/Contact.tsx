import { Phone, Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative bg-aurora">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">Contact</p>
          <h2 className="section-heading">
            Let's build something <span className="gradient-text">together</span>.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
            Open to backend, full-stack, and Java/Spring opportunities. My inbox is always open.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <motion.a
            href="tel:+919818113229"
            whileHover={{ y: -3 }}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/60 transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Phone size={18} />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Mobile</p>
              <p className="font-medium">+91 98181 13229</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:dhruvm132@gmail.com"
            whileHover={{ y: -3 }}
            className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/60 transition-colors"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Mail size={18} />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-medium">dhruvm132@gmail.com</p>
            </div>
          </motion.a>
        </div>

        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ y: -3, scale: 1.05 }}
            href="https://www.linkedin.com/in/dhruvmalik1324"
            target="_blank"
            rel="noopener noreferrer"
            className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:border-primary/60 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-primary" />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, scale: 1.05 }}
            href="https://github.com/dhruvmalik1324"
            target="_blank"
            rel="noopener noreferrer"
            className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:border-primary/60 transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} className="text-primary" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            href="mailto:dhruvm132@gmail.com"
            className="btn-primary"
          >
            Say Hi <ArrowRight size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
