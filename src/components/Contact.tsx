
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-theme-400 mb-6 font-medium tracking-wide">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-16 text-lg leading-loose">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a 
              href="tel:+919818113229" 
              className="flex items-center justify-center gap-4 p-6 bg-card rounded-lg border-2 border-border hover:border-theme-500 transition-all duration-300"
            >
              <Phone size={22} className="text-theme-400" />
              <span className="font-medium text-base">+91 9818113229</span>
            </a>
            
            <a 
              href="mailto:dhruvm132@gmail.com" 
              className="flex items-center justify-center gap-4 p-6 bg-card rounded-lg border-2 border-border hover:border-theme-500 transition-all duration-300"
            >
              <Mail size={22} className="text-theme-400" />
              <span className="font-medium text-base">dhruvm132@gmail.com</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-8 mt-12">
            <a 
              href="https://www.linkedin.com/in/dhruvmalik1324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 bg-card rounded-full border-2 border-border hover:border-theme-500 hover:bg-theme-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={26} className="text-theme-400" />
            </a>
            
            <a 
              href="https://github.com/dhruvmalik1324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-5 bg-card rounded-full border-2 border-border hover:border-theme-500 hover:bg-theme-500/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={26} className="text-theme-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
