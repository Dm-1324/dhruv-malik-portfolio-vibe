
const Footer = () => {
  return (
    <footer className="py-8 border-t-2 border-border bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Dhruv Malik. All rights reserved.
        </p>
        <p className="text-muted-foreground/70 text-xs mt-2">
          Designed & Built with React, Next.js & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
