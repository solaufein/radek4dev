import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@alexandra.design" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  ];

  const socials = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 opacity-0 animate-slide-up">
          <p className="text-primary font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Let's Connect
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
            Have a Project in <span className="italic text-accent">Mind?</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto">
            I'm always excited to hear about new opportunities and interesting projects. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16 opacity-0 animate-slide-up animation-delay-100">
          {contactInfo.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <Icon className="w-6 h-6 mx-auto mb-4 text-primary" />
              <p className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-1">
                {label}
              </p>
              <p className="font-sans text-foreground font-medium">{value}</p>
            </div>
          ))}
        </div>

        <div className="opacity-0 animate-slide-up animation-delay-200">
          <a
            href="mailto:hello@alexandra.design"
            className="inline-flex px-10 py-5 bg-gradient-warm text-primary-foreground font-sans font-medium rounded-full shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Start a Conversation
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-12 opacity-0 animate-fade-in animation-delay-300">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
