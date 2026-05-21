const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Dhruv Malik. All rights reserved.</p>
        <p className="text-xs">Built with React, TailwindCSS & Framer Motion</p>
      </div>
    </footer>
  );
};

export default Footer;
