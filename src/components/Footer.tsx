
const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground/60 text-sm">
          © {new Date().getFullYear()} Dhruv Malik. All rights reserved.
        </p>
        <p className="text-foreground/40 text-xs mt-2">
          Designed & Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
