import { motion } from "framer-motion";
import awsServerlessImg from "@/assets/aws-serverless-architecture.png";
import gmailAiImg from "@/assets/gmail-ai-architecture.png";

const diagrams = [
  {
    name: "AWS Serverless Task Management API",
    image: awsServerlessImg,
  },
  {
    name: "Gmail AI Assistant Agent",
    image: gmailAiImg,
  },
];

const ArchitectureSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">
            Architecture Diagrams
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            AWS system architecture designs and cloud infrastructure diagrams
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {diagrams.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-card border border-border rounded-lg overflow-hidden"
              >
                <img src={d.image} alt={d.name} className="w-full h-64 object-contain bg-surface p-4" />
                <div className="p-3 border-t border-border">
                  <p className="text-sm font-medium text-foreground">{d.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
