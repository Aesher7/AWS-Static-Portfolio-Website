import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubSection from "@/components/GitHubSection";
import ExperienceSection from "@/components/ExperienceSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ProjectsSection />
      <GitHubSection />
      <ExperienceSection />
      <ArchitectureSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
