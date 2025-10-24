
const Footer = () => {
  return (
    <footer className="py-12 border-t-2 border-border bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
          © {new Date().getFullYear()} Dhruv Malik. All rights reserved.
        </p>
        <p className="text-muted-foreground/70 text-xs leading-relaxed">
          Designed & Built with React, Next.js & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
