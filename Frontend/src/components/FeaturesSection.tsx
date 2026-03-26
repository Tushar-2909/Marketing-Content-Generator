import { motion } from "framer-motion";
import { Zap, Brain, Target, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Generation",
    description: "Create high-converting marketing content in seconds, not hours. Our AI pipeline is optimized for speed without sacrificing quality.",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    icon: Brain,
    title: "Context-Aware AI",
    description: "Our models understand your brand voice, target audience, and industry context to deliver content that truly resonates with your customers.",
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    icon: Target,
    title: "Multi-Platform Optimization",
    description: "Content automatically tailored for Instagram, LinkedIn, Email, Facebook, and more — each with platform-specific best practices built in.",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description: "Every piece of content is crafted using insights from millions of high-performing posts. Maximize engagement with proven patterns.",
    gradient: "from-primary/20 to-neon-purple/20",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Powerful <span className="neon-text">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to create marketing content that converts.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card-hover p-8 sm:p-10 bg-gradient-to-br ${feature.gradient} backdrop-blur-xl border border-border/50 sticky`}
              style={{ top: `${100 + i * 40}px`, zIndex: i }}
            >
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 shrink-0">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
