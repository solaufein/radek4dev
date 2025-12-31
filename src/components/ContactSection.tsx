import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
    { icon: MapPin, label: "Location", value: "Available Worldwide", href: "#" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Let's Connect
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
            Ready to build
            <br />
            <span className="text-gradient">something great?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Whether you need a scalable backend, cloud architecture, or technical leadership—
            I'm here to help bring your vision to life.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-6 mb-12"
        >
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group p-8 rounded-3xl glass glass-border hover:bg-secondary/20 transition-all duration-300"
            >
              <Icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                {label}
              </p>
              <p className="text-foreground font-medium">{value}</p>
            </a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="mailto:your.email@example.com"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-primary text-primary-foreground font-medium rounded-full transition-all duration-300 hover:shadow-glow hover:scale-105 text-lg"
          >
            Start a Conversation
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-4 mt-16"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-14 h-14 flex items-center justify-center rounded-full glass glass-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;