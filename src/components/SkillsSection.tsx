import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: "Java / Spring Boot", level: 95 },
      { name: "Python / FastAPI", level: 90 },
      { name: "REST APIs & GraphQL", level: 92 },
      { name: "Microservices", level: 88 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, Lambda, S3)", level: 90 },
      { name: "Docker & Kubernetes", level: 85 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Terraform / IaC", level: 80 },
    ],
  },
];

const technologies = [
  { name: "Java", category: "Language" },
  { name: "Spring Boot", category: "Framework" },
  { name: "Spring Cloud", category: "Framework" },
  { name: "Python", category: "Language" },
  { name: "FastAPI", category: "Framework" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Kafka", category: "Messaging" },
  { name: "RabbitMQ", category: "Messaging" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "Terraform", category: "IaC" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-card" />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {/* Skills Bars */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                {category.title}
              </h3>
              {category.skills.map(({ name, level }, index) => (
                <div key={name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">{name}</span>
                    <span className="text-muted-foreground">{level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${level}%` } : {}}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.5 + catIndex * 0.2 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + index * 0.03,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative px-5 py-2.5 glass glass-border rounded-full cursor-default"
              >
                <span className="text-sm text-foreground font-medium">{tech.name}</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;