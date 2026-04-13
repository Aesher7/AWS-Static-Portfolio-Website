import { motion } from "framer-motion";
import { Globe, ExternalLink, Server, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AWS Serverless Task Management API",
    description:
      "Built a full stack serverless task scheduler using React and TypeScript with an AWS backend powered by API Gateway, Lambda, and DynamoDB, implementing REST endpoints for full CRUD operations and scalable data storage. Diagnosed and resolved cross-service failures by fixing IAM permission issues, correcting a broken DynamoDB update pattern, and ensuring proper request payload handling.",
    tech: ["API Gateway", "Lambda", "DynamoDB", "React", "TypeScript", "IAM", "CloudWatch"],
    icon: Server,
    link: "https://github.com/Aesher7/serverless-crud-api-aws",
  },
  {
    title: "Gmail AI Assistant Agent",
    description:
      "Built an autonomous AI agent in Python that integrates with Gmail via Google's REST API and OAuth 2.0 authentication, using Claude AI (Anthropic) to automatically summarize, categorize, and score urgency of incoming emails. Architected across four decoupled modules using the Perceive, Decide, Act loop with automated Gmail API replies and real-time desktop notifications.",
    tech: ["Python", "Gmail API", "OAuth 2.0", "Claude AI", "REST API"],
    icon: Mail,
    link: "https://github.com/Aesher7/Gmail-AI-Assistant-Agent",
  },
  {
    title: "AWS Static Portfolio Website Deployment",
    description:
      "Designed and deployed a static portfolio website using S3 for storage and CloudFront for global content delivery. Configured Route 53 for custom domain routing and DNS management. Implemented HTTPS using AWS Certificate Manager and optimized delivery with CDN caching for low latency performance.",
    tech: ["S3", "CloudFront", "Route 53", "ACM", "CDN"],
    icon: Globe,
    link: "https://esherportfolio.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Projects</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-card border border-border rounded-lg p-6 flex flex-col hover:shadow-lg hover:border-cloud/30 transition-all"
            >
              <project.icon className="w-8 h-8 text-cloud mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" size="sm" className="w-fit border-primary text-primary hover:bg-secondary">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {project.link.includes("github") ? "View on GitHub" : "View Live Site"}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
