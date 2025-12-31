import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Database, Layers } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, value: "10+", label: "Years Experience" },
    { icon: Layers, value: "50+", label: "Projects Delivered" },
    { icon: Cloud, value: "AWS", label: "Certified" },
    { icon: Database, value: "100M+", label: "Records Processed" },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl glass glass-border p-8 relative overflow-hidden">
              {/* Code visualization */}
              <div className="absolute inset-0 opacity-20">
                <pre className="text-xs text-primary font-mono p-4 overflow-hidden">
{`@RestController
@RequestMapping("/api/v1")
public class ServiceController {
    
    @Autowired
    private ServiceFacade facade;
    
    @GetMapping("/health")
    public ResponseEntity<Health> check() {
        return ResponseEntity.ok(
            facade.getHealthStatus()
        );
    }
    
    @PostMapping("/process")
    @Async
    public CompletableFuture<Result> 
        process(@RequestBody Request req) {
        return facade
            .processAsync(req)
            .thenApply(this::transform);
    }
}`}
                </pre>
              </div>
              
              {/* Central avatar/icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Code2 className="w-16 h-16 text-primary-foreground" />
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 right-8 px-3 py-1.5 glass glass-border rounded-full text-sm"
              >
                ☕ Java 17+
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-8 left-8 px-3 py-1.5 glass glass-border rounded-full text-sm"
              >
                🐍 Python 3.11
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-4">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 tracking-tight">
                Engineering{" "}
                <span className="text-gradient">excellence</span>
                <br />at scale
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                With over a decade in software engineering, I specialize in building 
                robust, scalable backend systems. From designing microservices architectures 
                to implementing cloud-native solutions on AWS, I bring a pragmatic approach 
                to solving complex technical challenges.
              </p>
              <p>
                My core expertise lies in Java Spring ecosystem and Python FastAPI for 
                high-performance APIs. I'm passionate about clean code, automated testing, 
                and DevOps practices that enable teams to ship with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            >
              {highlights.map(({ icon: Icon, value, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl glass glass-border"
                >
                  <Icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-semibold text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;