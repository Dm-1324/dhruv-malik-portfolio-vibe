
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-theme-500 mb-4 font-medium">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <a 
              href="tel:+919818113229" 
              className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg border-2 border-border hover:border-theme-500 transition-all duration-300"
            >
              <Phone size={20} className="text-theme-500" />
              <span className="font-medium">+91 9818113229</span>
            </a>
            
            <a 
              href="mailto:dhruvm132@gmail.com" 
              className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg border-2 border-border hover:border-theme-500 transition-all duration-300"
            >
              <Mail size={20} className="text-theme-500" />
              <span className="font-medium">dhruvm132@gmail.com</span>
            </a>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <a 
              href="https://www.linkedin.com/in/dhruvmalik1324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-card rounded-full border-2 border-border hover:border-theme-500 hover:bg-theme-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-theme-500" />
            </a>
            
            <a 
              href="https://github.com/dhruvmalik1324" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-card rounded-full border-2 border-border hover:border-theme-500 hover:bg-theme-500/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} className="text-theme-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
