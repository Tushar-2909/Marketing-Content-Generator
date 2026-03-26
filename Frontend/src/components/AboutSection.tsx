import { motion } from "framer-motion";
import { Sparkles, Zap, Globe, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
            About <span className="neon-text">AI Marketing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to democratize marketing — empowering creators, startups, and businesses with AI-driven content that converts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              Built for the future of content
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              AI Marketing was born from a simple idea: great marketing shouldn't require a big budget or a large team. Our platform leverages cutting-edge AI models to generate compelling, platform-ready content in seconds.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're crafting Instagram captions, email campaigns, or ad copy — our AI understands tone, audience, and context to deliver content that resonates.
            </p>
            <div className="flex gap-8 pt-4">
              {[
                { value: "10K+", label: "Users" },
                { value: "1M+", label: "Contents Created" },
                { value: "50+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-xl font-bold neon-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Generate marketing content in under 10 seconds with our optimized AI pipeline.",
              },
              {
                icon: Globe,
                title: "Multi-Platform",
                desc: "Tailored output for Instagram, LinkedIn, Facebook, Email, and more.",
              },
              {
                icon: Shield,
                title: "Privacy First",
                desc: "Your data stays yours. We never store or share your generated content.",
              },
              {
                icon: Sparkles,
                title: "Always Improving",
                desc: "Our models learn and improve continuously to deliver better results.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="glass-card-hover p-5 flex gap-4 items-start"
              >
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
