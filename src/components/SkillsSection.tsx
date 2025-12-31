const skills = [
  { name: "UI/UX Design", level: 95 },
  { name: "Frontend Development", level: 90 },
  { name: "Brand Strategy", level: 85 },
  { name: "Motion Design", level: 80 },
];

const expertise = [
  "React & Next.js",
  "TypeScript",
  "Figma",
  "Tailwind CSS",
  "Framer Motion",
  "Adobe Creative Suite",
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-slide-up">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium">
            Skills & <span className="italic">Capabilities</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Bars */}
          <div className="space-y-8 opacity-0 animate-slide-up animation-delay-100">
            {skills.map(({ name, level }, index) => (
              <div key={name} className="space-y-2">
                <div className="flex justify-between font-sans text-sm">
                  <span className="text-foreground font-medium">{name}</span>
                  <span className="text-muted-foreground">{level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-warm rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${level}%`,
                      animationDelay: `${index * 100 + 300}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="opacity-0 animate-slide-up animation-delay-200">
            <h3 className="font-serif text-2xl mb-6 text-foreground">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {expertise.map((tool) => (
                <span
                  key={tool}
                  className="px-5 py-2.5 bg-card border border-border rounded-full font-sans text-sm text-secondary-foreground shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
