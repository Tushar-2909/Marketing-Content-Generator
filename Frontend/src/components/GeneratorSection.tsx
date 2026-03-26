import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Loader2, Copy, RefreshCw, CheckCheck, Sparkles } from "lucide-react";

const platforms = ["Instagram", "LinkedIn", "Facebook", "Email"];
const tones = ["Professional", "Friendly", "Persuasive", "Humorous"];

const GeneratorSection = () => {

  const [form, setForm] = useState({
    productName: "",
    targetAudience: "",
    platform: "Instagram",
    tone: "Professional",
  });

  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerate = async () => {

    setLoading(true);
    setOutput("");

    try {

      const res = await axios.post("http://localhost:8000/generate", {
        product: form.productName,
        audience: form.targetAudience,
        platform: form.platform,
        tone: form.tone
      });

      setOutput(res.data.content);

    } catch (error) {

      console.error(error);

      setOutput(
        "⚠️ Could not connect to the API. Make sure the backend is running at http://localhost:8000/generate.\n\nSample output:\n\n🚀 Introducing " +
          (form.productName || "Your Product") +
          "!\n\nPerfect for " +
          (form.targetAudience || "your audience") +
          ". Crafted with a " +
          form.tone.toLowerCase() +
          " tone for " +
          form.platform +
          ".\n\n#AIMarketing #ContentGeneration #Growth"
      );

    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {

    navigator.clipboard.writeText(output);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="generator" className="py-24 relative">

      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Content <span className="neon-text">Generator</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fill in the details and let AI create your marketing content.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Form */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-5"
          >

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Product Name
              </label>

              <input
                name="productName"
                value={form.productName}
                onChange={handleChange}
                placeholder="e.g. EcoBottle Pro"
                className="input-dark w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Target Audience
              </label>

              <input
                name="targetAudience"
                value={form.targetAudience}
                onChange={handleChange}
                placeholder="e.g. Health-conscious millennials"
                className="input-dark w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Platform
              </label>

              <select
                name="platform"
                value={form.platform}
                onChange={handleChange}
                className="select-dark w-full"
              >
                {platforms.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Tone
              </label>

              <select
                name="tone"
                value={form.tone}
                onChange={handleChange}
                className="select-dark w-full"
              >
                {tones.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !form.productName}
              className="btn-neon w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate Content
                </>
              )}
            </button>

          </motion.div>

          {/* Output */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col"
          >

            <div className="flex items-center justify-between mb-4">

              <h3 className="font-heading font-semibold text-foreground">
                Generated Content
              </h3>

              {output && (
                <div className="flex gap-2">

                  <button
                    onClick={handleCopy}
                    className="btn-glass px-3 py-1.5 text-xs flex items-center gap-1.5"
                  >
                    {copied
                      ? <CheckCheck className="h-3.5 w-3.5 text-primary" />
                      : <Copy className="h-3.5 w-3.5" />
                    }

                    {copied ? "Copied!" : "Copy"}
                  </button>

                  <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="btn-glass px-3 py-1.5 text-xs flex items-center gap-1.5"
                  >
                    <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
                    Regenerate
                  </button>

                </div>
              )}

            </div>

            <div className="flex-1 min-h-[300px] bg-muted/30 rounded-lg p-5 border border-border">

              {loading ? (

                <div className="flex flex-col items-center justify-center h-full gap-3">

                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                  </div>

                  <p className="text-sm text-muted-foreground">
                    AI is crafting your content...
                  </p>

                </div>

              ) : output ? (

                <p className="text-foreground whitespace-pre-wrap leading-relaxed text-sm">
                  {output}
                </p>

              ) : (

                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">

                  <Sparkles className="h-10 w-10 mb-3 opacity-30" />

                  <p className="text-sm">
                    Your generated content will appear here
                  </p>

                </div>

              )}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default GeneratorSection;