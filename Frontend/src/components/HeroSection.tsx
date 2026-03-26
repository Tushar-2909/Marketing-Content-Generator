import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-sm text-muted-foreground">
            <Zap className="h-4 w-4 text-primary" />
            Powered by Advanced AI Models
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">AI Powered</span>
            <br />
            <span className="neon-text">Marketing Content</span>
            <br />
            <span className="text-foreground">Generator</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Create high-converting marketing content in seconds. From Instagram posts to email campaigns — let AI craft the perfect message for your audience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#generator" className="btn-neon text-base flex items-center justify-center gap-2">
              Start Generating
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#templates" className="btn-glass text-base flex items-center justify-center gap-2">
              View Templates
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-lg mx-auto"
          >
            {[
              { value: "10K+", label: "Contents Generated" },
              { value: "50+", label: "Templates" },
              { value: "99%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-bold neon-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
