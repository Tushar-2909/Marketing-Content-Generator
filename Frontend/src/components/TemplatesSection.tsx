import { motion } from "framer-motion";
import { Instagram, FileText, Mail, ShoppingBag } from "lucide-react";

const templates = [
  {
    icon: Instagram,
    title: "Instagram Post",
    description: "Engaging captions and hashtags that boost your social media presence.",
    color: "text-neon-purple",
  },
  {
    icon: FileText,
    title: "Ad Copy",
    description: "Persuasive advertising copy that drives clicks and conversions.",
    color: "text-neon-blue",
  },
  {
    icon: Mail,
    title: "Email Campaign",
    description: "Compelling email sequences that nurture leads and close deals.",
    color: "text-primary",
  },
  {
    icon: ShoppingBag,
    title: "Product Description",
    description: "SEO-optimized descriptions that highlight key features and benefits.",
    color: "text-neon-green",
  },
];

const TemplatesSection = () => {
  return (
    <section id="templates" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Marketing <span className="neon-text">Templates</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose from our collection of AI-powered content templates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 group cursor-pointer"
            >
              <div className={`${t.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <t.icon className="h-10 w-10" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
