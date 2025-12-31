const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xl font-semibold text-foreground">
          dev<span className="text-primary">.</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Built with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;