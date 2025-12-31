import { Sparkles, Heart, Coffee } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Sparkles, label: "10+ Years Experience" },
    { icon: Heart, label: "50+ Happy Clients" },
    { icon: Coffee, label: "1000+ Cups of Coffee" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative opacity-0 animate-slide-in-left">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=750&fit=crop&crop=face"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-warm rounded-2xl -z-10 opacity-60" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent rounded-full -z-10" />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div className="opacity-0 animate-slide-up">
              <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
                About Me
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight mb-6">
                Turning Ideas Into{" "}
                <span className="italic text-accent">Beautiful</span> Digital Reality
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed opacity-0 animate-slide-up animation-delay-100">
              <p>
                With over a decade of experience in the digital realm, I've had the privilege 
                of working with startups, agencies, and Fortune 500 companies alike. My approach 
                combines strategic thinking with creative execution.
              </p>
              <p>
                When I'm not designing or coding, you'll find me exploring art galleries, 
                experimenting with film photography, or hiking through coastal trails. 
                These experiences fuel my creativity and bring fresh perspectives to my work.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 opacity-0 animate-slide-up animation-delay-200">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-card shadow-soft">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-sans text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
