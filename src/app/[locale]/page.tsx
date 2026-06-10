import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import WorkflowCheck from '@/components/WorkflowCheck';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesSection from '@/components/ServicesSection';
import IndustriesSection from '@/components/IndustriesSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <PainPointsSection />
        <WorkflowCheck />
        <HowItWorksSection />
        <ServicesSection />
        <IndustriesSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
