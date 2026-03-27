import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Education</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl gradient-navy flex items-center justify-center shrink-0">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                <h3 className="text-lg font-bold text-primary">Colorado State University – Global</h3>
                <span className="text-xs font-mono text-muted-foreground">Expected May 2028</span>
              </div>
              <p className="text-sm font-medium text-cloud mb-1">Denver, Colorado</p>
              <p className="text-base font-semibold text-foreground mb-3">B.S. &amp; M.S. in Computer Science</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li><span className="font-medium text-foreground">Concentrations:</span> Artificial Intelligence and Machine Learning</li>
                <li><span className="font-medium text-foreground">GPA:</span> 3.82 / 4.00</li>
                <li><span className="font-medium text-foreground">Relevant Coursework:</span> Data Structures &amp; Algorithms, Objects &amp; Design, Computer Organization &amp; Programming, Combinatorics, Machine Learning, Artificial Intelligence, Object-Oriented Programming, Statistics &amp; Applications</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
