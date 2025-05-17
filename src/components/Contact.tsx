
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-theme-400 mb-4">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-foreground/70 mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <a 
              href="tel:+919818113229" 
              className="flex items-center justify-center gap-3 p-4 bg-secondary rounded-lg hover:bg-theme-500/10 transition-colors"
            >
              <Phone size={20} className="text-theme-400" />
              <span>+91 9818113229</span>
            </a>
            
            <a 
              href="mailto:dhruvm132@gmail.com" 
              className="flex items-center justify-center gap-3 p-4 bg-secondary rounded-lg hover:bg-theme-500/10 transition-colors"
            >
              <Mail size={20} className="text-theme-400" />
              <span>dhruvm132@gmail.com</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full hover:bg-theme-500/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-theme-400" />
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary rounded-full hover:bg-theme-500/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="text-theme-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
