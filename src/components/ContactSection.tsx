import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("contact-form", {
        body: form,
      });
      if (error) throw error;
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm actively looking for cloud engineering opportunities. Feel free to reach out!
            </p>
            <div className="space-y-3">
              <Button
                asChild
                variant="outline"
                className="w-full justify-start border-primary text-primary hover:bg-secondary"
              >
                <a href="https://www.linkedin.com/in/andre-e-3757a8223/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-3" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full justify-start border-primary text-primary hover:bg-secondary"
              >
                <a href="https://github.com/Aesher7" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-3" />
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-card"
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={4}
              className="bg-card"
            />
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground hover:bg-navy-light"
            >
              <Send className="w-4 h-4 mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
