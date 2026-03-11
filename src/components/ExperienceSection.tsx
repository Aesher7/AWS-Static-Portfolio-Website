import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Technical Support Specialist",
    company: "Sunrun — Remote, Colorado",
    period: "Sep 2020 – Present",
    bullets: [
      "Lead Tier 3 escalations for thousands of distributed PV and battery systems across San Diego and Orange County using Enphase Enlighten, SolarEdge Monitoring, Tesla Energy Gateway, and Salesforce.",
      "Resolve 7 to 8 complex escalations daily involving inverter firmware faults, CT misconfigurations, gateway communication failures, grid synchronization errors, and battery dispatch anomalies through inverter-level log analysis and historical production trend review.",
      "Perform system-level root cause analysis by interpreting single-line diagrams, validating wiring configurations, and analyzing real-time telemetry to determine remote reconfiguration, hardware replacement, or field dispatch.",
      "Remediate 25 percent of escalated cases remotely through firmware updates, configuration corrections, and gateway resets, reducing dispatch frequency and operational costs.",
      "Own high-frustration and repeat-call customer cases end to end, translating electrical and firmware issues into clear explanations while coordinating with Field Service, Engineering, and manufacturer support teams to drive resolution.",
    ],
  },
  {
    role: "Software Development Engineering Intern",
    company: "Qookit AI — Remote, Colorado",
    period: "May 2023 – Nov 2023",
    bullets: [
      "Designed and developed modular, object-oriented software components using JavaScript and HTML, ensuring responsive and maintainable front-end interfaces compatible with mission-critical systems.",
      "Built cross-platform mobile applications using Flutter and Dart, applying principles of declarative UI and widget-based architecture to deliver efficient, real-time user interactions across devices.",
      "Integrated backend AI and data-processing systems with frontend interfaces using Python, optimizing performance and scalability to support complex operational requirements.",
      "Applied knowledge of machine learning and large language models (LLMs) using Python and TensorFlow to engineer intelligent systems capable of delivering real-time, personalized recommendations based on diverse data sets.",
      "Familiar with debugging, troubleshooting, and maintaining software systems on Linux-based environments; experienced with version control, IDEs (e.g., IntelliJ, VS Code), and collaborative development workflows.",
    ],
  },
];
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="relative flex gap-4 sm:gap-6"
              >
                <div className="relative z-10 w-12 h-12 rounded-full gradient-navy flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="bg-card border border-border rounded-lg p-5 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                    <h3 className="text-base font-semibold text-primary">{exp.role}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm font-medium text-cloud mb-2">{exp.company}</p>
                  <ul className="list-disc list-outside ml-4 space-y-1.5">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
