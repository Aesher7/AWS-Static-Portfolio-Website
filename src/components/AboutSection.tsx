import { motion } from "framer-motion";
import { Cloud, Server, Code, Workflow } from "lucide-react";

const focusAreas = [
  { icon: Cloud, text: "AWS core services: EC2, S3, Lambda, RDS, DynamoDB, VPC, IAM, CloudWatch" },
  { icon: Server, text: "Infrastructure: CloudFront, Route 53, API Gateway, Load Balancing" },
  { icon: Workflow, text: "DevOps practices, CI/CD pipelines, and root cause analysis" },
  { icon: Code, text: "Programming: Python, JavaScript, SQL" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">About Me</h2>

          <div className="space-y-4 text-foreground leading-relaxed text-base">
            <p>
              Computer Science student pursuing a B.S. and M.S. at Colorado State University – Global with concentrations in Artificial Intelligence and Machine Learning (GPA: 3.82). Currently transitioning into cloud engineering with hands-on experience in software development, front-end frameworks, and backend integration using Python, JavaScript, and TensorFlow.
            </p>
            <p>
              AWS Certified Cloud Practitioner with a focus on designing secure, scalable, and cost-efficient cloud solutions. My key areas include:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6 mb-6">
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-surface border border-border"
              >
                <area.icon className="w-5 h-5 text-cloud mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{area.text}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-foreground leading-relaxed text-base">
            I bring problem solving, collaboration, and data driven optimization from both my software development and solar engineering experience. My goal is to apply these skills in cloud environments to modernize systems and deliver business value.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
