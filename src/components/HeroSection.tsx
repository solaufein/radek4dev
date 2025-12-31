import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground font-sans text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in">
          Creative Developer & Designer
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 opacity-0 animate-slide-up animation-delay-100">
          Hello, I'm{" "}
          <span className="text-gradient italic">Alexandra</span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-slide-up animation-delay-200">
          I craft digital experiences that blend elegant design with thoughtful functionality. 
          Based in San Francisco, working globally.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-slide-up animation-delay-300">
          <a
            href="#about"
            className="px-8 py-4 bg-gradient-warm text-primary-foreground font-sans font-medium rounded-full shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
          >
            Discover My Story
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border text-foreground font-sans font-medium rounded-full hover:bg-secondary transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
