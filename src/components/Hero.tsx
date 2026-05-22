import { ArrowRight, Copy, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import MagneticButton from './MagneticButton';
import ParticleBackground from './ParticleBackground';

const PHRASES = [
  'secure REST APIs',
  'scalable architectures',
  'high-performance systems',
];
const EMAIL = 'dhruvmalik2202@gmail.com';

const useTyping = (words: string[], typeMs = 70, holdMs = 1600, eraseMs = 35) => {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<'type' | 'hold' | 'erase'>('type');

  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'type') {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setPhase('erase'), holdMs);
      }
    } else if (phase === 'erase') {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), eraseMs);
      } else {
        setI((v) => v + 1);
        setPhase('type');
      }
    }
    return () => clearTimeout(t!);
  }, [text, phase, i, words, typeMs, holdMs, eraseMs]);

  return text;
};

const Hero = () => {
  const typed = useTyping(PHRASES);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success('Email copied to clipboard!', { description: EMAIL });
    } catch {
      toast.error('Could not copy email');
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-24 overflow-hidden bg-aurora"
    >
      <ParticleBackground />

      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          zIndex: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-6 tracking-tight leading-[1.05]"
          >
            Dhruv Malik
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-heading font-semibold mb-6 leading-tight min-h-[90px] md:min-h-[100px]"
          >
            Backend Software Engineer crafting{' '}
            <span className="gradient-text">{typed}</span>
            <span className="inline-block w-[2px] h-[0.9em] align-[-0.1em] bg-primary ml-1 animate-pulse" />
            .
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            2+ years of experience in the Java ecosystem — building secure RESTful APIs with
            Spring Boot, Spring MVC, and MySQL. Full-stack enthusiast leveraging Vue.js and
            React.js to deliver complete end-to-end products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton href="#contact" className="btn-primary">
              Let's Connect <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton onClick={copyEmail} className="btn-ghost">
              Copy Email <Copy size={16} />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.6 }, y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  );
};

export default Hero;
