import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';


const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
