import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Certifications</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-xl gradient-navy flex items-center justify-center">
            <Award className="w-12 h-12 text-primary-foreground" />
          </div>

          <h3 className="text-xl font-bold text-primary mb-1">
            AWS Certified Cloud Practitioner (CLF-C02)
          </h3>
          <p className="text-sm font-mono text-muted-foreground mb-4">March 2026</p>
          <ul className="text-sm text-muted-foreground mb-6 space-y-1 text-left max-w-md mx-auto">
            <li>• Covers S3, EC2, Lambda, RDS, VPC, IAM, and CloudFront</li>
            <li>• Validates understanding of AWS core services, cloud architecture, pricing, and security</li>
          </ul>

          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Certification
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
